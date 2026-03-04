<?php
/**
 * Newsletter Subscription API
 * For Sanjai Gopal Portfolio
 */

// Enable CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Get POST data
$input = json_decode(file_get_contents('php://input'), true);

// If no JSON data, try form data
if (!$input) {
    $input = $_POST;
}

// Validate email
$email = isset($input['email']) ? filter_var(trim($input['email']), FILTER_SANITIZE_EMAIL) : '';

if (empty($email)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Email is required']);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email format']);
    exit();
}

// Optional: Validate name if provided
$name = isset($input['name']) ? filter_var(trim($input['name']), FILTER_SANITIZE_STRING) : 'Subscriber';

// Prepare data for logging/storage
$timestamp = date('Y-m-d H:i:s');
$ip = $_SERVER['REMOTE_ADDR'];
$userAgent = $_SERVER['HTTP_USER_AGENT'];
$referer = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : 'Direct';

// Create logs directory if it doesn't exist
$logDir = __DIR__ . '/../logs';
if (!is_dir($logDir)) {
    mkdir($logDir, 0755, true);
}

// Log subscription
$logFile = $logDir . '/subscribers.log';
$logEntry = "[$timestamp] Email: $email | Name: $name | IP: $ip | Referer: $referer\n";
file_put_contents($logFile, $logEntry, FILE_APPEND | LOCK_EX);

// Save to CSV for easy import
$csvFile = $logDir . '/subscribers.csv';
$isNewFile = !file_exists($csvFile);

$fp = fopen($csvFile, 'a');
if ($isNewFile) {
    fputcsv($fp, ['Timestamp', 'Email', 'Name', 'IP', 'User Agent', 'Referer']);
}
fputcsv($fp, [$timestamp, $email, $name, $ip, $userAgent, $referer]);
fclose($fp);

// Optional: Send email notification to admin
$adminEmail = 'sanjai.sparkmail@gmail.com';
$subject = "New Newsletter Subscriber: $email";
$message = "
<html>
<head>
    <title>New Newsletter Subscriber</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #8b5cf6, #3b82f6); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #333; }
        .value { margin-top: 5px; padding: 10px; background: white; border-radius: 5px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>New Newsletter Subscriber</h2>
        </div>
        <div class='content'>
            <div class='field'>
                <div class='label'>Email:</div>
                <div class='value'>$email</div>
            </div>
            <div class='field'>
                <div class='label'>Name:</div>
                <div class='value'>$name</div>
            </div>
            <div class='field'>
                <div class='label'>Subscribed on:</div>
                <div class='value'>$timestamp</div>
            </div>
            <div class='field'>
                <div class='label'>IP Address:</div>
                <div class='value'>$ip</div>
            </div>
        </div>
    </div>
</body>
</html>
";

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: Sanjai Portfolio <noreply@sanjai-portfolio.com>\r\n";

// Uncomment to enable email notifications
// mail($adminEmail, $subject, $message, $headers);

// Send welcome email to subscriber (optional)
$welcomeSubject = "Welcome to Sanjai's Newsletter!";
$welcomeMessage = "
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #8b5cf6, #3b82f6); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
        .btn { display: inline-block; padding: 10px 20px; background: linear-gradient(135deg, #8b5cf6, #3b82f6); color: white; text-decoration: none; border-radius: 5px; margin: 10px 0; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1>Welcome to the Community! 🚀</h1>
        </div>
        <div class='content'>
            <h2>Hello " . htmlspecialchars($name) . ",</h2>
            <p>Thank you for subscribing to my newsletter! You'll now receive updates about:</p>
            <ul>
                <li>New blog posts and tutorials</li>
                <li>Project releases and updates</li>
                <li>AI/ML learning resources</li>
                <li>Tech insights and tips</li>
            </ul>
            <p>I'm excited to have you on this journey of learning and building with AI and technology!</p>
            <div style='text-align: center;'>
                <a href='https://sanjai-gopal.github.io/sanjai_portfolio/' class='btn'>Visit Portfolio</a>
            </div>
            <p>Best regards,<br>Sanjai Gopal</p>
        </div>
        <div class='footer'>
            <p>© 2026 Sanjai Gopal. All rights reserved.</p>
            <p><small>If you didn't subscribe to this newsletter, please ignore this email.</small></p>
        </div>
    </div>
</body>
</html>
";

$welcomeHeaders = "MIME-Version: 1.0\r\n";
$welcomeHeaders .= "Content-type: text/html; charset=UTF-8\r\n";
$welcomeHeaders .= "From: Sanjai Gopal <sanjai.sparkmail@gmail.com>\r\n";

// Uncomment to send welcome email
// mail($email, $welcomeSubject, $welcomeMessage, $welcomeHeaders);

// Return success response
echo json_encode([
    'success' => true,
    'message' => 'Successfully subscribed to newsletter!',
    'data' => [
        'email' => $email,
        'name' => $name,
        'timestamp' => $timestamp
    ]
]);
?>

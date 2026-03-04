<?php
/* ========================================
   CONTACT.PHP - Secure Contact Form Handler
   ======================================== */

// Set headers
header('Content-Type: application/json');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('X-XSS-Protection: 1; mode=block');

// Configuration
$config = [
    'mail_to' => 'sanjai.sparkmail@gmail.com',
    'mail_from' => 'noreply@sanjai-portfolio.com',
    'site_url' => 'https://sanjai-gopal.github.io/sanjai_portfolio',
    'recaptcha_secret' => 'YOUR_RECAPTCHA_SECRET_KEY',
    'rate_limit' => 5, // Max submissions per hour
    'spam_threshold' => 0.5 // Spam score threshold
];

// Rate limiting
session_start();
$ip = $_SERVER['REMOTE_ADDR'];
$hour = date('Y-m-d H:00:00');
$key = "rate_limit_{$ip}_{$hour}";

if (isset($_SESSION[$key]) && $_SESSION[$key] >= $config['rate_limit']) {
    http_response_code(429);
    echo json_encode(['success' => false, 'message' => 'Rate limit exceeded. Please try again later.']);
    exit;
}

// Get POST data
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid input']);
    exit;
}

// Validate required fields
$required = ['name', 'email', 'subject', 'message'];
foreach ($required as $field) {
    if (empty($input[$field])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => ucfirst($field) . ' is required']);
        exit;
    }
}

// Validate email
if (!filter_var($input['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit;
}

// Sanitize input
$name = filter_var($input['name'], FILTER_SANITIZE_STRING);
$email = filter_var($input['email'], FILTER_SANITIZE_EMAIL);
$subject = filter_var($input['subject'], FILTER_SANITIZE_STRING);
$message = filter_var($input['message'], FILTER_SANITIZE_STRING);

// Spam check
$spamScore = checkSpam($message, $name, $email);
if ($spamScore > $config['spam_threshold']) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Message flagged as spam']);
    exit;
}

// reCAPTCHA verification
if (!verifyRecaptcha($input['recaptcha_token'] ?? '', $config['recaptcha_secret'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'reCAPTCHA verification failed']);
    exit;
}

// Prepare email
$to = $config['mail_to'];
$email_subject = "Portfolio Contact: $subject";
$email_message = "
<html>
<head>
    <title>New Contact Form Submission</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #8b5cf6, #3b82f6); color: white; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 5px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; }
        .value { margin-top: 5px; padding: 10px; background: white; border-radius: 3px; }
        .footer { text-align: center; margin-top: 20px; color: #777; font-size: 12px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>New Contact Form Submission</h2>
        </div>
        <div class='content'>
            <div class='field'>
                <div class='label'>Name:</div>
                <div class='value'>" . htmlspecialchars($name) . "</div>
            </div>
            <div class='field'>
                <div class='label'>Email:</div>
                <div class='value'>" . htmlspecialchars($email) . "</div>
            </div>
            <div class='field'>
                <div class='label'>Subject:</div>
                <div class='value'>" . htmlspecialchars($subject) . "</div>
            </div>
            <div class='field'>
                <div class='label'>Message:</div>
                <div class='value'>" . nl2br(htmlspecialchars($message)) . "</div>
            </div>
            <div class='field'>
                <div class='label'>Additional Info:</div>
                <div class='value'>
                    <strong>IP:</strong> " . $_SERVER['REMOTE_ADDR'] . "<br>
                    <strong>User Agent:</strong> " . $_SERVER['HTTP_USER_AGENT'] . "<br>
                    <strong>Time:</strong> " . date('Y-m-d H:i:s') . "<br>
                    <strong>Spam Score:</strong> " . number_format($spamScore, 2) . "
                </div>
            </div>
        </div>
        <div class='footer'>
            <p>This message was sent from your portfolio website.</p>
        </div>
    </div>
</body>
</html>
";

// Email headers
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: " . $config['mail_from'] . "\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
if (mail($to, $email_subject, $email_message, $headers)) {
    // Update rate limit
    $_SESSION[$key] = ($_SESSION[$key] ?? 0) + 1;
    
    // Send auto-reply to user
    sendAutoReply($email, $name);
    
    // Log submission
    logSubmission($name, $email, $subject);
    
    echo json_encode(['success' => true, 'message' => 'Message sent successfully!']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send message']);
}

/**
 * Check spam score using simple heuristics
 */
function checkSpam($message, $name, $email) {
    $score = 0;
    $checks = 0;
    
    // Check for spam keywords
    $spamKeywords = ['viagra', 'casino', 'lottery', 'prize', 'winner', 'bitcoin', 'crypto'];
    $messageLower = strtolower($message);
    foreach ($spamKeywords as $keyword) {
        if (strpos($messageLower, $keyword) !== false) {
            $score += 0.3;
        }
    }
    $checks++;
    
    // Check for excessive links
    $linkCount = preg_match_all('/https?:\/\//', $message);
    if ($linkCount > 3) {
        $score += 0.4;
    } elseif ($linkCount > 0) {
        $score += 0.1;
    }
    $checks++;
    
    // Check for all caps
    $capsRatio = preg_match_all('/[A-Z]/', $message) / max(strlen($message), 1);
    if ($capsRatio > 0.5 && strlen($message) > 20) {
        $score += 0.3;
    }
    $checks++;
    
    // Check for gibberish (repeating characters)
    if (preg_match('/(.)\\1{4,}/', $message)) {
        $score += 0.3;
    }
    $checks++;
    
    // Check email domain
    $domain = substr(strrchr($email, "@"), 1);
    $freeDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];
    if (!in_array($domain, $freeDomains)) {
        $score += 0.1; // Slight penalty for custom domains
    }
    $checks++;
    
    return $score / $checks;
}

/**
 * Verify reCAPTCHA token
 */
function verifyRecaptcha($token, $secret) {
    if (empty($token)) {
        return false;
    }
    
    $url = 'https://www.google.com/recaptcha/api/siteverify';
    $data = [
        'secret' => $secret,
        'response' => $token,
        'remoteip' => $_SERVER['REMOTE_ADDR']
    ];
    
    $options = [
        'http' => [
            'header' => "Content-type: application/x-www-form-urlencoded\r\n",
            'method' => 'POST',
            'content' => http_build_query($data)
        ]
    ];
    
    $context = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    
    if ($result === false) {
        return false;
    }
    
    $response = json_decode($result, true);
    return $response['success'] ?? false;
}

/**
 * Send auto-reply to user
 */
function sendAutoReply($email, $name) {
    $subject = "Thank you for contacting Sanjai Gopal";
    
    $message = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; }
            .container { max-width: 600px; margin: 0 auto; }
            .header { background: linear-gradient(135deg, #8b5cf6, #3b82f6); color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; }
            .footer { text-align: center; margin-top: 20px; color: #777; font-size: 12px; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>Thank You for Contacting Me!</h2>
            </div>
            <div class='content'>
                <p>Hi " . htmlspecialchars($name) . ",</p>
                <p>Thank you for reaching out to me through my portfolio website. I have received your message and will get back to you as soon as possible.</p>
                <p>In the meantime, feel free to:</p>
                <ul>
                    <li>Check out my <a href='https://github.com/Sanjai-Gopal'>GitHub</a> for my latest projects</li>
                    <li>Connect with me on <a href='https://linkedin.com/in/sanjai2306'>LinkedIn</a></li>
                    <li>Read my <a href='https://sanjai-gopal.github.io/sanjai_portfolio/blog/'>blog</a> for tech insights</li>
                </ul>
                <p>Best regards,<br>Sanjai Gopal</p>
            </div>
            <div class='footer'>
                <p>© 2026 Sanjai Gopal. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
    ";
    
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From: Sanjai Gopal <sanjai.sparkmail@gmail.com>\r\n";
    
    mail($email, $subject, $message, $headers);
}

/**
 * Log submission for analytics
 */
function logSubmission($name, $email, $subject) {
    $logFile = 'logs/contact.log';
    $logDir = dirname($logFile);
    
    if (!is_dir($logDir)) {
        mkdir($logDir, 0755, true);
    }
    
    $logEntry = date('Y-m-d H:i:s') . " | $name | $email | $subject | " . $_SERVER['REMOTE_ADDR'] . "\n";
    file_put_contents($logFile, $logEntry, FILE_APPEND | LOCK_EX);
}
?>

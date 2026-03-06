<?php
require_once 'config.php';

// Handle contact form submissions
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    $input = $_POST;
}

// Validate required fields
$required = ['name', 'email', 'subject', 'message'];
foreach ($required as $field) {
    if (empty($input[$field])) {
        sendResponse(false, "Missing required field: $field", null, 400);
    }
}

// Validate email
if (!filter_var($input['email'], FILTER_VALIDATE_EMAIL)) {
    sendResponse(false, 'Invalid email address', null, 400);
}

// Sanitize input
$name = htmlspecialchars($input['name'], ENT_QUOTES, 'UTF-8');
$email = filter_var($input['email'], FILTER_SANITIZE_EMAIL);
$subject = htmlspecialchars($input['subject'], ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($input['message'], ENT_QUOTES, 'UTF-8');

// Create contact entry
$contact = [
    'id' => uniqid(),
    'name' => $name,
    'email' => $email,
    'subject' => $subject,
    'message' => $message,
    'ip' => getClientIP(),
    'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? '',
    'created' => time(),
    'read' => false
];

// Save to contacts file
$contacts = readJSON(CONTACTS_FILE, []);
$contacts[] = $contact;
writeJSON(CONTACTS_FILE, $contacts);

// Send email notification (if mail function is available)
if (function_exists('mail')) {
    $to = "sanjai.sparkmail@gmail.com";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    $emailBody = "You have received a new message from your portfolio website:\n\n";
    $emailBody .= "Name: $name\n";
    $emailBody .= "Email: $email\n";
    $emailBody .= "Subject: $subject\n";
    $emailBody .= "Message:\n$message\n";
    
    mail($to, "Portfolio Contact: $subject", $emailBody, $headers);
}

logAPI('contact_form', ['name' => $name, 'email' => $email]);
sendResponse(true, 'Message sent successfully', ['id' => $contact['id']]);
?>

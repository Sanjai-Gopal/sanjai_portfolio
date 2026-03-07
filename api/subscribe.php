<?php
require_once 'config.php';

// Handle newsletter subscriptions
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    $input = $_POST;
}

// Validate email
if (empty($input['email'])) {
    sendResponse(false, 'Email is required', null, 400);
}

$email = filter_var($input['email'], FILTER_SANITIZE_EMAIL);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    sendResponse(false, 'Invalid email address', null, 400);
}

// Check if already subscribed
$subscribers = readJSON(SUBSCRIBERS_FILE, []);
foreach ($subscribers as $sub) {
    if ($sub['email'] === $email) {
        sendResponse(false, 'Email already subscribed', null, 400);
    }
}

// Create subscriber entry
$subscriber = [
    'id' => uniqid(),
    'email' => $email,
    'ip' => getClientIP(),
    'created' => time(),
    'active' => true
];

$subscribers[] = $subscriber;
writeJSON(SUBSCRIBERS_FILE, $subscribers);

logAPI('newsletter_subscription', ['email' => $email]);
sendResponse(true, 'Subscription successful', ['id' => $subscriber['id']]);
?>
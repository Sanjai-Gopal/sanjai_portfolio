<?php
require_once 'config.php';

// Handle newsletter subscriptions
try {
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
        if (isset($sub['email']) && $sub['email'] === $email) {
            sendResponse(false, 'Email already subscribed', null, 400);
        }
    }

    // Create subscriber entry
    $subscriber = [
        'id' => uniqid(),
        'email' => $email,
        'ip' => getClientIP(),
        'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? '',
        'created' => time(),
        'active' => true
    ];

    $subscribers[] = $subscriber;
    
    if (writeJSON(SUBSCRIBERS_FILE, $subscribers)) {
        logAPI('newsletter_subscription', ['email' => $email]);
        sendResponse(true, 'Subscription successful', ['id' => $subscriber['id']]);
    } else {
        sendResponse(false, 'Failed to save subscription', null, 500);
    }
    
} catch (Exception $e) {
    logAPI('subscribe_error', ['error' => $e->getMessage()]);
    sendResponse(false, 'Server error occurred', null, 500);
}
?>
<?php
require_once 'config.php';

// Handle different authentication actions
$action = $_GET['action'] ?? '';

switch ($action) {
    case 'login':
        handleLogin();
        break;
    case 'logout':
        handleLogout();
        break;
    case 'check':
        checkSession();
        break;
    case 'change-password':
        handleChangePassword();
        break;
    default:
        sendResponse(false, 'Invalid action', null, 400);
}

function handleLogin() {
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!$input || !isset($input['password'])) {
        sendResponse(false, 'Password required', null, 400);
    }
    
    if (verifyPassword($input['password'])) {
        session_start();
        $_SESSION['admin'] = true;
        $_SESSION['login_time'] = time();
        
        // Set secure session cookie
        setcookie(session_name(), session_id(), [
            'expires' => time() + 3600,
            'path' => '/',
            'secure' => true,
            'httponly' => true,
            'samesite' => 'Strict'
        ]);
        
        sendResponse(true, 'Login successful');
    } else {
        // Add small delay to prevent brute force
        usleep(500000);
        sendResponse(false, 'Invalid password', null, 401);
    }
}

function handleLogout() {
    session_start();
    $_SESSION = array();
    
    if (ini_get("session.use_cookies")) {
        $params = session_get_cookie_params();
        setcookie(session_name(), '', time() - 42000,
            $params["path"], $params["domain"],
            $params["secure"], $params["httponly"]
        );
    }
    
    session_destroy();
    sendResponse(true, 'Logout successful');
}

function checkSession() {
    session_start();
    if (isset($_SESSION['admin']) && $_SESSION['admin'] === true) {
        sendResponse(true, 'Session valid');
    } else {
        sendResponse(false, 'Session invalid', null, 401);
    }
}

function handleChangePassword() {
    session_start();
    if (!isset($_SESSION['admin']) || $_SESSION['admin'] !== true) {
        sendResponse(false, 'Unauthorized', null, 401);
    }
    
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!$input || !isset($input['oldPassword']) || !isset($input['newPassword'])) {
        sendResponse(false, 'Old and new password required', null, 400);
    }
    
    if (strlen($input['newPassword']) < 8) {
        sendResponse(false, 'New password must be at least 8 characters', null, 400);
    }
    
    if (changePassword($input['oldPassword'], $input['newPassword'])) {
        sendResponse(true, 'Password changed successfully');
    } else {
        sendResponse(false, 'Current password is incorrect', null, 401);
    }
}
?>

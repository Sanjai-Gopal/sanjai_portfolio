<?php
// ========================================
// API CONFIGURATION
// ========================================

// Enable error reporting for debugging (disable in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Credentials: true');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Define paths - FIXED for GitHub Pages compatibility
define('BASE_PATH', dirname(__DIR__) . '/');
define('DATA_DIR', BASE_PATH . 'data/');
define('UPLOAD_DIR', BASE_PATH . 'uploads/');
define('PASSWORD_FILE', DATA_DIR . 'password.txt');
define('PROFILE_FILE', DATA_DIR . 'profile.json');
define('PROJECTS_FILE', DATA_DIR . 'projects.json');
define('CERTIFICATES_FILE', DATA_DIR . 'certificates.json');
define('BLOG_FILE', DATA_DIR . 'blog.json');
define('SKILLS_FILE', DATA_DIR . 'skills.json');
define('THEME_FILE', DATA_DIR . 'theme.json');
define('CONTACTS_FILE', DATA_DIR . 'contacts.json');
define('SUBSCRIBERS_FILE', DATA_DIR . 'subscribers.json');
define('AI_MODELS_FILE', DATA_DIR . 'ai_models.json');
define('PORTFOLIO_FILE', DATA_DIR . 'portfolio.json');
define('LOG_FILE', DATA_DIR . 'api_log.txt');

// Create data directory if it doesn't exist
if (!file_exists(DATA_DIR)) {
    if (!mkdir(DATA_DIR, 0755, true)) {
        sendResponse(false, 'Failed to create data directory', null, 500);
    }
}

// Create uploads directory if it doesn't exist
if (!file_exists(UPLOAD_DIR)) {
    if (!mkdir(UPLOAD_DIR, 0755, true)) {
        sendResponse(false, 'Failed to create uploads directory', null, 500);
    }
}

// Create .htaccess to protect uploads
$htaccess = UPLOAD_DIR . '.htaccess';
if (!file_exists($htaccess)) {
    file_put_contents($htaccess, "Order Deny,Allow\nDeny from all\n");
}

// Create default password if not exists
if (!file_exists(PASSWORD_FILE)) {
    // Default password: Sanjai@2008 (hashed)
    $hashed = password_hash('Sanjai@2008', PASSWORD_DEFAULT);
    if (file_put_contents(PASSWORD_FILE, $hashed) === false) {
        sendResponse(false, 'Failed to create password file', null, 500);
    }
}

// Helper function to read JSON file
function readJSON($file, $default = []) {
    if (!file_exists($file)) {
        return $default;
    }
    $content = file_get_contents($file);
    if ($content === false) {
        return $default;
    }
    $data = json_decode($content, true);
    return ($data !== null) ? $data : $default;
}

// Helper function to write JSON file
function writeJSON($file, $data) {
    $json = json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
    if ($json === false) {
        return false;
    }
    return file_put_contents($file, $json) !== false;
}

// Helper function to send JSON response
function sendResponse($success, $message, $data = null, $statusCode = 200) {
    http_response_code($statusCode);
    echo json_encode([
        'success' => $success,
        'message' => $message,
        'data' => $data,
        'timestamp' => time()
    ]);
    exit();
}

// Helper function to verify password
function verifyPassword($password) {
    if (!file_exists(PASSWORD_FILE)) {
        return false;
    }
    $hash = file_get_contents(PASSWORD_FILE);
    if ($hash === false) {
        return false;
    }
    return password_verify($password, $hash);
}

// Helper function to change password
function changePassword($oldPassword, $newPassword) {
    if (!verifyPassword($oldPassword)) {
        return false;
    }
    $newHash = password_hash($newPassword, PASSWORD_DEFAULT);
    if ($newHash === false) {
        return false;
    }
    return file_put_contents(PASSWORD_FILE, $newHash) !== false;
}

// Helper function to handle file upload
function handleFileUpload($file, $type = 'image') {
    if (!isset($file) || $file['error'] !== UPLOAD_ERR_OK) {
        return null;
    }
    
    $allowedTypes = [
        'image/jpeg', 'image/png', 'image/gif', 'image/webp',
        'application/pdf', 'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    
    if (!in_array($file['type'], $allowedTypes)) {
        return null;
    }
    
    $extension = pathinfo($file['name'], PATHINFO_EXTENSION);
    $filename = uniqid() . '_' . time() . '.' . $extension;
    $destination = UPLOAD_DIR . $filename;
    
    if (move_uploaded_file($file['tmp_name'], $destination)) {
        return 'uploads/' . $filename;
    }
    
    return null;
}

// Helper function to log API calls
function logAPI($action, $data = []) {
    $logEntry = date('Y-m-d H:i:s') . " | $action | " . json_encode($data) . "\n";
    file_put_contents(LOG_FILE, $logEntry, FILE_APPEND);
}

// Check if running on localhost
function isLocalhost() {
    $whitelist = ['127.0.0.1', '::1'];
    return in_array($_SERVER['REMOTE_ADDR'] ?? '', $whitelist);
}

// Get client IP
function getClientIP() {
    $ipaddress = '';
    if (isset($_SERVER['HTTP_CLIENT_IP']))
        $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
    else if (isset($_SERVER['HTTP_X_FORWARDED_FOR']))
        $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
    else if (isset($_SERVER['HTTP_X_FORWARDED']))
        $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
    else if (isset($_SERVER['HTTP_FORWARDED_FOR']))
        $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
    else if (isset($_SERVER['HTTP_FORWARDED']))
        $ipaddress = $_SERVER['HTTP_FORWARDED'];
    else if (isset($_SERVER['REMOTE_ADDR']))
        $ipaddress = $_SERVER['REMOTE_ADDR'];
    else
        $ipaddress = 'UNKNOWN';
    return $ipaddress;
}
?>
<?php
// ========================================
// API CONFIGURATION
// ========================================

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Credentials: true');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Database configuration (using JSON files for simplicity)
define('DATA_DIR', __DIR__ . '/../data/');
define('UPLOAD_DIR', __DIR__ . '/../uploads/');
define('PASSWORD_FILE', DATA_DIR . 'password.txt');
define('PROFILE_FILE', DATA_DIR . 'profile.json');
define('PROJECTS_FILE', DATA_DIR . 'projects.json');
define('CERTIFICATES_FILE', DATA_DIR . 'certificates.json');
define('BLOG_FILE', DATA_DIR . 'blog.json');
define('SKILLS_FILE', DATA_DIR . 'skills.json');
define('THEME_FILE', DATA_DIR . 'theme.json');

// Create data directory if it doesn't exist
if (!file_exists(DATA_DIR)) {
    mkdir(DATA_DIR, 0755, true);
}

// Create uploads directory if it doesn't exist
if (!file_exists(UPLOAD_DIR)) {
    mkdir(UPLOAD_DIR, 0755, true);
}

// Create .htaccess to protect uploads
$htaccess = UPLOAD_DIR . '.htaccess';
if (!file_exists($htaccess)) {
    file_put_contents($htaccess, "Order Deny,Allow\nDeny from all\n");
}

// Create default password if not exists
if (!file_exists(PASSWORD_FILE)) {
    // Default password: admin123 (hashed)
    file_put_contents(PASSWORD_FILE, password_hash('admin123', PASSWORD_DEFAULT));
}

// Helper function to read JSON file
function readJSON($file, $default = []) {
    if (!file_exists($file)) {
        return $default;
    }
    $content = file_get_contents($file);
    return json_decode($content, true) ?: $default;
}

// Helper function to write JSON file
function writeJSON($file, $data) {
    return file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT));
}

// Helper function to send JSON response
function sendResponse($success, $message, $data = null, $statusCode = 200) {
    http_response_code($statusCode);
    echo json_encode([
        'success' => $success,
        'message' => $message,
        'data' => $data
    ]);
    exit();
}

// Helper function to verify password
function verifyPassword($password) {
    $hash = file_get_contents(PASSWORD_FILE);
    return password_verify($password, $hash);
}

// Helper function to change password
function changePassword($oldPassword, $newPassword) {
    if (!verifyPassword($oldPassword)) {
        return false;
    }
    $newHash = password_hash($newPassword, PASSWORD_DEFAULT);
    return file_put_contents(PASSWORD_FILE, $newHash) !== false;
}

// Helper function to handle file upload
function handleFileUpload($file, $type = 'image') {
    if (!isset($file) || $file['error'] !== UPLOAD_ERR_OK) {
        return null;
    }
    
    $allowedTypes = [
        'image/jpeg', 'image/png', 'image/gif', 'image/webp'
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
?>

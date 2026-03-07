<?php
// ========================================
// SAVE DATA API - FIXED VERSION
// ========================================

// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set JSON header
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Include configuration
require_once __DIR__ . '/config.php';

// Start session
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Check authentication
if (!isset($_SESSION['admin']) || $_SESSION['admin'] !== true) {
    sendResponse(false, 'Unauthorized', null, 401);
}

// Get request data
$method = $_SERVER['REQUEST_METHOD'];
$type = isset($_GET['type']) ? $_GET['type'] : (isset($_POST['type']) ? $_POST['type'] : '');

// Handle file upload
if ($type === 'upload') {
    handleFileUploadRequest();
    exit();
}

// Handle JSON data
$input = json_decode(file_get_contents('php://input'), true);
if (!$input) {
    $input = $_POST;
}

if (empty($type)) {
    sendResponse(false, 'Type parameter required', null, 400);
}

// Process based on type
try {
    switch ($type) {
        case 'profile':
            saveProfile($input);
            break;
        case 'project':
            saveProject($input);
            break;
        case 'certificate':
            saveCertificate($input);
            break;
        case 'blog':
            saveBlog($input);
            break;
        case 'skills':
            saveSkills($input);
            break;
        case 'theme':
            saveTheme($input);
            break;
        case 'ai':
            saveAIModel($input);
            break;
        case 'portfolio':
            savePortfolioItem($input);
            break;
        default:
            sendResponse(false, 'Invalid type: ' . $type, null, 400);
    }
} catch (Exception $e) {
    logAPI('save_data_error', ['type' => $type, 'error' => $e->getMessage()]);
    sendResponse(false, 'Server error: ' . $e->getMessage(), null, 500);
}

// ========== SAVE FUNCTIONS ==========

function saveProfile($data) {
    if (empty($data)) {
        sendResponse(false, 'No data provided', null, 400);
    }
    
    $current = readJSON(PROFILE_FILE, []);
    
    $profile = [
        'name' => isset($data['name']) ? $data['name'] : ($current['name'] ?? 'Sanjai Gopal'),
        'displayName' => isset($data['displayName']) ? $data['displayName'] : ($current['displayName'] ?? 'Sanjai'),
        'title' => isset($data['title']) ? $data['title'] : ($current['title'] ?? 'AI Engineer & Nature Enthusiast'),
        'bio' => isset($data['bio']) ? $data['bio'] : ($current['bio'] ?? ''),
        'location' => isset($data['location']) ? $data['location'] : ($current['location'] ?? 'Coimbatore, India'),
        'email' => isset($data['email']) ? $data['email'] : ($current['email'] ?? ''),
        'phone' => isset($data['phone']) ? $data['phone'] : ($current['phone'] ?? ''),
        'linkedin' => isset($data['linkedin']) ? $data['linkedin'] : ($current['linkedin'] ?? ''),
        'github' => isset($data['github']) ? $data['github'] : ($current['github'] ?? ''),
        'instagram' => isset($data['instagram']) ? $data['instagram'] : ($current['instagram'] ?? ''),
        'photo' => isset($data['photo']) ? $data['photo'] : ($current['photo'] ?? null),
        'updated' => time()
    ];
    
    if (writeJSON(PROFILE_FILE, $profile)) {
        logAPI('profile_updated', ['by' => getClientIP()]);
        sendResponse(true, 'Profile saved successfully', $profile);
    } else {
        sendResponse(false, 'Failed to save profile', null, 500);
    }
}

function saveProject($data) {
    if (empty($data)) {
        sendResponse(false, 'No data provided', null, 400);
    }
    
    $projects = readJSON(PROJECTS_FILE, []);
    
    // Validate required fields
    if (empty($data['title']) || empty($data['description'])) {
        sendResponse(false, 'Title and description are required', null, 400);
    }
    
    if (isset($data['id']) && !empty($data['id'])) {
        // Update existing
        $found = false;
        foreach ($projects as &$project) {
            if ($project['id'] === $data['id']) {
                foreach ($data as $key => $value) {
                    $project[$key] = $value;
                }
                $project['updated'] = time();
                $found = true;
                break;
            }
        }
        if (!$found) {
            $data['id'] = uniqid();
            $data['created'] = time();
            $data['updated'] = time();
            $projects[] = $data;
        }
    } else {
        // Add new
        $data['id'] = uniqid();
        $data['created'] = time();
        $data['updated'] = time();
        $projects[] = $data;
    }
    
    if (writeJSON(PROJECTS_FILE, $projects)) {
        logAPI('project_saved', ['id' => $data['id']]);
        sendResponse(true, 'Project saved successfully', ['id' => $data['id']]);
    } else {
        sendResponse(false, 'Failed to save project', null, 500);
    }
}

function saveCertificate($data) {
    if (empty($data)) {
        sendResponse(false, 'No data provided', null, 400);
    }
    
    $certificates = readJSON(CERTIFICATES_FILE, []);
    
    // Validate required fields
    if (empty($data['title']) || empty($data['issuer'])) {
        sendResponse(false, 'Title and issuer are required', null, 400);
    }
    
    if (isset($data['id']) && !empty($data['id'])) {
        $found = false;
        foreach ($certificates as &$cert) {
            if ($cert['id'] === $data['id']) {
                foreach ($data as $key => $value) {
                    $cert[$key] = $value;
                }
                $cert['updated'] = time();
                $found = true;
                break;
            }
        }
        if (!$found) {
            $data['id'] = uniqid();
            $data['created'] = time();
            $certificates[] = $data;
        }
    } else {
        $data['id'] = uniqid();
        $data['created'] = time();
        $certificates[] = $data;
    }
    
    if (writeJSON(CERTIFICATES_FILE, $certificates)) {
        logAPI('certificate_saved', ['id' => $data['id']]);
        sendResponse(true, 'Certificate saved successfully', ['id' => $data['id']]);
    } else {
        sendResponse(false, 'Failed to save certificate', null, 500);
    }
}

function saveBlog($data) {
    if (empty($data)) {
        sendResponse(false, 'No data provided', null, 400);
    }
    
    $blogs = readJSON(BLOG_FILE, []);
    
    // Validate required fields
    if (empty($data['title']) || empty($data['excerpt'])) {
        sendResponse(false, 'Title and excerpt are required', null, 400);
    }
    
    if (isset($data['id']) && !empty($data['id'])) {
        $found = false;
        foreach ($blogs as &$blog) {
            if ($blog['id'] === $data['id']) {
                foreach ($data as $key => $value) {
                    $blog[$key] = $value;
                }
                $blog['updated'] = time();
                $found = true;
                break;
            }
        }
        if (!$found) {
            $data['id'] = uniqid();
            $data['created'] = time();
            $data['views'] = 0;
            $blogs[] = $data;
        }
    } else {
        $data['id'] = uniqid();
        $data['created'] = time();
        $data['views'] = 0;
        $blogs[] = $data;
    }
    
    if (writeJSON(BLOG_FILE, $blogs)) {
        logAPI('blog_saved', ['id' => $data['id']]);
        sendResponse(true, 'Blog post saved successfully', ['id' => $data['id']]);
    } else {
        sendResponse(false, 'Failed to save blog post', null, 500);
    }
}

function saveSkills($data) {
    if (empty($data)) {
        sendResponse(false, 'No data provided', null, 400);
    }
    
    if (writeJSON(SKILLS_FILE, $data)) {
        logAPI('skills_updated', []);
        sendResponse(true, 'Skills saved successfully');
    } else {
        sendResponse(false, 'Failed to save skills', null, 500);
    }
}

function saveTheme($data) {
    if (empty($data)) {
        sendResponse(false, 'No data provided', null, 400);
    }
    
    $theme = [
        'primary' => isset($data['primary']) ? $data['primary'] : '#4caf7a',
        'secondary' => isset($data['secondary']) ? $data['secondary'] : '#3d7a4f',
        'bg' => isset($data['bg']) ? $data['bg'] : '#f5efe6',
        'text' => isset($data['text']) ? $data['text'] : '#2c3e2f',
        'accent' => isset($data['accent']) ? $data['accent'] : '#d9b382',
        'updated' => time()
    ];
    
    if (writeJSON(THEME_FILE, $theme)) {
        logAPI('theme_updated', []);
        sendResponse(true, 'Theme saved successfully');
    } else {
        sendResponse(false, 'Failed to save theme', null, 500);
    }
}

function saveAIModel($data) {
    if (empty($data)) {
        sendResponse(false, 'No data provided', null, 400);
    }
    
    $models = readJSON(AI_MODELS_FILE, []);
    
    // Validate required fields
    if (empty($data['name']) || empty($data['description'])) {
        sendResponse(false, 'Name and description are required', null, 400);
    }
    
    if (isset($data['id']) && !empty($data['id'])) {
        $found = false;
        foreach ($models as &$model) {
            if ($model['id'] === $data['id']) {
                foreach ($data as $key => $value) {
                    $model[$key] = $value;
                }
                $model['updated'] = time();
                $found = true;
                break;
            }
        }
        if (!$found) {
            $data['id'] = uniqid();
            $data['created'] = time();
            $models[] = $data;
        }
    } else {
        $data['id'] = uniqid();
        $data['created'] = time();
        $models[] = $data;
    }
    
    if (writeJSON(AI_MODELS_FILE, $models)) {
        logAPI('ai_model_saved', ['id' => $data['id']]);
        sendResponse(true, 'AI model saved successfully', ['id' => $data['id']]);
    } else {
        sendResponse(false, 'Failed to save AI model', null, 500);
    }
}

function savePortfolioItem($data) {
    if (empty($data)) {
        sendResponse(false, 'No data provided', null, 400);
    }
    
    $items = readJSON(PORTFOLIO_FILE, []);
    
    // Validate required fields
    if (empty($data['title']) || empty($data['category'])) {
        sendResponse(false, 'Title and category are required', null, 400);
    }
    
    if (isset($data['id']) && !empty($data['id'])) {
        $found = false;
        foreach ($items as &$item) {
            if ($item['id'] === $data['id']) {
                foreach ($data as $key => $value) {
                    $item[$key] = $value;
                }
                $item['updated'] = time();
                $found = true;
                break;
            }
        }
        if (!$found) {
            $data['id'] = uniqid();
            $data['created'] = time();
            $items[] = $data;
        }
    } else {
        $data['id'] = uniqid();
        $data['created'] = time();
        $items[] = $data;
    }
    
    if (writeJSON(PORTFOLIO_FILE, $items)) {
        logAPI('portfolio_saved', ['id' => $data['id']]);
        sendResponse(true, 'Portfolio item saved successfully', ['id' => $data['id']]);
    } else {
        sendResponse(false, 'Failed to save portfolio item', null, 500);
    }
}

function handleFileUploadRequest() {
    if (!isset($_FILES['file'])) {
        sendResponse(false, 'No file uploaded', null, 400);
    }
    
    $file = $_FILES['file'];
    
    // Validate file
    if ($file['error'] !== UPLOAD_ERR_OK) {
        $errors = [
            UPLOAD_ERR_INI_SIZE => 'File exceeds upload_max_filesize',
            UPLOAD_ERR_FORM_SIZE => 'File exceeds MAX_FILE_SIZE',
            UPLOAD_ERR_PARTIAL => 'File was only partially uploaded',
            UPLOAD_ERR_NO_FILE => 'No file was uploaded',
            UPLOAD_ERR_NO_TMP_DIR => 'Missing temporary folder',
            UPLOAD_ERR_CANT_WRITE => 'Failed to write file to disk',
            UPLOAD_ERR_EXTENSION => 'File upload stopped by extension'
        ];
        $message = isset($errors[$file['error']]) ? $errors[$file['error']] : 'Unknown upload error';
        sendResponse(false, $message, null, 400);
    }
    
    // Validate file type
    $allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'application/pdf'];
    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $mimeType = finfo_file($finfo, $file['tmp_name']);
    finfo_close($finfo);
    
    if (!in_array($mimeType, $allowedTypes)) {
        sendResponse(false, 'File type not allowed', null, 400);
    }
    
    // Validate file size (max 10MB)
    if ($file['size'] > 10 * 1024 * 1024) {
        sendResponse(false, 'File size exceeds 10MB limit', null, 400);
    }
    
    // Generate unique filename
    $extension = pathinfo($file['name'], PATHINFO_EXTENSION);
    $filename = uniqid() . '_' . time() . '.' . $extension;
    $uploadPath = UPLOAD_DIR . $filename;
    
    // Ensure upload directory exists
    if (!file_exists(UPLOAD_DIR)) {
        mkdir(UPLOAD_DIR, 0755, true);
    }
    
    // Move uploaded file
    if (move_uploaded_file($file['tmp_name'], $uploadPath)) {
        $fileInfo = [
            'name' => $file['name'],
            'path' => 'uploads/' . $filename,
            'size' => $file['size'],
            'type' => $mimeType,
            'url' => 'uploads/' . $filename
        ];
        logAPI('file_uploaded', ['filename' => $filename, 'size' => $file['size']]);
        sendResponse(true, 'File uploaded successfully', $fileInfo);
    } else {
        sendResponse(false, 'Failed to move uploaded file', null, 500);
    }
}
?>
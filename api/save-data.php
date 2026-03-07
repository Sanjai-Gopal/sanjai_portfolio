<?php
require_once 'config.php';

// Check authentication
session_start();
if (!isset($_SESSION['admin']) || $_SESSION['admin'] !== true) {
    sendResponse(false, 'Unauthorized', null, 401);
}

$type = $_POST['type'] ?? $_GET['type'] ?? '';
$input = json_decode(file_get_contents('php://input'), true);

if (!$input && empty($_FILES)) {
    $input = $_POST;
}

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
        
    case 'upload':
        handleUpload();
        break;
        
    default:
        sendResponse(false, 'Invalid type', null, 400);
}

function saveProfile($data) {
    if (!$data) {
        sendResponse(false, 'No data provided', null, 400);
    }
    
    $profile = [
        'name' => $data['name'] ?? 'Sanjai Gopal',
        'displayName' => $data['displayName'] ?? 'Sanjai',
        'title' => $data['title'] ?? 'AI Engineer & Nature Enthusiast',
        'bio' => $data['bio'] ?? '',
        'location' => $data['location'] ?? 'Coimbatore, India',
        'email' => $data['email'] ?? '',
        'phone' => $data['phone'] ?? '',
        'linkedin' => $data['linkedin'] ?? '',
        'github' => $data['github'] ?? '',
        'instagram' => $data['instagram'] ?? '',
        'photo' => $data['photo'] ?? null,
        'updated' => time()
    ];
    
    if (writeJSON(PROFILE_FILE, $profile)) {
        logAPI('profile_updated', ['by' => getClientIP()]);
        sendResponse(true, 'Profile saved successfully');
    } else {
        sendResponse(false, 'Failed to save profile', null, 500);
    }
}

function saveProject($data) {
    if (!$data) {
        sendResponse(false, 'No data provided', null, 400);
    }
    
    $projects = readJSON(PROJECTS_FILE, []);
    
    if (isset($data['id']) && !empty($data['id'])) {
        $found = false;
        foreach ($projects as &$project) {
            if ($project['id'] === $data['id']) {
                $project = array_merge($project, $data);
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
    if (!$data) {
        sendResponse(false, 'No data provided', null, 400);
    }
    
    $certificates = readJSON(CERTIFICATES_FILE, []);
    
    if (isset($data['id']) && !empty($data['id'])) {
        $found = false;
        foreach ($certificates as &$cert) {
            if ($cert['id'] === $data['id']) {
                $cert = array_merge($cert, $data);
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
    if (!$data) {
        sendResponse(false, 'No data provided', null, 400);
    }
    
    $blogs = readJSON(BLOG_FILE, []);
    
    if (isset($data['id']) && !empty($data['id'])) {
        $found = false;
        foreach ($blogs as &$blog) {
            if ($blog['id'] === $data['id']) {
                $blog = array_merge($blog, $data);
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
    if (!$data) {
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
    if (!$data) {
        sendResponse(false, 'No data provided', null, 400);
    }
    
    $theme = [
        'primary' => $data['primary'] ?? '#4caf7a',
        'secondary' => $data['secondary'] ?? '#3d7a4f',
        'bg' => $data['bg'] ?? '#f5efe6',
        'text' => $data['text'] ?? '#2c3e2f',
        'accent' => $data['accent'] ?? '#d9b382',
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
    if (!$data) {
        sendResponse(false, 'No data provided', null, 400);
    }
    
    $models = readJSON(AI_MODELS_FILE, []);
    
    if (isset($data['id']) && !empty($data['id'])) {
        $found = false;
        foreach ($models as &$model) {
            if ($model['id'] === $data['id']) {
                $model = array_merge($model, $data);
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
    if (!$data) {
        sendResponse(false, 'No data provided', null, 400);
    }
    
    $items = readJSON(PORTFOLIO_FILE, []);
    
    if (isset($data['id']) && !empty($data['id'])) {
        $found = false;
        foreach ($items as &$item) {
            if ($item['id'] === $data['id']) {
                $item = array_merge($item, $data);
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

function handleUpload() {
    if (!isset($_FILES['file'])) {
        sendResponse(false, 'No file uploaded', null, 400);
    }
    
    $path = handleFileUpload($_FILES['file']);
    
    if ($path) {
        logAPI('file_uploaded', ['path' => $path, 'size' => $_FILES['file']['size']]);
        sendResponse(true, 'File uploaded successfully', ['path' => $path]);
    } else {
        sendResponse(false, 'Failed to upload file', null, 500);
    }
}
?>
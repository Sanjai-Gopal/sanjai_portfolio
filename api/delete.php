<?php
require_once 'config.php';

// Check authentication
session_start();
if (!isset($_SESSION['admin']) || $_SESSION['admin'] !== true) {
    sendResponse(false, 'Unauthorized', null, 401);
}

$input = json_decode(file_get_contents('php://input'), true);
$type = $_POST['type'] ?? $_GET['type'] ?? $input['type'] ?? '';
$id = $_POST['id'] ?? $_GET['id'] ?? $input['id'] ?? '';

if (!$type || !$id) {
    sendResponse(false, 'Type and ID required', null, 400);
}

switch ($type) {
    case 'project':
        deleteProject($id);
        break;
        
    case 'certificate':
        deleteCertificate($id);
        break;
        
    case 'blog':
        deleteBlog($id);
        break;
        
    case 'contact':
        deleteContact($id);
        break;
        
    case 'ai':
        deleteAIModel($id);
        break;
        
    case 'portfolio':
        deletePortfolioItem($id);
        break;
        
    default:
        sendResponse(false, 'Invalid type', null, 400);
}

function deleteProject($id) {
    $projects = readJSON(PROJECTS_FILE, []);
    $originalCount = count($projects);
    $projects = array_filter($projects, function($p) use ($id) {
        return ($p['id'] ?? '') !== $id;
    });
    $projects = array_values($projects);
    
    if (count($projects) < $originalCount) {
        if (writeJSON(PROJECTS_FILE, $projects)) {
            logAPI('project_deleted', ['id' => $id]);
            sendResponse(true, 'Project deleted successfully');
        } else {
            sendResponse(false, 'Failed to delete project', null, 500);
        }
    } else {
        sendResponse(false, 'Project not found', null, 404);
    }
}

function deleteCertificate($id) {
    $certificates = readJSON(CERTIFICATES_FILE, []);
    $originalCount = count($certificates);
    $certificates = array_filter($certificates, function($c) use ($id) {
        return ($c['id'] ?? '') !== $id;
    });
    $certificates = array_values($certificates);
    
    if (count($certificates) < $originalCount) {
        if (writeJSON(CERTIFICATES_FILE, $certificates)) {
            logAPI('certificate_deleted', ['id' => $id]);
            sendResponse(true, 'Certificate deleted successfully');
        } else {
            sendResponse(false, 'Failed to delete certificate', null, 500);
        }
    } else {
        sendResponse(false, 'Certificate not found', null, 404);
    }
}

function deleteBlog($id) {
    $blogs = readJSON(BLOG_FILE, []);
    $originalCount = count($blogs);
    $blogs = array_filter($blogs, function($b) use ($id) {
        return ($b['id'] ?? '') !== $id;
    });
    $blogs = array_values($blogs);
    
    if (count($blogs) < $originalCount) {
        if (writeJSON(BLOG_FILE, $blogs)) {
            logAPI('blog_deleted', ['id' => $id]);
            sendResponse(true, 'Blog post deleted successfully');
        } else {
            sendResponse(false, 'Failed to delete blog post', null, 500);
        }
    } else {
        sendResponse(false, 'Blog post not found', null, 404);
    }
}

function deleteContact($id) {
    $contacts = readJSON(CONTACTS_FILE, []);
    $originalCount = count($contacts);
    $contacts = array_filter($contacts, function($c) use ($id) {
        return ($c['id'] ?? '') !== $id;
    });
    $contacts = array_values($contacts);
    
    if (count($contacts) < $originalCount) {
        if (writeJSON(CONTACTS_FILE, $contacts)) {
            logAPI('contact_deleted', ['id' => $id]);
            sendResponse(true, 'Contact deleted successfully');
        } else {
            sendResponse(false, 'Failed to delete contact', null, 500);
        }
    } else {
        sendResponse(false, 'Contact not found', null, 404);
    }
}

function deleteAIModel($id) {
    $models = readJSON(AI_MODELS_FILE, []);
    $originalCount = count($models);
    $models = array_filter($models, function($m) use ($id) {
        return ($m['id'] ?? '') !== $id;
    });
    $models = array_values($models);
    
    if (count($models) < $originalCount) {
        if (writeJSON(AI_MODELS_FILE, $models)) {
            logAPI('ai_model_deleted', ['id' => $id]);
            sendResponse(true, 'AI model deleted successfully');
        } else {
            sendResponse(false, 'Failed to delete AI model', null, 500);
        }
    } else {
        sendResponse(false, 'AI model not found', null, 404);
    }
}

function deletePortfolioItem($id) {
    $items = readJSON(PORTFOLIO_FILE, []);
    $originalCount = count($items);
    $items = array_filter($items, function($i) use ($id) {
        return ($i['id'] ?? '') !== $id;
    });
    $items = array_values($items);
    
    if (count($items) < $originalCount) {
        if (writeJSON(PORTFOLIO_FILE, $items)) {
            logAPI('portfolio_deleted', ['id' => $id]);
            sendResponse(true, 'Portfolio item deleted successfully');
        } else {
            sendResponse(false, 'Failed to delete portfolio item', null, 500);
        }
    } else {
        sendResponse(false, 'Portfolio item not found', null, 404);
    }
}
?>
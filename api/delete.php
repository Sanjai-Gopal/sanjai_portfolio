<?php
require_once 'config.php';

// Check authentication
session_start();
if (!isset($_SESSION['admin']) || $_SESSION['admin'] !== true) {
    sendResponse(false, 'Unauthorized', null, 401);
}

$type = $_POST['type'] ?? $_GET['type'] ?? '';
$id = $_POST['id'] ?? $_GET['id'] ?? '';

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
        
    case 'skill':
        deleteSkill($id);
        break;
        
    default:
        sendResponse(false, 'Invalid type', null, 400);
}

function deleteProject($id) {
    $projects = readJSON(PROJECTS_FILE, []);
    $projects = array_filter($projects, function($p) use ($id) {
        return $p['id'] !== $id;
    });
    $projects = array_values($projects);
    
    if (writeJSON(PROJECTS_FILE, $projects)) {
        sendResponse(true, 'Project deleted successfully');
    } else {
        sendResponse(false, 'Failed to delete project', null, 500);
    }
}

function deleteCertificate($id) {
    $certificates = readJSON(CERTIFICATES_FILE, []);
    $certificates = array_filter($certificates, function($c) use ($id) {
        return $c['id'] !== $id;
    });
    $certificates = array_values($certificates);
    
    if (writeJSON(CERTIFICATES_FILE, $certificates)) {
        sendResponse(true, 'Certificate deleted successfully');
    } else {
        sendResponse(false, 'Failed to delete certificate', null, 500);
    }
}

function deleteBlog($id) {
    $blogs = readJSON(BLOG_FILE, []);
    $blogs = array_filter($blogs, function($b) use ($id) {
        return $b['id'] !== $id;
    });
    $blogs = array_values($blogs);
    
    if (writeJSON(BLOG_FILE, $blogs)) {
        sendResponse(true, 'Blog post deleted successfully');
    } else {
        sendResponse(false, 'Failed to delete blog post', null, 500);
    }
}

function deleteSkill($id) {
    $skills = readJSON(SKILLS_FILE, []);
    
    foreach ($skills as &$category) {
        $category['skills'] = array_filter($category['skills'], function($s) use ($id) {
            return ($s['id'] ?? '') !== $id;
        });
        $category['skills'] = array_values($category['skills']);
    }
    
    if (writeJSON(SKILLS_FILE, $skills)) {
        sendResponse(true, 'Skill deleted successfully');
    } else {
        sendResponse(false, 'Failed to delete skill', null, 500);
    }
}
?>

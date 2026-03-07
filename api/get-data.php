<?php
// ========================================
// GET DATA API - FIXED VERSION
// ========================================

// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set JSON header
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow GET requests
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Include configuration
require_once __DIR__ . '/config.php';

// Get type parameter
$type = isset($_GET['type']) ? $_GET['type'] : 'all';

// Function to send response
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

// Default skills data
function getDefaultSkills() {
    return [
        [
            'icon' => 'fa-code',
            'title' => 'Programming Languages',
            'skills' => [
                ['name' => 'Python', 'level' => 90, 'tags' => ['NumPy', 'Pandas', 'Matplotlib']],
                ['name' => 'C++', 'level' => 80, 'tags' => ['OOP', 'STL', 'Algorithms']],
                ['name' => 'JavaScript', 'level' => 75, 'tags' => ['ES6', 'React', 'Node.js']]
            ]
        ],
        [
            'icon' => 'fa-brain',
            'title' => 'AI & Machine Learning',
            'skills' => [
                ['name' => 'Machine Learning', 'level' => 85, 'tags' => ['Scikit-learn', 'Regression']],
                ['name' => 'Deep Learning', 'level' => 75, 'tags' => ['TensorFlow', 'Neural Networks']],
                ['name' => 'MLOps', 'level' => 60, 'tags' => ['Docker', 'MLflow']]
            ]
        ],
        [
            'icon' => 'fa-tools',
            'title' => 'Tools & Technologies',
            'skills' => [
                ['name' => 'Git & GitHub', 'level' => 90, 'tags' => ['Version Control']],
                ['name' => 'VS Code', 'level' => 85, 'tags' => ['Extensions', 'Debugging']],
                ['name' => 'Linux', 'level' => 75, 'tags' => ['Bash', 'Command Line']]
            ]
        ]
    ];
}

// Default profile data
function getDefaultProfile() {
    return [
        'name' => 'Sanjai Gopal',
        'displayName' => 'Sanjai',
        'title' => 'AI Engineer & Nature Enthusiast',
        'bio' => 'I\'m a first-year Artificial Intelligence and Data Science student at SKCET, Coimbatore. I believe in building technology that\'s not just intelligent, but also sustainable and accessible to all.',
        'location' => 'Coimbatore, India',
        'email' => 'sanjai.sparkmail@gmail.com',
        'phone' => '+91 9363265552',
        'linkedin' => 'https://linkedin.com/in/sanjai2306',
        'github' => 'https://github.com/Sanjai-Gopal',
        'instagram' => 'https://instagram.com/hey.sanjai_',
        'photo' => null
    ];
}

// Default theme data
function getDefaultTheme() {
    return [
        'primary' => '#4caf7a',
        'secondary' => '#3d7a4f',
        'bg' => '#f5efe6',
        'text' => '#2c3e2f',
        'accent' => '#d9b382'
    ];
}

try {
    $data = [];
    
    switch ($type) {
        case 'profile':
            $data = readJSON(PROFILE_FILE, getDefaultProfile());
            break;
            
        case 'projects':
            $data = readJSON(PROJECTS_FILE, []);
            break;
            
        case 'certificates':
            $data = readJSON(CERTIFICATES_FILE, []);
            break;
            
        case 'blog':
            $data = readJSON(BLOG_FILE, []);
            break;
            
        case 'skills':
            $data = readJSON(SKILLS_FILE, getDefaultSkills());
            break;
            
        case 'theme':
            $data = readJSON(THEME_FILE, getDefaultTheme());
            break;
            
        case 'contacts':
            $data = readJSON(CONTACTS_FILE, []);
            break;
            
        case 'subscribers':
            $data = readJSON(SUBSCRIBERS_FILE, []);
            break;
            
        case 'ai':
            $data = readJSON(AI_MODELS_FILE, []);
            break;
            
        case 'portfolio':
            $data = readJSON(PORTFOLIO_FILE, []);
            break;
            
        case 'all':
            $data = [
                'profile' => readJSON(PROFILE_FILE, getDefaultProfile()),
                'projects' => readJSON(PROJECTS_FILE, []),
                'certificates' => readJSON(CERTIFICATES_FILE, []),
                'blog' => readJSON(BLOG_FILE, []),
                'skills' => readJSON(SKILLS_FILE, getDefaultSkills()),
                'theme' => readJSON(THEME_FILE, getDefaultTheme()),
                'contacts' => readJSON(CONTACTS_FILE, []),
                'subscribers' => readJSON(SUBSCRIBERS_FILE, []),
                'ai' => readJSON(AI_MODELS_FILE, []),
                'portfolio' => readJSON(PORTFOLIO_FILE, [])
            ];
            break;
            
        default:
            sendResponse(false, 'Invalid type: ' . $type, null, 400);
    }
    
    sendResponse(true, 'Data retrieved successfully', $data);
    
} catch (Exception $e) {
    logAPI('get_data_error', ['type' => $type, 'error' => $e->getMessage()]);
    sendResponse(false, 'Server error: ' . $e->getMessage(), null, 500);
}
?>
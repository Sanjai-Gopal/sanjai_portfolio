<?php
require_once 'config.php';

$type = $_GET['type'] ?? 'all';

$data = [];

switch ($type) {
    case 'profile':
        $data = readJSON(PROFILE_FILE, [
            'name' => 'Sanjai Gopal',
            'title' => 'AI Engineer & Nature Enthusiast',
            'bio' => 'I\'m a first-year Artificial Intelligence and Data Science student at SKCET, Coimbatore. I believe in building technology that\'s not just intelligent, but also sustainable and accessible to all.',
            'location' => 'Coimbatore, India',
            'email' => 'sanjai.sparkmail@gmail.com',
            'phone' => '+91 9363265552',
            'photo' => null
        ]);
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
        $data = readJSON(SKILLS_FILE, [
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
        ]);
        break;
        
    case 'theme':
        $data = readJSON(THEME_FILE, [
            'primary' => '#4caf7a',
            'secondary' => '#3d7a4f',
            'bg' => '#f5efe6',
            'text' => '#2c3e2f'
        ]);
        break;
        
    case 'contacts':
        $data = readJSON(CONTACTS_FILE, []);
        break;
        
    case 'subscribers':
        $data = readJSON(SUBSCRIBERS_FILE, []);
        break;
        
    case 'all':
        $data = [
            'profile' => readJSON(PROFILE_FILE, []),
            'projects' => readJSON(PROJECTS_FILE, []),
            'certificates' => readJSON(CERTIFICATES_FILE, []),
            'blog' => readJSON(BLOG_FILE, []),
            'skills' => readJSON(SKILLS_FILE, []),
            'theme' => readJSON(THEME_FILE, []),
            'contacts' => readJSON(CONTACTS_FILE, []),
            'subscribers' => readJSON(SUBSCRIBERS_FILE, [])
        ];
        break;
        
    default:
        sendResponse(false, 'Invalid type', null, 400);
}

sendResponse(true, 'Data retrieved successfully', $data);
?>

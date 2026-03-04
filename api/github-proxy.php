<?php
/**
 * GitHub API Proxy
 * Fetches GitHub data while avoiding CORS issues and rate limits
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only accept GET requests
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Configuration
$config = [
    'username' => 'Sanjai-Gopal',
    'cache_time' => 3600, // 1 hour
    'cache_dir' => __DIR__ . '/../cache/',
    'github_api' => 'https://api.github.com'
];

// Get endpoint from query string
$endpoint = isset($_GET['endpoint']) ? $_GET['endpoint'] : 'user';

// Validate endpoint
$allowed_endpoints = ['user', 'repos', 'events', 'stats'];
if (!in_array($endpoint, $allowed_endpoints)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid endpoint']);
    exit();
}

// Create cache directory if it doesn't exist
if (!is_dir($config['cache_dir'])) {
    mkdir($config['cache_dir'], 0755, true);
}

// Check cache
$cache_file = $config['cache_dir'] . 'github_' . $endpoint . '.json';
$use_cache = false;

if (file_exists($cache_file)) {
    $cache_time = filemtime($cache_file);
    if (time() - $cache_time < $config['cache_time']) {
        $use_cache = true;
        $cached_data = file_get_contents($cache_file);
        echo $cached_data;
        exit();
    }
}

// If not in cache or cache expired, fetch from GitHub
try {
    $url = $config['github_api'] . '/users/' . $config['username'];
    
    switch ($endpoint) {
        case 'repos':
            $url .= '/repos?per_page=100&sort=updated';
            break;
        case 'events':
            $url .= '/events/public?per_page=30';
            break;
        case 'stats':
            // Fetch multiple endpoints and combine
            $user_data = github_request($config['github_api'] . '/users/' . $config['username']);
            $repos_data = github_request($config['github_api'] . '/users/' . $config['username'] . '/repos?per_page=100');
            $events_data = github_request($config['github_api'] . '/users/' . $config['username'] . '/events/public?per_page=100');
            
            $stats = [
                'public_repos' => $user_data['public_repos'] ?? 0,
                'followers' => $user_data['followers'] ?? 0,
                'following' => $user_data['following'] ?? 0,
                'total_stars' => array_sum(array_column($repos_data, 'stargazers_count')),
                'total_forks' => array_sum(array_column($repos_data, 'forks_count')),
                'total_watchers' => array_sum(array_column($repos_data, 'watchers_count')),
                'languages' => extract_languages($repos_data),
                'recent_commits' => count(array_filter($events_data, function($e) {
                    return $e['type'] === 'PushEvent';
                })),
                'top_repos' => array_slice(array_map(function($repo) {
                    return [
                        'name' => $repo['name'],
                        'description' => $repo['description'],
                        'stars' => $repo['stargazers_count'],
                        'forks' => $repo['forks_count'],
                        'language' => $repo['language'],
                        'url' => $repo['html_url']
                    ];
                }, array_filter($repos_data, function($repo) {
                    return $repo['stargazers_count'] > 0 || $repo['forks_count'] > 0;
                })), 0, 5)
            ];
            
            $response = json_encode($stats);
            break;
        default:
            $response = github_request($url);
            break;
    }
    
    if ($endpoint !== 'stats') {
        $response = json_encode($response);
    }
    
    // Cache the response
    file_put_contents($cache_file, $response);
    
    echo $response;
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}

/**
 * Make GitHub API request
 */
function github_request($url) {
    $ch = curl_init();
    
    $headers = [
        'User-Agent: Sanjai-Portfolio',
        'Accept: application/vnd.github.v3+json'
    ];
    
    // Add GitHub token if available (to increase rate limit)
    $token = getenv('GITHUB_TOKEN');
    if ($token) {
        $headers[] = 'Authorization: token ' . $token;
    }
    
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    
    if (curl_error($ch)) {
        throw new Exception('CURL Error: ' . curl_error($ch));
    }
    
    curl_close($ch);
    
    if ($httpCode !== 200) {
        throw new Exception('GitHub API returned HTTP ' . $httpCode);
    }
    
    return json_decode($response, true);
}

/**
 * Extract language statistics from repos
 */
function extract_languages($repos) {
    $languages = [];
    foreach ($repos as $repo) {
        if (isset($repo['language']) && $repo['language']) {
            if (!isset($languages[$repo['language']])) {
                $languages[$repo['language']] = 0;
            }
            $languages[$repo['language']]++;
        }
    }
    arsort($languages);
    return array_slice($languages, 0, 5);
}
?>

<?php
require_once 'config.php';

// GitHub API Proxy to avoid CORS issues
$username = $_GET['username'] ?? 'Sanjai-Gopal';
$endpoint = $_GET['endpoint'] ?? 'repos';

$allowedEndpoints = ['repos', 'events', 'orgs', 'users'];
if (!in_array($endpoint, $allowedEndpoints)) {
    sendResponse(false, 'Invalid endpoint', null, 400);
}

$cacheFile = DATA_DIR . "github_{$username}_{$endpoint}.json";
$cacheTime = 3600; // 1 hour

try {
    // Check cache
    if (file_exists($cacheFile) && (time() - filemtime($cacheFile) < $cacheTime)) {
        $content = file_get_contents($cacheFile);
        if ($content !== false) {
            $data = json_decode($content, true);
            if ($data !== null) {
                sendResponse(true, 'Data retrieved from cache', $data);
            }
        }
    }
    
    // Fetch from GitHub API
    $url = "https://api.github.com/users/{$username}/{$endpoint}";
    $ch = curl_init();
    
    curl_setopt_array($ch, [
        CURLOPT_URL => $url,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_USERAGENT => 'Sanjai-Portfolio',
        CURLOPT_TIMEOUT => 10,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_SSL_VERIFYPEER => true,
        CURLOPT_HTTPHEADER => [
            'Accept: application/vnd.github.v3+json'
        ]
    ]);
    
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlError = curl_error($ch);
    curl_close($ch);
    
    if ($response === false) {
        logAPI('github_curl_error', ['error' => $curlError]);
        sendResponse(false, 'GitHub API connection error', null, 500);
    }
    
    if ($httpCode !== 200) {
        logAPI('github_api_error', ['http_code' => $httpCode, 'response' => $response]);
        sendResponse(false, 'GitHub API error', null, $httpCode);
    }
    
    $data = json_decode($response, true);
    
    if ($data === null) {
        logAPI('github_json_error', ['response' => $response]);
        sendResponse(false, 'Invalid response from GitHub', null, 500);
    }
    
    // Save to cache
    file_put_contents($cacheFile, json_encode($data));
    
    sendResponse(true, 'Data retrieved from GitHub', $data);
    
} catch (Exception $e) {
    logAPI('github_proxy_error', ['error' => $e->getMessage()]);
    sendResponse(false, 'Server error occurred', null, 500);
}
?>
<?php
require_once 'config.php';

// GitHub API Proxy to avoid CORS issues
$username = $_GET['username'] ?? 'Sanjai-Gopal';
$endpoint = $_GET['endpoint'] ?? 'repos';

$allowedEndpoints = ['repos', 'events', 'orgs', 'users'];
if (!in_array($endpoint, $allowedEndpoints)) {
    sendResponse(false, 'Invalid endpoint', null, 400);
}

$cacheFile = DATA_DIR . "github_${username}_${endpoint}.json";
$cacheTime = 3600; // 1 hour

// Check cache
if (file_exists($cacheFile) && (time() - filemtime($cacheFile) < $cacheTime)) {
    $data = json_decode(file_get_contents($cacheFile), true);
    sendResponse(true, 'Data retrieved from cache', $data);
}

// Fetch from GitHub API
$url = "https://api.github.com/users/$username/$endpoint";
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_USERAGENT, 'Sanjai-Portfolio');
curl_setopt($ch, CURLOPT_TIMEOUT, 10);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode !== 200) {
    sendResponse(false, 'GitHub API error', null, $httpCode);
}

$data = json_decode($response, true);

// Save to cache
if ($data) {
    file_put_contents($cacheFile, json_encode($data));
}

sendResponse(true, 'Data retrieved from GitHub', $data);
?>
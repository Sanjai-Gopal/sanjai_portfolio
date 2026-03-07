<?php
// ========================================
// GITHUB PROXY API - FIXED VERSION
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

// Get parameters
$username = isset($_GET['username']) ? preg_replace('/[^a-zA-Z0-9-]/', '', $_GET['username']) : 'Sanjai-Gopal';
$endpoint = isset($_GET['endpoint']) ? preg_replace('/[^a-zA-Z]/', '', $_GET['endpoint']) : 'repos';

// Validate endpoint
$allowedEndpoints = ['repos', 'events', 'orgs', 'users'];
if (!in_array($endpoint, $allowedEndpoints)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid endpoint']);
    exit();
}

// Define cache directory
$cacheDir = __DIR__ . '/../data/';
if (!file_exists($cacheDir)) {
    mkdir($cacheDir, 0755, true);
}

$cacheFile = $cacheDir . "github_{$username}_{$endpoint}.json";
$cacheTime = 3600; // 1 hour

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

// Check cache
if (file_exists($cacheFile) && (time() - filemtime($cacheFile) < $cacheTime)) {
    $cached = file_get_contents($cacheFile);
    if ($cached !== false) {
        $data = json_decode($cached, true);
        if ($data !== null) {
            sendResponse(true, 'Data retrieved from cache', $data);
        }
    }
}

// GitHub API URL
$url = "https://api.github.com/users/{$username}/{$endpoint}";

// Initialize cURL
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

// Handle cURL error
if ($response === false) {
    sendResponse(false, 'GitHub API connection error: ' . $curlError, null, 500);
}

// Handle GitHub API error
if ($httpCode !== 200) {
    sendResponse(false, 'GitHub API error (HTTP ' . $httpCode . ')', null, $httpCode);
}

// Parse JSON response
$data = json_decode($response, true);
if ($data === null) {
    sendResponse(false, 'Invalid JSON response from GitHub', null, 500);
}

// Save to cache
file_put_contents($cacheFile, json_encode($data));

// Return success response
sendResponse(true, 'Data retrieved from GitHub', $data);
?>
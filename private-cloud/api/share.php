<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Generate share link
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!$input) {
        $input = $_POST;
    }
    
    $filename = $input['file'] ?? '';
    $expiry = $input['expiry'] ?? 7; // days
    $password = $input['password'] ?? '';
    
    if (empty($filename)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'No file specified']);
        exit();
    }
    
    // Generate unique share ID
    $shareId = uniqid() . '_' . bin2hex(random_bytes(8));
    
    // Store share info
    $shareData = [
        'id' => $shareId,
        'file' => $filename,
        'created' => date('c'),
        'expires' => date('c', strtotime("+{$expiry} days")),
        'password' => $password ? password_hash($password, PASSWORD_DEFAULT) : null,
        'downloads' => 0
    ];
    
    $sharesFile = '../data/shares.json';
    $shares = [];
    
    if (file_exists($sharesFile)) {
        $shares = json_decode(file_get_contents($sharesFile), true) ?: [];
    }
    
    $shares[] = $shareData;
    file_put_contents($sharesFile, json_encode($shares, JSON_PRETTY_PRINT));
    
    // Generate share URL
    $shareUrl = 'https://' . $_SERVER['HTTP_HOST'] . '/private-cloud/share.html?id=' . $shareId;
    
    echo json_encode([
        'success' => true,
        'shareId' => $shareId,
        'shareUrl' => $shareUrl,
        'expires' => $shareData['expires']
    ]);
    exit();
}

// Get share info
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $shareId = $_GET['id'] ?? '';
    
    if (empty($shareId)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'No share ID specified']);
        exit();
    }
    
    $sharesFile = '../data/shares.json';
    
    if (!file_exists($sharesFile)) {
        http_response_code(404);
        echo json_encode(['success' => false, 'message' => 'Share not found']);
        exit();
    }
    
    $shares = json_decode(file_get_contents($sharesFile), true) ?: [];
    
    foreach ($shares as $share) {
        if ($share['id'] === $shareId) {
            // Check if expired
            if (strtotime($share['expires']) < time()) {
                echo json_encode(['success' => false, 'message' => 'Share link has expired']);
                exit();
            }
            
            echo json_encode([
                'success' => true,
                'share' => $share
            ]);
            exit();
        }
    }
    
    http_response_code(404);
    echo json_encode(['success' => false, 'message' => 'Share not found']);
}
?>

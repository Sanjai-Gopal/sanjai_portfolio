<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$syncFile = '../data/sync.json';
$uploadsDir = '../uploads/';

// Create data directory if needed
if (!file_exists('../data/')) {
    mkdir('../data/', 0755, true);
}

// Get sync status
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $clientSync = $_GET['lastSync'] ?? 0;
    
    $files = [];
    if (is_dir($uploadsDir)) {
        $iterator = new FilesystemIterator($uploadsDir);
        foreach ($iterator as $file) {
            if ($file->isFile()) {
                $files[] = [
                    'name' => $file->getFilename(),
                    'size' => $file->getSize(),
                    'modified' => $file->getMTime()
                ];
            }
        }
    }
    
    echo json_encode([
        'success' => true,
        'timestamp' => time(),
        'files' => $files,
        'total' => count($files)
    ]);
    exit();
}

// Push changes
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!$input) {
        $input = $_POST;
    }
    
    $action = $input['action'] ?? '';
    $file = $input['file'] ?? '';
    
    $syncLog = [];
    if (file_exists($syncFile)) {
        $syncLog = json_decode(file_get_contents($syncFile), true) ?: [];
    }
    
    $syncLog[] = [
        'action' => $action,
        'file' => $file,
        'timestamp' => time()
    ];
    
    // Keep only last 100 entries
    if (count($syncLog) > 100) {
        $syncLog = array_slice($syncLog, -100);
    }
    
    file_put_contents($syncFile, json_encode($syncLog, JSON_PRETTY_PRINT));
    
    echo json_encode([
        'success' => true,
        'message' => 'Sync recorded',
        'timestamp' => time()
    ]);
}
?>

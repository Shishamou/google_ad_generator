<?php
// Routes

/**
 * 首頁
 */
$app->get('/', function ($request, $response, $args) {
    include __DIR__ . '/natives/index.php';
});

/**
 * 輸出
 */
$app->post('/', function ($request, $response, $args) {
    include __DIR__ . '/natives/layout.php';
});

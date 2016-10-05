<?php
// Routes

/**
 * 首頁
 */
$app->get('/', function ($request, $response, $args) {
    return $this->renderer->render($response, 'index.phtml', $args);
});

/**
 * 輸出
 */
$app->post('/', function ($request, $response, $args) {
    foreach (range(1, 15) as $i) {
        $title[] = trim($request->getParam("title_{$i}_1"));
        $subTitle[] = trim($request->getParam("title_{$i}_2"));
    }

    return outputRenderer($this->renderer, $response)('layout.phtml', [
        'title' => $title,
        'sub_title' => $subTitle,
        'price' => (int)$request->getParam('price'),
        'sale' => (int)$request->getParam('sale'),
        'image' => $request->getParam('url'),
    ]);
});

/**
 * 測試模板
 */
$app->get('/testing', function ($request, $response, $args) {
    return outputRenderer($this->renderer, $response)('layout.phtml', [
        'title' => array_fill(0, 15, '最新機款最新機'),
        'sub_title' => array_fill(0, 15, '再來加上九個字元吧'),
        'price' => 21900,
        'sale' => 16390,
        'image' => 'http://i.imgur.com/EUs1JIv.jpg',
    ]);
});

// =============================================================================
// =
// =============================================================================

/**
 * 印出 print 頁面
 */
function outputRenderer(\Slim\Views\PhpRenderer $renderer, $response)
{
    return function ($template = 'default.phtml', $data = []) use ($renderer, $response) {
        return $renderer->render($response, 'print_wrapper.phtml', [
            'content' => $renderer->fetch("print/{$template}", $data)
        ]);
    };
}

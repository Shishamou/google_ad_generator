<?php
// Routes

$app->get('/', function ($request, $response, $args) {
    return $this->renderer->render($response, 'index.phtml', $args);
});

$app->post('/', function ($request, $response, $args) {
    return $this->renderer->render($response, 'layout.phtml', $args);
});

$app->get('/layout_testing', function ($request, $response, $args) {
    return $this->renderer->render($response, 'layout.phtml', [
        'title' => array_fill(0, 15, '最新機款最新機'),
        'sub_title' => array_fill(0, 15, '再來加上九個字元吧'),
        'price' => 21900,
        'sale' => 16390,
        'image' => 'http://i.imgur.com/EUs1JIv.jpg',
    ]);
});

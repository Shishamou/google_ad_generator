<?php
// Routes

define('WORK_PATH', dirname(__DIR__));

$app->get('/', function ($request, $response, $args) {
    return $this->renderer->render($response, 'index.phtml', $args);
});

$app->post('/', function ($request, $response, $args) {
    foreach (range(1, 15) as $i) {
        $title[] = trim($request->getParam("title_{$i}_1"));
        $subTitle[] = trim($request->getParam("title_{$i}_2"));
    }

    if (preg_match('#http#isu', $pdImg)) {
        $pdImg_arr = explode('?', $pdImg);
        $pdImg = $pdImg_arr[0];
        unset($pdImg_arr);
        $filetime = date('YmdHis');
        $extension = pathinfo($pdImg, PATHINFO_EXTENSION);
        $command = 'wget '.$pdImg.' -O ' . WORK_PATH . '/pdImg/'.$filetime.'.'.$extension;
        exec($command);
        $pdImg = WORK_PATH . '/pdImg/'.$filetime.'.'.$extension;
    }

    return $this->renderer->render($response, 'layout.phtml', [
        'title' => $title,
        'sub_title' => $subTitle,
        'price' => (int)$request->getParam('price'),
        'sale' => (int)$request->getParam('sale'),
        'image' => $request->getParam('url'),
    ]);
});

$app->post('/upload', function ($request, $response, $args) {
    if ($_POST['upload']) {
        if ($_FILES['pdImg']['size'] != 0) {
            $allowedExts = array('gif', 'jpeg', 'jpg', 'png');
            $temp = explode('.', $_FILES['pdImg']['name']);
            $extension = end($temp);
            if (in_array($extension, $allowedExts)) {
                $mvfile = WORK_PATH . '/pdImg/'.date('YmdHis').'.'.$extension;
                move_uploaded_file($_FILES['pdImg']['tmp_name'],  $mvfile);
                $mfile = WORK_PATH . '/pdImg/'.date('YmdHis').'.'.$extension;
                echo '{';
                echo "sys: 'ok',";
                echo "msg: '".$mfile."'";
                echo '}';
                exit;
            }
            echo '{';
            echo "sys: 'no',";
            echo "msg: 'size'";
            echo '}';
            exit;
        }
        echo '{';
        echo "sys: 'no',";
        echo "msg: 'file'";
        echo '}';
        exit;
    }
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

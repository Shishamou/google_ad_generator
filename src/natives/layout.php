<?php
/**
 * 處理表單
 *
 * @author Shisha <shisha.liao@ezprice.com.tw>
 * @date 2016-10-11
 */

require __DIR__ . '/bootstrap.php';

if ($url = $_POST['getDataUrl']) {
    if (preg_match('/^https?:\/\//', $url)) {
        echo downloadImageToDataUrl($url);
        return;
    }
}

foreach (range(1, 15) as $i) {
    $title[] = htmlspecialchars(trim($_POST["title_{$i}_1"]));
    $subTitle[] = htmlspecialchars(trim($_POST["title_{$i}_2"]));
}

$renderer = printPageRenderer($renderer);
$content = $renderer('20161012_fixed', [
    'title' => $title,
    'sub_title' => $subTitle,
    'price' => (int)$_POST['price'],
    'sale' => (int)$_POST['sale'],
    'image' => 'default.gif',
]);

echo str_replace(["\t", "\r", "\n", "\r\n", "\n\r"], '', $content);

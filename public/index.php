<?php
/**
 * 首頁
 *
 * @author Shisha <shisha.liao@ezprice.com.tw>
 * @date 2016-10-11
 */

require __DIR__ . '/bootstrap.php';

echo $renderer->fetch('index.phtml', [
    'post' => 'layout.php'
]);

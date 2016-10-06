<?php

use Slim\Views\PhpRenderer;

const MODULE_PATH = 'print/modules';

/**
 * 處理輸出頁面
 * @param  SlimViewsPhpRenderer $renderer [description]
 * @param  boolean              $testing  [description]
 * @return string                         [description]
 */
function printPageRenderer(PhpRenderer $renderer, $testing = false)
{
    return function ($moduleName, $data = [], $title = 'print') use ($renderer, $testing) {
        $main = $renderer->fetch(
            MODULE_PATH . "/{$moduleName}/main.phtml",
            $data + [ 'image' => 'image/default.jpg' ]
        );

        $style = $renderer->fetch(MODULE_PATH . "/{$moduleName}/style.css");
        $assets = $renderer->fetch('print/assets.phtml', compact('style'));

        $image = isset($data['image']) ? $data['image'] : '';
        $footer = $renderer->fetch('print/footer.phtml', compact('testing', 'image'));

        return $renderer->fetch('print/base.phtml', compact('title', 'assets', 'main', 'footer'));
    };
}

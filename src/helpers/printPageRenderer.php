<?php

use Slim\Views\PhpRenderer;

const MAIN_PATH = 'print';
const MODULE_PATH = MAIN_PATH . '/modules';

/**
 * 處理輸出頁面
 * @param  SlimViewsPhpRenderer $renderer [description]
 * @return string                         [description]
 */
function printPageRenderer(PhpRenderer $renderer)
{
    return function ($moduleName, $data = [], $title = 'print') use ($renderer, $testing) {
        $main = $renderer->fetch(MODULE_PATH . "/{$moduleName}/main.phtml", $data);

        $style = $renderer->fetch(MODULE_PATH . "/{$moduleName}/style.css");
        $assets = $renderer->fetch(MAIN_PATH . '/assets.phtml', compact('style'));
        $footer = $renderer->fetch(MAIN_PATH . '/footer.phtml');

        $title = uniqid();

        return $renderer->fetch('print/base.phtml', compact('title', 'assets', 'main', 'footer'));
    };
}

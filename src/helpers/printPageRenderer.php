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
        $main = $renderer->fetch(MODULE_PATH . "/{$moduleName}/main.phtml", $data);
        $assets = $renderer->fetch(MODULE_PATH . "/{$moduleName}/style.css");
        $assets = "<style>{$assets}</style>";

        $injects = compact('title', 'assets', 'main');

        if (true !== $testing) {
            $footer = $renderer->fetch('print/footer.phtml');
            $injects += compact('footer');
        }

        return $renderer->fetch('print/base.phtml', $injects);
    };
}

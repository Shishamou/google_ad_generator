<?php

use Slim\Views\PhpRenderer;

/**
 * 處理輸出頁面
 * @param  SlimViewsPhpRenderer $renderer [description]
 * @param  boolean              $testing  [description]
 * @return string                         [description]
 */
function printPageRenderer(PhpRenderer $renderer, $testing = false)
{
    return function ($template = 'default.phtml', $data = []) use ($renderer, $testing) {
        $content = $renderer->fetch("print/{$template}", $data);
        $style = "";
        $footer = "";

        $injects = compact('content');
        if (true == $testing) {
            $injects += compact('style', 'footer');
        }

        return $renderer->fetch('print_wrapper.phtml', $injects);
    };
}

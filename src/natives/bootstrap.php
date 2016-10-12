<?php

require_once __DIR__ . '/../../vendor/autoload.php';

use Slim\Views\PhpRenderer;

$renderer = $renderer ?: new PhpRenderer(__DIR__ . '/../../templates/');

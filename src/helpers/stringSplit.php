<?php

/**
 * 切割 utf8 文字
 * @param  string  $string 要被切割的字串
 * @param  integer $limit  每段長度
 * @return array          [description]
 */
function stringSplit($string, $limit = 1)
{
    $words = preg_split('//u', $string, null, PREG_SPLIT_NO_EMPTY);
    $parts = array_chunk($words, $limit);

    return array_map(function ($part) {
        return join($part);
    }, $parts);
}

function parseChinese($string, $limit = 1)
{
    $parts = stringSplit($string, $limit);
    return join($parts, '<br>');
}

<?php

/**
 * 下載圖片並轉換成 DataURL
 * @param  string $resource [description]
 * @return string           [description]
 */
function downloadImageToDataUrl($source)
{
    // 判斷檔案類型
    $mimeType = getimagesize($source)['mime'];
    if (0 !== strpos($mimeType, 'image/')) {
        throw new RuntimeException("下載圖片失敗: {$source}");
    }

    // 轉換為 Base64 data url
    $base64 = base64_encode(file_get_contents($source));
    return "data:{$mimeType};base64,{$base64}";
}

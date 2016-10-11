<?php

define('TEMP_PATH', __DIR__);

/**
 * 下載圖片並轉換成 DataURL
 * @param  string $resource [description]
 * @return string           [description]
 */
function downloadImageToDataUrl($source)
{
    try {
        if (! ini_set('allow_url_fopen')) {
            // 下載檔案
            $tempName = TEMP_PATH . uniqid('/');
            exec("wget '{$source}' -O '{$tempName}'");
            if (! file_exists($tempName)) {
                throw new RuntimeException("無法下載檔案自: {$source}");
            }

            $source = $tempName;
        }

        // 判斷檔案類型
        $mimeType = getimagesize($source)['mime'];
        if (0 !== strpos($mimeType, 'image/')) {
            throw new RuntimeException("下載圖片失敗: {$source}");
        }

        // 轉換為 Base64 data url
        $base64 = base64_encode(file_get_contents($source));
        return "data:{$mimeType};base64,{$base64}";
    } catch (Exception $e) {
        throw $e;
    } finally {
        // 移除暫存檔
        if (isset($tempName)) {
            if (! unlink($tempName)) {
                throw new RuntimeException("無法刪除暫存檔: {$tempName}");
            }
        };
    }
}

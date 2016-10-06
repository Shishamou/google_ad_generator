<?php

const TEMP_PATH = __DIR__ . '/.download_temp';

/**
 * 下載圖片並轉換成 DataURL
 * @param  [type] $resource [description]
 * @return [type]           [description]
 */
function downloadImageToDataUrl($source)
{
    // 產生暫存目錄
    if (! is_dir(TEMP_PATH)) {
        mkdir(TEMP_PATH);
    }

    // 下載檔案
    $tempName = TEMP_PATH . uniqid('/');
    exec("wget {$source} -O {$tempName}");
    if (! file_exists($tempName)) {
        throw new RuntimeException("無法下載檔案自: {$source}");
    }

    try {
        return getImageDataUrl($tempName);
    } catch (\Exception $e) {
        throw $e;
    } finally {
        if (! unlink($tempName)) {
            throw new RuntimeException("無法刪除暫存檔: {$tempName}");
        }
    }
}

/**
 * 取得圖片 DataUrl
 * @param  string $filename [description]
 * @return string           [description]
 */
function getImageDataUrl($filename)
{
    $mimeType = (new finfo(FILEINFO_MIME))->file($filename);
    if (0 !== strpos($mimeType, 'image/')) {
        throw new RuntimeException("不支援的檔案格式: {$mimeType}");
    }

    $base64 = base64_encode(file_get_contents($filename));
    return "data: {$mimeType};base64,{$base64}";
}

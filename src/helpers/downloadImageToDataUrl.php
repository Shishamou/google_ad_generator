<?php

const TEMP_PATH = __DIR__;

/**
 * 下載圖片並轉換成 DataURL
 * @param  string $resource [description]
 * @return string           [description]
 */
function downloadImageToDataUrl($source)
{
    // 產生暫存目錄
    if (! is_dir(TEMP_PATH)) {
        mkdir(TEMP_PATH);
    }

    // 下載檔案
    $tempName = TEMP_PATH . uniqid('/');
    exec("wget '{$source}' -O '{$tempName}'");
    if (! file_exists($tempName)) {
        throw new RuntimeException("無法下載檔案自: {$source}");
    }

    try {
        // 判斷檔案類型
        $mimeType = (new finfo(FILEINFO_MIME))->file($tempName);
        switch (explode('/', $mimeType)[0]) {
            case 'image':
                // supported
                break;
            case 'inode':
                throw new RuntimeException("無法下載檔案自: {$source}");
            default:
                throw new RuntimeException("不支援的檔案格式: {$mimeType}");
        }

        // 轉換為 Base64 data url
        $base64 = base64_encode(file_get_contents($tempName));
        return "data:{$mimeType};base64,{$base64}";
    } finally {
        // 移除暫存檔
        if (! unlink($tempName)) {
            throw new RuntimeException("無法刪除暫存檔: {$tempName}");
        }
    }
}

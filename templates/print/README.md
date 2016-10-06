# 輸出板型目錄
@author Shisha <shisha.liao@ezprice.com.tw>
@date 2016-10-06

## 基板 layout
基板包含 base.phtml, assets.phtml 與 footer.phtml

## Modules
以目錄做區隔，裡面須包含 main.phtml 與 style.css

## 運作
程式產生模板時
modules/{module_name}/style.css 會被注入到 assets.phtml
modules/{module_name}/main.phtml 會被注入到 base.phtml

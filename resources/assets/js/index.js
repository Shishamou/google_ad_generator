require('./libs/html2canvas-0.4.1/html2canvas.min.js');
window.$ = window.jQuery = require('jquery');
const makeDataURL = require('./libs/makeDataUrl.js');
const app = require('./app');

$(document).ready(function() {
  app.$mount('#app');

  return;
  // 輸入框點擊後自動全選
  $("input[type=text], input[type=number]").focus(function() {
    $(this).select();
  });

  // ===========================================================================
  // = 初始化
  // ===========================================================================

  // 填入測試資料按鈕
  var $buttonSeeds = $('#button_seeds');
  // 圖片轉換按鈕
  var $buttonDraw = $('#button_draw');
  // 圖片自動轉換
  var $inputAutodraw = $('#input_autodraw');

  // 表單送出
  var $buttonSubmit = $('#button_submit');
  // 打包按鈕
  var $buttonOutput = $('#button_output');

  // 圖片輸入框
  var $inputImage = $('#input_image');
  // 圖片 dataurl
  var $inputImageUrl = $('#input_image_url');
  // 使用者上傳檔案
  var $inputFile = $('#input_file');

  var $sectionTitleInject = $('#section_title_inject');

  // 表單
  var $form = $('form[target=viewer]');

  // 右側頁框
  var $viewer = $('#viewer');
  var $getViewer = function(selector) {
    return $viewer.contents().find(selector);
  }

  // ===========================================================================
  // = 開發工具 > 轉換圖片
  // ===========================================================================


  // ===========================================================================
  // = 打包全部
  // ===========================================================================

  $buttonOutput.attr('disabled', true);
  $('form').submit(function() {
    $buttonOutput.attr('disabled', false);
  });

  $buttonOutput.click(function() {

  });

  // ===========================================================================
  // = 處理標題輸入
  // ===========================================================================

  // 標題 1
  var $inputTitle = $('.input_title');
  // 標題 2
  var $inputTitleExtra = $('.input_title_extra');

  $inputTitle.attr('maxlength', 7).attr('placeholder', '可以輸入七個字');
  $inputTitleExtra.attr('maxlength', 9).attr('placeholder', '這邊可以輸入九個字');

  // ===========================================================================
  // = 表單送出後處理
  // ===========================================================================

  $form.submit(function() {

  });
});

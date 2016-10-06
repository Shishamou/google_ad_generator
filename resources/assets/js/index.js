require('./libs/html2canvas-0.4.1/html2canvas.min.js');
const makeDataURL = require('./libs/makeDataUrl.js');

$(document).ready(function() {

  $("input[type=text], input[type=number]").focus(function() {
    $(this).select();
  });

  // ===========================================================================
  // = 處理標題輸入
  // ===========================================================================

  var $inputTitle = $('.input_title');
  var $inputTitleExtra = $('.input_title_extra');

  $inputTitle.attr('maxlength', 7).attr('placeholder', '可以輸入七個字');
  $inputTitleExtra.attr('maxlength', 9).attr('placeholder', '這邊可以輸入九個字');

  // 統一標題
  $('#section_title_inject').ready(function() {
    $(this).find('button').click((event) => {
      var title = $(this).find('.input_title').val();
      var titleExtra = $(this).find('.input_title_extra').val();

      $inputTitle.val(title);
      $inputTitleExtra.val(titleExtra);
    });
  });

  // ===========================================================================
  // = 上傳功能
  // ===========================================================================
  // 載入使用者本地端圖片並轉換為 DataURL (偽上傳)

  $inputImage = $('#input_image');
  $inputImageUrl = $('#input_image_url');

  var handleImageUrl = function(src, resize) {
    resize = resize || 300;
    $inputImageUrl.val(makeDataURL(src, resize, resize));
  };

  $('#input_file').change(function() {

    if ( ! this.files[0]) return;
    var file = this.files[0];

    if ( ! /image\/\w+/.test(file.type)) return;

    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener('load', function() {
      $inputImage.val(file.name);
      handleImageUrl(this.result);
    });
  });

  $inputImage.change(function() {
    $inputImageUrl.val(this.value);
  });

  // ===========================================================================
  // = 處理儲存輸出
  // ===========================================================================
  // 下載頁框內 .box 的圖片

  var $buttonOutput = $('#button_output');
  var $viewer = $('iframe#viewer');

  $buttonOutput.attr('disabled', true);

  $('form').submit(function() {
    $buttonOutput.attr('disabled', false);
  });

  $buttonOutput.click(function() {
    $viewerContent = $viewer.contents();
    var uniqid = $viewerContent.find('input[name=uniqid]').val();

    $viewerContent.find('.box').map(function() {
      var link = document.createElement('a');
      link.href = $(this).find('img').attr('src');
      link.download = uniqid;
      link.dispatchEvent(new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
      }));
    });
  });
});

require('./libs/html2canvas-0.4.1/html2canvas.min.js');

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
  // = 處理儲存輸出
  // ===========================================================================

  var $buttonOutput = $('#button_output');

  $buttonOutput.attr('disabled', true);

  $('form').submit(function() {
    $buttonOutput.attr('disabled', false);
  });

  $buttonOutput.click(function() {
    console.log('輸出');
    html2canvas(this, {
      onrendered: (canvas) => {
        var dataUrl = canvas.toDataURL('image/jpeg');
        var link = document.createElement('a');
        link.href = dataUrl;
        link.download = '100x100';
        link.dispatchEvent(new MouseEvent('click', {
          view: window,
          bubbles: true,
          cancelable: true
        }));
        console.log('fin');
      }
    });
  });
});

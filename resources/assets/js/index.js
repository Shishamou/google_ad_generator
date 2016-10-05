require('./libs/html2canvas-0.4.1/html2canvas.min.js');

console.log(html2canvas);

$(document).ready(function() {
  $("input[type=text], input[type=number]").focus(function() {
    $(this).select();
  });

  var $inputTitle = $('.input_title');
  var $inputTitleExtra = $('.input_title_extra');

  $inputTitle.attr('maxlength', 7).attr('placeholder', '可以輸入七個字');
  $inputTitleExtra.attr('maxlength', 9).attr('placeholder', '這邊可以輸入九個字');

  // 統一標題
  $('#section_title_inject').ready(() => {
    $(this).find('button').click((event) => {
      var title = $(this).find('.input_title').val();
      var titleExtra = $(this).find('.input_title_extra').val();

      $inputTitle.val(title);
      $inputTitleExtra.val(titleExtra);
    });
  })
});

const $ = require('jquery');
const app = require('./app');
const calculateContentWidth = require('./libs/calculateContentWidth');

window.addEventListener('load', () => {

  // ===========================================================================
  // = Vue
  // ===========================================================================

  // 掛載 vue app
  app.$mount('#app');

  // ===========================================================================
  // = 輸入框
  // ===========================================================================

  // 輸入框點擊後自動全選
  $("input[type=text], input[type=number]").focus(function() {
    $(this).select();
  });

  // 輸入框文字
  $('.input_title').attr('maxlength', 255).attr('placeholder', '可以輸入七個字');
  $('.input_title_extra').attr('maxlength', 255).attr('placeholder', '這邊可以輸入九個字');

  // ===========================================================================
  // = 驗證輸入框
  // ===========================================================================

  var validateInputTitle = function(element, maxContentWidth) {
    var contentWidth = calculateContentWidth(element.value, 20);
    element.setAttribute('data-over', (maxContentWidth < contentWidth));
  };

  var handleInputTitle = function(event) {
    validateInputTitle(event.target, 98);
  };
  $('.input_title').change(handleInputTitle).keyup(handleInputTitle);

  var handleInputTitleExtra = function(event) {
    validateInputTitle(event.target, 126);
  };
  $('.input_title_extra').change(handleInputTitleExtra).keyup(handleInputTitleExtra);
});

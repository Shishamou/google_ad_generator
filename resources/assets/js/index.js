const $ = require('jquery');
const makeApp = require('./app');
const calculateContentWidth = require('./libs/calculateContentWidth');

window.addEventListener('load', () => {

  // ===========================================================================
  // = Vue
  // ===========================================================================

  var pairs = location.search.slice(1).split('&');
  var result = {};
  pairs.forEach(function(pair) {
      pair = pair.split('=');
      result[pair[0]] = decodeURIComponent(pair[1] || '');
  });

  // 掛載 vue app
  var app = makeApp(result).$mount('#app');

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

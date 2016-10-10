const $ = require('jquery');
const app = require('./app');

window.addEventListener('load', () => {
  // 輸入框點擊後自動全選
  $("input[type=text], input[type=number]").focus(function() {
    $(this).select();
  });

  // 輸入框文字
  $('.input_title').attr('maxlength', 7).attr('placeholder', '可以輸入七個字');
  $('.input_title_extra').attr('maxlength', 9).attr('placeholder', '這邊可以輸入九個字');

  // 掛載 vue app
  app.$mount('#app');
});

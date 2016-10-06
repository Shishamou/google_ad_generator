require('./libs/html2canvas-0.4.1/html2canvas.min.js');
window.$ = window.jQuery = require('jquery');

$(document).ready(function() {
  $('.box').map(function() {

    // =========================================================================
    // = 替換圖片
    // =========================================================================
    // 將區塊內商品圖片替換為 input[name=image] 所指定 dataurl

    $(this).find('.pic img').map(function() {
      var imageUrl = $('input[name=image]').val();
      if (imageUrl) {
        $(this).attr('src', imageUrl);
      }
    });

    // =========================================================================
    // = 區塊轉換為圖片
    // =========================================================================
    // 將 .box 區塊透過 html2canvas 套件轉換為圖片

    if ( ! $('input[name=testing]').val()) {
      html2canvas(this, {
        onrendered: (canvas) => {
          var dataUrl = canvas.toDataURL('image/jpeg');
          var img = document.createElement('img');
          img.src = dataUrl;
          console.log(`轉換區塊: ${this.className}`);
          this.innerHTML = '';
          this.appendChild(img);
        }
      });
    }
  });
});

require('./libs/html2canvas-0.4.1/html2canvas.min.js');
window.$ = window.jQuery = require('jquery');

$(document).ready(function() {
  $('.box').map(function() {
    var imageUrl = $('input[name=image]').val();
    if (imageUrl) {
      $(this).find('img[src=image/default.gif]').attr('src', imageUrl);
    }

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

require('./libs/html2canvas-0.4.1/html2canvas.min.js');
window.$ = window.jQuery = require('jquery');
const makeDataURL = require('./libs/makeDataUrl.js');

$(document).ready(function() {
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
  // = 開發工具 > 顯示隱藏
  // ===========================================================================
  // checkbox 事件綁定

  $('[data-sync]').click(function() {
    var name = $(this).data('sync');
    var $this = $(this);
    $('[data-sync=' + name + ']').not(this)
      .prop('checked', $this.prop('checked'));
  });

  // ===========================================================================
  // = 開發工具 > 填入測試資料
  // ===========================================================================

  const title = '英國凱旋機車';
  const titleExtra = '恆久榮耀 品味不凡';

  const price = 638000;
  const sale = 458000;

  $buttonSeeds.click(function() {
    $sectionTitleInject.map(function() {
      var $this = $(this);
      $this.find('.input_title').val(title);
      $this.find('.input_title_extra').val(titleExtra);

      $this.find('button').click();
    });

    $('[name=price]').val(price);
    $('[name=sale]').val(sale);

    var seedImage = $(this).attr('data-image');
    var image = document.createElement('img');
    image.src = seedImage;
    image.addEventListener('load', function() {
      $inputImage.val(seedImage);
      handleImageUrl(image.src);
    });
  });

  // ===========================================================================
  // = 開發工具 > 轉換圖片
  // ===========================================================================

  $buttonDraw.click(function() {
    // 轉換 viewer 內有 data-block 屬性之區塊
    $getViewer('[data-block]').map(function() {
      html2canvas(this, {
        onrendered: (canvas) => {
          console.log(`轉換區塊: ${this.className}`);

          var img = document.createElement('img');
          img.src = canvas.toDataURL('image/jpeg');
          this.innerHTML = '';
          this.appendChild(img);

          $(this).removeAttr('data-block');
          $(this).attr('data-block-drawn', '');
        }
      });
    });
  });

  // ===========================================================================
  // = 圖片 URL > 上傳
  // ===========================================================================
  // 載入使用者本地端圖片並轉換為 DataURL (偽上傳)

  // 處理圖片網址
  var handleImageUrl = function(src, resize) {
    resize = resize || 300;
    $inputImageUrl.val(makeDataURL(src, resize, resize));
  };

  // 當使用者選擇檔案, 透過 FileReader 讀取檔案, 然後將檔案轉為 dataurl
  $inputFile.change(function() {
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
  // = 打包全部
  // ===========================================================================

  $buttonOutput.attr('disabled', true);
  $('form').submit(function() {
    $buttonOutput.attr('disabled', false);
  });

  $buttonOutput.click(function() {
    // 轉換為圖片
    $buttonDraw.click();

    // 取得 viewer 標題為檔案名稱
    var dowloadName = $getViewer('title').html();

    // 下載 viewer 有 data-block-drawn 屬性區塊內的圖片
    $getViewer('[data-block-drawn]').map(function() {
      var link = document.createElement('a');
      link.href = $(this).find('img').attr('src');
      link.download = dowloadName;
      link.dispatchEvent(new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
      }));
    });
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

  // 統一標題
  $sectionTitleInject.ready(function() {
    $(this).find('button').click((event) => {
      var title = $(this).find('.input_title').val();
      var titleExtra = $(this).find('.input_title_extra').val();

      $inputTitle.val(title);
      $inputTitleExtra.val(titleExtra);
    });
  });

  // ===========================================================================
  // = 表單送出後處理
  // ===========================================================================

  $form.submit(function() {
    var shouldAutoDraw = $inputAutodraw.is(':checked');
    var imageUrl = $inputImageUrl.val();

    $viewer.off('load');
    $viewer.load(function() {
      // 替換圖片
      $getViewer('img[data-image]').map(function() {
        this.src = imageUrl;
      });

      // 自動轉換圖片
      if (shouldAutoDraw) {
        setTimeout(function() {
          $buttonDraw.click();
        }, 100);
      }
    });
  });
});

require('../libs/html2canvas-0.4.1/html2canvas.min.js');
const $ = require('jquery');
const makeDataURL = require('../libs/makeDataUrl.js');

const seed = {
  title: '英國凱旋機車',
  titleExtra: '恆久榮耀 品味不凡',
  price: 638000,
  sale: 458000,
  image: 'image/seed.jpg',
};

export default {
  /**
   * 注入種子
   */
  doInjectSeed: function() {
    Object.assign(this, seed);

    this.inputUrl = seed.image;
    this._handleImage(seed.image);

    this.doSyncTitleText();
  },

  /**
   * 處理圖片
   */
  _handleImage: function(src, resize) {
    resize = resize || 300;

    var handleImage = () => {
      this.image = makeDataURL(src, resize, resize);
      if (0 === this.image.indexOf('data:image')) {
        this.disableForm = false;
        return;
      }

      setTimeout(handleImage, 200);
    };

    this.disableForm = true;
    handleImage();
  },

  /**
   * 將 block 轉換為 image
   */
  doDrawBlocks: function() {
    // 轉換 viewer 內有 data-block 屬性之區塊
    var elementList = this._getViewerContent().querySelectorAll('[data-block]');
    Array().forEach.call(elementList, (element) => {
      html2canvas(element, {
        onrendered: (canvas) => {
          console.log(`轉換區塊: ${element.className}`);

          var image = document.createElement('img');
          image.src = canvas.toDataURL('image/jpeg');

          element.innerHTML = '';
          element.appendChild(image);

          element.removeAttribute('data-block');
          element.setAttribute('data-block-drawn', '');
        }
      });
    });
  },

  /**
   * 取得 viewer body
   */
  _getViewerContent: function() {
    return this._getViewer().contentWindow.document;
  },

  /**
   * 取得 viewer
   */
  _getViewer: function() {
    return this.$el.querySelector('#viewer');
  },

  /**
   * 處理表單送出
   */
  handleSubmit: function() {
    this._getViewer().onload = (event) => {
      // 替換圖片
      var elementList = this._getViewerContent().querySelectorAll('img[data-image]');
      Array().forEach.call(elementList, (element) => {
        element.src = this.image;
      });

      // 自動轉換圖片
      if (this.shouldAutoDraw) {
        setTimeout(() => {
          this.doDrawBlocks();
        }, 100);
      }
    };
  },

  /**
   * 下載所有 block
   */
  doOutputBlocks: function() {
    this.doDrawBlocks();

    var viewer = this._getViewerContent();
    var dowloadName = viewer.title;

    // 下載 viewer 有 data-block-drawn 屬性區塊內的圖片
    var elementList = viewer.querySelectorAll('[data-block-drawn]');
    Array().forEach.call(elementList, (element) => {
      var link = document.createElement('a');
      link.href = element.querySelector('img').src;
      link.download = dowloadName;
      link.dispatchEvent(new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
      }));
    });
  },

  /**
   * 當使用者輸入網址時, 判斷並 Ajax 請求轉換為 dataurl
   */
  handleInputUrl: function(event) {
    var value = event.target.value;
    this.image = '';

    // 判斷網址
    if ( ! value.match(/^https?:\/\/.+/)) {
      return;
    }

    // Ajax 請求將遠端圖片轉換為 dataurl
    $.ajax({
      url: '/dataurl',
      method: 'POST',
      data: { getDataUrl: value }
    }).done((res) => {
      this.image = res;
      this.disableForm = false;
    }).fail((res) => {
      console.error('請求 dataurl 失敗: ' + res);
      this.disableForm = false;
    });
    
    this.disableForm = true;
  },

  /**
   * 載入使用者選取的檔案
   */
  handleInputFile: function(event) {
    var input = event.target;
    this.image = '';
    this.inputUrl = '';

    if ( ! input.files[0]) return;
    var file = input.files[0];

    if ( ! /image\/\w+/.test(file.type)) {
      console.error(`不支援檔案類型 ${file.type}`);
    }

    // 透過 FileReader 讀取檔案, 然後將檔案轉為 dataurl
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener('load', (event) => {
      var result = event.target.result;
      if (result) {
        this.inputUrl = file.name;
        this._handleImage(result);
      }
    });
  },

  /**
   *
   */
  doSyncTitleText: function() {
    var elementList = this.$el.querySelectorAll('.input_title');
    Array().forEach.call(elementList, (element) => {
      element.value = this.title;
    });

    var elementList = this.$el.querySelectorAll('.input_title_extra');
    Array().forEach.call(elementList, (element) => {
      element.value = this.titleExtra;
    });
  },
}

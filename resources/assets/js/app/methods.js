require('../libs/html2canvas-0.4.1/html2canvas.min.js');
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
   * 將 block 轉換為 image
   */
  doDrawBlocks: function() {
    console.log('draw');
  },

  /**
   *
   */
  doOutputBlocks: function() {
    console.log('output');
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
    }).fail((res) => {
      console.error('請求 dataurl 失敗: ' + res);
    });
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
    reader.addEventListener('load', (reader) => {
      this.inputUrl = file.name;
      this._handleImage(reader.result);
    });
  },

  /**
   *
   */
  doSyncTitleText: function() {
    var elementList = this.$el.querySelectorAll('.input_title');
    Object.keys(elementList).map((i) => {
      elementList[i].value = this.title;
    });

    var elementList = this.$el.querySelectorAll('.input_title_extra');
    Object.keys(elementList).map((i) => {
      elementList[i].value = this.titleExtra;
    });
  },

  /**
   * 載入圖片 resize 並轉換為 dataurl
   */
  _handleImage: function(src, resize) {
    resize = resize || 300;
    var image = document.createElement('image');
    image.src = src;
    image.addEventListener('load', () => {
      this.image = makeDataURL(src, resize, resize);
    });
  },
}

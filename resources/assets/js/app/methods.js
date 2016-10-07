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
    this._handleImage(seed.image);
    this.inputUrl = seed.image;
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
   *
   */
  handleInputUrl: function(event) {
    console.log('url');
    var value = event.target.value;
  },

  /**
   *
   */
  handleInputFile: function() {
    console.log('file');
  },

  /**
   *
   */
  doSyncTitleText: function() {
    $('.input_title').val(this.title);
    $('.input_title_extra').val(this.titleExtra);
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

window.$ = window.jQuery = require('jquery');

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
  handleInputUrl: function() {
    console.log('url');
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
}

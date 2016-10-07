const Vue = require('vue');
import methods from './methods';

const data = {
  showToolbar: false,
  shouldAutoDraw: true,
  inputUrl: '',
  image: '',
  price: '',
  sale: '',
};

module.exports = new Vue({ data, methods });

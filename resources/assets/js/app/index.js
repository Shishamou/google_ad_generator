const Vue = require('vue');
import methods from './methods';

const data = {
  disableForm: false,
  showToolbar: false,
  shouldAutoDraw: true,
  inputUrl: '',
  image: '',
  price: '',
  sale: '',
  title: '',
  titleExtra: '',
};

module.exports = new Vue({ data, methods });

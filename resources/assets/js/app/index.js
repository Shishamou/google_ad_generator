const Vue = require('vue');
import methods from './methods';

const initial = {
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

module.exports = (data) => {
  data = Object.assign(initial, data);
  return new Vue({ data, methods });
};

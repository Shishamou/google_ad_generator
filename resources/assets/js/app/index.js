const Vue = require('vue');
import methods from './methods';

const data = {
  showToolbar: false,
  imageName: '',
  imageUrl: '',
};

module.exports = new Vue({ data, methods });

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
  var mounted = function () {
    this.$refs.btnSyncTitleText.dispatchEvent(new CustomEvent('click'));
    this.$refs.inputTextUrl.dispatchEvent(new CustomEvent('change'));
    setTimeout(() => {
      this.$refs.btnSyncTitleText.dispatchEvent(new CustomEvent('click'));
    }, 300);
  };

  return new Vue({ data, methods, mounted });
};

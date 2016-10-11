/**
 *	計算文字寬度
 *	@author Shisha
 *	@date 2016-10-11
 */

const containerId = require('shortid').generate();

module.exports = function calculateContentWidth(text, fontSize) {
  var element = getContainerElement();

  element.innerText = text;
  if (fontSize) {
    element.style.fontSize = fontSize;
  }

  return element.clientWidth;
}

/**
 * 取得計算用容器元素
 */
function getContainerElement() {
  var element = document.querySelector(`#${containerId}`);
  if (element) {
    return element;
  }

  element = document.createElement('div');
  element.id = containerId;

  element.style.position = 'absolute';
  element.style.visibility = 'hidden';
  element.style.height = 'auto';
  element.style.width = 'auto';
  element.style.whiteSpace = 'nowrap';

  document.body.appendChild(element);
  return element;
}

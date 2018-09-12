const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const SelectView = function (container) {
  this.container = container;
};

SelectView.prototype.bindEvents = function () {
console.log('SelectView.bindEvents works')

};

module.exports = SelectView;

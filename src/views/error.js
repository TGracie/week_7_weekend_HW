const PubSub = require('../helpers/pub_sub.js');

const ErrorView = function (container) {
  this.container = container;
};

ErrorView.prototype.bindEvents = function () {
  PubSub.subscribe('FilmData:error', (evt) => {
    const err = evt.detail;
    this.render(err);
  });
};


ErrorView.prototype.render = function (err) {
  console.log(err);

  this.container.innerHTML = '';
  const errorMessage = document.createElement('p');
  errorMessage.textContent = 'Totoro is very sorry that it is not working just now!';
  this.container.appendChild(errorMessage);
};

module.exports = ErrorView;

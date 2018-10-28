const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (element) {
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
    PubSub.subscribe('FilmData:all-data-ready', (evt) => {
      const allFilms = evt.detail;
      this.populate(allFilms);
    });
    this.element.addEventListener('change', (evt) => {
      const selectedFilm = evt.target.value;

      PubSub.publish('SelectView:change', selectedFilm);
    });
};

SelectView.prototype.populate = function (allFilms) {
  const titles = allFilms.map(film => film.title);

  titles.forEach((title) => {
    const option = document.createElement('option');
    option.textContent = title;
    option.value = index;
    this.element.appendChild(option);
  });
};

module.exports = SelectView;

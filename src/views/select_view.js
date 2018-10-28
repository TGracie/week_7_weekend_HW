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
      console.log('SelectView', selectedFilm);

      PubSub.publish('SelectView:change', selectedFilm);
    });
};

SelectView.prototype.populate = function (allFilms) {
  // const titles = allFilms.map(film => film.title);

  allFilms.forEach((film) => {
    // console.log(film);
    const option = document.createElement('option');
    option.textContent = film.title;
    option.value = film.title;
    // console.log(option);
    this.element.appendChild(option);
  });
};

module.exports = SelectView;

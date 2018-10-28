const PubSub = require('../helpers/pub_sub.js');
const FilmView = require('./film.js');

const FilmList = function(container) {
  this.container = container;
};

FilmList.prototype.bindEvents = function () {
  PubSub.subscribe('FilmData:all-data-ready', (evt) => {
    this.films = event.detail;

    this.prepare();
  });
};

FilmList.prototype.prepare = function () {
  this.container.innerHTML = '';

  this.films.forEach((film) => {
    const filmView = new FilmView(this.container, film);
    // console.log(film);
    filmView.render();
  });

};

module.exports = FilmList;

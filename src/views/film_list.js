const PubSub = require('../helpers/pub_sub.js');
const FilmView = require('./film.js');
const DetailView = require('./detail_view.js');

const FilmList = function(container) {
  this.container = container;
};

FilmList.prototype.bindEvents = function () {
  PubSub.subscribe('FilmData:all-data-ready', (evt) => {
    this.films = event.detail;

    this.prepare();
  });
  PubSub.subscribe('SelectView:change', (event) => {
    const filmChoice = event.detail;
    console.log(filmChoice);
    this.createDetailView(filmChoice);
  });
};

FilmList.prototype.createDetailView = function (filmChoice) {
  // console.log('list view receive',filmChoice);
  const div = document.querySelector('#detail-view');
  const detailView = new DetailView (div, filmChoice);
  // console.log(detailView);
  detailView.create();
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

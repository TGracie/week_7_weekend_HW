const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const FilmData = function () {
  this.data = null;
};

FilmData.prototype.bindEvents = function () {
  this.getData()
  PubSub.subscribe('SelectView:change', (evt) => {
    const selectedFilm = evt.detail;
    this.publishFilmDetails(selectedFilm);
  });
};

FilmData.prototype.publishFilmDetails = function (selectedTitle) {
  const allFilms = this.data;

  const selectedFilm = allFilms.filter(film => film.title === selectedTitle);

  PubSub.publish('FilmData:selected-film-ready', selectedFilm)
};

FilmData.prototype.getData = function () {
  const url = 'https://ghibliapi.herokuapp.com/films';
  const req = new RequestHelper(url);
  req.get()
  .then((data) => {
    this.data = data
    PubSub.publish('FilmData:all-data-ready', data)
    // console.log(data);
  })
  .catch( (error) => {
    PubSub.publish('FilmData:error', error)
  });
};

module.exports = FilmData;

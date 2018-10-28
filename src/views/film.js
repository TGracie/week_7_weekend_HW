const PubSub = require('../helpers/pub_sub.js');

const FilmView = function(container, film) {
  this.filmContainer = container;
  this.film = film;
};

FilmView.prototype.render = function() {
  const filmDiv = document.createElement('div');
  filmDiv.classList.add('film');

  const filmHeader = this.createFilmHeader();
  filmDiv.appendChild(filmHeader);

  const infoList = this.createInfoList();
  filmDiv.appendChild(infoList);

  this.filmContainer.appendChild(filmDiv);
};

FilmView.prototype.createFilmHeader = function () {
  const header = document.createElement('h2');
    header.classList.add('film-title');
    header.textContent = this.film.title;
  return header
};

FilmView.prototype.createInfoList = function () {
  const list = document.createElement('ul');
  list.classList.add('info-list');

  const director = document.createElement('li');
  const releaseDate = document.createElement('li');
  const producer = document.createElement('li');

  director.textContent = `Director: ${this.film.director}`;
  releaseDate.textContent = `Year of Release: ${this.film.release_date}`;
  producer.textContent = `Producer: ${this.film.producer}`;

  list.appendChild(director);
  list.appendChild(releaseDate);
  list.appendChild(producer);

  return list
};

module.exports = FilmView;

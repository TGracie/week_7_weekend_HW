const PubSub = require('../helpers/pub_sub.js');

const DetailView = function (container, film){
  this.container = container;
  this.film = film;
};

DetailView.prototype.create = function () {
  const detailDiv = document.createElement('div');
  detailDiv.classList.add('film-info')
  // no need to create a div as it is only one film at a time in here
  // make a header
  const filmHead = this.createHead();
  detailDiv.appendChild(filmHead);

  // call list creator - pass list content
  const infoList = this.createInfoList();
  // console.log(infoList);
  detailDiv.appendChild(infoList);
};

DetailView.prototype.createHead = function () {
  const header = document.createElement('h2');
  header.classList.add('film-title')
  header.textContent = this.film.title;
  // console.log(this.film.title);
  // console.log("create head", header);
  return header;
};

DetailView.prototype.createInfoList = function () {
  const list = document.createElement('ul')
  list.classList.add('info-list');

  const director = document.createElement('li');
  const producer = document.createElement('li');
  const description = document.createElement('li');
  const year = document.createElement('li');

  director.textContent = `Director: ${this.film.director}`;
  producer.textContent = `Producer: ${this.film.producer}`;
  description.textContent = `Description: ${this.film.description}`;
  year.textContent = `Year: ${this.film.year}`;

  return list
};

module.exports = DetailView;

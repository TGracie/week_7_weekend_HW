const FilmData = require('./models/film_data.js');
const FilmList = require('./views/film_list.js');
const ErrorView = require('./views/error.js');
const SelectView = require('./views/select_view.js');
const DetailView = require('./views/detail_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  // List container and error View
  const filmContainer = document.querySelector('#film-list');
  const errorView = new ErrorView(filmContainer);
  errorView.bindEvents();

  // Film List
  const filmListView = new FilmList(filmContainer);
  filmListView.bindEvents();

  // //Detailed View (more information)
  const detCont = document.querySelector('#detail-view');
  const filmDetail = new DetailView(detCont);
  filmDetail.bindEvents();

  // Select view
  const dropDown = document.querySelector('select#film-dropdown');
  const filmSelect = new SelectView(dropDown);
  filmSelect.bindEvents();

  //Populate Dropdown and data in
  const filmData = new FilmData();
  filmData.bindEvents();
});

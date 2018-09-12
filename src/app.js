const Country = require('./models/countries.js');
const SelectView = require('./views/select_view.js');


document.addEventListener('DOMContentLoaded', () => {
  const selectView = new SelectView();
  selectView.bindEvents();

  const country = new Country();
  country.getData();
});

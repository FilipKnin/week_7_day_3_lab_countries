const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const SelectView = function (container) {
  this.container = container;
};

SelectView.prototype.bindEvents = function () {
  console.log('SelectView.bindEvents works');
  PubSub.subscribe('AllCountries:countries-loaded', (event) => {
    this.populate(event.detail);
    console.log('SelectView.bindEvents has event.detail:', event.detail)
  });

  this.container.addEventListener('change', (event) => {
    const selectedCountryIndex = event.target.value;
    PubSub.publish('Selectedcountry:index-loaded', selectedCountryIndex);
  });
};

SelectView.prototype.populate = function (allCountriesData) {
  console.log('SelectView.populate exists');
  allCountriesData.forEach((country, index) => {
    const option = document.createElement('option');
    option.textContent = country.name;
    option.value = index;
    this.container.appendChild(option);
  })
  // const arrayOfNames = allCountriesData.map(country => return country.name)//get an array of country names
  // console.log('SelectView.populate has arrayOfNames:', arrayOfNames);
};

module.exports = SelectView;

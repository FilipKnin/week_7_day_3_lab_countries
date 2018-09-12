const PubSub = require('../helpers/pub_sub.js');

const ResultView = function (container) {
  this.container = container;
};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Selectedcountry:object-loaded', (event) => {
    const countryObject = event.detail;
    this.publishRegion(countryObject);
    this.publishFlag(countryObject);
    this.publishLanguages(countryObject);


  });
};

ResultView.prototype.publishRegion = function (countryObject) {
  this.container.innerHTML = '';
  const newParagraph = document.createElement('p');
  newParagraph.textContent = `${countryObject.region}`
  //add textContent to createdParagraph
  this.container.appendChild(newParagraph);
};

ResultView.prototype.publishFlag = function (countryObject) {

  const newParagraph = document.createElement('p');
  this.container.appendChild(newParagraph);
  const newImage = document.createElement('img');
  newImage.src = `${countryObject.flag}`
  
  newParagraph.appendChild(newImage);
};

ResultView.prototype.publishLanguages = function (countryObject) {

  const newList = document.createElement('ol');
  this.container.appendChild(newList);

  const countryLanguages = countryObject.languages;

  for (language of countryLanguages) {
    let newElement = document.createElement('ul');
    newElement.textContent = `${language.name}`;
    newList.appendChild(newElement);
  }

  // countryObject.languages[i].name;



  // document.createElement('img');
  // newImage.src = `${countryObject.flag}`
  // //add textContent to createdParagraph
  // newParagraph.appendChild(newImage);
};

























// InstrumentFamilyView.prototype.render = function (family) {
//   this.container.innerHTML = '';
//
//   const familyName = this.createElement('h2', family.name);
//   this.container.appendChild(familyName);
//
//   const familyDescription = this.createElement('p', family.description);
//   this.container.appendChild(familyDescription);
//
//   const instrumentListTitle = this.createElement('h3', 'Instruments include:');
//   this.container.appendChild(instrumentListTitle);
//
//   const instrumentList = this.createInstrumentList(family.instruments);
//   this.container.appendChild(instrumentList);
// };
//
// InstrumentFamilyView.prototype.createElement = function (elementType, text) {
//   const element = document.createElement(elementType);
//   element.textContent = text;
//   return element;
// };

module.exports = ResultView;

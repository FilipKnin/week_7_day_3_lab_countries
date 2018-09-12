const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Country = function () {
this.text = null;
};

Country.prototype.getData = function () {
  const request = new Request('https://restcountries.eu/rest/v2/all');
  console.log('getData works');
  request.get((data) => {
    this.text = data;
    console.log('getData has data:', data);
    console.log('getData has this.text', this.text)
    PubSub.publish('AllCountries:countries-loaded', this.text);
  });

};



module.exports = Country;

const lookup = require('country-code-lookup');

function getCountryCode(country: string) {
  if (country === 'England') {
    return 'GB-ENG';
  }
  if (country === 'Scotland') {
    return 'GB-SCT';
  }
  return lookup.byCountry(country).iso2;
}

export default getCountryCode;

const lookup = require('country-code-lookup');

export function getCountryCode(country: string) {
  if (country === 'England') {
    return 'GB-ENG';
  }
  if (country === 'Scotland') {
    return 'GB-SCT';
  }
  return lookup.byCountry(country).iso2;
}

/**
 * Function that returns a random integer between min and max.
 */
export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive.
}

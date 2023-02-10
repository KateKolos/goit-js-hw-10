import { refs } from './refs';

export function clearCountryInfo() {
  refs.countryInfo.innerHTML = '';
}

export function clearCountryList() {
  refs.countryList.innerHTML = '';
}

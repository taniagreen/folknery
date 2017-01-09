import * as axios from 'axios';

const port = process.env.PORT || 8080;

export function getData(lang) {
  return axios.get(`http://localhost:${port}/api/${lang}`);
}

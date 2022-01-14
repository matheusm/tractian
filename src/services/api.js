import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://my-json-server.typicode.com/tractian/fake-api/'
});
/* eslint-disable prettier/prettier */
import axios from 'axios';

const apiManager = axios.create({
  baseURL: 'http://192.168.43.146:3000/api',
  responseType: 'json',
  withCredentials: true,
});

export default apiManager;

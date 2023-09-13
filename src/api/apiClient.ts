import axios from 'axios';

import { API_BASE_URL } from './apiConfig';

export const axiosFetch = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

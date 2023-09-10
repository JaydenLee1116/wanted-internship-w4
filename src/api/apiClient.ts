import axios from 'axios';

import { MOCK_API_BASE_URL } from './apiConfig';

export const axiosFetch = axios.create({
  baseURL: MOCK_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

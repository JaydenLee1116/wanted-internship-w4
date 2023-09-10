import { rest } from 'msw';
import { MOCK_API_BASE_URL } from '../api/apiConfig';
import data from './db';

export const handlers = [
  rest.get(MOCK_API_BASE_URL, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ data }));
  }),
];

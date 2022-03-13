import '@testing-library/jest-dom';

import dotenv from 'dotenv';
import { server } from 'mocks/server';

dotenv.config({ path: '.env.local' });

beforeEach(() => {
  // console.log("before each");
});

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

export {};

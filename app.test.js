const request = require('supertest');
const app = require('./server'); // Apunta a server.js en la misma carpeta

describe('GET /', () => {
  it('Debe responder con Status 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });
});
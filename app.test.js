const request = require('supertest');
const app = require('./app');

describe('API Hola Mundo', () => {
  test('GET / debe retornar pagina con Hola Mundo', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Hola Mundo');
  });

  test('GET /health debe retornar status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});

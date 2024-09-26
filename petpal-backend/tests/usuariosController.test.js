const request = require('supertest');
const app = require('../index');
const Usuario = require('../models/Usuario');

describe('Usuarios Controller', () => {
  beforeAll(async () => {
	await Usuario.sync({ force: true });
  });

  it('should register a new user', async () => {
	const res = await request(app)
	  .post('/api/usuarios/register')
	  .send({ email: 'test@example.com', password: 'password' });
	expect(res.statusCode).toEqual(201);
	expect(res.body).toHaveProperty('email', 'test@example.com');
  });

  it('should login an existing user', async () => {
	await request(app)
	  .post('/api/usuarios/register')
	  .send({ email: 'test@example.com', password: 'password' });
	const res = await request(app)
	  .post('/api/usuarios/login')
	  .send({ email: 'test@example.com', password: 'password' });
	expect(res.statusCode).toEqual(200);
	expect(res.body).toHaveProperty('token');
  });
});

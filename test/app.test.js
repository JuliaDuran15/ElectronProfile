const request = require('supertest');
const app = require('../app'); // Importe seu aplicativo Express aqui
const db = require('../database'); // Importe sua conexão com o banco de dados aqui

describe('Teste de conexão de rotas', () => {
  it('deve responder com um status 200 para a rota /', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });
});

describe('Teste de conexão com o Banco de Dados', () => {
  it('deve se conectar com sucesso ao banco de dados', async () => {
    const res = await db.query('SELECT 1+1 AS result');
    expect(res[0].result).toEqual(2);
  });
});

describe('Teste de autenticação', () => {
  it('não deve permitir o login com credenciais incorretas', async () => {
    const res = await request(app)
      .post('/login')
      .send({ username: 'usuario_incorreto', password: 'senha_incorreta' });
    expect(res.statusCode).toEqual(401);
  });

  it('deve permitir o login com credenciais corretas', async () => {
    const res = await request(app)
      .post('/login')
      .send({ username: 'enzo@g.com', password: '1234' });
    expect(res.statusCode).toEqual(200);
  });
});
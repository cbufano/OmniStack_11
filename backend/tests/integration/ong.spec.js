
const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')



describe('ONG', () =>  {

  beforeEach( async () => {
    await connection.migrate.rollback(); // Zera o banco de dados antes dos testes
    await connection.migrate.latest();

  });
  
afterAll(async () => {
   await connection.destroy();
});

  it('Should be able to create a new ONG' , async () => {
       const response = await request(app)
       .post('/ongs')
       .send({
        name: "APAD",
        email: "contato@apad.com.br",
        whatsapp: "47000000000",
        city:"Pelotas",
        uf: "PR"
       });

       expect(response.body).toHaveProperty('id');
       expect(response.body.id).toHaveLength(8);
       
       //console.log(response.body);
     });
});

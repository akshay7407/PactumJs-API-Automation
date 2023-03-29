import pkg from 'pactum';
const {spec} = pkg
it.only('should buy a product which is in stock', async () => {
    await spec()
      .post('http://localhost:3000/api/orders')
      .withJson({
        "name": "iPhone"
      })
      .expectStatus(200);
  });
  
 it('should not buy a product which is out-of-stock', async () => {
    await spec()
      .post('http://localhost:3000/api/orders')
      .withJson({
        "name": "Galaxy"
      })
      .expectStatus(400)
      .expectJson({
        "message": "product is out-of-stock"
      });
  });
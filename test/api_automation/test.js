
import pkg from 'pactum';
const { spec, request, stash } = pkg;
request.setBaseUrl('https://reqres.in');


it.only('should get a response with status code 200', async () => {
  await spec()
    .get('/api/users/1')
    .expectStatus(200);

});

it.only('should get first post', async () => {
  const response = await spec()
    .get('http://jsonplaceholder.typicode.com/posts/1')
    .expectStatus(200)
    .expectJsonLike({
      "userId": 1,
      "id": 1
    }).toss().then().catch()
  console.log("*************", response)

  it('should get random male users', async () => {
    await spec()
      .get('https://randomuser.me/api')
      .withQueryParams('gender', 'male');

  });
  it('should get random male users', async () => {
    await spec()
      .get('https://randomuser.me/api')
      .withQueryParams('gender', 'male')
      .expectStatus(200)
      .expectJsonLike({
        "results": [
          {
            "gender": "male"
          }
        ]
      });
  });
  it('should save a new user', async () => {
    await spec()
      .post('https://jsonplaceholder.typicode.com/users')
      .withHeaders('Authorization', 'Basic xxxx')
      .withJson({
        name: 'bolt',
        email: 'bolt@swift.run'
      })
      .expectStatus(200);
  });

});
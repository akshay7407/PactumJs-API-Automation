import pkg from 'pactum';
const { spec,request,stash} = pkg;

stash.addDataTemplate({
    'User': {
      "name": "morpheus",
      "job": "leader"
    }
  });
it.only('should get a response with status code 200', async () => {
await spec()
  .post('https://reqres.in/api/users')
  .withJson({
    '@DATA:TEMPLATE@': 'User',
  }).expectStatus(200).toss().then().catch();
})


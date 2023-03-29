import pkg from 'pactum';
import {test} from 'uvu';
const { spec,request,stash} = pkg;

describe("",async () => {
it('should get a response with status code 200', async () => {
await spec()
  .post('api/users')
  .withJson({
    '@DATA:TEMPLATE@': 'User',
  }).expectStatus(200).toss().then().catch();
})
it.only.each(
    [[1,'Leanne Graham'], [2,'Ervin Howell'], [3,'Clementine Bauch']]
)('User with ID %i has name %s', async (userId, expectedName) => {

    await pactum.spec()
        .get('http://jsonplaceholder.typicode.com/users/{user}')
        .withPathParams('user', userId)
        .expectJsonMatch('name', expectedName)
});
})

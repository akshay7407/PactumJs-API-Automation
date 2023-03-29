import pkg from 'pactum';
const { spec, request, stash, handler, moment, parse } = pkg;
import path from 'path';
// request.setBaseUrl('https://reqres.in');

const path1 = path.join(process.cwd(), "./data/")

stash.loadData(path1);

handler.addDataFuncHandler('GetTimeStamp', () => {
  return Date.now();
});
handler.addDataFuncHandler('GetAuthToken', () => {
  return 'Basic some-token';
});

handler.addDataFuncHandler('GetFormattedDate', (ctx) => {
  const fmt = ctx.args[0];
  return moment.format(fmt);
});

handler.addDataFuncHandler('GetSum', (ctx) => {
  const a = parseInt(ctx.args[0]);
  const b = parseInt(ctx.args[1]);
  const c = parseInt(ctx.args[2])
  return a + c;
});
it('should get a response with status code 200', async () => {
  await spec()
    .post('https://reqres.in/api/users')
    .withJson({
      '@DATA:TEMPLATE@': 'User',
      '@OVERRIDES@': {
        'job': 'member'
      }
    }).expectStatus(200);
})
it('should get a response with status code 200', async () => {
  await spec()
    .post('https://httpbin.org/anything')
    .withJson({
      '@DATA:TEMPLATE@': 'User',
      '@REMOVES@': ['job']
    });
})

it('should get a response with status code 200', async () => {
  await spec()
    .post('/api/order')
    .withHeaders('Authorization', '$F{GetAuthToken}')
    .withJson({
      'Item': 'Sword',
      'CreatedAt': '$F{GetTimeStamp}'
    });

})
it('should get a response with status code 200', async () => {
  await spec()
    .post('/api/order')
    .withJson({
      'Item': 'Sword',
      'CreatedAt': '$F{GetFormattedDate:dddd}',
      'Qty': '$F{GetSum:5,10}'
    });
})

it.only('should get a response with status code 200', async () => {
  const address = parse({ '@DATA:TEMPLATE@': 'User1' });
  // prints { street: 'some street', pin: 100100 }
  console.log(address);

})
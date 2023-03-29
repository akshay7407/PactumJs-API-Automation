import pkg from 'pactum';
const {spec,request,stash} = pkg
import path from 'path';
const dataPath=path.join(process.cwd(), "./data/")
before(async() => {
  await setRequestDefaults();
  await setData();
});

async function setRequestDefaults() {
 request.setBaseUrl('https://reqres.in/');
 request.setDefaultTimeout(5000);
}

async function setData() {
  stash.loadData(dataPath);
}

describe("",async () => {
it('should get a response with status code 200', async () => {
await spec()
  .post('api/users')
  .withJson({
    '@DATA:TEMPLATE@': 'User',
  }).expectStatus(201).toss().then().catch();
})
})

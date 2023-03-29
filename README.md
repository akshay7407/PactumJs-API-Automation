# API-Testing-PactumJs

# Installation
# install pactum as a dev dependency
npm install --save-dev pactum

# install a test runner to run pactum tests

npm install --save-dev mocha

or you can simply use

npx pactum-init

----------

# Usage
pactum can be used for all levels of testing in a test pyramid. It can also act as an standalone mock server to generate contracts for contract testing.

# API Testing
Tests in pactum are clear and comprehensive. It uses numerous descriptive methods to build your requests and expectations.

# Simple Test Cases
Using Mocha
Running simple api test expectations.

const { spec } = require('pactum');

it('should be a teapot', async () => {
  await spec()
    .get('http://httpbin.org/status/418')
    .expectStatus(418);
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
# mocha is a test framework to execute test cases
mocha /path/to/test

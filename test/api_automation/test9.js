const pjr = require('pactum-json-reporter');
const { settings, reporter, spec } = require('pactum');

// global hook
before(() => {
  settings.setReporterAutoRun(false);
  reporter.add(pjr);
});

// global after block
after(async () => {
  await reporter.end();
});

describe('should have a user with name bolt', () => {

  before(() => {
    this.spec = spec();
  });

  it('given a user is requested', () => {
    this.spec.get('http://localhost:9393/api/users');
  });

  it('should return a response', async () => {
    await this.spec.toss();
  });

  it('should return a status 200', () => {
    this.spec.response().to.have.status(200);
  });

  after(() => {
    this.spec.end();
  });

});

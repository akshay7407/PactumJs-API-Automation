import pkg from 'pactum';
const {path,request,stash} = pkg;

const dataPath=path.join(process.cwd(), "./data/")
before(() => {
  setRequestDefaults();
  setData();
});

function setRequestDefaults() {
  request.setBaseUrl('https://reqres.in/');
  request.setDefaultTimeout(5000);
}

function setData() {
  stash.loadData(dataPath);
}
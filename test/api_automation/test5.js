
import pkg from 'pactum';
const { stash,parse} = pkg
stash.addDataMap({
  'User': {
    'FirstName': 'Jon',
    'LastName': 'Snow',
    'Country': 'North'
  }
});
stash.addDataTemplate({
  'User': {
    "FirstName": "$M{User.FirstName}",
    "LastName": "$M{User.LastName}",
    "FullName": "$M{User.FirstName} $M{User.LastName}",
    "Age": 26,
    "Gender": "male",
    "House": "Castle Black"
  }
})
  
it.only('should get a response with status code 200', async () => {
    const address = parse({ '@DATA:TEMPLATE@': 'User' });
    // prints { street: 'some street', pin: 100100 }
    console.log(address); 
});
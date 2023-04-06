import pkg from 'pactum';
import { expect } from 'expect-webdriverio'
const { spec, request, stash, handler, moment, parse } = pkg;

request.setBaseUrl("https://reqres.in")

describe('Get the list of Data', async () => {
    it('Get the list', async () => {
        let response = await spec().get("/api/users?page=2").expectStatus(200).returns('data')
        //Print data using  forEach loop
        response.forEach(async element => {
            console.log("{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{" + JSON.stringify(element))

        });
        //Print data using  normal for loop
        // for (let i = 0; i < response.length; i++) {
        //     const element = response[i];
        //     console.log("******************this is my " + i + " ele data*****" + JSON.stringify(element))

        // }

        // Print data using  for in loop

        // for (let ele in response) {
        //     console.log("******************this is my  ele data*****" + JSON.stringify(response[ele]))
        // }
        // Print data using for of loop 
        // for (let eleme of response) {
        //     console.log("******************this is my  ele data*****" + JSON.stringify(eleme))
        // }
    });
});
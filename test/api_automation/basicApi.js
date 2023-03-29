import pkg from 'pactum';
import { expect } from 'expect-webdriverio'
const { spec, request, stash, handler, moment, parse } = pkg;
import path from 'path';
request.setBaseUrl('https://rahulshettyacademy.com/');
request.setDefaultHeaders("Content-Type", "application/json")




const path1 = path.join(process.cwd(), "./data/")
stash.loadData(path1)
var placeid
describe('Practise of API', async () => {
    it('Add a new POST request and validate response  ', async () => {
        const id = await spec().post('maps/api/place/add/json').withQueryParams('key', "qaclick").withHeaders("server", "Apache/2.4.41 (Ubuntu)")
            .withJson({ "@DATA:TEMPLATE@": "AddPlace", "@REMOVES@": ["types"] }).expectBodyContains("OK").expectStatus(200).inspect().returns("place_id").returns('status')
        placeid = id[0];
        console.log("******************Place_Id" + placeid)
        console.log("******************Status" + id[1])
        expect(id[1]).toEqual('OK')
    });

    it('Update the address and validate resposnse ', async () => {

        const msg = await spec().withQueryParams('key', "qaclick")
            .put('maps/api/place/update/json').withJson({
                "@DATA:TEMPLATE@": "updateAdd",
                "@OVERRIDES@": {
                    "place_id": placeid,
                }
            }).returns('msg')
        expect(msg).toEqual('Address successfully updated')

    });

    it('Get place API response ', async () => {
        const website = await spec().get("maps/api/place/get/json").withQueryParams('key', "qaclick123").withQueryParams('place_id', placeid)
            .expectStatus(200).inspect().returns('website')
        console.log("+++++++++++++++Website +++++++" + website)
    });
    it('It should print data template', async () => {
        const address = parse({ '@DATA:TEMPLATE@': 'AddPlace' });
        // prints { street: 'some street', pin: 100100 }
        console.log(address);

    })
});
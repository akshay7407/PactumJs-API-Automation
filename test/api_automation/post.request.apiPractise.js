import pkg from 'pactum';
const { spec, request, stash } = pkg;

request.setBaseUrl("https://reqres.in/");

describe('Create post API', async () => {

    it('Register user successful', async () => {

        await spec().post("api/register").withJson({
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        }).expectStatus(200).expectBodyContains("4")

    });

    it('Register user unsucceesful', async () => {
        await spec().post('api/register').withJson({ "email": "akshsyaya" }).expectStatus(400).
            expectBodyContains("Missing password").inspect()
    });

    it('user login successful', async () => {

        await spec().post('api/login').withJson({
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }).expectStatus(200)
    });

    it('Get all users', async () => {

        const apiResponse = await spec().get('https://dummyjson.com/products/category/smartphones').expectStatus(200).
            inspect().returns('products')

        console.log('*********************first id*****************' + JSON.stringify(apiResponse[0]))

    });

    it('Add user to list ', async () => {

        await spec().post('https://jsonplaceholder.typicode.com/posts').withJson({
            "userId": 10,
            "id": 101,
            "title": "Akshay Gaikwad",
            "body": "I am an software tester"
        }).expectStatus(201).inspect()

    });

});
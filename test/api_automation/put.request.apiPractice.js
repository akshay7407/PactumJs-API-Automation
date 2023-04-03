import pkg from 'pactum';
const { spec, request, stash } = pkg;

describe('PUT Http API requests', () => {
    it.only('should update title details', async () => {
        const updatedDetails = {
            "userId": 1,
            "id": 1,
            "title": "Software testing",
            "body": "Akshay Gaikwad is an software test engineer\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
        await spec()
            .put(`https://jsonplaceholder.typicode.com/posts/1`)
            .withJson(updatedDetails)
            .expectStatus(200)
            .expectJson(updatedDetails).inspect();
    });
});
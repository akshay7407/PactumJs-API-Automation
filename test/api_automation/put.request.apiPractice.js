import pkg from 'pactum';
const { spec, request, stash } = pkg;
import path from 'path';

//Load JSON template in the test case using stash.loaddata(path)
const path1 = path.join(process.cwd(), "./data/")
stash.loadData(path1)

describe('PUT Http API requests', () => {
    it('should update title details', async () => {
        const updatedDetails = {
            "userId": 1,
            "id": 1,
            "title": "Software testing",
            "body": "Akshay Gaikwad is an software test engineer\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
        await spec()
            .put(`https://jsonplaceholder.typicode.com/posts/1`)
            .withJson({ "@DATA:TEMPLATE@": "updateTitlePut" })
            .expectStatus(200)
            .expectJson(updatedDetails).expectHeader("content-type", "application/json; charset=utf-8",).inspect();
    });
});
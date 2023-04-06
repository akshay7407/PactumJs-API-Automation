import pkg from 'pactum';
const { spec, request, stash } = pkg;

it('should return all posts and first post should have comments', async () => {
    await spec()
        .get('http://jsonplaceholder.typicode.com/posts')
        .expectStatus(200)
        .stores('FirstPostId', '[0].id')
        .stores('SecondPostId', '[1].id')

    await spec()
        .get(`http://jsonplaceholder.typicode.com/posts/{id}/comments`)
        .withPathParams('id', '$S{SecondPostId}')
        .expectStatus(200).inspect();
});

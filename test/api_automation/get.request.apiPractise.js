import pkg from 'pactum';
const { spec, request, stash } = pkg;



describe('Get requests', () => {
    it('get particular user title ', async () => {

        let title = await spec().get('https://jsonplaceholder.typicode.com/posts').returns((ctx) => { return ctx.res.json[3].title });
        console.log('*************************User title is ====' + title)
    })

    it('get all users ', async () => {

        let data = await spec().get('https://jsonplaceholder.typicode.com/posts').returns((ctx) => { return ctx.res.body });
        console.log('*************************User title is ====' + JSON.stringify(data))
    })

    it.only('get all users title and users count  ', async () => {

        let titles = await spec().get('https://jsonplaceholder.typicode.com/posts').returns((ctx) => { return ctx.res.body });
        for (let eleme of titles) {
            console.log("******************this is my  tile*****" + JSON.stringify(eleme.title))
        }
        console.log("Number of users " + titles.length)
    })


});
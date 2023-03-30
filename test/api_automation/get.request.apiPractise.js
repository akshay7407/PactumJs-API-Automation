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

    it('get all users title and users count  ', async () => {

        let users = await spec().get('https://jsonplaceholder.typicode.com/posts').returns((ctx) => { return ctx.res.body });
        for (let eleme of users) {
            console.log("******************this is my  tile*****" + JSON.stringify(eleme.title))
        }
        console.log("Number of users " + users.length)

    })

    it('get all users id and get all sum count of ID ', async () => {
        let sumID = 0;
        let idCount = 0;
        let user = await spec().get('https://jsonplaceholder.typicode.com/posts').returns((ctx) => { return ctx.res.body });
        for (let eleme of user) {
            sumID += eleme.id
            idCount++
        }
        console.log("Sum of all ID *************************" + sumID)
        console.log("Count of ID *************************" + idCount)

    })


});
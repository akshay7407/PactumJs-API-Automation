import pkg from 'pactum';
const { spec, request, stash } = pkg;

/****************************JSON.stringify(object) = it converts all object data to json and you can print */

describe('Get HTTP API requests ', () => {
    it('Get particular user title ', async () => {

        let title = await spec().get('https://jsonplaceholder.typicode.com/posts').returns((ctx) => { return ctx.res.json[3].title });
        console.log('*************************User title is ====' + title)
    })

    it('Get all users ', async () => {

        let data = await spec().get('https://jsonplaceholder.typicode.com/posts').returns((ctx) => { return ctx.res.body });
        console.log('*************************User title is ====' + JSON.stringify(data))
    })

    it('Get all users title and users count  ', async () => {

        let users = await spec().get('https://jsonplaceholder.typicode.com/posts').returns((ctx) => { return ctx.res.body });
        for (let eleme of users) {
            console.log("******************this is my  tile*****" + eleme.title)
        }
        console.log("Number of users " + users.length)

    })

    it('Get all users id and get all sum count of ID ', async () => {
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

    it('Get all data and its email ID', async () => {

        const resposnse = await spec().get('https://jsonplaceholder.typicode.com/comments?postId=1').returns((ctx) => { return ctx.res.body })

        for (let ele in resposnse) {
            console.log("*********All Email Id ***********" + resposnse[ele].email)
        }
        console.log("********************" + typeof (resposnse))
        console.log("********************" + JSON.stringify(resposnse))

    });


});
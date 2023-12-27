const PORT = 8000
const express = require('express')
const {MongoClient} = require('mongodb')
const uri = 'mongodb+srv://srose0040:nmKWf7jOLfvnqKyv@cluster0.xhcg19f.mongodb.net/?retryWrites=true&w=majority'

const app = express() /* we can now use express methods ass "app" */


/* routing -- if we visit port 8000 call this function */
app.get('/', (req, res) => {
    res.json('hello to my app')
})

/* if we visit this resource send info to database */
app.post('/signup', (req, res) => {
    const client = new MongoClient(uri)

})

app.get('/users', async (req, res) => {
    const client = new MongoClient(uri)

    try {
        /* asyncronously connect to DB */
        await client.connect()
        /* Save the requested database in a var */
        const database = client.db('app-data')
        /* save users field of db in a var */
        const users = database.collection('users')

        const returnedUsers = await users.find().toArray()
        res.send(returnedUsers)
    }
    finally {
        await client.close()
    }
})

app.listen(PORT, () => console.log('Server running on PORT' + PORT))
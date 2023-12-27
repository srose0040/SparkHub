const PORT = 8000
const express = require('express')
const {MongoClient} = require('mongodb')
const uri = 'mongodb+srv://srose0040:nmKWf7jOLfvnqKyv@cluster0.xhcg19f.mongodb.net/?retryWrites=true&w=majority'
const {v4: uuidv4} = require('uuid')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const bcrypt = require("bcrypt");
/* const {uuidV4} = require("mongodb/src/utils"); might not be wanted */

const app = express() /* we can now use express methods as "app" */
app.use(cors())
app.use(express.json())


/* routing -- if we visit port 8000 call this function */
app.get('/', (req, res) => {
    res.json('hello to my app')
})

/* frontend will send info to this and this sends info to database */
app.post('/signup', async(req, res) => {
    const client = new MongoClient(uri)
    const {email, password} = req.body

    const generatedUserId = uuidv4()
    const hashedPassword = await bcrypt.hash(password, 10)

    try{
        await client.connect()
        const database = client.db('app-data')
        const users = database.collection('users')

        /* checking for existing users */
        const existingUser = await users.findOne({email})

        if (existingUser) {
            return res.status(409).send('User already exists. Please login')
        }
        /* if user is unique */

       const sanitizedEmail = email.toLowerCase()

       const data = {
           user_id: generatedUserId,
           email: sanitizedEmail,
           hashed_password: hashedPassword
        }
        const insertedUser = await users.insertOne(data)

        /* generating token for user which expires in 24 hrs*/
        const token = jwt.sign(insertedUser, sanitizedEmail, {
            expiresIn: 60 * 24,
        })

        res.status(201).json({
            token,
            userId: generatedUserId,
            email: sanitizedEmail})
        
    }
    catch (e) {
        console.log(e)
    }
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
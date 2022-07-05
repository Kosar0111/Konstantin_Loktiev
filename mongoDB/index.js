const { MongoClient } = require('mongoDB')

const client = new MongoClient('mongodb+srv://user:1234@cluster0.8z29aeg.mongodb.net/?retryWrites=true&w=majority')

const start = async () => {
    try {
        await client.connect()
        await client.db().createCollection('users')
        const users = client.db().collection('users')
        await users.insertOne({ name: "Jimy", age: 25 })
        const user = await users.findOne({ name: "Jimy" })
    } catch (e) {
        console.log(e)
    }
}

start()
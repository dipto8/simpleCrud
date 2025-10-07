const express = require('express');
const cors = require('cors');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 2000;

//middleware
app.use(express.json());
app.use(cors());




//
//

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tljeb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;




// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const userCollection = client.db('User_Management_DB').collection('Users');
        
        


        app.get('/users',async(req,res)=>{
            const cursor = userCollection.find();
            const result = await cursor.toArray();
            res.send(result);
            console.log(result)

        })

        app.post('/users', async (req, res) => {
            const user = req.body;
            const result = await userCollection.insertOne(user);
            res.send(result);
            console.log(result);



        })

        app.delete('/users/:id',async(req,res)=>{
            const id = req.params.id;
            const querry = {_id: new ObjectId(id)};
            const result = await userCollection.deleteOne(querry);
            res.send(result);
            console.log(result)
        })















        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);






























app.get('/', (req, res) => {
    res.send('app is running')
})

app.listen(PORT, () => {

    console.log(`app is running on ${PORT}`)

})

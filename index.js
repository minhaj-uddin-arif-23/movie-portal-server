require("dotenv").config();
const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");

const cors = require("cors");
const app = express();
const port = process.env.PORT || 5500;

// middleware start
app.use(cors());
app.use(express.json());
// middle end
// mongodb database connect and also operation here

const uri = `mongodb+srv://MoviePortal:lfT332UREnHY9VDB@cluster0.wclmi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
console.log(uri);
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Connect the client to the server	(optional starting in v4.7)
// await client.connect();
// Send a ping to confirm a successful connection
// await client.db("admin").command({ ping: 1 });

async function run() {
  try {
    // database create
    const movieCollection = client.db("movieDB").collection("movies");
    
      // data get to dataBase 
      app.get('/addmovie',async (req,res)=>{
        const cursor = movieCollection.find()
        const result = await cursor.toArray()
        res.send(result)
      })


    //data create complete

    app.post("/addmovie", async (req, res) => {
      const add_Movie = req.body;
      const result = await movieCollection.insertOne(add_Movie);
      console.log(result);
      res.send(result);
    });

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

// Ensures that the client will close when you finish/error
// await client.close();

// mongodb database connect and also operation here

// app.get('/',(req,res)=>{
//   res.send("Assalamualaikm,")
// })

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});

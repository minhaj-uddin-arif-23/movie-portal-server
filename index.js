require("dotenv").config();
const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const cors = require("cors");
const app = express();
const port = process.env.PORT || 5500;

// middleware start
app.use(cors());
app.use(express.json());
// middle end
// mongodb database connect and also operation here
// always environment variable variable can be small letter

const uri = `mongodb+srv://${process.env.db_user}:${process.env.UserPassword}@cluster0.wclmi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
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
    const favouriteMovieCollection = client.db("favouriteDB").collection("favouriteMovie")
    // add to favourite list in order to dataBase
      
    app.post('/favourite',async (req,res) => {
      const favourite_movie = req.body;
      const ans = await favouriteMovieCollection.insertOne(favourite_movie)
      console.log(ans)
      res.send(ans)
    })
    app.get('/favourite/:id',async(req,res)=>{
      const id = req.params.id;
      const query = {_id:new ObjectId(id)};
      const result = await favouriteMovieCollection.findOne(query)
      res.send(result)
    })

// add to favourite list in order to dataBase

//-------------------------------

    //data create complete

    app.post("/addmovie", async (req, res) => {
      const add_Movie = req.body;
      const result = await movieCollection.insertOne(add_Movie);
      console.log(result);
      res.send(result);
    });

    // data get to dataBase
    app.get("/addmovie", async (req, res) => {
      const {serchParams} = req.query;
      let option = {};
      if(serchParams){
        option = {title:{$regex:serchParams,$options:"i"}};
      }
      const cursor = movieCollection.find(option).limit(6);
      const result = await cursor.toArray();
      res.send(result);
    });

    // single data get by id
    app.get("/addmovie/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await movieCollection.findOne(query);
      res.send(result);
    });

    // update the movie
    app.patch("/addmovie/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      // const options = { upsert: true };
      const updatedMovie = req.body;
      const movie = {
        $set: {
          image: updatedMovie.image,
          title: updatedMovie.title,
          genre: updatedMovie.genre,
          duration: updatedMovie.duration,
          releaseYear: updatedMovie.releaseYear,
          rating: updatedMovie.rating,
          summary: updatedMovie.summary,
        },
      };
      const result = await movieCollection.updateOne(query, movie);
      res.send(result);
    });

    // delete a movie
    app.delete("/addmovie/:id", async (req, res) => {
      const singleMovie = req.params.id;
      const query = { _id: new ObjectId(singleMovie) };
      const result = await movieCollection.deleteOne(query);
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

require("dotenv").config();
const express = require("express");

const cors = require("cors");
const app = express();
const port = process.env.PORT || 5500;

app.get('/',(req,res)=>{
  res.send("Assalamualaikm,")
})

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});

const express=require("express");
const app=express();
const mongoose=require("mongoose") //mongooes is libary hence use required

const Listing = require('./models/listing');

const mongo_url="mongodb://127.0.0.1:27017/wanderlust"; //wandurlust is database name
main()
    .then(()=>{
        console.log("conected to DB")  // .then() write response when res come this send message when success fully connect to db
    })
    .catch((err)=>{
        console.log(err); // when any errorin main then resolve
    });

async function main(){
    await mongoose.connect(mongo_url) //connect to mongodb database using url coonect is ayncs function hence we use await
}    


app.get("./",(req,res)=>{//get is use to send request
    res.send("hi i am root") //send send response to server on local host 
    

})
app.get("/testListing", async (req, res) => {
  let sampleListing = new Listing({
    title: "My New Villa",
    description: "By the beach",
    price: 1200,
    location: "Calangute, Goa",
    country: "India",
  });

  await sampleListing.save();
  console.log("sample was saved");
  res.send("successful testing");
});
app.listen(8080,()=>{ //lestioning on port
    console.log("server is listening to port 8080")
})
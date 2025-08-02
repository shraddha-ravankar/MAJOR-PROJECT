const mongoose=require("mongoose")
const initdata=require("./data.js")
const Listing=require("../models/listing.js")

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

const initDB=async()=>{
    await Listing.deleteMany({})
    await Listing.insertMany(initdata.data)
    console.log("data was initlize")
}

initDB()  //call initdb function
const express=require("express");
const app=express();
const mongoose=require("mongoose")

const mongo_url="mongodb://127.0.0.1:27017/wanderlust";
main()
    .then(()=>{
        console.log("conected to DB")
    })
    // .catch(err)=>{
    //     console.log(err);
    // }

async function main(){
    await mongoose.connect(mongo_url)
}    


app.get("./",(req,res)=>{
    res.send("hi i am root")

})

app.listen(8080,()=>{
    console.log("server is listening to port 8080")
})
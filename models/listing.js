const mongoose = require('mongoose'); 



const Schema=mongoose.Schema;

const listingSchema=new Schema({
    tital:{
        type:String,
        required:true,},
    description:String,
    image:{
        type:String,
        set: (v) =>v===""?"default link":v,
    },
    price:Number,
    location:String,
    country:String


})

const Listing =mongoose.model("Listing",listingSchema);
module.export=Listing

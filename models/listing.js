const mongoose = require('mongoose'); 
const Schema=mongoose.Schema;

const listingSchema=new Schema({
   title: {
    type:String,
    required:true}
    ,
   description:String,
   image:{
    type:String,
    default:"https://unsplash.com/photos/the-sun-is-setting-over-a-mountain-lake-zOmGS_euezA",
    set:(v)=>v=="https://unsplash.com/photos/the-sun-is-setting-over-a-mountain-lake-zOmGS_euezA"?"default link":v,
   },

   price:Number,
   location:String,
   country:String


});

const Listing =mongoose.model("Listing",listingSchema);

module.exports=Listing;

import mongoose from "mongoose";
const {Schema} = mongoose

const subdivisionSchema = new Schema({
    name: String,
    address: String,
    
    city: String,
})

const subdivision = mongoose.model('Subdivision', subdivisionSchema)
module.exports = subdivision
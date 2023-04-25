import mongoose from "mongoose";
const {Schema} = mongoose

const locationSchema = new Schema({
    name: String,
    address: String,
    city: String,
    state: String,
    zip: String,
    phone: String,
    website: String,
    email: String,
})

const location = mongoose.model('Location', locationSchema)
module.exports = location
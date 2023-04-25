import mongoose from "mongoose";
const {Schema} = mongoose

const districtSchema = new Schema({
    name: String,
    address: String,
})

const district = mongoose.model('District', districtSchema)
module.exports = district
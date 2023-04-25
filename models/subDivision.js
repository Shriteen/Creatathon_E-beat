import mongoose from "mongoose";
const {Schema} = mongoose

const subdivisionSchema = new Schema({
    name: {type: String, required: true},
    district: {type: Schema.Types.ObjectId , ref: "District", required: true }
})

const subdivision = mongoose.model('Subdivision', subdivisionSchema)
module.exports = subdivision

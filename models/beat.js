import mongoose from "mongoose";
const {Schema} = mongoose

const beatSchema = new Schema({
    name: String,
    address: String,
    subdivision:{
        type: Schema.Types.ObjectId,
        ref: 'Subdivision'
    },
    city: String,
    state: String,
    zip: String,
    phone: String,
})

const beat = mongoose.model('Beat', beatSchema)
module.exports = beat
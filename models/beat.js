import mongoose from "mongoose";
const {Schema} = mongoose

const beatSchema = new Schema({
    name: {type: String, required: true},
    station:{
        type: Schema.Types.ObjectId,
        ref: 'Station',
	required: true
    },
    city: String,
    state: String,
    zip: String,
    phone: String,
})

const beat = mongoose.model('Beat', beatSchema)
module.exports = beat

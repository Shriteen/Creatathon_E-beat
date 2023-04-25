import mongoose from "mongoose";
const {Schema} = mongoose

const locationSchema = new Schema({
    name: {type: String, required: true },
    beat: {
        type: Schema.Types.ObjectId,
        ref: 'Beat',
	required: true
    },
    locationType: {type: String, required: true}
})

const location = mongoose.model('Location', locationSchema)
module.exports = location

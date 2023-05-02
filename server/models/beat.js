import mongoose from "mongoose";
const {Schema} = mongoose

const beatSchema = new Schema({
    name: {type: String, required: true}
})

const beat = mongoose.model('Beat', beatSchema)

export default beat

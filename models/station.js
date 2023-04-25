import mongoose from 'mongoose';
const {Schema} = mongoose

const stationSchema = new Schema({
    name: {type: String, required: true},
    subdivision:{
        type: Schema.Types.ObjectId,
        ref: 'Subdivision',
	required: true
    },
    city: String,
    phone: String,
})

const station = mongoose.model('Station', stationSchema)
module.exports = station

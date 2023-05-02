import mongoose from "mongoose";
const {Schema} = mongoose

const placesSchema = new Schema({
    districtName: {type: String, required: true},
    subdivisions: [ {
	subdivisionName: {type: String, required: true},
	stations: [ {
	    stationName: {type: String, required: true},
	    beats: [ { type: Schema.Types.ObjectId, ref: 'Beat' } ]
	    } ]
	} ]
} );

const places = mongoose.model('Places', placesSchema)

export default places

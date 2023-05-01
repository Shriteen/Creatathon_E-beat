import mongoose from "mongoose";
const {Schema} = mongoose;

const officerSchema = new Schema({
    name: {type: String, required: true},
    designation: {type: String, required: true},
    accessLevel: {
	type: String ,
	enum: ['District', 'Subdivision', 'Station', 'Beat'],
	required: true
    },
    accessPlaceName: {type: String, required: true},
    accessibleBeats: [{
	type: Schema.Types.ObjectId,
	ref: 'Beat',
	required: true
    }]
});
					     
const officer = mongoose.model('Officer', officerSchema);
export default officer;

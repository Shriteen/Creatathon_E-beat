import mongoose from "mongoose";
const {Schema} = mongoose;

const locationSchema = new Schema({
    name: {type: String, required: true },
    beat: {
        type: Schema.Types.ObjectId,
        ref: 'Beat',
	required: true
    },
    locationType: {type: String, required: true}
},{ strict: false });

const location = mongoose.model('Location', locationSchema);
export default location;

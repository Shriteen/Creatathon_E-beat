// 4.19. List of persons who can be useful for negotiation during kidnapping/hijacking
import mongoose from "mongoose";
const {Schema} = mongoose

const negotiationUsefulSchema = new Schema({
    name: {type: String, required: true },
    address: {type: String, required: true},
    phone: {type: String, required: true},
    dateOfMeeting:{
        type: Date,
        default: Date.now,
        required: true
    },
    remark:{
        type: String,
        required: true
    },
    areaUnder:{
        type: Schema.Types.ObjectId,
        ref: 'Beat',
    }
})

const negotiationUseful = mongoose.model('NegotiationUseful', negotiationUsefulSchema)
module.exports = negotiationUseful
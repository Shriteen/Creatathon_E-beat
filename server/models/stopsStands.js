// 4.6 Particulars of Bus Stop, Taxi Stand

import mongoose from "mongoose";
const {Schema} = mongoose

const stopsStandsSchema = new Schema({
    name: {type: String, required: true },
    areaUnder:{
        type: Schema.Types.ObjectId,
        ref: 'Beat',
    }
})

const stopsStands = mongoose.model('StopsStands', stopsStandsSchema)
module.exports = stopsStands
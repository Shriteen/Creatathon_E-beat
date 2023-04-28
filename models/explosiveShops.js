// 4.7. List of shops licensed under Excise law, Explosive Act and Arm's Act
import mongoose from "mongoose";
const {Schema} = mongoose

const explosiveShopsSchema = new Schema({
    name: {type: String, required: true },
    location:{type: String, required: true},
    ownerName:{type: String, required: true},
    ownerContactNumber:{type: String, required: true},
    ownerAddress:{type: String, required: true},
    areaUnder:{
        type: Schema.Types.ObjectId,
        ref: 'Beat',
    }
})


const explosiveShops = mongoose.model('ExplosiveShops', explosiveShopsSchema)
module.exports = explosiveShops
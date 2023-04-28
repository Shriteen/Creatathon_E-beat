// 4.10. List of Closed Houses in the Beat
import mongoose from "mongoose";
const {Schema} = mongoose

const closedHouseSchema = new Schema({
    address:{type:String, required:true},
    ownerName:{type:String, required:true},
    closedSince:{type:Date, required:true},
    dateChecked:{type:Date, required:true},
    remark:{type:String, required:true},
    areaUnder:{
        type: Schema.Types.ObjectId,
        ref: 'Beat',
    }

})

const closedHouse = mongoose.model('ClosedHouse', closedHouseSchema)
module.exports = closedHouse
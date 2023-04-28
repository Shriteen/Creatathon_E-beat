// 4.11. House visit, Society visit, School visit, Panchayat Visit, Bank Visit, Old Age Home Visit and Public Meeting
import mongoose from "mongoose";
const {Schema} = mongoose;

const visitSchema = new Schema({
    dateOfVisit:{type:Date,required:true},
    address:{type:String,required:true},
    owner:{type:String,required:true},                      // Not sure
    designation:{type:String,required:true},
    noOfPersons:{type:Number,required:true},
    remark:{type:String},
    areaUnder:{
        type: Schema.Types.ObjectId,
        ref: 'Beat',
    }

});

const visit = mongoose.model('Visit', visitSchema)
module.exports = visit
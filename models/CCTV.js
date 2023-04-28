// 4.14 Location of CCTV Cameras installed in the Beat
import mongoose from "mongoose";
const {Schema} = mongoose

const cctvSchema = new Schema({
    name: {type: String, required: true },
    noOfCamerasInstalled:{type:Number, required: true},
    noOfCamerasFunctioning:{type:Number, required: true},
    dateOfChecking:{type:Date, required: true},
    ownerContactNumber:{type:String, required: true},
    technicianContactNumber:{type:String, required: true},
    remark:{type:String, required: true},
    areaUnder:{
        type: Schema.Types.ObjectId,
        ref: 'Beat',
    },

})

const cctv = mongoose.model('CCTV', cctvSchema)
module.exports = cctv
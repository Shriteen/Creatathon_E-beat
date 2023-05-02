// 4.3. Particulars of Schools,Colleges and Hostels
import mongoose from "mongoose";
const {Schema} = mongoose

const educationalInstitutesSchema = new Schema({
    name: {type: String, required: true },
    location:{type: String, required: true},
    principalName:{type: String, required: true},
    phoneNumber: {type: String, required: true},
    typeOf:{type:String,required:true},         // Whether it is boys,girls or both
    areaUnder:{
        type: Schema.Types.ObjectId,
        ref: 'Beat',
    }
})

const educationalInstitutes = mongoose.model('EducationalInstitutes', educationalInstitutesSchema)
module.exports = educationalInstitutes
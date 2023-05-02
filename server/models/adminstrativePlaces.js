// 4.12. Member of Legislative Assembly, Village Panchayat/ Municipality
import mongoose from "mongoose";
const {Schema} = mongoose;

const adminstrativePlacesSchema = new Schema({
    name:{type:String,required:true},
    address:{type:String,required:true},
    phoneNumber:{type:String,required:true},
    areaUnder:{
        type: Schema.Types.ObjectId,
        ref: 'Beat',
    }
});


const adminstrativePlaces = mongoose.model('AdminstrativePlaces', adminstrativePlacesSchema)
module.exports = adminstrativePlaces
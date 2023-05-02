// 4.12. List of Spa/Massage Parlours
import mongoose from "mongoose";
const {Schema} = mongoose;

const spaMassageParloursSchema = new Schema({
    name:{type:String,required:true},
    address:{type:String,required:true},
    phoneNumber:{type:String,required:true},
    areaUnder:{
        type: Schema.Types.ObjectId,
        ref: 'Beat',
    }
});

const spaMassageParlour = mongoose.model('SpaMassageParlour',spaMassageParloursSchema)
module.exports = spaMassageParlour

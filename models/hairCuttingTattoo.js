// 4.12 Hair Cutting Saloon and Tattoo Shop
import mongoose from "mongoose";
const {Schema} = mongoose;

const hairCuttingTattooSchema = new Schema({
    name:{type:String,required:true},
    address:{type:String,required:true},
    managerDetails:{                                    // Person who runs the shop
        type:JSON,
        required:true
    },
    permissionsAvailable:{type:Array},
    ownerDetails:{
        type:JSON,
        required:true
    },
    noOfPersonsWorking:{type:Number,required:true},
    tenantServantFormFilled:{type:Boolean,required:true},
    dateOfVisit:{type:Date,required:true},
    areaUnder:{
        type: Schema.Types.ObjectId,
        ref: 'Beat',
    }
})

const hairCuttingTattoo = mongoose.model('HairCuttingTattoo',hairCuttingTattooSchema)
module.exports = hairCuttingTattoo
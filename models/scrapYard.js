// 4.15. List of scrap yard in the beat and date of checking
import mongoose from "mongoose";
const {Schema} = mongoose

const scrapYardSchema = new Schema({
    name: {type: String, required: true },
    ownerName: {type: String, required: true},
    ownerPhoneNumber: {type: String, required: true},
    ownerAddress: {type: String, required: true},
    permissions:{
        type:Array
    },
    dateOfChecking:{type:Date, required: true},
    noOfPersonsWorking:{type:Number, required: true},
    detailsOfPersonWorking:{                                        // Is this correct?
        type:Array,
        required:true
    },
    tenantServantFilled:{type:Boolean, required: true},
    remark: {type:String, required: true},
    areaUnder:{
        type: Schema.Types.ObjectId,
        ref: 'Beat',
    },
})

const scrapYard = mongoose.model('ScrapYard', scrapYardSchema)
module.exports = scrapYard

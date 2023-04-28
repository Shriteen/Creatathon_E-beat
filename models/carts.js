// 4.13 List of Gadas/Movable Carts
import mongoose from "mongoose";
const {Schema} = mongoose

const cartsSchema = new Schema({
    name: {type: String, required: true },                  // Extra
    dateOfChecking: {type: Date, required: true},
    ownerName: {type: String, required: true},
    noOfPeopleWorking:{type:Number, required: true},        // Not sure of this
    staffDetails:{
        type:Array,
        required:true
    },
    tenantServantFormFilled:{type:Boolean, required: true},
    remark:{type:String, required: true},
    areaUnder:{
        type: Schema.Types.ObjectId,
        ref: 'Beat',
    },
})

const carts = mongoose.model('Carts', cartsSchema)
module.exports = carts
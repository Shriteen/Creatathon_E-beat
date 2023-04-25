import mongoose from 'mongoose';
const {Schema} = mongoose

const subSubDivisionSchema = new Schema({
    name: String,
    address: String,
    subdivision:{
        type: Schema.Types.ObjectId,
        ref: 'Subdivision'
    },
    city: String,
    phone: String,
})

const subSubDivision = mongoose.model('SubSubDivision', subSubDivisionSchema)
module.exports = subSubDivision
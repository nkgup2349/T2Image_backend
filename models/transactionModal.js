import mongoose from "mongoose";

//  userId , plan , amount , credits , date
const transactionschema = new mongoose.Schema({
    userId: {type: String, required: true},
    plan : {type: String, required: true,},
    amount: {type: Number, required: true},
    credits: {type: Number, required: true} , 
    payment: {type: Boolean, default : false} , 
    date : {type:Number }
})

const transactionmodal = mongoose.models.transaction || mongoose.model("transaction", transactionschema)

export default transactionmodal;
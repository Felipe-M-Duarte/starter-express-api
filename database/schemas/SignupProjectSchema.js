import mongoose from 'mongoose'

const SignupProject= new mongoose.Schema({
    projname: {
        type:String,
        required:true,
    },
    domain: {
        type:String,
    },
    customer: {
        type:String,
    },
    generaldiscount:{
        type:String,
    },
    discount: {
        type:String,
    },
    generalprice:{
        type:String,
    },
    price: {
        type:String,
    },
    startdate: {
        type: String,
    },
    linkonline: {
        type: String,
    },
    estimatedtime: {
        type:String,
    },
    functionalities: {
        type:String,
    },
    productservice: {
        type:String,
    },
    plataformmodule: {
        type:String,
    },
    objectives: {
        type:String,
    },
    projectid:{
        type:String,
    },
    criadoEm: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model("SignupProject", SignupProject);

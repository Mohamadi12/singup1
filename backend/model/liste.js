const mongoose=require('mongoose')

const listeSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    }
})

module.exports=mongoose.model('listeM',listeSchema)
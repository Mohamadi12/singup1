const mongoose=require('mongoose')


const conectDB=async ()=>{
    try {
        await mongoose.connect('mongodb+srv://moha1:03ewTWNcjLjT3ujP@cluster0.n06tzyl.mongodb.net/?retryWrites=true&w=majority')
        console.log('Successfull')
    } catch (error) {
        console.log(error.message)
    }
}

module.exports=conectDB
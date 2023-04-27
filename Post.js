import mongoose from "mongoose"

const Post = new mongoose.Schema({
    "email":{type:String, required:true},
    "password":{type:String, required:true},
    "name":{type:String, required:true},
    "birthday":{type:Date, required:true},
    "passportData":{type:String, required:true},
    "region":{type:String, required:true},
    "phone":{type:String, required:true},
    "tg":{type:String, required:true},
    "infoAboutUser":{type:String, required:true}
})

export default mongoose.model('Post',Post)
const mongoose = require('mongoose');

let msgSchema = new mongoose.Schema({
   
   email:String,
   nom: String,
   message: String,
   createdAt: Date
})

mongoose.model('msg', msgSchema);
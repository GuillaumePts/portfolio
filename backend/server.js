const express = require('express');
const app = express();
const mongoose = require('mongoose')
const  https = require('https');
const fs = require('fs');

const server = https.createServer({ 
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert') 
 }, app);

 const mdp = require('./env');

 try {
    // Connect to the MongoDB cluster
    mongoose.connect(
        mdp.mongoAtlasUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        () => console.log(" Mongoose is connected"),
    );
} catch (e) {
    console.log("could not connect");
}


require('./models/messages.model');
let Msg = mongoose.model('msg');

app.get('/', (req,res)=>{
    console.log('coucou');
})


 server.listen(9999, (req, res)=>{
    console.log("server ok ! : https://192.168.1.197:9999");
})
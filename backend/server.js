const express = require('express');
const app = express();
const mongoose = require('mongoose')
const  https = require('https');
const fs = require('fs');


//  mis en place server https 
const server = https.createServer({ 
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert') 
 }, app);


//  contient la phrase de connection à la bdd
 const mdp = require('./env');


//  connection cluster mongodb
 try {
    
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

//  Chargement du model pour mongodb
require('./models/messages.model');
let Msg = mongoose.model('msg');


// le BodyParser qui me permet de récupérer les valeurs d'url
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Permission CORS avec gestion de la requètes OPTIONS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// Récupération de Fetch POST
app.post('/', (req, res)=>{
    
    // On stock dans les variables les éléments de la requète
    let mail = req.body.mail
    let nom = req.body.lenom
    let msg = req.body.lemsg

    // On déclare les variables qui contiendront les valeurs une fois vérifié 
    let validNom = ''
    let validEmail= ''
    let validMsg = ''


    // On déclare la variable tabErr qui gère les erreurs, si la valeur est nul elle lance l'enregistrement en bdd
    let tabErr = []

    


        // On sécurise le mail
        if(mail === ''){

            tabErr.push(1)

        } else if(mail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){

        validEmail = mail 
        
        
    
        }else{
            tabErr.push(1)
        }



        // on securise le nom
        if(nom === ''){

            tabErr.push(1)

        }else if(nom.length > 30){
            tabErr.push(1)
        }else if(nom.match(/<\/?[^>]+(>|$)/g)){
        
            tabErr.push(1)

        }else if(nom.match(/^[a-zA-Z]+$/)){
            
            validNom = nom
            
        }else{
            tabErr.push(1)
        }


        // on securise le message
        if(msg === ''){

            tabErr.push(1)
        }else if(msg.length > 300){
            tabErr.push(1)
        }else if(msg.match(/<\/?[^>]+(>|$)/g)){
            tabErr.push(1)
        }else{
            validMsg = msg
        }


    


    // Si tabErr ne contient rien et si les variables de vérification contiennent bien leurs données vérifié
    // On lance l'enregistrement
    if(validEmail.length>1 && validNom.length>1 && validMsg.length>1 && tabErr.length === 0 ){
        
        // On verrifi si la personne à déja envoyé un message 
        Msg.findOne({
            email : validEmail
        },(err,exist) =>{
            
            // Si un message existe on renvoi une phrase d'avertissement
            if(exist ){
                res.send('Pour eviter tout spam l\'envoi de message via se formulaire est limité à un message par personne, hesitez pas à m\'envoyer un mail : guillaume.pitois.contact@proton.me')
                
            // Si existe pas alors on l'enregistre en bdd et on envoi une réponse positive 
            }else{
                let newMsg = new Msg()
                newMsg.email = validEmail;
                newMsg.nom = validNom;
                newMsg.message = validMsg;
                newMsg.createdAt = new Date()
                newMsg.save()

                res.send('Message envoyé ! je vous réponderez sur le mail que vous avez saisi. A bientot !')
            }
        })
    }else{
        res.send('Une erreur est survenu')
    }
    
})


 server.listen(9999, (req, res)=>{
    console.log("server ok ! : https://192.168.1.21:9999");
})
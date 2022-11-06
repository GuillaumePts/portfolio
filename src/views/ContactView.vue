<script setup>



function security(){

    

    let mail = document.querySelector('#email').value
    let nom = document.querySelector('#nom').value
    let msg = document.querySelector('#msg').value

    let validNom = ''
    let validEmail= ''
    let validMsg = ''

    


        // On sécurise le mail
        if(mail === ''){

            document.querySelector('#errEmail').textContent='Veuillez renseigner ce champ'

        } else if(mail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){

        validEmail = mail 
        
        
    
        }else{
            document.querySelector('#errEmail').textContent='Veuillez renseigner une adress email valid'
        }



        // on securise le nom
        if(nom === ''){

        document.querySelector('#errNom').textContent='Veuillez renseigner ce champ'

        }else if(nom.length > 30){
            document.querySelector('#errNom').textContent='Nom non conforme (trop long)'
        }else if(nom.match(/<\/?[^>]+(>|$)/g)){
        
            document.querySelector('#errNom').textContent='Nom non conforme'

        }else if(nom.match(/^[a-zA-Z]+$/)){
            
            validNom = nom
            
        }else{
            document.querySelector('#errNom').textContent='Nom non conforme'
        }


        // on securise le message
        if(msg === ''){

            document.querySelector('#errMsg').textContent='Veuillez renseigner ce champ'
        }else if(msg.length > 300){
            document.querySelector('#errMsg').textContent='Message trop long, preferez m\'envoyer un mail'
        }else if(msg.match(/<\/?[^>]+(>|$)/g)){
            document.querySelector('#errMsg').textContent='Message non conforme'
        }else{
            validMsg = msg
        }






        if(validEmail.length>1 && validNom.length>1 && validMsg.length>1){
            send(validEmail,validNom,validMsg)
        }
            
        
}

    function send(email,nom,msg) {
        let n1 = email
        let n2 = nom
        let n3 = msg

        console.log(n3+'  '+n2+'  '+n1);

     

    }
</script>

<template>

    <div id="form">
        <h2>Contact</h2>

        <form action="#">
            <input type="email" name="email" id="email">
            <span id="errEmail"></span>
            <input type="text" name="nom" id="nom">
            <span id="errNom"></span>
            <textarea name="msg" id="msg"></textarea>
            <span id="errMsg"></span>
            <div @click="security()" id="send">Envoyer !</div>
        </form>
    </div>
</template>


<style scoped>
    h2 {
        font-size: 3rem;
    }

    #form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50px;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        
    }

    form input {
        border-radius: 54px;
        background: linear-gradient(145deg, #dadada, #ffffff);
        box-shadow: 7px 7px 8px #b6b6b6,
            -7px -7px 8px #ffffff;
        border: none;
        padding: 10px 20px;
        min-height: 50px;
        text-align: center;
        min-width: 280px;
        max-width: 500px;
        font-size: 1.2rem;

    }

    form span{
        color: rgb(133, 34, 34);
    }

    form #send{
        border-radius: 54px;
        background: linear-gradient(145deg, #dadada, #ffffff);
        box-shadow: 7px 7px 8px #b6b6b6,
            -7px -7px 8px #ffffff;
            padding: 10px 20px;
    }

    form textarea{
        border-radius: 20px;
        background: linear-gradient(145deg, #dadada, #ffffff);
        box-shadow: 7px 7px 8px #b6b6b6,
            -7px -7px 8px #ffffff;
        border: none;
        min-width: 280px;
        max-width: 500px;
        margin-top: 20px;
        padding: 10px 20px;
        min-height: 100px;
        font-size: 1.2rem;
    }

    
</style>
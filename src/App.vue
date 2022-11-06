<script setup>
  
  



  import {
    RouterLink,
    RouterView
  } from 'vue-router';

// Function qui me permet de swip la première page d'accueil pour afficher le site
  function swip(){
    const content = document.querySelector('#content1')
    content.style.transform= ' translateY(-2000px)'
    document.querySelector('#smoke').style.opacity='0'
    setTimeout(() => {
      document.querySelector('#smoke').style.display='none'
    }, 1000);
    
  }


  // la variable num va me permettre de changer le sens de la fleche du menu, elle prendra +1 à chaque clic
  // et changera le sens de la fleche quand num est un nombre impair soit un clic sur deux.
  // Voir function menu()
  let num = 0 


  // Function qui me permet d'afficher le menu et de le cacher en fonction de l'envie de l'utilisateur
  function menu(){


    const el = document.querySelector('#nav')
    const el2 = document.querySelector('nav')
    const menu = document.querySelector('#menu')
    el.classList.toggle('w0')
    el.classList.toggle('w320')
    el2.classList.toggle('displayFlex')
    el2.classList.toggle('displayNone')

    
    num++ 

    if(num % 2 === 0 ){
      menu.textContent='<'
    }else{
      menu.textContent='>'
    }
    

    

    

    

   
  }






</script>



<template>
  <div id="content1">
    <div id="header">
      <p>Pitois Guillaume</p>
      <button @click="swip()"  id="entrer">Entrer</button>
    </div>

    <figure>
      <img src="https://picsum.photos/200/300" alt="Photo du propriétaire du site ">
      <figcaption >Developper Web <br>Junior</figcaption>
      <div id="js"></div>
    </figure>
    
  </div>


  <div id="smoke"></div>
  <div id="content2">
    <header>
      <img alt="Visage de la personne" class="logo" src="https://picsum.photos/200/300" width="270" height="270" />




      

    </header>

   
  
    <main>
     

      <router-view />
     
  
      
  
      <div class="fixed">
        <div id="menu" @click="menu()"> {{'<'}} </div>
        <div id="nav" class="w0">
        
          <nav class="displayNone">
      <router-link style="margin-left: 12px; text-decoration: none;" to="/">Accueil</router-link> |
      <router-link style="text-decoration: none;" to="/skill">Skills</router-link> |
      <router-link style="text-decoration: none;" to="/sites">Projets</router-link> |
      <router-link style="text-decoration: none;" to="/contact">Contact</router-link>
     </nav>
      
      </div>
      </div>
     
       
    </main>


  </div>
</template>

<style scoped>



.displayNone{
 
  opacity: 0;
  transition: 0.1s ;
}

.displayFlex{

  opacity: 1;
  transition-delay: 0.3s;
  
}

.w0{
  width: 0px;
}

.w320{
  width: 320px
}



*{

  font-family: 'Caveat', cursive;
  color: #3e603d;
  font-weight: 900
}




#smoke{
  width: 100%;
  min-height: 100vh;
  position: absolute;
  opacity: 1;
  transition: 0.8s linear;
  background-color: #000000;
  z-index: 2;
}

#content1{
  background-color: #f2f2f2;
  width: 100%;
  min-height: 100vh;
  position: absolute;
  z-index: 3;
  display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 
 transition: 1s linear;
 
}

#header{
  width: 100%;
  color: #111;
 
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  font-size: 1.4rem;
  font-weight: 800;
  text-shadow: 1px 1px 2px #00000080;
}

#entrer{
  color: #333;
  padding: 8px 16px;
  border-radius: 3px;
  letter-spacing: 0.6px;
  border: none;
 

    border-radius: 54px;
background: linear-gradient(145deg, #dadada, #ffffff);
box-shadow:  7px 7px 8px #b6b6b6,
             -7px -7px 8px #ffffff;

}

#content1 figure{
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
}

#content1 figure img{
  position: relative;
  box-shadow: 0px 0px 20px 0px #00000024;
  height: 540px;
  width: 80%;

  border-radius: 15px;
background: linear-gradient(145deg, #ffffff, #dadada);
box-shadow:  35px 35px 70px #616161,
             -30px -30px 70px #ffffff;
  
}

#content1 figure figcaption{
  position: absolute;
  font-size: 2.2rem;
  color: #fff;
  text-shadow: 0px 0px 8px black;
  
}


  #content2 {
    display: grid;
    width: 100%;
    
    min-height: 100vh;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      'header'
      'main';
    box-shadow: 0px 0px 20px 0px #000000;
    color: #3e603d;

  
  

  }

  header {
    display: flex;
    justify-content: center;
    align-items: center;
   
    width: 100%;
   
    
    font-size: 1.1rem;
    grid-area: 'header';
    position: relative;
    min-height: 170px;
    color: #000;
    background: linear-gradient(145deg, #dadada, #ffffff);
    box-shadow:  7px 7px 8px #b6b6b6,
             -7px -7px 8px #ffffff;
  }

  #identite {

    display: flex;
    justify-content: end;
    align-items: center;
  }

  header #identite ul {

    list-style: none;
    
    
  }

  #moi {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 50%;
    

  }

  #profession {

    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;

  }

  .logo {
    border-radius: 50%;
    position: absolute;
    z-index: 1;
   
    background: linear-gradient(145deg, #dadada, #ffffff);
box-shadow:  7px 7px 8px #b6b6b6,
             -7px -7px 8px #ffffff;

  }


  main {
    position: relative;
    grid-area: 'main';
    background-color: #f2f2f2;
    box-shadow: inset 0px 0px 20px 2px #b7b7b7;
    display: flex;
    justify-content: center;
    align-items: center;
    

  }

  #js {
    width: 100px;
    height: 100px;
    background: url('./assets/img/js-logo.png') center/cover no-repeat;
    border-radius: 20px;
    position: absolute;
    margin-top: 110px;
    margin-left: 100px;
    transform: translateX(-1200px);
    animation: js 1s linear forwards;
    
    

  }

 

  @keyframes js{
    from{
      transform: translateX(-1200px) rotate(0deg);

    }
    to{
      transform: translateX(0) rotate(360deg);
    }
  }

  .fixed{
    position: fixed;
    right: 20px;
    bottom: 20px;
    display: flex;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    
    

  }

  #menu {
    height: 50px;
    width: 50px;
    background: linear-gradient(145deg, #dadada, #ffffff);
    box-shadow:  7px 7px 8px #b6b6b6,
    -7px -7px 8px #ffffff;
    border-radius: 50%;
    position: absolute;
    right: 0;
    font-weight: 900;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    transition: 0.2s linear;
  }

    #nav{
    
    
    transition: 0.4s linear;
    
    left: 0;
    font-size: 0.8rem;
    height: 40px;
    
   

    background: linear-gradient(145deg, #dadada, #ffffff);
    box-shadow:  7px 7px 8px #b6b6b6,
    -7px -7px 8px #ffffff;
    border-radius: 50px;
    
  }

  nav{
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;
    height: 40px;
    display: flex;
    transition: 0.2s linear;
  }

 
</style>
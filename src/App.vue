<script setup>
  import {
    RouterLink,
    RouterView
  } from 'vue-router'
  import Test from './components/Accueil.vue'


function swip(){
  const content = document.querySelector('#content1')
  content.style.transform= ' translateY(-2000px)'
  document.querySelector('#smoke').style.opacity="0"
  
}


</script>



<template>
  <div id="content1">
    <div id="header">
      <p>Pitois Guillaume</p>
      <button @click="swip()" id="entrer">Entrer</button>
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
      <img alt="Visage de la personne" class="logo" src="https://picsum.photos/200/300" width="240" height="240" />

      <div id="moi">

        <div id="identite">


          <ul>
            <li>
              <p>Pitois</p>
            </li>
            <li>
              <p>Guillaume</p>
            </li>
            <li>
              <p>21 ans</p>
            </li>
          </ul>

        </div>



        <div id="profession">
          <p>Developper junior</p>
          <div>Javascript </div>
        </div>

      </div>



      <!-- <nav>
        <RouterLink to="/">accueil</RouterLink>
       
      </nav> -->

    </header>

    <!-- 
  <RouterView /> -->
    <main>
     
      <!-- <div id="js"></div> -->
      <div id="menu">menu</div>
    </main>


  </div>
</template>

<style scoped>

*{
  /* font-family: 'Source Code Pro', monospace; */
  font-family: 'Caveat', cursive;
  
  font-weight: 900
}

@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@800&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@700&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Titan+One&display=swap');



@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,900;1,800&display=swap');


@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');

#smoke{
  width: 100%;
  height: 100vh;
  position: absolute;
  opacity: 1;
  transition: 0.8s linear;
  background-color: #000000;
  z-index: 2;
}

#content1{
  background-color: #f2f2f2;
  width: 100%;
  height: 100vh;
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
    /* display: none; */
    height: 100vh;
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
    justify-content: end;
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
    left: -36px;
    top: -36px;
    background: linear-gradient(145deg, #dadada, #ffffff);
box-shadow:  7px 7px 8px #b6b6b6,
             -7px -7px 8px #ffffff;

  }


  main {
    position: relative;
    grid-area: 'main';
    background-color: #f2f2f2;
    box-shadow: inset 0px 0px 20px 2px #b7b7b7;

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

  #menu {
    height: 50px;
    width: 50px;
    background: linear-gradient(145deg, #dadada, #ffffff);
box-shadow:  7px 7px 8px #b6b6b6,
             -7px -7px 8px #ffffff;
    border-radius: 50%;
    position: fixed;
    right: 20px;
    bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
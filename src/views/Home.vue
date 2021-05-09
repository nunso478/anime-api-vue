<template>
  <div class="home">
     <div class="container1">
      
      <div class="tema">
      <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1050"
      img-height="506"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >  
    <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1000"
            height="506"
            src="../assets/3732372.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../assets/anime.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
       <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../assets/anime2.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
        <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../assets/anime3.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
    </b-carousel>
    </div>
<!--   fim de bootstrap Carousel -->
  
    <div class="destaque">
           <h1 class="top">Em destaques</h1>
           <br>
        <br>
        <br>  
        </div>
       
        <div class="aka"> 
          <div class="row"> 
            <div class="col-6">
              
              <img src="../assets/thumb-1920-141083.jpg" alt="" class="d-block w-100" width="370" height="300">
            </div>
           
            <p class="col-6" style="font-size: 20px; color:black; margin-top: -30px;"><a href="#" class="nav-link" style=" color:black; font-size: 45px;" >akame ga kill</a>Tatsumi é um jovem guerreiro que acaba de ser enganado e roubado por uma linda mulher, mas sua má sorte parece ter acabado quando uma garota igualmente linda o convida para se hospedar em sua mansão. No entanto, um grupo de assassinos invade a mansão para eliminar a família da garota, e cabe ao rapaz proteger sua anfitriã da fria assassina chamada Akame. Mas neste mundo as coisas não são o que parecem...</p>
            </div>

          </div>
          <div class="JUJUTSU"> 
            <div class="row">
              <div class="col-6">
                 
              
                <img src="../assets/JUJUTSU KAISEN.jpg" alt=""  class="d-block w-100" width="350" height="456">
              </div>
               
              <p class="col-6" style="font-size: 20px; color:black;margin-top: -40px; "><a href="#" class="nav-link" style=" color:black; font-size: 45px;">JUJUTSU KAISEN</a>Sofrimento, arrependimento, 
                vergonha: os sentimentos negativos dos humanos tornam-se Maldições,
                 causando terríveis acidentes que podem levar até mesmo à morte.
                  E pra piorar, Maldições só podem ser exorcizadas por outras Maldições.
                   Certo dia, para salvar amigos que estavam sendo atacados por Maldições,
                    Yuji Itadori engole o dedo do Ryomen-Sukuna, absorvendo sua Maldição.
                     Ele então decide se matricular no Colégio Técnico de Feitiçaria de Tóquio,
                      uma organização que combate as Maldições... e assim começa a heróica lenda do garoto que tornou-se uma
                       Maldição para exorcizar uma Maldição.</p>
              </div>
            
            </div>
           
            <div class="Fairy"> 
              <div class="row">
                <div class="col-6">
                  
    
                  <img src="../assets/Fairy Tail.jpg" alt="" class="d-block w-100" width="350" height="456">
                </div>
                 
                <p class="col-6" style="font-size: 20px; color:black; margin-top: 150px;"> <a href="#" class="nav-link" style="color:black; font-size: 45px; margin-top: -185px;">Fairy Tail</a>Finalmente! O anime baseado no mangá de sucesso está de volta! Depois de um hiato de um ano, Fairy Tail está finalmente de volta, continuando de onde a primeira série parou. Seguindo as aventuras de Natsu Dragneel, 
                  Lucy Heartfilia e o resto de seus amigos, a série vai direto ao ápice dos Grandes Jogos Mágicos.</p>
                </div>
              
            </div>
            <div class="Rising"> 
              <div class="row">
                <div class="col-6">
                  
    
                  <img src="../assets/rising.jpg" alt=""  class="d-block w-100" width="350" height="456">
                </div>
                 
                <p class="col-6" style="font-size: 20px; color:black; margin-top: -30px;" > <a href="#" class="nav-link" style=" color:black; font-size: 45px;">The Rising of the Shield Hero</a>Iwatani Naofumi, um otaku como qualquer outro,
                   encontra um livro numa biblioteca que o transporta para outro mundo. Ele recebe a missão de se tornar o Herói do Escudo,
                    um dos Quatro Heróis Cardinais que enfrentará as Ondas de Catástrofe ao lado dos Heróis da Espada, Lança e Arco. 
                    Empolgado com as aventuras, Naofumi sai em missão com sua equipe. Contudo,
                     alguns poucos dias depois, ele é traído e perde todo o seu dinheiro, 
                     dignidade e respeito. Será que ele vai encontrar uma saída dessa situação desesperadora?</p>
                </div>
              
            </div>
     </div>
     
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios"
export default {
  data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  
}
</script>
<style scoped>
footer  .col-lg-12{
   background-color: rgb(121, 8, 8);
   padding: 80px;
     
}
.social-media{
   padding: 0 20px;
   color: white;
   text-decoration: none;
   font-size: 30px;    
}
footer{
   color:white;
    
}
.social-media a:hover{
   color:  white;
}
.ligacao{
    font-size: 25px;
    color: white;
}
.ligacao a:hover{
    color: aqua;
} 
.fundo {
      border: 5px outset transparent;
      background-color: white; 
      width: 20%;
      font:  arial;
    }
p{
      color: gray;
  }
.cor-principal{
    color:crimson;
}
h1{
    font-weight: 900;
    height: 36px;
    margin: 0;
    line-height: 0.8;
}
.home-food img{
    border-radius: 50%;
    max-width: 100%;
    height: auto;
    
}
.carousel-caption{
    color: black;
    top:0;
    padding: 60px 130px;
    height: 210px;
    
}
.container{
    background-color: black;
    padding: 10px;
     
   
}
.navbar-toggler{
    background-color: white;
}
.tema{
    
    width: 1050px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    margin-top: 50px;
    margin-left: 50px;
    
}
.nav-item{
    
    margin-right: 10px;
    height: 50px;  
     
     
}
.nav-item:hover{
    background-color: crimson;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;  
    box-shadow: 2px 2px 5px white;
}
.top{
    border-bottom-style: solid;
    border-bottom-color: black;
   
}
.container1{
    
    display: grid;
    grid-template-rows: repeat(1,1fr);
    grid-template-columns: 50% 2fr 1fr 1fr;
    grid-gap: 20px;
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    
    width: 1110px;
    margin: 0px auto;
    box-shadow: 5px 5px 25px aqua;
    background-color: whitesmoke;
}
 
.destaque{
    grid-row-start: 3;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 3;
    margin-left: 50px;
    margin-top: 90px;
}
.aka{
    grid-row-start: 3;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 3;
    margin-left: 50px;
    margin-bottom: 50px;
   
  
}
.JUJUTSU{
    grid-row-start: 4;
    grid-row-end: 4;
    grid-column-start: 1;
    grid-column-end: 3;
    margin-left: 50px;
    margin-bottom: 50px;
   
     
}
.Fairy{
    grid-row-start: 5;
    grid-row-end: 5;
    grid-column-start: 1;
    grid-column-end: 3;
    margin-left: 50px;
    margin-bottom: 50px;
   
}
.Rising{
    grid-row-start: 6;
    grid-row-end: 6;
    grid-column-start: 1;
    grid-column-end: 3;
    margin-left: 50px;
    margin-bottom: 50px;
    
}
.home{
    background-image: url("../assets/bd.jpg");
}
@media only screen and (max-width: 800px){
    .container1,.tema{
         width: 100%;
        display: block;
        overflow: hidden;
       
    }
     
    
}
</style>

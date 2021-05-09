<template>
<div>
  <HelloWorld/>
</div>
</template>
<script>
import axios from "axios"
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  components: {
    HelloWorld
  }
}
</script>

<style>

h1{
    font-weight: 900;
    height: 36px;
    margin: 0;
    line-height: 0.8;
}

 
.norte{
    display: flex;
    flex-direction: row;
    justify-content: center;   
}
.navbar-toggler{
    background-color: white;

}
#txtBusca{
    background-color: lightblue;
    padding-left:5px;
    font-style:italic;
    font-size:20px;
    border:none;
    height:32px;
    width:260px;
    border-top-left-radius: 9px;
    border-bottom-left-radius: 9px;
}
.botaopesquisa{
    padding: 15px;
    background-color: black;
    color: white;
    font-size: 0.7rem;
    border-top-right-radius: 20%;
    border-bottom-right-radius: 20%;
}
</style>
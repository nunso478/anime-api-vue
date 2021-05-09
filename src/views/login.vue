<template>
 <div class="fundo">
     <img src="../assets/fundo.jpg"   width="100%">
     <div class="loginbox">
          <img src="../assets/avatar.jpg" class="avatar">
          <h1>Login  Here </h1>
          <br>
          <form @submit.prevent="submit">
          <p>email: </p>
          <input type="email" value="Enter Username" v-model="email" >
          <p>Password: </p>
          <input type="password"   value="Enter Password" v-model="password">
          <button type="submit">Enviar</button>
      </form>
      </div>
 </div>
</template>

<script>
export default {
 data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
        submit(){
            axios.post(' ',{
                email:this.email,
                password: this.password,
                returnSecureToken:true

            })
                .then(
                    res => this.$store.commit('setUser',res.data)
                )
                .catch(
                    res => console.log(res)
                )
        }
    }
}
</script>

<style scoped>
.loginbox{
    width: 320px;
    height: 420px;
    background:#000;
    color:#fff;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%,-50%);
    box-sizing: border-box;
    padding: 70px 30px;
    margin-top: 100px;
    background-image: url("../assets/bd.jpg");
}
.avatar{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    top: -50px;
   left: calc(50% - 50px);
}
h1{
    margin: 0;
    padding: 0 0 20px;
    text-align: center;
    font-size: 22px;
    
}
.loginbox p{
    margin: 0;
    padding: 0;
    font-weight: bold;
}
.loginbox input{
    width: 100%;
    margin-bottom: 20px;

}
.loginbox input[type="email"], input[type="password"]
{
border: none;
border-bottom: 1px solid #fff;
background: transparent;
outline: none;
height: 40px;
color: #fff;
font-size: 16px;
}
.loginbox  button[type="submit"]
{
    border: none;
    outline: none;
    height: 40px;
    background: #fb2525;
    color: #fff;
    font-size: 18px;
    width: 250px;
    border-radius: 20px;
}
.loginbox  button[type="submit"]:hover
{
   cursor: pointer;
   background: #ffc107;
   color: #000; 
}
 
 
</style>
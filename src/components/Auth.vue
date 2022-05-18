<template>
<div class="gobackcontainer" @click="goHome()">
    <i class="pi pi-step-backward-alt"></i>
</div>
  <div class="card">
    <div>
      <form
        @submit.prevent="handleSubmit(!v$.invalid)"
        class="
          flex flex-column
          align-content-center
          justify-content-center
          bg-primary
          gap-2
          border-round-2xl
          md:w-4
          mx-auto
          p-5
          mt-5
          scalein
          shadow-3
        "
      >
      <input type="email" v-model="v$.email.$model" placeholder="email" required id="">
      <input type="password" v-model="v$.password.$model" placeholder="clave">
      <input type="submit" value="enviar">    
      </form>
    </div>
  </div>
</template>

<style lang="scss">
input[type="email"], input[type="password"]{
    position: relative;
    border: 2px solid #999;
    border-radius: 5px;
    display: block;
    font-size: 1em;
    line-height: 1.4;
    margin: 0;
    padding: 10px 25px 10px 12px;
    width: 100%;
    background: 0 0;
    background-color: transparent;
    text-align: left;
    color: inherit;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    outline: none;
    font-family: 'Poppins', Helvetica, sans-serif;
    box-shadow: 0px 10px 10px -8px rgb(0 0 0 / 10%);
    &::placeholder{
        color: white;
    }
}
.gobackcontainer{
    position: fixed;
    top: 1rem;
    left: 1rem;
    cursor: pointer;
    color: white;
    background: #222;
    padding: .7rem .5rem;    
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    i, svg{
        font-size: 1rem;
    }
}
</style>

<script setup>
import { useVuelidate } from "@vuelidate/core";
import { ref, reactive, onMounted } from "vue";
import { email, required } from "@vuelidate/validators";
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios';

const submitted = ref(false);
const router = useRouter()
const rules = {
  email: { required, email },
  password: { required },
};
const state = reactive({
  email: "",
  password: ""  
});

const v$ = useVuelidate(rules, state);
function goHome(){
    window.location.href = window.location.origin;
}
const handleSubmit = async (isFormValid) => {
  submitted.value = true;
  if (!isFormValid) {
    return;
  }
  const url = window.url;
  const data = {
      identifier : state.email,
      password: state.password
  } 
  console.log('🚀url >>',url);
  const res  = await axios.post(`${url}/api/auth/local`,data);
  console.log('🚀res >>',res);
  localStorage.setItem("aauth",res?.data?.jwt);
  localStorage.setItem("username",res?.data?.user?.username);
  goHome(); 
};

</script>
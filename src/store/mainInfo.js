import { defineStore } from 'pinia'
import axios from "axios"
import { ref } from 'vue'

export const useMainStore = defineStore("mainInfo", {
    state : () => ({
        mainInfo: []
    }),

    getters: {
        getMainInfo : (state) => state.mainInfo
    },

    actions:{
        async fetchInfo(){
            try {
                const url = window.url;
                const data = await axios.get(`${url}/api/cvs?populate=*`);          
                this.mainInfo = data.data?.data[0]?.attributes;                
            } catch (error) {
                console.log('🍍error pinia >>',error);
            }
        }
    }
})

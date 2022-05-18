import { ref, onMounted, onUnmounted } from "vue";
import axios from "axios";

const titleIconVisible = ref(false);
const conditionalFirstTitle = ref(false);
const inputContent = ref();
const updatedField = ref("initialized");
const inputRef = ref();

export function useEditField(isValid = false, key = "nombre") {

  onMounted(() => {
    console.log('inputRef.value.innerText 👀 >>',inputRef.value.innerText);
    setTimeout(() => {
        console.log('inputRef.value.innerText 😎 >>',inputRef.value.innerText);
        inputContent.value = inputRef.value.innerText;
    }, 1200);
  })
    
  function handleVisibleShowTitleIcon(flag = false, event) {   
    const className = event.target.className;
    console.log('🚀className >>',className);
    titleIconVisible.value = flag;
  }

  function handleIconEditClick(_event) {
    conditionalFirstTitle.value = !conditionalFirstTitle.value;
  }

  async function _update() {
    if (!isValid) return;
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("aauth")}` },
    };
    const url = window.url + "/api/cvs/1?populate=*";
  
    let data = {
      data: {
        [key]: inputContent.value,
      },
    };
    //"conocimientos,titulo"
    if (key.includes(",")){
        //['conocimientos','titulo']
        keyList = key.split(",");
        if (keyList.length === 2){
            const [firstKey,secondKey] = keyList;
            //{conocimientos:{titulo:'valor'}}
            data = { data: {[firstKey]: { [secondKey]: inputContent.value }} };
        } 
    }
    try {
      const res = await axios.put(url, data, config);
      if (res.data) {
        conditionalFirstTitle.value = false;
        updatedField.value = "success";
        return true;  
      }
    } catch (error) {
        updatedField.value = "failed";
    }
  }

  function cleanUp(state = "") {
    updatedField.value = state;
  }

  return {
    handleVisibleShowTitleIcon,
    handleIconEditClick,
    titleIconVisible,
    conditionalFirstTitle,
    _update,
    inputContent,
    cleanUp,
    updatedField,
    inputRef
  };
}

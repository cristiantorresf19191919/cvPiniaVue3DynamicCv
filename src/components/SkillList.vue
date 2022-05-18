<template>
  <CustomToast :updatedField="updatedField" @cleanUp="cleanUp" />
  <div
    :class="`${props.customClass} relative CONTAINER-main-field`"
    @mouseleave="handleVisibleShowTitleIcon(false, $event)"
    @mouseenter="handleVisibleShowTitleIcon(true, $event)"
  >
    <i
      v-if="titleIconVisible && props.isValid"
      class="pi pi-pencil edit-icon"
      @click="handleIconEditClick"
    />

      <div
        v-if="!conditionalFirstTitle"
        ref="inputRef"   
        :[attr]="attrValue"
        >
        <template v-if="skillList?.length>0">

         <li v-for="(item, index) in skillList" :key="index" class="fadeinleft">
             {{item}}
         </li>
        </template>
        
        </div
      >
      <div v-else>
        <input
          type="text"
          v-model="inputContent"
          class="common-input"
          v-if="!isTextArea"
          :placeholder="props.placeholder"
        />
        <textarea
          v-else
          name=""
          v-model="inputContent"
          class="common-textarea"
          :placeholder="props.placeholder"
          id=""
          cols="30"
          rows="10"
        />
        <button @click="_update()">Actualizar</button>
      </div>


    <slot></slot>
  </div>
</template>

<style lang="scss">
.common-textarea {
  color: white;
  background: #222;
  width: 100%;
  border-radius: 1rem;
  padding: 14px;
}
</style>

<script setup>
import CustomToast from "@/components/CustomToast.vue";
import { useEditField } from "@/composables/editField01";
import { computed, onMounted, ref, toRefs, watch } from "@vue/runtime-core";
import axios from "axios";

const props = defineProps([
  "isValid",
  "customClass",
  "componentTag",
  "customAttr",
  "placeholder",
  "fieldKey",
  "isTextArea",
  "defaultValue"
]);

const titleIconVisible = ref(false);
const conditionalFirstTitle = ref(false);
const inputContent = ref("xxx");
const updatedField = ref("initialized");
const inputRef = ref();

const { isValid } = toRefs(props);
const { defaultValue } = toRefs(props);

const key = props.fieldKey;
const attr = ref();
const attrValue = ref();
attr.value = Object.entries(props.customAttr)[0][0];
attrValue.value = Object.entries(props.customAttr)[0][1];

// const {
//   handleVisibleShowTitleIcon,
//   handleIconEditClick,
//   titleIconVisible,
//   conditionalFirstTitle,
//   _update,
//   inputContent,
//   updatedField,
//   cleanUp,
//   inputRef
// } = useEditField(isValid, key);

const skillList = ref()

onMounted(() => {
  const url = window.url;
  console.log('🚀url >>',url);
  setTimeout(() => {
    const conocimientos = String(window?.strapi?.conocimientos?.conocimientosLista);
    skillList.value = conocimientos.split(",");
    inputContent.value = conocimientos;
  }, 1200);
});

watch(inputContent, (newState,oldState) => {
    skillList.value = inputContent.value.split(",");
})



function handleVisibleShowTitleIcon(flag = false, event) {
  const className = event.target.className;
  console.log("🚀className >>", className);
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
  const url = window.url + "/api/cvs/1";

  let data = {
    data: {
      [key]: inputContent.value,
    },
  };
  //"conocimientos,titulo"
  if (key.includes(",")) {
    //['conocimientos','titulo']
    const keyList = key.split(",");
    if (keyList.length === 2) {
      const [firstKey, secondKey] = keyList;
      //{conocimientos:{titulo:'valor'}}
      data = { data: { [firstKey]: { ...window.strapi[firstKey] ,[secondKey]: inputContent.value } } };
      window.strapi[firstKey] = {...window.strapi[firstKey], [secondKey]: inputContent.value }

    }
  }
  try {
    const res = await axios.put(url, data, config);
    if (res.data) {
      conditionalFirstTitle.value = false;
      updatedField.value = "success";
      titleIconVisible.value = false;
      return true;
    }
  } catch (error) {
    updatedField.value = "failed";
  }
}

function cleanUp(state = "") {
  updatedField.value = state;
}
</script>
<template>
  <CustomToast :updatedField="updatedField" @cleanUp="cleanUp" />
  <div
    :class="`${props.customClass} relative CONTAINER-main-field w-full`"
    @mouseleave="handleVisibleShowTitleIcon(false, $event)"
    @mouseenter="handleVisibleShowTitleIcon(true, $event)"
  >
    <i
      v-if="titleIconVisible && props.isValid"
      class="pi pi-pencil edit-icon"
      style="fontsize: 1rem"
      @click="handleIconEditClick"
    />

    <component
      v-if="!isEditMode"
      ref="inputRef"
      @click="toggleEditMode"
      :class="`${props.childCss} ${isEditMode && 'border-primary border-1'} ${
        props.isValid && 'cursor-pointer'
      }`"
      :is="props.componentTag"
      :[attr]="attrValue"
      >
      <span v-if="!props.isLink">{{inputContent }}</span>
      <slot name="nestedEl" v-if="props.nestedElement" />        
    </component>
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
      <button class="w-full mt-1" @click="_update()">Actualizar</button>
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
.main-field-edit {
  cursor: pointer;
}
</style>

<script setup>
import CustomToast from "@/components/CustomToast.vue";
import { useEditField } from "@/composables/editField01";
import { onMounted, ref, toRefs } from "@vue/runtime-core";
import axios from "axios";

const props = defineProps([
  "isValid",
  "customClass",
  "componentTag",
  "customAttr",
  "placeholder",
  "fieldKey",
  "isTextArea",
  "defaultValue",
  "skillsList",
  "childCss",
  "nestedElement",
  "isLink"
]);

const titleIconVisible = ref(false);
const isEditMode = ref(false);
const inputContent = ref("");
const updatedField = ref("initialized");
const inputRef = ref("xxx");

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
//   isEditMode,
//   _update,
//   inputContent,
//   updatedField,
//   cleanUp,
//   inputRef
// } = useEditField(isValid, key);

onMounted(() => {
  console.log("inputRef.value.innerText 👀 >>", inputRef.value.innerText);

  setTimeout(() => {
    const innerText = inputRef.value.innerText;
    inputContent.value = inputRef.value.innerText;
    console.log('🚀Object.entries(props.customAttr) >>',Object.entries(props.customAttr));
    if (props.isLink) inputContent.value = attrValue.value;
  }, 1200);
});

function handleVisibleShowTitleIcon(flag = false, event) {
  //   if(true) return
  const className = event.target.className;
  titleIconVisible.value = flag;
}

function handleIconEditClick(_event) {
  isEditMode.value = !isEditMode.value;
}

function toggleEditMode() {
  if (props.isValid && localStorage.getItem("aauth")) {
    isEditMode.value = true;
  }
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
      data = {
        data: {
          [firstKey]: {
            ...window.strapi[firstKey],
            [secondKey]: inputContent.value,
          },
        },
      };
      window.strapi[firstKey] = {
        ...window.strapi[firstKey],
        [secondKey]: inputContent.value,
      };
    }
  }
  try {
    const res = await axios.put(url, data, config);
    if (res.data) {
      isEditMode.value = false;
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
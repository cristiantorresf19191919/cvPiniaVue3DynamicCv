<template>
  <div :class="imageFileSeleceted && `selected`">
    <FileUpload
      v-if="isValid"
      name="image"
      :showCancelButton="false"
      :showUploadButton="false"
      previewWidth="200"
      @select="onImageSelected"
      @remove="onImageRemoved"
      :maxFileSize="10000000"
      accept="image/*"
      @upload="onUpload"
      :auto="true"
      :url="`${url}/image`"
      :multiple="false"
    >
      <template #empty> 
        <img :src="imageFileSeleceted" id="profile-picturee" alt="" />
      </template>
    </FileUpload>
    <img v-else :src="imageFileSeleceted" id="profile-picture" alt="" />
  </div>
</template>

<style lang="scss">
  .selected{
    span.p-button.p-component.p-fileupload-choose{
      opacity: 0;
    }

  }
  span.p-button.p-component.p-fileupload-choose {
    z-index: 99;
    padding: 2rem;
    position: absolute;
    top: 8px;
    left: 14px;
    border-radius: 4rem;
    width: 11rem;
    height: 6rem;
    transition: all .5s ease-in-out;
    opacity: 1;
    background-color: #942bebe3;
    span{
      transform: translateY(-10px);
    }
  }
.p-fileupload .p-fileupload-content,
.p-fileupload-buttonbar {
  background: transparent !important;
}
.p-fileupload-filename {
  display: none;
}
.p-fileupload-row > div:nth-last-child(2) {
  display: none;
}
.p-fileupload-row {
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.p-fileupload-row > div {
    -webkit-box-flex: 1;
    flex: 1 1 auto;
    width: 100% !important;
}
.p-fileupload-row > div:last-child {
    text-align: center !important;
}
button.p-button.p-component.p-button-icon-only {
    width: 100%;
}
.p-fileupload .p-fileupload-content, .p-fileupload .p-fileupload-buttonbar {
    border: none !important;
}
</style>

<script setup>
import { onMounted, ref, toRefs } from "@vue/runtime-core";
import axios from "axios";
const props = defineProps(["isValid"]);

const { isValid } = toRefs(props);
const { defaultValue } = toRefs(props);
const imageFileSeleceted = ref();
const url = ref();

async function fetchImage(){
  const imageUrl = await axios.get(url.value+"/image");
  return imageUrl.data.imageUrl;
}

onMounted(async () => {
    url.value = window.location.href.includes("localhost")
    ? "http://localhost:3500"
    : "https://sendemailcv1919.herokuapp.com";
    imageFileSeleceted.value = await fetchImage()
});

const onImageSelected = (event, event2) => {
    if (!Array.isArray(event.files)) return;
  imageFileSeleceted.value = event.files[0];    
};

const onImageRemoved = (event) => {
  imageFileSeleceted.value = "";
};

const onUpload = (event) => {
  console.log('🚀 🔥 event >>',event.xhr.response);
  const response = JSON.parse(event.xhr.response);
  imageFileSeleceted.value = response.imageUrl;
  console.log('🚀response >>',response);
}
</script>
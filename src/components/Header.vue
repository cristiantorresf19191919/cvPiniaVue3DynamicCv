<template>
  <header id="site_header" class="header mobile-menu-hide">
    <div class="header-content">
      <div class="header-photo">
        <img src="img/sandy.png" id="profile-picture" alt="Sandra Farias" />
      </div>
      <div class="header-titles">
        <GenericField
          :isValid="isValid"
          customClass="subtitulo2"
          componentTag="h2"
          :customAttr="{ id: 'name-user' }"
          placeholder="Titulo Principal"
          fieldKey="nombre"
        />

        <GenericField
          :isValid="isValid"
          customClass="subtitulo2"
          componentTag="h4"
          :customAttr="{ id: 'subtitulo-2' }"
          placeholder="Subtitulo 2"
          fieldKey="subtitulo2"
        />
      </div>
    </div>

    <ul class="main-menu">
      <li class="active">
        <a href="#home" class="nav-anim">
          <span class="menu-icon lnr lnr-home"></span>
          <span class="link-text">Home</span>
        </a>
      </li>
      <li>
        <a href="#about-me" class="nav-anim">
          <span class="menu-icon lnr lnr-user"></span>
          <span class="link-text">About Me</span>
        </a>
      </li>
      <li>
        <a href="#resume" class="nav-anim">
          <span class="menu-icon lnr lnr-graduation-hat"></span>
          <span class="link-text">Résumen</span>
        </a>
      </li>
      <!-- <li>
            <a href="#portfolio" class="nav-anim">
              <span class="menu-icon lnr lnr-briefcase"></span>
              <span class="link-text">Portfolio</span>
            </a>
          </li>
          <li>
            <a href="#blog" class="nav-anim">
              <span class="menu-icon lnr lnr-book"></span>
              <span class="link-text">Blog</span>
            </a>
          </li> -->
      <li>
        <a href="#contact" class="nav-anim">
          <span class="menu-icon lnr lnr-envelope"></span>
          <span class="link-text">Contact</span>
        </a>
      </li>
    </ul>

    <div class="social-links">
      <ul>
        <li>
          <!-- <a :href="mainInfo?.Linkedin" target="_blank" id="linkedin-link"
            ><i class="fab fa-linkedin-in"></i
          ></a> -->
          <GenericField
            :isValid="isValid"
            v-if="mainInfo?.Linkedin"
            customClass=""
            componentTag="a"
            :customAttr="{ href: mainInfo?.Linkedin }"
            placeholder="Linkedin"         
            fieldKey="Linkedin"
            :nestedElement="true"
            :isLink="true"
          >
            <template #nestedEl>
              <i class="fab fa-linkedin-in"/>
            </template>
          </GenericField>
        </li>
      </ul>
    </div>

    <div class="header-buttons">
      <a href="#" id="download-file" target="_blank" class="btn btn-primary"
        >Descargar CV</a
      >
    </div>

    <div class="copyrights">© 2022 Todos los derechos reservados.</div>
  </header>
</template>

<script setup>
import GenericField from "@/components/GenericField.vue";
import { useMainStore } from "@/store/mainInfo";
import { ref, toRefs } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";
const props = defineProps(["isValid"]);
const { isValid } = toRefs(props);
const store = useMainStore();
const linkedin = ref();

const mainInfo = computed(() => store.mainInfo);

console.log("🍍 LINKEDIN >>", mainInfo?.Linkedin);

onMounted(() => {
  store.fetchInfo();
});
</script>

<style lang="scss">
</style>


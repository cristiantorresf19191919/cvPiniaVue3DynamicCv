<template>
  <body>
    <div v-if="isValid" class="hidden-auth-data">admin :{{ userName }}</div>

    <div class="hidden-auth" v-else @click="loginRedirect"></div>

    <!-- Animated Background -->
    <div
      class="lm-animated-bg"
      style="background-image: url(./img/main_bg.png); z-index: 0"
    ></div>
    <!-- /Animated Background -->

    <!-- Loading animation -->
    <div class="preloader">
      <div class="preloader-animation">
        <div class="preloader-spinner"></div>
      </div>
    </div>
    <!-- /Loading animation -->

    <div class="page">
      <div class="page-content">
        <Header :isValid="isValid" />
        <!-- Mobile Navigation -->
        <div class="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <!-- End Mobile Navigation -->

        <!-- Arrows Nav -->
        <div class="lmpixels-arrows-nav">
          <div class="lmpixels-arrow-right" style="cursor: pointer">
            <i class="lnr lnr-chevron-right"></i>
          </div>
          <div class="lmpixels-arrow-left" style="cursor: pointer">
            <i class="lnr lnr-chevron-left"></i>
          </div>
        </div>
        <!-- End Arrows Nav -->

        <div class="content-area">
          <div class="animated-sections">
            <HomeSubpage :isValid="isValid" />
      
            <AboutMe :isValid="isValid" />         
  
            <Resume :isValid="isValid" />         
 
            <!-- Portfolio Subpage -->
            <section data-id="portfolio" class="animated-section">
              <div class="section-content">
                <div class="page-title">
                  <h2>Portfolio</h2>
                </div>
              </div>
            </section>
            <!-- End of Portfolio Subpage -->

            <!-- Blog Subpage -->
            <section data-id="blog" class="animated-section">
              <div class="section-content">
                <div class="page-title">
                  <h2>Blog</h2>
                </div>
              </div>
            </section>
            <!-- End of Blog Subpage -->

            <Contact :isValid="isValid" />
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<style lang="scss">
@mixin commonLabelTop($cursor: pointer) {
  cursor: $cursor;
  background: #8f32f4;
  position: fixed;
  top: 0;
  left: 0;
  height: 2rem;
  width: 2rem;
}
.hidden-auth {
  @include commonLabelTop();
  z-index: 99999;
}
.hidden-auth-data {
  @include commonLabelTop($cursor: none);
  width: 5rem;
  z-index: 99999;

}
.edit-icon {
  position: absolute !important;
  top: 0;
  right: 0;
  font-size: 2.1rem;
  font-weight: 600;
  color: #5f48f4;
  background: #111;
  border-radius: 2rem;
  padding: 0.8rem;
  z-index: 99999999 !important;
  opacity: 0.8;
  cursor: pointer;
}
.common-input {
  width: 10rem;
  margin: 0 auto;
  display: block;
  color: white;
  &::placeholder {
    color: white;
  }
}
</style>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref, reactive, onMounted } from "vue";
import HomeSubpage from "@/components/HomeSubpage.vue";
import Header from "@/components/Header.vue";
import GenericField from "@/components/GenericField.vue";
import Acerca from "@/components/Acerca.vue";
import SkillList from "@/components/SkillList.vue";
import AboutMe from "@/components/sections/AboutMe.vue"
import Resume from "@/components/sections/Resume.vue"
import Contact from "@/components/sections/Contact.vue"

const router = useRouter();
const isValid = ref(false);
const userName = ref("");
const token = ref("");
const titleIconVisible = ref(false);

function checkValid() {
  const storageToken = localStorage.getItem("aauth");
  userName.value = localStorage.getItem("username");
  if (!storageToken) return false;
  return storageToken.length > 15 && typeof storageToken === "string";
}

onMounted(() => (isValid.value = checkValid()));

function loginRedirect() {
  router.push({ name: "auth" });
}

function showTitleBlockIcon() {
  if (isValid.value) titleIconVisible.value = true;
}
function hideTitleBlockIcon() {
  if (isValid.value) titleIconVisible.value = false;
}
function handleIconEditClick(e) {
  console.log("🚀e >>", e);
}
</script>
<template>
  <CustomToast :updatedField="updatedField" @cleanUp="cleanUp" />
  <section data-id="home" class="animated-section start-page">
    <div class="section-content vcentered">
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12">    
          <GenericField
            :isValid="isValid"
            customClass="title-block nombre"
            componentTag="h2"
            :customAttr="{ id: 'name-user-2' }"
            placeholder="Titulo Principal"
            fieldKey="nombre"
          >
            <div class="owl-carousel text-rotation">
              <div class="item">
                <div class="sp-subtitle" id="subtitulo">
                  Especialista en banca y Marketing
                </div>
              </div>
              <div class="item">
                <div class="sp-subtitle" id="subtitulo2">
                  Metodologías Agiles
                </div>
              </div>
            </div>
          </GenericField>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" >
</style>

<script setup>
import { useEditField } from "@/composables/editField01";
import CustomToast from "@/components/CustomToast.vue";
import { onMounted, ref, toRefs } from "@vue/runtime-core";
import GenericField from "@/components/GenericField.vue";

const props = defineProps(["isValid"]);

const { isValid } = toRefs(props);

// const {
//   handleVisibleShowTitleIcon,
//   handleIconEditClick,
//   titleIconVisible,
//   conditionalFirstTitle,
//   _update,
//   inputContent,
//   updatedField,
//   cleanUp
// } = useEditField(isValid, "nombre");
</script>
<template>
  <!-- Personal Information -->
  <div class="row">
    <div
      class="col-xs-12 col-sm-7 coolbar"
      style="overflow-y: scroll; height: 16rem"
    >
      <GenericField
        :isValid="isValid"
        customClass=""
        componentTag="p"
        :customAttr="{ id: 'acerca-desc' }"
        placeholder="Acerca de mi"
        :isTextArea="true"
        fieldKey="acerca,descripcion"     
      /> 
    </div>

    <div class="col-xs-12 col-sm-5">
      <div class="info-list">
        <ul>
          <li>
            <span class="title">Residencia</span>
            <GenericField
              :isValid="isValid"
              customClass="value inline"
              componentTag="span"
              :customAttr="{ id: 'acerca-lugar' }"
              placeholder="Residencia"
              :isTextArea="false"
              defaultValue="Residencia"
              fieldKey="acerca,residencia"
            >
            </GenericField>
          </li>

          <li>
            <span class="title">Dirección</span>
            <GenericField
              :isValid="isValid"
              customClass="value inline"
              componentTag="span"
              :customAttr="{ id: 'acerca-direccion' }"
              placeholder="direccion"
              :isTextArea="false"
              defaultValue="direccion"
              fieldKey="acerca,direccion"
            >
            </GenericField>
          </li>

          <li>
            <span class="title">e-mail</span>
            <GenericField
              :isValid="isValid"
              customClass="value inline"
              componentTag="span"
              :customAttr="{ id: 'acerca-email' }"
              placeholder="Email"
              :isTextArea="false"
              fieldKey="acerca,email"
            >
            </GenericField>
          </li>

          <li>
            <span class="title">Telefono</span>
            <GenericField
              :isValid="isValid"
              customClass="value inline"
              componentTag="span"
              :customAttr="{ id: 'acerca-telefono' }"
              placeholder="Telefono"
              :isTextArea="false"
              fieldKey="acerca,telefono"
            >
            </GenericField>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import GenericField from "@/components/GenericField.vue";
import { toRefs } from "@vue/reactivity";
const props = defineProps(["isValid"]);
const { isValid } = toRefs(props);
</script>

<style>
</style>
<template>
  <Toast /> 
</template>

<script setup>
import { toRefs } from "@vue/reactivity";
import { onMounted, watch } from "@vue/runtime-core";
import { useToast } from "primevue/usetoast";
const toast = useToast();
const props = defineProps(["updatedField"]);
const { updatedField } = toRefs(props);
const emit = defineEmits(["cleanUp"]);

function triggerToastMessage(flag) {
  if (flag === "success") {
    toast.add({
      severity: "success",
      summary: "Excelent",
      detail: "Actualizado",
      life: 3000,
    });
    emit("cleanUp", "mounted");
  } else if (flag === "failed") {
    toast.add({ severity: "error", summary: "Error", life: 3000 });
  } else {
    console.log('🚀"mounted" >>', "mounted");
  }
}

watch(updatedField, (brandNew, oldie) => triggerToastMessage(brandNew));


</script>
<style lang="scss">
</style>
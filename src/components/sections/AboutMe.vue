<template>
       <section data-id="about-me" class="animated-section">
              <div class="section-content">
                <div class="page-title">
                  <!-- <h2 id="acerca-titulo">About <span>Me</span></h2> -->
                  <GenericField
                    :isValid="isValid"
                    customClass=""
                    componentTag="h2"
                    :customAttr="{ id: 'acerca-titulo' }"
                    placeholder="acerca-titulo"
                    fieldKey="acerca,titulo"
                  />
                </div>

                <Acerca :isValid="isValid" />
                <!-- End of Personal Information -->

                <div class="white-space-50"></div>

                <!-- Services -->
                <div class="row">
                  <div class="col-xs-12 col-sm-12">
                    <div class="block-title">
                      <!-- <h3 id="tareas-titulo">What <span>I Do</span></h3> -->
                      <GenericField
                        :isValid="isValid"
                        customClass=""
                        componentTag="h3"
                        :customAttr="{ id: 'tareas-titulo' }"
                        placeholder="Titulo Tareas"
                        fieldKey="tareas,titulo"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-xs-12 col-sm-6">
                    <div class="col-inner">
                      <div class="info-list-w-icon">
                        <div class="info-block-w-icon">
                          <div class="ci-icon">
                            <i class="lnr lnr-store"></i>
                          </div>
                          <div class="ci-text">
                            <!-- <h4 id="tareas-titulo1">Ecommerce</h4> -->
                            <GenericField
                              :isValid="isValid"
                              customClass=""
                              componentTag="h4"
                              :customAttr="{ id: 'tareas-titulo1' }"
                              placeholder="Titulo Tareas"
                              fieldKey="tareas,titulo1"
                            />

                            <!-- <p id="tareas-desc1">
                              Pellentesque pellentesque, ipsum sit amet auctor
                              accumsan, odio tortor bibendum massa, sit amet
                              ultricies ex lectus scelerisque nibh. Ut non
                              sodales.
                            </p> -->
                            <GenericField
                              :isValid="isValid"
                              customClass=""
                              componentTag="p"
                              :customAttr="{ id: 'tareas-desc1' }"
                              placeholder="acerca-titulo"
                              fieldKey="tareas,desc1"
                            />
                          </div>
                        </div>
                        <div class="info-block-w-icon">
                          <div class="ci-icon">
                            <i class="lnr lnr-laptop-phone"></i>
                          </div>
                          <div class="ci-text">
                            <GenericField
                              :isValid="isValid"
                              customClass=""
                              componentTag="p"
                              :customAttr="{ id: 'tareas-titulo2' }"
                              placeholder="acerca-titulo"
                              fieldKey="tareas,titulo2"
                            />
                            <GenericField
                              :isValid="isValid"
                              customClass=""
                              componentTag="p"
                              :customAttr="{ id: 'tareas-desc2' }"
                              placeholder="Descripcion 2"
                              fieldKey="tareas,desc2"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-6">
                    <div class="col-inner">
                      <div class="info-list-w-icon">
                        <div class="info-block-w-icon">
                          <div class="ci-icon">
                            <i class="lnr lnr-pencil"></i>
                          </div>
                          <div class="ci-text">
                            <GenericField
                              :isValid="isValid"
                              customClass=""
                              componentTag="h4"
                              :customAttr="{ id: 'tareas-titulo3' }"
                              placeholder="titulo 3"
                              fieldKey="tareas,titulo3"
                            />
                            <GenericField
                              :isValid="isValid"
                              customClass=""
                              componentTag="p"
                              :customAttr="{ id: 'tareas-desc3' }"
                              placeholder="acerca-titulo"
                              fieldKey="tareas,dec3"
                            />
                          </div>
                        </div>
                        <div class="info-block-w-icon">
                          <div class="ci-icon">
                            <i class="lnr lnr-flag"></i>
                          </div>
                          <div class="ci-text">
                            <GenericField
                              :isValid="isValid"
                              customClass=""
                              componentTag="h4"
                              :customAttr="{ id: 'tareas-titulo4' }"
                              placeholder="acerca-titulo"
                              fieldKey="tareas,titulo4"
                            />
                            <GenericField
                              :isValid="isValid"
                              customClass=""
                              componentTag="p"
                              :customAttr="{ id: 'tareas-desc4' }"
                              placeholder="Tareas Desc4"
                              fieldKey="tareas,desc4"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End of Services -->

                <div class="white-space-30"></div>

                <div class="white-space-50"></div>

                <!-- Clients -->

                <!-- End of Clients -->

                <div class="white-space-50"></div>

                <div class="white-space-50"></div>
              </div>
            </section>
</template>

<style lang="scss">

</style>

<script setup>
import Acerca from "@/components/Acerca.vue";
import GenericField from "@/components/GenericField.vue";
import { toRefs } from "@vue/reactivity";
const props = defineProps(["isValid"]);
const { isValid } = toRefs(props);




</script>
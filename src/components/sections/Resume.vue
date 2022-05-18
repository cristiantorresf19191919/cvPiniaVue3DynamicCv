<template>
               <section data-id="resume" class="animated-section">
              <div class="section-content">
                <div class="page-title">
                  <h2>Résumen</h2>
                </div>

                <div class="row">
                  <div class="col-xs-12 col-sm-7">
                    <div class="block-title">
                      <h3>Educación</h3>
                    </div>

                    <div class="timeline timeline-second-style clearfix">
                      <div class="timeline-item clearfix">
                        <div class="left-part">
                          <GenericField
                            :isValid="isValid"
                            customClass="item-period inline margin-zero-child"
                            componentTag="h5"
                            :customAttr="{ id: 'educacion-year1' }"
                            placeholder="educacion-year1"
                            :isTextArea="false"
                            fieldKey="educacion,year1"
                          />
                          <GenericField
                            :isValid="isValid"
                            customClass="item-company inline"
                            componentTag="span"
                            :customAttr="{ id: 'educacion-lugar1' }"
                            placeholder="Acerca de mi"
                            :isTextArea="false"
                            fieldKey="educacion,lugar1"
                          />
                        </div>
                        <div class="divider"></div>
                        <div class="right-part">
                          <GenericField
                            :isValid="isValid"
                            customClass="item-title inline"
                            componentTag="h4"
                            :customAttr="{ id: 'educacion-titulo1' }"
                            placeholder="educacion-titulo1"
                            :isTextArea="false"
                            childCss="text-left"
                            fieldKey="educacion,titulo1"
                          />
                          <GenericField
                            :isValid="isValid"
                            customClass="inline"
                            componentTag="p"
                            :customAttr="{ id: 'educacion-desc1' }"
                            placeholder="ducacion-desc1"
                            :isTextArea="false"
                            childCss="text-left"
                            fieldKey="educacion,desc1"
                          />
                        </div>
                      </div>

                      <div class="timeline-item clearfix">
                        <div class="left-part">
                          <!-- <h5 class="item-period" id="educacion-year2">2007</h5> -->
                          <GenericField
                            :isValid="isValid"
                            customClass="item-period inline margin-zero-child"
                            componentTag="h5"
                            :customAttr="{ id: 'educacion-year2' }"
                            placeholder="Educacion año 2"
                            :isTextArea="false"
                            fieldKey="educacion,year2"
                          />
                          <!-- <span class="item-company" id="educacion-lugar2">University of Studies</span> -->
                          <GenericField
                            :isValid="isValid"
                            customClass="item-company inline"
                            componentTag="span"
                            :customAttr="{ id: 'educacion-lugar2' }"
                            placeholder="educacion-lugar2"
                            :isTextArea="false"
                            fieldKey="educacion,lugar2"
                          />
                        </div>
                        <div class="divider"></div>
                        <div class="right-part">
                          <!-- <h4 class="item-title" id="educacion-titulo2">Graphic Design</h4> -->
                          <GenericField
                            :isValid="isValid"
                            customClass="item-title inline margin-zero-child"
                            componentTag="h4"
                            :customAttr="{ id: 'educacion-titulo2' }"
                            placeholder="Educacion Titulo 2"
                            :isTextArea="false"
                            childCss="text-left"
                            fieldKey="educacion,titulo2"
                          />
                          <!-- <p id="educacion-desc2">
                            Aliquam tincidunt malesuada tortor vitae iaculis. In
                            eu turpis iaculis, feugiat risus quis, aliquet urna.
                            Quisque fringilla mollis risus, eu pulvinar dolor.
                          </p> -->
                          <GenericField
                            :isValid="isValid"
                            customClass="item-title inline margin-zero-child"
                            componentTag="p"
                            :customAttr="{ id: 'educacion-desc2' }"
                            placeholder="Educacion Titulo 2"
                            :isTextArea="false"
                            childCss="text-left"
                            fieldKey="educacion,desc2"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="white-space-50"></div>

                    <div class="block-title">
                      <h3>Experiencia Laboral</h3>
                    </div>

                    <div class="timeline timeline-second-style clearfix">
                      <div class="timeline-item clearfix">
                        <div class="left-part">
                          <!-- <h5 class="item-period" id="trabajo-year1">2016</h5> -->
                          <GenericField
                            :isValid="isValid"
                            customClass="item-period inline margin-zero-child"
                            componentTag="h5"
                            :customAttr="{ id: 'trabajo-year1' }"
                            placeholder="Trabajo Year 1"
                            :isTextArea="false"
                            fieldKey="trabajo,year1"
                          />
                          <!-- <span class="item-company" id="trabajo-lugar1"
                            >Google</span> -->
                          <GenericField
                            :isValid="isValid"
                            customClass="item-company inline margin-zero-child"
                            componentTag="span"
                            :customAttr="{ id: 'trabajo-lugar1' }"
                            placeholder="Trabajo Lugar 1"
                            :isTextArea="false"
                            fieldKey="trabajo,lugar1"
                          />
                        </div>
                        <div class="divider"></div>
                        <div class="right-part">
                          <!-- <h4 class="item-title" id="trabajo-titulo1">
                            Lead Ui/Ux Designer
                          </h4> -->
                          <GenericField
                            :isValid="isValid"
                            customClass="item-title inline margin-zero-child"
                            componentTag="h4"
                            :customAttr="{ id: 'trabajo-titulo1' }"
                            placeholder="Trabajo Lugar 1"
                            :isTextArea="false"
                            childCss="text-left"
                            fieldKey="trabajo,titulo1"
                          />

                          <!-- <p id="trabajo-desc1">
                            Praesent dignissim sollicitudin justo, sed elementum
                            quam lacinia quis. Phasellus eleifend tristique
                            posuere. Sed vitae dui nec magna.
                          </p> -->
                          <GenericField
                            :isValid="isValid"
                            customClass="inline margin-zero-child"
                            componentTag="p"
                            :customAttr="{ id: 'trabajo-desc1' }"
                            placeholder="Trabajo Desc 1"
                            :isTextArea="false"
                            childCss="text-left"
                            fieldKey="trabajo,desc1"
                          />
                        </div>
                      </div>

                      <div class="timeline-item clearfix">
                        <div class="left-part">
                          <GenericField
                            :isValid="isValid"
                            customClass="item-period inline margin-zero-child"
                            componentTag="h5"
                            :customAttr="{ id: 'trabajo-year2' }"
                            placeholder="Trabajo Year 2"
                            :isTextArea="false"
                            fieldKey="trabajo,year2"
                          />
                          <GenericField
                            :isValid="isValid"
                            customClass="item-company inline margin-zero-child"
                            componentTag="span"
                            :customAttr="{ id: 'trabajo-lugar2' }"
                            placeholder="Trabajo Desc 1"
                            :isTextArea="false"
                            fieldKey="trabajo,lugar2"
                          />
                        </div>
                        <div class="divider"></div>
                        <div class="right-part">
                          <GenericField
                            :isValid="isValid"
                            customClass="item-title inline margin-zero-child"
                            componentTag="h4"
                            :customAttr="{ id: 'trabajo-titulo2' }"
                            placeholder="Trabajo Titulo 2"
                            :isTextArea="false"
                            childCss="text-left"
                            fieldKey="trabajo,titulo2"
                          />
                          <GenericField
                            :isValid="isValid"
                            customClass="margin-zero-child"
                            componentTag="span"
                            :customAttr="{ id: 'trabajo-desc2' }"
                            placeholder="Trabajo Desc 2"
                            :isTextArea="false"
                            childCss="w-full text-left block"
                            fieldKey="trabajo,desc2"
                          />
                        </div>
                      </div>

                      <div class="timeline-item clearfix">
                        <div class="left-part">
                          <GenericField
                            :isValid="isValid"
                            customClass="item-period inline margin-zero-child"
                            componentTag="h5"
                            :customAttr="{ id: 'trabajo-year3' }"
                            placeholder="Trabajo Year 3"
                            :isTextArea="false"
                            fieldKey="trabajo,year3"
                          />
                          <GenericField
                            :isValid="isValid"
                            customClass="item-company inline margin-zero-child"
                            componentTag="span"
                            :customAttr="{ id: 'trabajo-lugar3' }"
                            placeholder="Trabajo Lugar 3"
                            :isTextArea="false"
                            fieldKey="trabajo,lugar3"
                          />
                        </div>
                        <div class="divider"></div>
                        <div class="right-part">
                          <GenericField
                            :isValid="isValid"
                            customClass="item-title inline margin-zero-child"
                            componentTag="h4"
                            :customAttr="{ id: 'trabajo-titulo3' }"
                            placeholder="Trabajo Lugar 3"
                            :isTextArea="false"
                            childCss="text-left"
                            fieldKey="trabajo,titulo3"
                          />
                          <GenericField
                            :isValid="isValid"
                            customClass="inline margin-zero-child"
                            componentTag="p"
                            :customAttr="{ id: 'trabajo-desc3' }"
                            placeholder="Trabajo Desc 3"
                            :isTextArea="false"
                            childCss="text-left"
                            fieldKey="trabajo,desc3"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Skills & Certificates -->
                  <div class="col-xs-12 col-sm-5">
                    <!-- Design Skills -->
                    <div class="block-title">
                      <!-- <h3 id="skill-titulo">Design <span>Skills</span></h3> -->
                      <GenericField
                        :isValid="isValid"
                        customClass="skill-titulo margin-zero-child"
                        componentTag="h3"
                        :customAttr="{ id: 'skill-titulo' }"
                        placeholder="Skill Titulo"
                        :isTextArea="false"
                        fieldKey="skills,titulo"
                      />
                    </div>

                    <div class="skills-info skills-second-style">
                      <!-- Skill 1 -->
                      <div class="skill clearfix flex justify-content-around">
                        <!-- <h4 id="skill-titulo1">Web Design</h4> -->
                        <GenericField
                          :isValid="isValid"
                          customClass="skill-titulo1 inline margin-zero-child"
                          componentTag="h4"
                          :customAttr="{ id: 'skill-titulo1' }"
                          placeholder="Skill Titulo1"
                          :isTextArea="false"
                          fieldKey="skills,titulo1"
                        />
                        <!-- <div class="skill-value" id="skill-porc1">95%</div> -->
                        <GenericField
                          :isValid="isValid"
                          customClass="skill-value margin-zero-child flex justify-content-end"
                          componentTag="div"
                          :customAttr="{ id: 'skill-porc1' }"
                          placeholder="Skill Porc1"
                          :isTextArea="false"
                          fieldKey="skills,porcentaje1"
                        />
                      </div>
                      <div class="skill-container skill-1">
                        <div class="skill-percentage"></div>
                      </div>
                      <!-- End of Skill 1 -->

                      <!-- Skill 2 -->
                      <div class="skill clearfix flex justify-content-around">
                        <!-- <h4 id="skill-titulo2">Print Design</h4> -->
                        <GenericField
                          :isValid="isValid"
                          customClass="inline margin-zero-child"
                          componentTag="h4"
                          :customAttr="{ id: 'skill-titulo2' }"
                          placeholder="Skill Titulo 2"
                          :isTextArea="false"
                          fieldKey="skills,titulo2"
                        />

                        <!-- <div class="skill-value" id="skill-porc2">65%</div> -->
                        <GenericField
                          :isValid="isValid"
                          customClass="skill-value margin-zero-child flex justify-content-end"
                          componentTag="div"
                          :customAttr="{ id: 'skill-porc2' }"
                          placeholder="Skill Porc2"
                          :isTextArea="false"
                          fieldKey="skills,porcentaje2"
                        />
                      </div>
                      <div class="skill-container skill-2">
                        <div class="skill-percentage"></div>
                      </div>
                      <!-- End of Skill 2 -->

                      <!-- Skill 3 -->
                      <div class="skill clearfix flex justify-content-around">
                        <!-- <h4 id="skill-titulo3">Logo Design</h4> -->
                        <GenericField
                          :isValid="isValid"
                          customClass="inline margin-zero-child"
                          componentTag="h4"
                          :customAttr="{ id: 'skill-titulo3' }"
                          placeholder="Skill Titulo3"
                          :isTextArea="false"
                          fieldKey="skills,titulo3"
                        />
                        <!-- <div class="skill-value" id="skill-porc3">80%</div> -->
                        <GenericField
                          :isValid="isValid"
                          customClass="skill-value margin-zero-child flex justify-content-end"
                          componentTag="div"
                          :customAttr="{ id: 'skill-porc3' }"
                          placeholder="Skill Porcentaje 3"
                          :isTextArea="false"
                          fieldKey="skills,porcentaje3"
                        />
                      </div>
                      <div class="skill-container skill-3">
                        <div class="skill-percentage"></div>
                      </div>
                      <!-- End of Skill 3 -->

                      <!-- Skill 4 -->
                      <div class="skill clearfix flex justify-content-around">
                        <!-- <h4 id="skill-titulo4">Graphic Design</h4> -->
                        <GenericField
                          :isValid="isValid"
                          customClass="inline margin-zero-child"
                          componentTag="h4"
                          :customAttr="{ id: 'skill-titulo4' }"
                          placeholder="Skill Titulo 4"
                          :isTextArea="false"
                          fieldKey="skills,titulo4"
                        />
                        <!-- <div class="skill-value" id="skill-porc4">90%</div> -->
                        <GenericField
                          :isValid="isValid"
                          customClass="skill-value margin-zero-child flex justify-content-end"
                          componentTag="div"
                          :customAttr="{ id: 'skill-porc4' }"
                          placeholder="Skill Porcentaje 4"
                          :isTextArea="false"
                          fieldKey="skills,porcentajr4"
                        />
                      </div>
                      <div class="skill-container skill-4">
                        <div class="skill-percentage"></div>
                      </div>
                      <!-- End of Skill 4 -->
                    </div>
                    <!-- End of Design Skills -->

                    <div class="white-space-10"></div>

                    <!-- End of Coding Skills -->

                    <div class="white-space-10"></div>

                    <!-- Knowledges -->
                    <div class="block-title">
                      <!-- <h3 id="conocimientos-titulo">Knowledges</h3> -->
                      <GenericField
                        :isValid="isValid"
                        customClass="inline margin-zero-child"
                        componentTag="h3"
                        :customAttr="{ id: 'conocimientos-titulo' }"
                        placeholder="Conocimientos titulo"
                        :isTextArea="false"
                        fieldKey="conocimientos,titulo"
                      />
                    </div>
                    <!-- <ul class="knowledges" id="conocimientos-lista"></ul> -->
                    <SkillList
                      :isValid="isValid"
                      customClass="knowledges margin-zero-child"
                      componentTag="ul"
                      :customAttr="{ id: 'conocimientos-lista' }"
                      placeholder="Conocimientos Lista"
                      :isTextArea="true"
                      :skillsList="true"
                      fieldKey="conocimientos,conocimientosLista"
                    />
                    <!-- End of Knowledges -->
                  </div>
                  <!-- End of Skills & Certificates -->
                </div>

                <div class="white-space-50"></div>

                <!-- Certificates -->

                <!-- End of Certificates -->
              </div>
            </section>
</template>

<style lang="scss">

</style>

<script setup>
import Acerca from "@/components/Acerca.vue";
import GenericField from "@/components/GenericField.vue";
import SkillList from "@/components/SkillList.vue";

import { toRefs } from "@vue/reactivity";
const props = defineProps(["isValid"]);
const { isValid } = toRefs(props);

</script>

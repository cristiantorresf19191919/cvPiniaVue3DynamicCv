<template>
            <section data-id="contact" class="animated-section">
              <div class="section-content">
                <div class="page-title">
                  <h2>Contacto</h2>
                </div>

                <div class="row">
                  <!-- Contact Info -->
                  <div class="col-xs-12 col-sm-4">
                    <div class="lm-info-block gray-default">
                      <i class="lnr lnr-map-marker"></i>
                      <!-- <h4 id="contacto-ubicacion">San Francisco</h4> -->
                      <GenericField
                        :isValid="isValid"
                        customClass=" inline margin-zero-child"
                        componentTag="h4"
                        :customAttr="{ id: 'contacto-ubicacion' }"
                        placeholder="Ubicacion"
                        :isTextArea="false"
                        :skillsList="true"
                        fieldKey="contacto,ubicacion"
                      />
                      <span class="lm-info-block-value"></span>
                      <span class="lm-info-block-text"></span>
                    </div>

                    <div class="lm-info-block gray-default">
                      <i class="lnr lnr-phone-handset"></i>
                      <!-- <h4 id="contacto-telefono">415-832-2000</h4> -->
                      <GenericField
                        :isValid="isValid"
                        customClass=" inline margin-zero-child"
                        componentTag="h4"
                        :customAttr="{ id: 'contacto-telefono' }"
                        placeholder="Contacto Telefono"
                        :isTextArea="false"
                        :skillsList="true"
                        fieldKey="contacto,telefono"
                      />
                      <span class="lm-info-block-value"></span>
                      <span class="lm-info-block-text"></span>
                    </div>

                    <div class="lm-info-block gray-default">
                      <i class="lnr lnr-envelope"></i>
                      <!-- <h4 id="contacto-correo">alex@example.com</h4> -->
                      <GenericField
                        :isValid="isValid"
                        customClass=" inline margin-zero-child"
                        componentTag="h4"
                        :customAttr="{ id: 'contacto-correo' }"
                        placeholder="Correo"
                        :isTextArea="false"
                        :skillsList="true"
                        fieldKey="contacto,correo"
                      />

                      <span class="lm-info-block-value"></span>
                      <span class="lm-info-block-text"></span>
                    </div>

                    <div class="lm-info-block gray-default">
                      <i class="lnr lnr-checkmark-circle"></i>
                      <h4>Freelance Disponible</h4>
                      <span class="lm-info-block-value"></span>
                      <span class="lm-info-block-text"></span>
                    </div>
                  </div>
                  <!-- End of Contact Info -->

                  <!-- Contact Form -->
                  <div class="col-xs-12 col-sm-8">
                    <div class="block-title">
                      <!-- <h3 id="contacto-formularioTitulo">
                        How Can I <span>Help You?</span>
                      </h3> -->
                      <GenericField
                        :isValid="isValid"
                        customClass="inline margin-zero-child"
                        componentTag="h3"
                        :customAttr="{ id: 'contacto-formularioTitulo' }"
                        placeholder="Correo"
                        :isTextArea="false"
                        fieldKey="contacto,formularioTitulo"
                      />
                    </div>

                    <form id="contact_form" class="contact-form">
                      <div class="messages"></div>

                      <div class="controls two-columns">
                        <div class="fields clearfix">
                          <div class="left-column">
                            <div class="form-group form-group-with-icon">
                              <input
                                id="form_name"
                                type="text"
                                name="name"
                                class="form-control"
                                placeholder=""
                                required="required"
                                data-error="Nombre es requerido."
                              />
                              <label>Nombre Completo</label>
                              <div class="form-control-border"></div>
                              <div class="help-block with-errors"></div>
                            </div>

                            <div class="form-group form-group-with-icon">
                              <input
                                id="form_email"
                                type="email"
                                name="email"
                                class="form-control"
                                placeholder=""
                                required="required"
                                data-error="Email valido es requerido."
                              />
                              <label>Correo Electrónico</label>
                              <div class="form-control-border"></div>
                              <div class="help-block with-errors"></div>
                            </div>

                            <div class="form-group form-group-with-icon">
                              <input
                                id="form_subject"
                                type="text"
                                name="subject"
                                class="form-control"
                                placeholder=""
                                required="required"
                                data-error="Asunto es requerido"
                              />
                              <label>Asunto</label>
                              <div class="form-control-border"></div>
                              <div class="help-block with-errors"></div>
                            </div>
                          </div>
                          <div class="right-column">
                            <div class="form-group form-group-with-icon">
                              <textarea
                                id="form_message"
                                name="message"
                                class="form-control"
                                placeholder=""
                                rows="7"
                                required="required"
                                data-error="Por favor deja un mensaje"
                              ></textarea>
                              <label>Mensaje</label>
                              <div class="form-control-border"></div>
                              <div class="help-block with-errors"></div>
                            </div>
                          </div>
                        </div>

                        <input
                          type="button"
                          id="submit-button-bonito"
                          class="button btn-send"
                          value="Send message"
                        />
                      </div>
                    </form>
                  </div>
                  <!-- End of Contact Form -->
                </div>
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

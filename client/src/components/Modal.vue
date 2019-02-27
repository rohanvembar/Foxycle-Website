<template>
  <div class="modal" v-bind:class="{'is-active': isShowing}" >
    <div class="modal-background"></div>
    <div class="modal-card custom">
      <header class="modal-card-head">
        <p class="modal-card-title">{{title}}</p>
        <button class="delete" aria-label="close" v-on:click="cancelHandler()"></button>
      </header>
      <section class="modal-card-body">
        <slot/>
      </section>
      <footer class="modal-card-foot">
        <button type="submit" :form="formName" class="button is-primary is-rounded">{{ successButton }}</button>
        <button class="button is-rounded" v-on:click="cancelHandler()">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Modal extends Vue {
  @Prop(String) title!: string;
  @Prop(String) formName!: string;
  @Prop(Boolean) isShowing!: boolean;
  @Prop({ type: String, default: "Save" })
  successButton: string | undefined;

  successHandler(): void {
    this.$emit("success");
  }

  cancelHandler(): void {
    this.$emit("cancel");
  }
}
</script>

<style lang="scss">

.custom {
  border-radius: 15px;
}
</style>
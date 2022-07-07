<template>
  <div class="field">
    <Field :type="type" :name="name" :id="name" v-slot="{ field, meta, errors }" :rules="rules">
      <label
          v-if="checkbox"
          class="label"
          :class="{
            'check': checkbox,
            'is-success': meta.valid && meta.touched,
            'is-danger': !meta.valid && meta.touched,
          }"
      >
        <input
            v-bind="field"
            class="checkbox"
            :class="{
              'is-success': meta.valid && meta.touched,
              'is-danger': !meta.valid && meta.touched,
            }"
            :type="type"
        />
        <div class="checkbox"
             :class="{
              'is-success': meta.valid && meta.touched,
              'is-danger': !meta.valid && meta.touched,
            }"
        />
        <p>{{ label }}
          <slot />
        </p>
      </label>
      <label
          v-else
          class="label"
          :class="{
            'is-success': meta.valid && meta.touched,
            'is-danger': !meta.valid && meta.touched,
          }"
      >
        {{ label }}
      </label>
      <textarea
          v-if="textarea && !checkbox"
          v-maska="mask"
          v-bind="field"
          class="textarea"
          :class="{
            'is-success': meta.valid && meta.touched,
            'is-danger': !meta.valid && meta.touched,
          }"
          :placeholder="placeholder"
          :type="type"
      />
      <input
          v-else
          v-if="!checkbox"
          v-maska="mask"
          v-bind="field"
          class="input"
          :class="{
            'is-success': meta.valid && meta.touched,
            'is-danger': !meta.valid && meta.touched,
          }"
          :placeholder="placeholder"
          :type="type"
      />
      <ErrorMessage :name="name" as="div" class="help is-danger" />
    </Field>
  </div>
</template>

<script setup>
const props = defineProps({
  checkbox: {
    type: Boolean,
    default: false,
  },
  checkboxLink: {
    type: String,
    default: "",
  },
  textarea: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "text",
  },
  mask: {
    type: String,
    default: "",
  },
  rules: {
    type: String,
    default: true,
  },
  name: {
    type: String,
    default: true,
  },
  label: {
    type: String,
    default: true,
  },
  placeholder: {
    type: String,
    default: "",
  }
});
</script>

<style lang="sass">
.checkbox
  cursor: pointer
  position: relative
  width: 20px
  height: 20px
  border: 1px solid #fff
  border-radius: 5px
  flex-shrink: 0
.field
  input, textarea
    &.is-danger
      color: #EC0606 !important
      border: 1px solid #EC0606 !important
  textarea
    width: 100%
    resize: none
    height: 136px
  .help.is-danger
    color: #EC0606
    margin-top: 5px
    font: 300 12px/14px 'Rubik'
  label.is-danger
    color: #EC0606
.checkbox.is-danger
  border: 1px solid #EC0606 !important
</style>
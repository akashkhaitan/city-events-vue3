<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <label>{{ label }}</label>
  <input
    v-bind="$attrs"
    :value="modelValue"
    :placeholder="label"
    @input="emit('update:modelValue', $event.target.value)"
    class="field"
  />
</template>

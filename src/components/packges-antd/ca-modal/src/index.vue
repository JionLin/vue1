<template>
    <a-modal v-bind="$attrs">
      <slot></slot>
      <template #footer>
        <slot name="footer"></slot>
      </template>
    </a-modal>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ca-modal',
  setup() {
    return {};
  },
});
</script>
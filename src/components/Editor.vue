<script setup lang="ts">
import { QuillEditor } from '@vueup/vue-quill';

const model = defineModel<string>();
</script>
<template>
  <div class="editor">
    <QuillEditor content-type="html" v-model:content="model" />
  </div>
</template>

<style scoped>
.editor {
  width: 100%;
  height: 100px;
  margin-bottom: 2rem;
}
</style>

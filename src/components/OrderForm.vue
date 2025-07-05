<script setup lang="ts">
import { NUpload, NUploadDragger, NIcon, NForm, NFormItem, NInput, NText, NButton } from 'naive-ui';
import { ArchiveOutline as ArchiveIcon } from '@vicons/ionicons5';

const emit = defineEmits(['saved', 'cancel']);

function onSave() {
  emit('saved');
}
</script>
<template>
  <div class="order-form">
    <div>
      <n-upload>
        <n-upload-dragger>
          <div>
            <n-icon size="48" :depth="3">
              <ArchiveIcon />
            </n-icon>
          </div>
          <n-text> Нажмите или перетащите фотографию заказа </n-text>
        </n-upload-dragger>
      </n-upload>
      <n-upload multiple directory-dnd :max="5">
        <n-upload-dragger>
          <div>
            <n-icon size="48" :depth="3">
              <ArchiveIcon />
            </n-icon>
          </div>
          <n-text> Нажмите или перетащите вложенные файлы </n-text>
        </n-upload-dragger>
      </n-upload>
    </div>
    <n-form>
      <n-form-item label="">
        <n-input />
      </n-form-item>
    </n-form>
    <div class="order-form-buttons">
      <n-button type="primary" @click="onSave">Сохранить </n-button>
      <n-button type="tertiary" @click="$emit('cancel')">Отменить </n-button>
    </div>
  </div>
</template>

<style scoped>
.order-form {
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  gap: 16px;
}

.order-form-buttons {
  grid-column: 2;
  display: flex;
  justify-content: flex-end;
  gap: 16px;
}
</style>

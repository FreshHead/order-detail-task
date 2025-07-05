<script setup lang="ts">
import { ref } from 'vue';
import {
  NH1,
  NH2,
  NUpload,
  NUploadDragger,
  NIcon,
  NForm,
  NFormItem,
  NInput,
  NText,
  NButton,
} from 'naive-ui';
import { ArchiveOutline as ArchiveIcon } from '@vicons/ionicons5';
import { useOrderStore } from '@/stores/orderStore';
import Editor from './Editor.vue';

const emit = defineEmits(['saved', 'cancel']);

const { order, save } = useOrderStore();
const state = ref(order);

function onSave() {
  save(state.value);
  emit('saved');
}
</script>
<template>
  <div class="order-form">
    <div>
      <n-h2>Изображение</n-h2>
      <n-upload>
        <n-upload-dragger>
          <div>
            <n-icon size="48" :depth="3">
              <ArchiveIcon />
            </n-icon>
          </div>
          <n-text> Нажмите или перетащите изображение заказа </n-text>
        </n-upload-dragger>
      </n-upload>
      <n-h2>Вложения</n-h2>
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
      <n-h1>Информация о заказе</n-h1>
      <n-form-item label="Заголовок заказа">
        <n-input placeholder="Название" v-model:value="state.title" />
      </n-form-item>
      <n-form-item label="Описание заказа">
        <Editor v-model="state.description" />
      </n-form-item>
      <div>
        <n-h2>Данные изготовителя</n-h2>
        <div class="order-form__group">
          <n-form-item label="Изготовитель">
            <n-input placeholder="Завод 101" v-model:value="state.manufacturer.name" />
          </n-form-item>
          <n-form-item label="Сайт">
            <n-input placeholder="zavod101.ru" v-model:value="state.manufacturer.website" />
          </n-form-item>
        </div>
      </div>
      <div>
        <n-h2>Информация об организации заказчика</n-h2>
        <div class="order-form__group">
          <n-form-item label="Наименование">
            <n-input placeholder="ООО ТестоСтрой" v-model:value="state.customer.name" />
          </n-form-item>
          <n-form-item label="Сайт">
            <n-input placeholder="testo-stroy.ru" v-model:value="state.customer.website" />
          </n-form-item>
        </div>
      </div>
    </n-form>
    <div class="order-form__buttons">
      <n-button type="primary" @click="onSave">Сохранить </n-button>
      <n-button type="tertiary" @click="$emit('cancel')">Отменить </n-button>
    </div>
  </div>
</template>

<style scoped>
.order-form {
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  gap: 2rem;
}

.order-form__buttons {
  grid-column: 2;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

.order-form__group {
  display: flex;
  gap: 1rem;
}
</style>

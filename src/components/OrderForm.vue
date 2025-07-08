<script setup lang="ts">
import { useTemplateRef } from 'vue';
import { NH1, NH2, NForm, NFormItem, NInput, NSelect, NButton } from 'naive-ui';
import { useOrderStore } from '@/stores/orderStore';
import Editor from './Editor.vue';
import { storeToRefs } from 'pinia';
import { useCloned } from '@vueuse/core';
import AttachmentsUpload from './AttachmentsUpload.vue';
import ImageUpload from './ImageUpload.vue';

const emit = defineEmits(['saved', 'cancel']);

const store = useOrderStore();
const { order, statuses } = storeToRefs(store);

const { cloned: state, sync } = useCloned(order.value, { manual: true });

const orderForm = useTemplateRef('orderForm');

const rules = {
  title: {
    required: true,
    message: 'Пожалуйста заполните поле',
    trigger: 'blur',
  },
  manufacturer: {
    name: {
      required: true,
      message: 'Пожалуйста заполните поле',
      trigger: 'blur',
    },
  },
  customer: {
    name: {
      required: true,
      message: 'Пожалуйста заполните поле',
      trigger: 'blur',
    },
  },
};

function onSave() {
  if (orderForm.value) {
    orderForm.value.validate((errors) => {
      if (!errors) {
        store.save(state.value);
        emit('saved');
      }
    });
  }
}

function onCancel() {
  sync();
  emit('cancel');
}
</script>
<template>
  <div class="order-form">
    <div>
      <n-h2>Изображение</n-h2>
      <ImageUpload v-model="state.image" />
      <n-h2>Вложения</n-h2>
      <AttachmentsUpload v-model="state.files" />
    </div>
    <n-form ref="orderForm" :model="state" :rules="rules">
      <n-h1>Информация о заказе</n-h1>
      <n-form-item label="Заголовок заказа" path="title">
        <n-input placeholder="Название" v-model:value="state.title" />
      </n-form-item>
      <n-form-item label="Описание заказа">
        <Editor v-model="state.description" />
      </n-form-item>
      <n-form-item label="Статус">
        <n-select v-model:value="state.status" :options="statuses" />
      </n-form-item>
      <div>
        <n-h2>Данные изготовителя</n-h2>
        <div class="order-form__group">
          <n-form-item label="Изготовитель" path="manufacturer.name">
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
          <n-form-item label="Наименование" path="customer.name">
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
      <n-button type="tertiary" @click="onCancel">Отменить </n-button>
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

<script setup lang="ts">
import { useOrderStore } from '@/stores/orderStore';
import { NButton, NH1, NH2, NImage } from 'naive-ui';
import OrderProp from './OrderProp.vue';

defineEmits(['edit']);
const { order } = useOrderStore();
</script>
<template>
  <div class="order">
    <div>
      <n-image src="public/starter.webp" :show-toolbar="false" width="100%" />
      <n-h2>Вложения</n-h2>
      <n-text class="order__no-attachments-text"
        >Вложений нет. Добавьте их в режиме редактирования.</n-text
      >
      <n-text v-for="file in order.files">{{ file }}</n-text>
    </div>
    <div>
      <n-h1>{{ order.title }}</n-h1>
      <div v-if="order.description">
        <n-h2>Описание заказа</n-h2>
        <span v-html="order.description" />
      </div>
      <n-h2>Данные изготовителя</n-h2>
      <OrderProp label="Изготовитель" :value="order.manufacturer.name" />
      <OrderProp
        v-if="order.manufacturer.website"
        label="Сайт"
        :value="order.manufacturer.website"
      />
      <n-h2>Информация об организации заказчика</n-h2>
      <OrderProp label="Наименование" :value="order.customer.name" />
      <OrderProp v-if="order.customer.website" label="Сайт" :value="order.customer.website" />
    </div>
    <div class="order__buttons">
      <n-button type="primary" @click="$emit('edit')">Редактировать </n-button>
    </div>
  </div>
</template>

<style scoped>
.order {
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  gap: 16px;
}

.order__buttons {
  grid-column: 2;
  display: flex;
  justify-content: flex-end;
}
</style>

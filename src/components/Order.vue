<script setup lang="ts">
import { useOrderStore } from '@/stores/orderStore';
import { NButton, NH2, NImage } from 'naive-ui';
import OrderProp from './OrderProp.vue';

defineEmits(['edit']);
const { order } = useOrderStore();
</script>
<template>
  <div class="order">
    <div>
      <n-image />
    </div>
    <div>
      <h1>{{ order.title }}</h1>
      <span v-html="order.description" />
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

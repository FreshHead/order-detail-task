<script setup lang="ts">
import { useOrderStore } from '@/stores/orderStore';
import { NButton } from 'naive-ui';

defineEmits(['edit']);
const { order } = useOrderStore();
</script>
<template>
  <div class="order">
    <div></div>
    <div>
      <h1>{{ order.title }}</h1>
    </div>
    <div class="order-buttons">
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

.order-buttons {
  grid-column: 2;
  display: flex;
  justify-content: flex-end;
}
</style>

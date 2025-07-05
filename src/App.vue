<script setup lang="ts">
import { ref } from 'vue';
import Order from './components/Order.vue';
import OrderForm from './components/OrderForm.vue';
import { NCard } from 'naive-ui';

const isEdit = ref(false);
</script>

<template>
  <n-card class="app">
    <Order v-show="!isEdit" @edit="isEdit = true" />
    <OrderForm v-show="isEdit" @saved="isEdit = false" @cancel="isEdit = false" />
  </n-card>
</template>

<style scoped>
.app {
  margin-top: 1rem;
}
</style>

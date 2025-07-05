<script setup lang="ts">
import { ref } from 'vue';
import Order from './components/Order.vue';
import OrderForm from './components/OrderForm.vue';

const isEdit = ref(false);
</script>

<template>
  <Order v-show="!isEdit" @edit="isEdit = true" />
  <OrderForm v-show="isEdit" @saved="isEdit = false" @cancel="isEdit = false" />
</template>

<style scoped></style>

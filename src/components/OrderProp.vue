<script setup lang="ts">
import { NText } from 'naive-ui';
defineProps<{ label: string; value: string }>();
</script>
<template>
  <div class="order-prop">
    <span class="order-prop__label">
      <n-text class="label__text">
        {{ label }}
      </n-text>
    </span>
    <n-text class="order-prop__value">
      {{ value }}
    </n-text>
  </div>
</template>

<style scoped>
.order-prop {
  display: inline-flex;
  gap: 4px;
  width: 100%;
}

.order-prop__label {
  display: flex;
  position: relative;
  width: 40%;
}

.order-prop__label::after {
  content: '';
  height: 100%;
  width: 100%;
  border-top: 1.5px dotted #d1d1d6;
  position: absolute;
  top: 12px;
}

.order-prop__value {
  width: 50%;
}

.label__text {
  color: #868695;
  background-color: #fff;
  border-right: 6px solid #fff;
  position: absolute;
  z-index: 2;
}
</style>

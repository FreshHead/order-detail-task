<script setup lang="ts">
import { useOrderStore } from '@/stores/orderStore';
import { NButton, NH1, NH2, NImage, NText, NSteps, NStep } from 'naive-ui';
import OrderProp from './OrderProp.vue';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import type { Status } from '@/types/Status';

defineEmits(['edit']);

const { order, statuses } = storeToRefs(useOrderStore());

const statusStepsMap = statuses.value.reduce(
  (acc, el, idx) => {
    acc[el.value] = idx + 1;
    return acc;
  },
  {} as Record<Status, number>,
);

const filenames = computed(() => order.value.files.map(({ name }) => name));

const currentStep = computed(() => statusStepsMap[order.value.status]);
</script>
<template>
  <div class="order">
    <div>
      <n-image :src="order.image?.url" :show-toolbar="false" width="100%" />
      <n-h2>Вложения</n-h2>
      <n-text v-if="filenames.length === 0"
        >Вложений нет. Добавьте их в режиме редактирования.</n-text
      >
      <n-text class="order__attachment" v-else v-for="name in filenames">{{ name }}</n-text>
    </div>
    <div>
      <n-h1>{{ order.title }}</n-h1>
      <div v-if="order.description">
        <n-h2>Описание заказа</n-h2>
        <span v-html="order.description" />
      </div>
      <div>
        <n-h2>Статус заказа</n-h2>
        <n-steps :current="currentStep">
          <n-step title="Черновик" />
          <n-step title="Опубликован" />
          <n-step title="Выполняется" />
          <n-step title="Завершён" />
        </n-steps>
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
      <div class="buttons__additional-buttons">
        <n-button>Перейти в чат</n-button>
        <n-button>Связаться с поддержкой</n-button>
      </div>
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
  justify-content: space-between;
}

.buttons__additional-buttons {
  display: flex;
  gap: 1rem;
}

.order__attachment {
  display: block;
  margin: 1rem 0;
}
</style>

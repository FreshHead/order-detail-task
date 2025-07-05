import type { Order } from '@/types/Order';
import { Status } from '@/types/Status';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useOrderStore = defineStore('order', () => {
  const mockOrder = ref<Order>({
    title: 'Стартер редукторный',
    status: Status.Draft,
    manufacturer: {
      name: 'Завод 1',
      country: 'Россия',
    },
    customer: {
      name: 'Организация 1',
    },
  });

  const order = computed(() => mockOrder.value);

  function save(order: Order) {
    mockOrder.value = order;
  }

  return { order, save };
});

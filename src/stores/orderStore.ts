import type { Order } from '@/types/Order';
import { Status } from '@/types/Status';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useOrderStore = defineStore('order', () => {
  const mockOrder = ref<Order>({
    title: 'Стартер редукторный',
    status: Status.Draft,
    image: {
      id: 'starter.webp',
      name: 'starter.webp',
      url: '/public/starter.webp',
      status: 'finished',
    },
    filenames: [],
    manufacturer: {
      name: 'Завод 1',
      website: 'zavod101.ru',
    },
    customer: {
      name: 'Организация 1',
      website: 'test-organization.ru',
    },
  });

  const order = computed(() => mockOrder.value);

  function save(order: Order) {
    mockOrder.value = JSON.parse(JSON.stringify(order));
  }

  return { order, save };
});

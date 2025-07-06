import type { Order } from '@/types/Order';
import { Status } from '@/types/Status';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import imageUrl from '@/assets/images/starter.webp';
import { useLocalStorage } from '@vueuse/core';

export const useOrderStore = defineStore('order', () => {
  const order = useLocalStorage<Order>('order', {
    title: 'Стартер редукторный',
    status: Status.Draft,
    image: {
      id: 'starter.webp',
      name: 'starter.webp',
      url: imageUrl,
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

  const statuses = ref([
    { value: Status.Draft, label: 'Черновик' },
    { value: Status.Published, label: 'Опубликован' },
    { value: Status.InProgress, label: 'Выполняется' },
    { value: Status.Finished, label: 'Завершён' },
  ]);

  function save(updatedOrder: Order) {
    order.value = JSON.parse(JSON.stringify(updatedOrder));
  }

  return { order, statuses, save };
});

<template>
  <div class="min-h-screen px-4 py-8 md:px-6 lg:px-8">
      <nav class="mb-8">
        <div class="text-sm text-gray-600">
          <NuxtLink to="/">Головна</NuxtLink>
          <span class="mx-2">/</span>
          <NuxtLink to="/account/" class="text-gray-400">Аккаунт</NuxtLink>
          <span class="mx-2">/</span>
          <NuxtLink to="/account/order-history" class="text-gray-400">Історія замовлень</NuxtLink>
        </div>
      </nav>

      <h1 class="text-3xl font-bold text-center mb-8">Історія замовлень</h1>

      <!-- Orders -->
      <div class="space-y-8">
        <div v-for="order in orders" :key="order.id" class="bg-white rounded-xl shadow-sm p-6">
          <div class="flex justify-between items-center mb-6">
            <div class="space-y-1">
              <p class="text-lg font-semibold">{{ order.date }}</p>
              <p class="text-xl font-bold">{{ order.total.toFixed(2) }} ₴</p>
            </div>
            <span
              class="px-4 py-1 rounded-full text-sm font-medium capitalize"
              :class="order.status === 'доставлено' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'"
            >
              {{ order.status }}
            </span>
          </div>

          <!-- Products grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <ProductCard
              v-for="product in order.items"
              :key="product.id"
              :images="[product.image]"
              :title="product.name"
              :description="product.description"
              :oldPrice="null"
              :isPromotion="product.isOnSale"
              :weightPrice="product.price"
            />
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { ShoppingCart } from 'lucide-vue-next';
import ProductCard from '@/components/ProductCard.vue';

const orders = ref([
  {
    id: '1',
    date: '01.04.2021',
    total: 3006.83,
    status: 'в дорозі',
    items: [
      {
        id: '1',
        name: 'Ковбаса Casaponsa Голд вкрита травами с/в',
        description: 'Яблука цього сорту мають солодкий та соковитий смак...',
        price: 79.49,
        image: 'https://images.silpo.ua/products/1600x1600/webp/8bfc9e59-d2a3-4b5e-9121-a00ad2440859.png',
        isOnSale: true,
      },
      {
        id: '2',
        name: "Ковбаса «Премія»® Українська в/к в/ґ в/у",
        description: 'Склад: свинина, хрящовина, філейні парні...',
        price: 10.0,
        image: 'https://images.silpo.ua/products/1600x1600/webp/ea59b112-93b8-4d85-96b4-1aee5fc56074.png',
      },
    ],
  },
  {
    id: '2',
    date: '01.04.2021',
    total: 3006.83,
    status: 'доставлено',
    items: [
      {
        id: '5',
        name: 'Ковбаса Casademont «Фует» з перцем міні',
        description: 'Яблука цього сорту мають солодкий та соковитий смак...',
        price: 79.49,
        image: 'https://images.silpo.ua/products/1600x1600/webp/9e2eca9b-a53f-436f-b044-7ac76a841bdd.png',
        isOnSale: true,
      },
      {
        id: '6',
        name: "Ковбаса Argal «Фует» «Іберіко» с/в",
        description: 'Склад: свинина, хрящовина, філейні парні...',
        price: 10.0,
        image: 'https://images.silpo.ua/products/1600x1600/webp/1176fe6a-e6c6-47e5-a86e-cca7ce118bac.png',
      },
    ],
  },
]);
</script>

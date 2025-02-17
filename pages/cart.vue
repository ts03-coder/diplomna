<template>
  <div class="min-h-screen px-4 py-8 md:px-6 lg:px-8">
      <nav class="mb-8">
        <div class="text-sm text-gray-600">
          <NuxtLink to="/">Головна</NuxtLink>
          <span class="mx-2">/</span>
          <NuxtLink to="/about" class="text-gray-400">Корзина</NuxtLink>
        </div>
      </nav>

      <div class="max-w-7xl mx-auto space-y-16 md:space-y-24">
        <h1 class="text-3xl font-bold text-center mb-8">Корзина</h1>
      <div class="flex flex-col lg:flex-row gap-8">
        <div class="lg:w-2/3">
          <CartProductCard
            v-for="item in cartItems"
            :key="item.id"
            :item="item"
            @update-quantity="updateQuantity"
            @remove-item="removeItem"
          />
        </div>
        <div class="lg:w-1/3">
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h2 class="text-lg font-semibold text-gray-900 mb-4">Підсумок замовлення</h2>
            <div class="flex justify-between mb-2">
              <span>Сума</span>
              <span>{{ total }} ₴</span>
            </div>
            <div class="flex justify-between mb-2">
              <span>Доставка</span>
              <span>0 ₴</span>
            </div>
            <hr class="my-4" />
            <div class="flex justify-between mb-4">
              <span class="font-semibold">Загалом</span>
              <span class="font-semibold">{{ total }} ₴</span>
            </div>
            <button class="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors">
              Оформити замовлення
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

const cartItems = ref<CartItem[]>([
  { id: 1, name: "Ковбаса домашня", price: 120, quantity: 2, image: "https://placehold.co/400x400" },
  { id: 2, name: "Стейк рібай", price: 350, quantity: 1, image: "https://placehold.co/400x400" },
  { id: 3, name: "Шашлик свинячий", price: 180, quantity: 3, image: "https://placehold.co/400x400" },
])

const updateQuantity = (id: number, newQuantity: number) => {
  cartItems.value = cartItems.value.map((item) =>
    item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
  )
}

const removeItem = (id: number) => {
  cartItems.value = cartItems.value.filter((item) => item.id !== id)
}

const total = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
)
</script>
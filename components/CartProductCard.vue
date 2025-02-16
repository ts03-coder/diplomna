<template>
  <div class="flex items-center bg-white p-6 mb-4 rounded-lg shadow-sm">
    <img :src="item.image || '/placeholder.svg'" :alt="item.name" class="w-24 h-24 object-cover rounded-md mr-6" />
    <div class="flex-grow">
      <h2 class="text-lg font-semibold text-gray-900">{{ item.name }}</h2>
      <p class="text-gray-600">{{ item.price }} ₴ за шт.</p>
      <div class="flex items-center mt-2">
        <button
          @click="$emit('update-quantity', item.id, item.quantity - 1)"
          class="text-gray-500 focus:outline-none focus:text-gray-600"
        >
          <Minus class="h-5 w-5" />
        </button>
        <span class="text-gray-700 mx-2">{{ item.quantity }}</span>
        <button
          @click="$emit('update-quantity', item.id, item.quantity + 1)"
          class="text-gray-500 focus:outline-none focus:text-gray-600"
        >
          <Plus class="h-5 w-5" />
        </button>
      </div>
    </div>
    <div class="text-right">
      <p class="text-lg font-semibold text-gray-900">{{ item.price * item.quantity }} ₴</p>
      <button
        @click="$emit('remove-item', item.id)"
        class="text-red-500 hover:text-red-600 focus:outline-none"
      >
        <Trash2 class="h-5 w-5" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Trash2, Minus, Plus } from 'lucide-vue-next';

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

defineProps<{
  item: CartItem
}>()

defineEmits<{
  'update-quantity': [id: number, quantity: number]
  'remove-item': [id: number]
}>()
</script>
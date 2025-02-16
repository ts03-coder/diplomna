<template>
  <header class="bg-[#F6F6F6] shadow-sm">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="text-2xl font-bold text-primary">
            <img src="/images/logo.svg" alt="Бабусин Гостинець" class="h-16" />
          </NuxtLink>
        </div>
        <div class="flex-1 max-w-xl mx-4">
          <div class="relative">
            <input
              type="text"
              placeholder="Пошук товарів..."
              class="w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-100 rounded-full focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary"
            />
            <div class="absolute inset-y-0 left-0 flex items-center pl-3">
              <Search class="w-5 h-5 text-gray-500" />
            </div>
          </div>
        </div>
        <nav class="hidden md:flex space-x-8">
          <NuxtLink to="/catalog" class="text-gray-700 hover:text-primary transition-colors duration-200 flex items-center">
            <List class="w-5 h-5 mr-1" />
            Каталог
          </NuxtLink>
          <NuxtLink to="/about" class="text-gray-700 hover:text-primary transition-colors duration-200 flex items-center">
            <Users class="w-5 h-5 mr-1" />
            Про нас
          </NuxtLink>
          <NuxtLink to="/cart" class="text-gray-700 hover:text-primary transition-colors duration-200 flex items-center">
            <ShoppingCart class="w-5 h-5 mr-1" />
            Кошик
          </NuxtLink>
        </nav>
        <div class="md:hidden">
          <button type="button" class="text-gray-700 hover:text-primary">
            <span class="sr-only">Відкрити головне меню</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { Search, List, Users, ShoppingCart } from 'lucide-vue-next';
</script>

<style>

</style>
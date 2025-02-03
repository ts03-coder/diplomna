<template>
<footer class="bg-gray-100">
  <div class="container mx-auto px-4 py-8">
    <div class="flex flex-col md:flex-row justify-between items-center">
      <div class="mb-4 md:mb-0">
        <p class="text-gray-600">&copy; 2025 Бабусин Гостинець. Всі права захищені.</p>
      </div>
      <div class="flex items-start text-gray-600">
          <MapPin class="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
          <p>Волинська обл. Ковельський район, с. Межисить</p>
        </div>
      <div class="flex flex-col items-end">
        <div class="flex space-x-4 mb-4">
          <NuxtLink
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-600 hover:text-primary transition-colors duration-200"
          >
            <Instagram class="w-6 h-6" />
            <span class="sr-only">Instagram</span>
          </NuxtLink>
          <NuxtLink
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-600 hover:text-primary transition-colors duration-200"
          >
            <Facebook class="w-6 h-6" />
            <span class="sr-only">Facebook</span>
          </NuxtLink>
        </div>
        <div class="flex items-center text-gray-600">
          <Phone class="w-5 h-5 mr-2" />
          <a href="tel:+380123456789" class="hover:text-primary transition-colors duration-200">
            +38 (012) 345-67-89
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
</template>

<script lang="ts" setup>
import { MapPin, Instagram, Facebook, Phone } from 'lucide-vue-next';
</script>

<style>

</style>
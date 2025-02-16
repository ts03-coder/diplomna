<template>
  <Slider :slides="mySlides" />

  <section class="container mx-auto px-4 py-12">
    <h2 class="text-3xl font-bold text-gray-900">Акції</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :images="product.images"
        :title="product.title"
        :description="product.description"
        :oldPrice="product.oldPrice"
        :isPromotion="product.isPromotion"
        :weightPrice="product.weightPrice"
      />
    </div>
  </section>

  <section class="container mx-auto px-4 py-12">
    <h2 class="text-3xl font-bold text-gray-900">Новинки</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :images="product.images"
        :title="product.title"
        :description="product.description"
        :oldPrice="product.oldPrice"
        :isPromotion="product.isPromotion"
        :weightPrice="product.weightPrice"
      />
    </div>
  </section>

  <section class="container mx-auto px-4 py-12">
    <h2 class="text-3xl font-bold text-gray-900">Популярне</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :images="product.images"
        :title="product.title"
        :description="product.description"
        :oldPrice="product.oldPrice"
        :isPromotion="product.isPromotion"
        :weightPrice="product.weightPrice"
      />
    </div>
    <MoreProductCard link="/catalog?all"/>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import ProductCard from '~/components/ProductCard.vue';

useHead({
  title: 'Головна | Бабусни Гостинець',
  meta: [
    {
      name: 'description',
      content: 'Магазин м\'ясних продуктів'
    }
  ]
})

const products = ref([
  {
    id: 1,
    images: 'https://placehold.co/400x400',
    title: 'Преміум Стейки',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam.',
    oldPrice: '12.00',
    isPromotion: true,
    weightPrice: '10.00'
  },
  {
    id: 2,
    images: 'https://placehold.co/400x400',
    title: 'Домашні Ковбаси',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam.',
    oldPrice: '12.00',
    isPromotion: true,
    weightPrice: '10.00'
  },
  {
    id: 3,
    images: 'https://placehold.co/400x400',
    title: 'Фермерське Птиця',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam.',
    oldPrice: '12.00',
    weightPrice: '10.00'
  },
  {
    id: 4,
    images: 'https://placehold.co/400x400',
    title: 'Фермерське Птиця',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam.',
    oldPrice: '12.00',
    weightPrice: '10.00'
  }
])

const mySlides = ref([
  { title: 'Slide 1', image: 'https://placehold.co/1920x1080' },
  { title: 'Slide 2', image: 'https://placehold.co/1920x1080' },
  { title: 'Slide 2', image: 'https://placehold.co/1920x1080' },
])
</script>
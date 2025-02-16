<template>
  <div class="min-h-screen px-4 py-8 md:px-6 lg:px-8">
    <nav class="mb-8">
      <div class="text-sm text-gray-600">
        <NuxtLink to="/">Головна</NuxtLink>
        <span class="mx-2">/</span>
        <NuxtLink to="/catalog" class="hover:text-gray-900">Каталог</NuxtLink>
        <span class="mx-2">/</span>
        <NuxtLink to="/catalog" class="hover:text-gray-900">Ковбаси</NuxtLink>
        <span class="mx-2">/</span>
        <a class="text-gray-900">Ковбаса 7Hermanos Сальчичон Особливий</a>
      </div>
    </nav>

    <div class="max-w-7xl mx-auto space-y-16 md:space-y-24">
      <div class="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h1 class="text-3xl font-semibold mb-6">Ковбаса 7Hermanos Сальчичон Особливий</h1>
          <div class="relative aspect-square rounded-lg overflow-hidden">
            <img
              src="https://images.silpo.ua/products/1600x1600/webp/0437eda3-4aa2-479d-afa0-c79f16726352.png"
              alt="Ковбаса Дрогобицька"
              class="object-cover"
            />
          </div>
        </div>

        <div class="space-y-6">
          <div>
            <h2 class="text-xl font-medium mb-2">Склад:</h2>
            <p class="text-gray-600">
              свинина, яловичина, молоко коров'яче сухе, сіль кухонна, порошок яєчний, цукор білий, перець чорний,
              горіх мускатний, перець духмяний.
            </p>
          </div>

          <div class="space-y-4">
            <div class="flex items-center gap-4">
              <span class="text-lg">Виберіть кількість:</span>
              <div class="flex items-center gap-2">
                <button class="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-50">
                  <Plus class="h-4 w-4" />
                </button>
                <input
                  type="number"
                  value="1"
                  class="w-16 h-10 text-center border border-gray-300 rounded-md"
                  min="1"
                />
                <button class="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-50">
                  <Plus class="h-4 w-4" />
                </button>
              </div>
            </div>

            <div class="text-2xl font-semibold">
              <span v-if="isPromotion" class="text-gray-400 line-through mr-2">{{ oldPrice }} грн</span>
              <span class="text-red-500">{{ weightPrice }} грн</span>
            </div>

            <button class="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-md flex items-center justify-center gap-2 transition-colors">
              <ShoppingCart class="h-5 w-5" />
              Додати в корзину
            </button>
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-2xl font-semibold mb-6">Рекомендовані товари:</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard
            :images="`https://images.silpo.ua/products/1600x1600/webp/b3243243-bdaf-4dbe-939d-43dcc6202e35.png`"
            title="Ковбаса «Самобранка» «Міланська»"
            description="Свіжа ковбаса від місцевого виробника"
            weightPrice="120"
            oldPrice="150"
            :isPromotion="true"
          />
          <ProductCard
            :images="`https://images.silpo.ua/products/1600x1600/webp/7adfa28e-29e7-419a-a59e-05d65ce32f3d.png`"
            title="Ковбаса «Премія»® Брауншвейгська с/к в/ґ"
            description="Свіжа ковбаса від місцевого виробника"
            weightPrice="120"
            oldPrice="150"
            :isPromotion="true"
          />
          <ProductCard
            :images="`https://images.silpo.ua/products/1600x1600/webp/c2469a49-f143-495f-a825-089ed99ae47b.png`"
            title="Філетто лардадо Крафтяр в/у"
            description="Свіжа ковбаса від місцевого виробника"
            weightPrice="120"
            oldPrice="150"
            :isPromotion="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Plus, Minus, ShoppingCart } from 'lucide-vue-next';
import ProductCard from '@/components/ProductCard.vue';

const isPromotion = true;
const weightPrice = 120;
const oldPrice = 150;
</script>

<style>
</style>

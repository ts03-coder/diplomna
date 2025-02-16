<template>
  <div class="min-h-screen px-4 py-8 md:px-6 lg:px-8">
    <nav class="mb-8">
        <div class="text-sm text-gray-600">
          <NuxtLink to="/">Головна</NuxtLink>
          <span class="mx-2">/</span>
          <NuxtLink to="/catalog" class="text-gray-400">Каталог</NuxtLink>
        </div>
      </nav>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto space-y-16 md:space-y-24">
      <h1 class="text-3xl font-bold text-center mb-8">Каталог</h1>

      <div class="flex flex-col md:flex-row gap-8">
        <!-- Filters Sidebar -->
        <aside class="w-full md:w-64 space-y-6">
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h2 class="font-semibold mb-4">Фільтри</h2>

            <!-- Price Range -->
            <div class="space-y-4">
              <h3 class="text-sm font-medium">Ціна</h3>
              <div class="flex gap-2 items-center">
                <input
                  type="number"
                  name="min"
                  v-model="minPrice"
                  @input="handleInputChange"
                  class="w-20 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <span>—</span>
                <input
                  type="number"
                  name="max"
                  v-model="maxPrice"
                  @input="handleInputChange"
                  class="w-20 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div class="relative pt-1">
                <input
                  type="range"
                  name="min"
                  :min="1"
                  :max="100"
                  :value="sliderValue[0]"
                  @input="handleSliderChange"
                  class="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
                />
                <input
                  type="range"
                  name="max"
                  :min="1"
                  :max="100"
                  :value="sliderValue[1]"
                  @input="handleSliderChange"
                  class="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
                />
                <div class="relative z-10 h-2">
                  <div class="absolute z-10 left-0 right-0 bottom-0 top-0 rounded-md bg-gray-200"></div>
                  <div
                    class="absolute z-20 top-0 bottom-0 rounded-md bg-red-500"
                    :style="{
                      left: `${((sliderValue[0] - 1) / 99) * 100}%`,
                      right: `${100 - ((sliderValue[1] - 1) / 99) * 100}%`
                    }"
                  ></div>
                  <div
                    class="absolute z-30 w-6 h-6 top-[-8px] left-0 bg-white border-2 border-red-500 rounded-full"
                    :style="{ left: `calc(${((sliderValue[0] - 1) / 99) * 100}% - 12px)` }"
                  ></div>
                  <div
                    class="absolute z-30 w-6 h-6 top-[-8px] right-0 bg-white border-2 border-red-500 rounded-full"
                    :style="{ right: `calc(${100 - ((sliderValue[1] - 1) / 99) * 100}% - 12px)` }"
                  ></div>
                </div>
              </div>
            </div>

            <!-- Categories -->
            <div class="space-y-2 mt-6">
              <h3 class="text-sm font-medium mb-3">Категорії</h3>
              <div class="space-y-2">
                <label
                  v-for="category in categories"
                  :key="category"
                  class="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    class="w-4 h-4 rounded border-gray-300 text-red-500 focus:ring-red-500"
                  />
                  <span class="text-sm">{{ category }}</span>
                </label>
              </div>
            </div>

            <!-- In Stock Filter -->
            <div class="flex items-center justify-between mt-6">
              <span class="text-sm">В наявності</span>
              <label class="relative inline-flex items-center cursor-pointer">
                <input v-model="inStock" type="checkbox" class="sr-only peer" />
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
              </label>
            </div>

            <!-- Apply Filters Button -->
            <button
              @click="applyFilters"
              class="w-full mt-6 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition-colors"
            >
              Застосувати
            </button>
          </div>
        </aside>

        <!-- Products Grid -->
        <main class="flex-1">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
const minPrice = ref(1)
const maxPrice = ref(100)
const sliderValue = ref([1, 1000])
const inStock = ref(false)
const categories = ref(['Ковбаса', 'Стейк', 'Шашлик'])

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

watch([minPrice, maxPrice], () => {
  sliderValue.value = [minPrice.value, maxPrice.value]
})

const handleSliderChange = (event) => {
  const value = parseInt(event.target.value)
  const [min, max] = sliderValue.value
  
  if (event.target.name === 'min') {
    sliderValue.value = [Math.min(value, max), max]
    minPrice.value = Math.min(value, max)
  } else {
    sliderValue.value = [min, Math.max(value, min)]
    maxPrice.value = Math.max(value, min)
  }
}

const handleInputChange = (event) => {
  const value = parseInt(event.target.value)
  if (event.target.name === 'min') {
    minPrice.value = value
  } else {
    maxPrice.value = value
  }
}

const applyFilters = () => {
  console.log({
    priceRange: [minPrice.value, maxPrice.value],
    inStock: inStock.value
  })
}
</script>
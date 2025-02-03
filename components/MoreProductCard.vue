<template>
<div class="container mx-auto px-4 mt-8">
  <NuxtLink :to="link" class="block w-full bg-white border border-red-100 rounded-2xl p-6 text-center hover:border-red-200 transition-colors group" >
    <div class="inline-flex items-center justify-center">
      <div class="mr-4 w-12 h-12 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </div>
      <div class="text-left">
        <span class="block text-xl font-medium text-gray-900">Більше товарів</span>
        <span class="block text-sm text-gray-500 mt-1">Переглянути весь асортимент</span>
      </div>
    </div>
  </NuxtLink>
</div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: '/'
    }
  }
};
</script>

<style>

</style>
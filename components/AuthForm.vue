<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
    <!-- Backdrop -->
    <div class="fixed inset-0 bg-black/20 backdrop-blur-sm" @click="$emit('close')"></div>

    <!-- Modal -->
    <div class="w-full max-w-md animate-in fade-in zoom-in duration-300 relative">
      <div class="bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg relative">
        <!-- Close button -->
        <button @click="$emit('close')" class="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
          <X class="h-5 w-5" />
        </button>

        <!-- Tabs -->
        <div class="border-b border-gray-200">
          <div class="flex">
            <button
              class="flex-1 py-4 text-center"
              :class="activeTab === 'login' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-500'"
              @click="activeTab = 'login'"
            >
              Вхід
            </button>
            <button
              class="flex-1 py-4 text-center"
              :class="activeTab === 'register' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-500'"
              @click="activeTab = 'register'"
            >
              Реєстрація
            </button>
          </div>
        </div>

        <!-- Form -->
        <div class="p-6">
          <form class="space-y-4">
            <input
              v-if="activeTab === 'register'"
              type="text"
              placeholder="Ім'я"
              class="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              placeholder="Телефон або електронну пошту"
              class="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="password"
              placeholder="Пароль"
              class="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              class="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors"
            >
              {{ activeTab === 'login' ? 'Увійти' : 'Зареєструватися' }}
            </button>

            <div class="relative my-6">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-200"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-white/80 text-gray-500">або</span>
              </div>
            </div>

            <button
              type="button"
              class="w-full flex items-center justify-center gap-2 border border-gray-200 p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <img src="https://www.google.com/favicon.ico" alt="Google" width="20" height="20" />
              <span>Увійти через Google</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { X } from 'lucide-vue-next';

defineEmits(['close']);

const activeTab = ref('login');
</script>

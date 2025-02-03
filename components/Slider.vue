<template>
  <div class="relative w-full h-[450px] overflow-hidden rounded-xl shadow-lg">
    <div 
      class="flex h-full transition-transform duration-600 ease-in-out"
      :style="trackStyle"
      @mouseenter="pauseAutoPlay"
      @mouseleave="resumeAutoPlay"
    >
      <div 
        v-for="(slide, index) in slides" 
        :key="index"
        class="relative min-w-full"
      >
        <img 
          :src="slide.image" 
          :alt="slide.title" 
          class="w-full h-full object-cover brightness-90"
        />
      </div>
    </div>

    <!-- Navigation arrows -->
    <button 
      class="absolute top-1/2 -translate-y-1/2 left-5 bg-white/30 rounded-full w-12 h-12 flex items-center justify-center text-2xl text-white hover:bg-primary/80 hover:text-black transition-all duration-300"
      @click="prevSlide"
    >
      ‹
    </button>
    <button 
      class="absolute top-1/2 -translate-y-1/2 right-5 bg-white/30 rounded-full w-12 h-12 flex items-center justify-center text-2xl text-white hover:bg-primary/80 hover:text-black transition-all duration-300"
      @click="nextSlide"
    >
      ›
    </button>

    <!-- Indicators -->
    <div class="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
      <button
        v-for="(_, index) in slides"
        :key="index"
        class="w-3 h-3 rounded-full transition-all duration-300"
        :class="currentIndex === index ? 'bg-primary scale-125' : 'bg-white/50'"
        @click="goToSlide(index)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      required: true,
      default: () => [
        {
          image: 'https://placehold.co/1920x1080',
          title: 'Преміум Стейки',
        },
        {
          image: 'https://placehold.co/1920x1080',
          title: 'Домашні Ковбаси',
        },
        {
          image: 'https://placehold.co/1920x1080',
          title: 'Фермерське Птиця',
        }
      ]
    },
    autoPlayInterval: {
      type: Number,
      default: 5000
    }
  },
  data() {
    return {
      currentIndex: 0,
      autoPlay: null
    }
  },
  computed: {
    trackStyle() {
      return {
        transform: `translateX(-${this.currentIndex * 100}%)`
      }
    }
  },
  mounted() {
    this.startAutoPlay()
  },
  beforeDestroy() {
    this.clearAutoPlay()
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length
    },
    goToSlide(index) {
      this.currentIndex = index
    },
    startAutoPlay() {
      this.autoPlay = setInterval(() => {
        this.nextSlide()
      }, this.autoPlayInterval)
    },
    pauseAutoPlay() {
      this.clearAutoPlay()
    },
    resumeAutoPlay() {
      this.startAutoPlay()
    },
    clearAutoPlay() {
      if (this.autoPlay) {
        clearInterval(this.autoPlay)
        this.autoPlay = null
      }
    }
  }
}
</script>

<style>
/* Додаткові анімації, якщо потрібні */
.transition-transform {
  transition-property: transform;
}
.duration-600 {
  transition-duration: 600ms;
}
</style>
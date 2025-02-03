import type { Config } from 'tailwindcss'

export default <Config>{
  content: [
    'components/**/*.{vue,js,ts}', 
    'layouts/**/*.vue', 
    'pages/**/*.vue', 
    'app.vue',
    'plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EA580C', // Основний колір
        secondary: '#374151', // Додатковий колір
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

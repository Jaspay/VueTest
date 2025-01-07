/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'wilson-gradient': 'linear-gradient(to bottom, rgb(249 250 251) 0%, rgb(220 220 220) 3%, rgb(150 150 150) 8%, rgb(80 80 80) 12%, rgb(0 0 0) 20%)',
      }
    },
  },
  plugins: [],
}
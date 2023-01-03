export default defineNuxtConfig({
  css: [
    '/assets/css/main.css',
  ],

  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});

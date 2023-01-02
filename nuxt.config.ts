export default defineNuxtConfig({
  css: [
    'ant-design-vue/dist/antd.css',
    '/assets/css/main.css',
  ],

  plugins: ["@/plugins/antd"],

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

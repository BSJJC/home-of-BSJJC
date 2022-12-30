export default defineNuxtConfig({
  modules: ["nuxt-windicss", '@pinia/nuxt'],

  css: ['ant-design-vue/dist/antd.css'],

  plugins: ["@/plugins/antd"],

  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});

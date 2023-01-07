<template>
  <div
    class="px-5 py-3 flex justify-between shadow-lg select-none transition-all duration-300 dark:bg-black dark:shadow-white">

    <!-- title -->
    <div class="uppercase font-bold font-deyi text-3xl dark:text-white">
      <nuxt-link to="/" class="hover:text-black dark:hover:text-white">
        BSJJC's little home
      </nuxt-link>
    </div>

    <!-- menu icon -->
    <div @click="drawer = true">
      <svg xmlns="http://www.w3.org/2000/svg"
        class="w-8 transition-all duration-75 hover:cursor-pointer dark:stroke-white" viewBox="0 0 24 24"
        stroke-width="2.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </div>
  </div>


  <!-- drawer compoennt -->
  <client-only>
    <el-drawer v-model="drawer" direction="ltr" size="60%" :with-header="false">

      <div class="uppercase font-bold font-deyi text-4xl mb-10 select-none">menu</div>

      <el-divider />

      <!-- list of page links -->
      <li v-for="(i, index) in urls" :key="index" @click="drawer = false"
        class="list-none pb-4 text-center mb-2 group relative hover:cursor-pointer">

        <nuxt-link :to="i.url" class="text-3xl font-deyi group-hover:font-bold hover:text-black dark:text-white">
          {{ i.urlName }}
        </nuxt-link>

        <span
          class="absolute left-0 bottom-4 w-full h-1 rounded-t-md pointer-events-none bg-gray-600 group-hover:h-1/3 group-hover:transition-all group-hover:opacity-20">
        </span>
      </li>

      <!-- dark mode switch button -->
      <el-switch v-model="darkModeChange" size="large" inline-prompt :active-icon="Sunny" :inactive-icon="Moon"
        @change="changeTheme" style="--el-switch-on-color: #000; --el-switch-off-color: #000"
        class="ml-24 mt-8 shadow-none" />
    </el-drawer>
  </client-only>

  <slot />
</template>

<script setup lang="ts">
import { Sunny, Moon } from '@element-plus/icons-vue'

const drawer = ref(true);
const darkModeChange = ref(true);

interface linkType {
  urlName: string
  url: string,
};

const urls: linkType[] = [
  {
    urlName: "home",
    url: "/"
  },
  {
    urlName: "about",
    url: "/about"
  },
  {
    urlName: "products",
    url: "/products"
  }
];

// true  => light
// false => dark
let check = ref<boolean>(true);

onMounted(() => {
  if (localStorage.theme) {
    document.documentElement.classList.add('dark')
    check.value = !check.value
  }
});

const changeTheme = (): void => {
  const nowTheme = localStorage.getItem('theme');

  if (nowTheme === 'dark') {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', "")
  }
  else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', "dark")
  }
};
</script>

<style scoped>
/* :deep(.el-switch__action) {
  background-color: red;
} */

:deep(.el-drawer__body) {
  background-color: red;
}
</style>
<template>
  <div class="px-5 py-3 flex justify-between shadow-lg mb-4 select-none">
    <div class="uppercase font-bold font-deyi text-3xl">
      <nuxt-link to="/" class="hover:text-black">
        homo products
      </nuxt-link>
    </div>
    <div @click="showDrawer = true">
      <img src="@/assets/icons/folder.svg" class="w-8 hover:cursor-pointer">
    </div>
  </div>

  <a-drawer v-model:visible="showDrawer" placement="left" :closable="false" width="300">
    <div class="uppercase font-bold font-deyi text-4xl mb-10 select-none">menu</div>


    <li v-for="(i, index) in urls" :key="index" @click="showDrawer = false"
      class="list-none pb-4 text-center mb-2 group relative hover:cursor-pointer">
      <nuxt-link :to="i.url" class="block w-full text-3xl font-deyi text-center group-hover:font-bold hover:text-black">
        {{ i.urlName }}
      </nuxt-link>
      <div
        class="absolute left-0 bottom-4 w-full h-1 rounded-t-md bg-gray-300 -z-10 group-hover:h-1/3 group-hover:transition-all">
      </div>
    </li>
  </a-drawer>

  <slot />
</template>

<script setup lang="ts">
const showDrawer = ref<boolean>(false);

interface linkType {
  urlName: string
  url: string,
}

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
]
</script>
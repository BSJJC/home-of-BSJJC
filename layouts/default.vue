<template>
  <div class="bg-red-100 px-5 py-3 flex justify-between">
    <div class="uppercase font-bold text-2xl">home products</div>
    <div @click="visible = true">
      <img src="@/assets/icons/folder.svg" class="w-8 hover:cursor-pointer">
    </div>
  </div>

  <a-drawer v-model:visible="visible" title="MENU" placement="left" :closable="false" width="300">
    <li v-for="(i, index) in urls" :key="index" @click="visible = false" class="list-none pb-4 font-culpa">
      <nuxt-link :to="i.url" class="text-2xl font-deyi hover:underline">
        {{ i.urlName }}
        123
      </nuxt-link>
    </li>
  </a-drawer>

  <slot />
</template>

<script setup lang="ts">
const visible = ref<boolean>(false);

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
  }
]
</script>
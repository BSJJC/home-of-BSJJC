<template>
  <div class="bg-red-100 px-5 py-3 flex justify-between">
    <div class="uppercase font-bold text-2xl">home products</div>
    <div @click="visible = true">
      <img src="@/assets/icons/folder.svg" class="w-8 hover:cursor-pointer">
    </div>
  </div>

  <a-drawer v-model:visible="visible" title="MENU" placement="left" :closable="false" size="default">
    <a-button>home</a-button>
    <a-button>about</a-button>
  </a-drawer>

  <slot />
</template>

<script setup lang="ts">
const visible = ref<boolean>(false);
</script>
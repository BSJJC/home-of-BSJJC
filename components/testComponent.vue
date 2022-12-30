<template>
  <div>
    <a-button type="primary" @click="showDrawer">Open</a-button>
    <a-drawer v-model:visible="visible" title="Basic Drawer" placement="left">
    </a-drawer>
  </div>
</template>

<script setup lang="ts">
const visible = ref<boolean>(false);

const showDrawer = () => {
  visible.value = true;
};
</script>

<style scoped>

</style>
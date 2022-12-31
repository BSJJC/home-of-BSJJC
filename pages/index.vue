<template>
  <div>
    <h1 class="text-4xl text-center font-bold dark:bg-red-200">this is the index / home page</h1>

    <a-switch v-model:checked="check" @change="changeTheme" class="dark:bg-black">
      <template #checkedChildren>
        <svg viewBox="0 0 16 16" width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_iconCarrier">
            <g fill="#000000">
              <path d="M8 .25a.75.75 0 01.75.75v1.273a.75.75 0 01-1.5 0V1A.75.75 0 018 .25z"></path>
              <path fill-rule="evenodd" d="M4 8a4 4 0 118 0 4 4 0 01-8 0zm4-2.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
                clip-rule="evenodd"></path>
              <path
                d="M8.75 13.727a.75.75 0 00-1.5 0V15a.75.75 0 001.5 0v-1.273zM2.519 2.518a.75.75 0 011.06 0l.904.904a.75.75 0 01-1.06 1.06l-.904-.903a.75.75 0 010-1.06zM12.578 11.517a.75.75 0 00-1.061 1.06l.904.904a.75.75 0 101.06-1.06l-.903-.904zM.25 8A.75.75 0 011 7.25h1.273a.75.75 0 010 1.5H1A.75.75 0 01.25 8zM13.727 7.25a.75.75 0 000 1.5H15a.75.75 0 000-1.5h-1.273zM4.483 11.517a.75.75 0 010 1.06l-.904.904a.75.75 0 01-1.06-1.06l.903-.904a.75.75 0 011.061 0zM13.481 3.58a.75.75 0 00-1.06-1.062l-.904.904a.75.75 0 101.06 1.06l.904-.903z">
              </path>
            </g>
          </g>
        </svg>

      </template>
      <template #unCheckedChildren>
        <svg t="1672489082657" class="-rotate-90" viewBox="0 0 1024 1024" version="1.1"
          xmlns="http://www.w3.org/2000/svg" p-id="5750" width="20" height="20">
          <path
            d="M935.538601 630.40178c-11.43005-11.432249-28.673759-14.738607-43.531086-8.353536-46.733115 20.10317-96.362866 30.296859-147.50719 30.296859-99.589478 0-193.221796-38.783705-263.640252-109.20316-108.636744-108.636744-139.609745-270.022125-78.9083-411.148441 6.388069-14.85233 3.078713-32.098837-8.353536-43.532285-11.432249-11.432249-28.675758-14.743604-43.532285-8.354536-52.637312 22.64025-100.017388 54.809439-140.82552 95.616372-85.346135 85.346135-132.346869 198.821199-132.346869 319.519766 0 120.699566 47.001733 234.172631 132.347868 319.518766s198.821199 132.349067 319.517567 132.349067c120.699566 0 234.172431-47.002932 319.520765-132.351066 40.808132-40.810131 72.977122-88.190207 95.615373-140.82552C950.282205 659.081735 946.971849 641.834029 935.538601 630.40178z"
            fill="#ffffff" p-id="5751"></path>
        </svg>

      </template>
    </a-switch>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "home"
});

// true  => light
// false => dark
let check = ref<boolean>(true);
onMounted(() => {
  if (localStorage.thememp) {
    document.documentElement.classList.add('dark')
    check.value = !check.value
  }
})

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
}

</script>
<script setup lang="ts">
const color = useColorMode()

useHead({
  meta: [{
    id: 'theme-color',
    name: 'theme-color',
    content: () => color.value === 'dark' ? '#222222' : '#ffffff',
  }],
})

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button class="outline-none!" @click="toggleDark">
    <Icon :name="color.value === 'dark' ? 'carbon:moon' : 'carbon:sun'" />
  </button>
</template>

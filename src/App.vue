<script setup lang="ts">
import usePageRequests from './composables/usePageRequests'
const { isLoading } = usePageRequests()
</script>

<template>
  <header class="h-15 bg-emerald-300">
    <h1 class="text-white text-4xl p-2 mx-4 flex gap-2">
      <RouterLink to="/posts">Blog</RouterLink>
      <span v-if="isLoading">Loading...</span>
    </h1>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <hr class="" />
    <p class="text-center text-gray-500 text-sm p-2">
      <RouterLink to="/build-info">&copy; 2025 Blog</RouterLink>
    </p>
  </footer>
</template>

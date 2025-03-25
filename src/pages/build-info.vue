<script setup lang="ts">
import { ref } from 'vue'

const buildInfo = ref('')

;(async () => {
  try {
    const response = await fetch('./build-info.txt')
    buildInfo.value = await response.text()
  } catch (error: unknown) {
    buildInfo.value = 'Failed to fetch build info: ' + (error as Error)?.message
  }
})()
</script>

<template>
  <pre class="m-4">{{ buildInfo }}</pre>
</template>

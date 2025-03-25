<script setup lang="ts">
import type { Post } from '@/types'

// TODO verify this
const { post } = defineProps({
  post: {
    type: Object as () => Post,
    required: true,
  },
})
</script>

<template>
  <div class="flex items-center w-1/4 rounded overflow-hidden shadow-md gap-2">
    <img class="w-[150px] h-[150px] shrink-0" src="@/assets/150x150.png" alt="post image" />
    <RouterLink
      :to="{
        name: '/posts/[id]',
        params: { id: post.id.toString() },
      }"
      class="text-xl font-bold text-gray-500 hover:text-gray-700"
      >{{ post.title }}</RouterLink
    >
  </div>
</template>

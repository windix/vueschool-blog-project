<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import useResource from '@/composables/useResource'

const { item: post, fetchById: fetchPostById } = useResource('posts')
const { item: user, fetchById: fetchUserById } = useResource('users')

const route = useRoute()

if (route.name === '/posts/[id]') {
  // Method 1: .tnen()
  // fetchPostById(Number.parseInt(route.params.id)).then((post) => {
  //   if (post) {
  //     fetchUserById(post.userId)
  //   }
  // })
  //
  // Method 2: IIFE (Immediately Invoked Function Expression)
  // ;(async () => {
  //   const post = await fetchPostById(Number.parseInt(route.params.id))
  //   if (post) {
  //     fetchUserById(post.userId)
  //   }
  // })()
  //
  // Method 3: watch
  fetchPostById(Number.parseInt(route.params.id))

  watch(
    () => ({ ...post?.value }),
    () => {
      if (post?.value?.userId) {
        fetchUserById(post?.value?.userId)
      }
    },
  )
}
</script>

<template>
  <div v-if="post" class="p-4">
    <h1 class="text-3xl p-2">{{ post.title }}</h1>
    <h2 class="text-sm text-gray-600 p-2">By {{ user?.name }}</h2>
    <div class="text-lg p-2">{{ post.body }}</div>
  </div>
</template>

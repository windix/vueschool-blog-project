<script setup lang="ts">
import PostCard from '@/components/PostCard.vue'
import useResource from '@/composables/useResource'

const { items: posts, fetchAll } = useResource('posts')

fetchAll()
</script>

<template>
  <div class="flex flex-wrap gap-4 m-4">
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

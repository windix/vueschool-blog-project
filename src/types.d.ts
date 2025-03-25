export type ResourceType = 'posts' | 'users'

export type ItemTypeMapping = {
  posts: Post
  users: User
}

export type Post = {
  id: number
  title: string
  body: string
  userId: number
}

export type User = {
  id: number
  name: string
}

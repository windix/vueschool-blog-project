import type { ItemTypeMapping, ResourceType } from '@/types'
import { ref, type Ref } from 'vue'
import { apiBaseUrl } from '@/config/api'
import usePageRequests from './usePageRequests'

export default <T extends ResourceType>(resourceType: T) => {
  type ItemType = ItemTypeMapping[T]

  const item: Ref<ItemType | null> = ref(null)
  const items: Ref<ItemType[]> = ref([])

  const { makeRequest } = usePageRequests()

  const fetchAll = async (): Promise<ItemType[]> => {
    // const res = await fetch(`${apiBaseUrl}/${resourceType}`)
    // items.value = await res.json()

    items.value = await makeRequest(`${apiBaseUrl}/${resourceType}`)
    return [...items.value]
  }

  const fetchById = async (id: number): Promise<ItemType | null> => {
    // const res = await fetch(`${apiBaseUrl}/${resourceType}/${id}`)
    // item.value = await res.json()

    item.value = await makeRequest(`${apiBaseUrl}/${resourceType}/${id}`)

    if (!item.value) {
      return null
    }

    return { ...item.value }
  }

  return {
    item,
    items,
    fetchAll,
    fetchById,
  }
}

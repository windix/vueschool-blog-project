import { computed, ref } from 'vue'

const _delay = (time: number) => {
  return new Promise((resolve) => setTimeout(resolve, time))
}

const activeReuqestsCount = ref(0)

export default () => {
  const makeRequest = async (url: string) => {
    try {
      activeReuqestsCount.value++

      // await _delay(2000)

      const res = await fetch(url)
      const data = res.json()

      activeReuqestsCount.value--
      return data
    } catch (error) {
      alert(error)

      activeReuqestsCount.value--
      return null
    }
  }

  const isLoading = computed(() => activeReuqestsCount.value > 0)

  return {
    makeRequest,
    isLoading,
  }
}

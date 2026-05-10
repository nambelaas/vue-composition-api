<script lang="ts">
import { ref } from 'vue'
export default {
  setup() {
    const message = ref('Hello')
    const quantity = ref(0)

    const increment = () => quantity.value++
    const decrement = () => {
      if (quantity.value > 0) {
        return quantity.value--
      }

      return quantity.value
    }

    return {
      message,
      quantity,
      increment,
      decrement,
    }
  },
}
</script>

<template>
  <h1>{{ message }}</h1>
  <h2>{{ quantity }}</h2>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
</template>

<script lang="ts">
import { ref, reactive } from 'vue'

export default {
  setup() {
    const message = ref('Hello')
    const quantity = ref(0) // dipake untuk struktur data yang sederhana
    const item = reactive({
      name: 'Product 1',
      price: 100,
    }) // dipake untuk struktur data yang kompleks, seperti object atau array

    const increment = () => quantity.value++
    const decrement = () => {
      if (quantity.value > 0) {
        return quantity.value--
      }

      return quantity.value
    }

    const swapProduct = () => {
      item.name = 'Product 2'
      item.price = 150
    }

    return {
      message,
      quantity,
      increment,
      decrement,
      item,
      swapProduct,
    }
  },
}
</script>

<template>
  <h1>{{ item.name }} : {{ item.price }}</h1>
  <button @click="swapProduct">Swap Product</button>
  <h2>{{ quantity }}</h2>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
</template>

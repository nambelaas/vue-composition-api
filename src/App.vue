<script lang="ts">
import { ref, reactive, toRef, toRefs } from 'vue'

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

    // const nameRef = toRef(item, 'name')

    // console.log('nameRef:', nameRef.value)

    // item.name = 'Product 3'

    // console.log('nameRef:', nameRef.value)

    const { name, price } = toRefs(item)

    // console.log('Name:', itemRefs.name.value)
    // console.log('Price:', itemRefs.price.value)

    // item.name = 'Product 5'
    // item.price = 50

    // console.log('Name:', itemRefs.name.value)
    // console.log('Price:', itemRefs.price.value)

    return {
      message,
      quantity,
      increment,
      decrement,
      name,
      price,
      swapProduct,
    }
  },
}
</script>

<template>
  <h1>{{ name }} : {{ price }}</h1>
  <button @click="swapProduct">Swap Product</button>
  <h2>{{ quantity }}</h2>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
</template>

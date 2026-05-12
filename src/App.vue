<script lang="ts">
import { computed, ref, reactive, toRef, toRefs, watch, watchEffect } from 'vue'
import CartItem from './components/CartItem.vue'
import useCart from './useCart'

export default {
  components: {
    CartItem,
  },
  setup() {
    const { items, addItem, removeItem } = useCart()

    addItem({
      id: 1,
      name: 'Product 1',
      price: 100,
      quantity: 1,
    })

    const message = ref('Hello') // dipake untuk struktur data yang sederhana
    const item = reactive({
      name: 'Product 1',
      price: 100,
      quantity: 1,
    }) // dipake untuk struktur data yang kompleks, seperti object atau array

    const increment = () => item.quantity++
    const decrement = () => {
      if (item.quantity > 0) {
        return item.quantity--
      }

      return item.quantity
    }

    const swapProduct = () => {
      item.name = 'Product 2'
      item.price = 150
    }

    const total = computed(() => item.price * item.quantity)

    // const nameRef = toRef(item, 'name')

    // console.log('nameRef:', nameRef.value)

    // item.name = 'Product 3'

    // console.log('nameRef:', nameRef.value)

    const { name, price, quantity } = toRefs(item)

    // console.log('Name:', itemRefs.name.value)
    // console.log('Price:', itemRefs.price.value)

    // item.name = 'Product 5'
    // item.price = 50

    // console.log('Name:', itemRefs.name.value)
    // console.log('Price:', itemRefs.price.value)

    watch(
      () => item.quantity,
      () => {
        if (item.quantity == 5) {
          alert('Maximum quantity reached!')
        }
      },
      { immediate: true },
    )

    watchEffect(() => {
      console.log('Price change: ', item.price)
    })

    // const items = reactive([
    //   {
    //     id: 1,
    //     name: 'Product 1',
    //     price: 100,
    //     quantity: 1,
    //   },
    //   {
    //     id: 2,
    //     name: 'Product 2',
    //     price: 130,
    //     quantity: 1,
    //   },
    // ])

    // const handleRemove = (data: Array<Object>) => items.splice(0, 1)

    return {
      message,
      increment,
      decrement,
      name,
      price,
      quantity,
      swapProduct,
      total,
      items,
      // handleRemove,
      removeItem,
    }
  },
}
</script>

<template>
  <!-- <h1>{{ name }} : {{ price }}</h1>
  <div class="flex gap-2 my-2">
    <button
      @click="swapProduct"
      class="border border-gray-200 py-2 px-4 rounded-md cursor-pointer hover:bg-gray-100"
    >
      Swap Product
    </button>
    <button
      @click="price++"
      class="border border-green-500 py-2 px-4 rounded-md cursor-pointer bg-green-300 hover:bg-green-400 text-green-800"
    >
      Increase Price
    </button>
    <button
      @click="price--"
      class="border border-red-500 py-2 px-4 rounded-md cursor-pointer bg-red-300 hover:bg-red-400 text-green-800"
    >
      Decrease Price
    </button>
  </div>

  <h2>Quantity: {{ quantity }}</h2>
  <div class="flex gap-2 my-2">
    <button
      @click="increment"
      class="border border-gray-200 py-2 px-4 rounded-md cursor-pointer hover:bg-gray-100"
    >
      +
    </button>
    <button
      @click="decrement"
      class="border border-gray-200 py-2 px-4 rounded-md cursor-pointer hover:bg-gray-100"
    >
      -
    </button>
  </div>
  <h2>Total: {{ total }}</h2> -->

  <CartItem v-for="item in items" :cart-item="item" :key="item.id" @remove="removeItem" />
</template>

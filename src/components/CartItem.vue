<template>
  <h1>{{ name }} : {{ price }} : {{ quantity }}</h1>

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
    <button
      @click="remove"
      class="border border-gray-200 py-2 px-4 rounded-md cursor-pointer hover:bg-gray-100"
    >
      x
    </button>
  </div>
  <h2>Total: {{ total }}</h2>
</template>

<script lang="ts">
import { computed, reactive, toRefs, onMounted, onUpdated, onUnmounted } from 'vue'

export default {
  name: 'CartItem',
  props: {
    cartItem: {
      type: Object,
      required: true,
    },
  },
  emits: ['remove'],
  setup(props, { emit }) {
    const item = reactive(props.cartItem)

    const increment = () => item.quantity++
    const decrement = () => {
      if (item.quantity > 0) {
        return item.quantity--
      }

      return item.quantity
    }

    const total = computed(() => item.price * item.quantity)

    const { name, price, quantity } = toRefs(item)

    const remove = () => emit('remove', item)

    onMounted(() => {
      console.log('Component mounted.')
    })

    onUpdated(() => {
      console.log('Component updated.')
    })

    onUnmounted(() => {
      console.log('Component unmounted.')
    })

    return {
      increment,
      decrement,
      total,
      name,
      price,
      quantity,
      remove,
    }
  },
}
</script>

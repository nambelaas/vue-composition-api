<script lang="ts">
export default {
  setup() {
    const message = 'Hello'

    return {
      message,
    }
  },
}
</script>

<template>
  <h1>{{ message }}</h1>
</template>

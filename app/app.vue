<template>
  <div>
    salom{{ num }}

    <button @click="increment">increment</button>
  </div>
</template>

<script setup>
const num = ref(1)

const increment = () => {
  num.value++
}
</script>

<template>
  <NuxtLink to="/user" class="user-avatar">
    <p>
      {{ props.username?.charAt(0).toUpperCase() || 'J' }}
    </p>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { User } from '../model/types'

const props = defineProps<Partial<User>>()
</script>

<style scoped>
.user-avatar {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;
  padding: 10px;

  font-weight: 500;
  border-radius: 50%;
  background-color: antiquewhite;
  text-decoration: none;
}

.user-avatar p {
  margin: 0;
  color: black;
  font-size: 24px;
}
</style>    
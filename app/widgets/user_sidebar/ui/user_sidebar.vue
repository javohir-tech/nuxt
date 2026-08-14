<script setup lang="ts">
import { menu } from '../models/useMenu';
</script>

<template>
 <div class="sidebar_links">
    <NuxtLink v-for="link in menu"  :key="link.title" :to="link.to">{{ link.title }}</NuxtLink>
 </div>
</template>

<style scoped>
.sidebar_links {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 20px;
    background-color: aqua;
    border-radius: 10px;
}

.sidebar_links a {
    text-decoration: none;
}
</style>
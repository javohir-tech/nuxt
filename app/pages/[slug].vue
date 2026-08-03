<template>
    <div>
        <h1>Dynamic Page</h1>
        <p>This is a dynamic page with slug: {{ slug }}</p>
    </div>
</template>

<script setup lang="ts">
const { slug } = useRoute().params
</script>
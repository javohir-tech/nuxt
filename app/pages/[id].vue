<script setup lang="ts">

const { id } = useRoute().params
</script>
<template>
    <div>
        <h1>Dynamic Page</h1>
        <p>This is a dynamic page with ID: {{ id }}</p>
    </div>
</template>
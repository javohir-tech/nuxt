<template>
    <Navbar />
    <main>
        <slot />
    </main>
    
</template>


<script setup lang="ts">
import Navbar from '~/widgets/Navbar/ui/Navbar.vue';


</script>
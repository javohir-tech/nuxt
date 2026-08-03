<template>
    <Navbar />
    <main>
        <slot />
    </main>
    <footer>
        footer
    </footer>
</template>


<script setup lang="ts">
import Navbar from '~/widgets/Navbar/ui/Navbar.vue';


</script>
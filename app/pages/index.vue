<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useThemeStore } from '~/shared/model';

const themeStore = useThemeStore()

const { theme } = storeToRefs(themeStore)
</script>


<template>
    <div class="container">
        <div :class="theme">
            home
        </div>
    </div>
</template>

<style scoped>
.light {
    background-color: #ffffff;
    color: #111111;
}

.dark {
    padding: 10px;
    background-color: #111111;
    color: #ffffff;
}
</style>
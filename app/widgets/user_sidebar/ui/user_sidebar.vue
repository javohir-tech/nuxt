<script setup lang="ts">
import { menu } from '../models/useMenu';
</script>

<template>
    <div class="sidebar_links">
        <NuxtLink
            v-for="link in menu"
            :key="link.title"
            :to="link.to"
            class="sidebar_link"
        >
            {{ link.title }}
        </NuxtLink>
    </div>
</template>

<style scoped>
.sidebar_links {
    display: flex;
    flex-direction: column;
    gap: 6px;

    padding: 14px;

    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 14px;

    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
}

.sidebar_link {
    display: flex;
    align-items: center;

    min-height: 42px;
    padding: 0 14px;

    border-radius: 9px;

    color: #6b7280;
    text-decoration: none;

    font-size: 14px;
    font-weight: 500;

    transition:
        background 0.2s ease,
        color 0.2s ease;
}

.sidebar_link:hover {
    background: #f3f4f6;
    color: #111827;
}

.sidebar_link.router-link-active {
    background: #111827;
    color: #ffffff;
}
</style>
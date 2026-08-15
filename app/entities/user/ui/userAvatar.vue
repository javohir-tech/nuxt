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

    width: 42px;
    height: 42px;

    border: 1px solid #e5e7eb;
    border-radius: 50%;

    background: #f3f4f6;

    color: #111827;
    text-decoration: none;

    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);

    transition:
        background 0.2s ease,
        border-color 0.2s ease,
        transform 0.2s ease;
}

.user-avatar:hover {
    background: #e5e7eb;
    border-color: #d1d5db;
    transform: translateY(-1px);
}

.user-avatar p {
    margin: 0;

    color: #111827;
    font-size: 17px;
    font-weight: 600;
    line-height: 1;
}
</style>
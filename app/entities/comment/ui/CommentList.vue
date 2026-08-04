<script setup lang="ts">
import { commentApi } from '../api/commentApi';

const { data: comments, pending, error } = await useAsyncData("comments", () =>
    commentApi.getAll()
)

</script>

<template>
    <div class="container">
        <p v-if="pending">LOADING...</p>
        <p v-else-if="error">{{ error.message }}</p>
        <div v-for="comment in comments" :key="comment.name">
            <p>{{ comment.name }}</p>
            <p>{{ comment.email }}</p>
        </div>
    </div>
</template>
<script setup lang="ts">
import { SignUp } from '~/features/auth';

definePageMeta({
    middleware: ["guest"]
})
</script>

<template>
    <div class="container">
        <SignUp />
    </div>
</template>
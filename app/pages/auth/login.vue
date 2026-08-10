<script setup lang="ts">
import { LoginForm } from '~/features/auth';
definePageMeta({
    middleware: ['guest']
})

</script>

<template>
    <section class="container">
        <LoginForm />
    </section>
</template>

<style></style>
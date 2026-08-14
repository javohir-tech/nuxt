<script setup lang="ts">
definePageMeta({
    middleware: [
         (to, from) => {
            const token = useCookie("access_token")
            if (!token.value) {
                return navigateTo("/auth/login")
            }
        }
    ]
})
</script>
<template>
    <div class="container">
salom
    </div>
</template>

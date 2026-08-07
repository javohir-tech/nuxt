<template>
user profile
</template>

<script setup lang="ts">
definePageMeta({
    middleware : [
        function (to , from) {
            const token = useCookie("token")
            console.log("token yogu brat")
        }
    ]
})
</script>
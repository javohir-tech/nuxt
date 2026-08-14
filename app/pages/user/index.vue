<script setup lang="ts">
import { getUser, UserAvatar, type User } from '~/entities/user';

definePageMeta({
    middleware: [
        (to, from) => {
            const token = useCookie("access_token")
            if (!token.value) {
                return navigateTo("/auth/login")
            }
        }
    ],
    layout: "user"
})


const { data, pending, error } = useAsyncData("user", () => getUser())

</script>
<template>
    <div v-if="data">
        <UserAvatar :username="data.data.username" />
        <p>{{ data.data.username }}</p>
        <p>{{ data.data.email }}</p>
        <p>{{ data.data.is_staff }}</p>
    </div>
    <div v-else-if="pending">
        <h1>Loading...</h1>
    </div>
</template>

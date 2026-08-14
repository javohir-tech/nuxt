<script setup lang="ts">
import { UserSideBar } from '~/widgets/user_sidebar';


</script>

<template>
    <NuxtLayout name="default">
        <div class="container">
            <div class="user_layout_box">
                <div class="sidebar">
                <UserSideBar />
                </div>
                <main class="content">
                    <slot />
                </main>
            </div>
        </div>
    </NuxtLayout>
</template>

<style scoped>
.user_layout_box{
    display: flex;
    gap: 10px;
}

.sidebar{
    flex : 2
}

.content {
    flex: 10;
}
</style>
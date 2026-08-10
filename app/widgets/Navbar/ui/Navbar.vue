<script setup lang="ts">
import { Button } from '~/shared/ui/Button';
import { menu } from '../model/useMenu';

import { useAuth } from '~/features/auth';
import { useThemeStore } from '~/shared/model';

const themeStore = useThemeStore()

const { handleLogout, pending, error } = useAuth()

</script>


<template>
    <header class="navbar">
        <div class="container">
            <div class="navbar-box">
                <nav>
                    <ul class="nav_list">
                        <li v-for="item in menu" :key="item.to">
                            <NuxtLink active-class="isActive_link" :to="item.to">{{ item.title }}</NuxtLink>
                        </li>
                    </ul>

                </nav>
                <div>
                    <Button title="logout" :pending="pending" @click="handleLogout" />
                    <Button :title="themeStore.theme === 'light' ? 'dark' : 'ligth'" @click="themeStore.toggleTheme" />
                </div>
                <div v-if="error">
                    {{ error }}
                </div>
            </div>
        </div>
    </header>
</template>

<style>
.navbar {
    background-color: #224248;
    margin-bottom: 20px;
}

.navbar-box {
    justify-content: space-between;
    align-items: center;
    display: flex;
}


.nav_list {
    display: flex;
    gap: 20px;
    margin: 0;
    padding: 0;
    margin-bottom: 20px;
    padding: 20px 0px;
    list-style: none;

    a {
        text-decoration: none;
        color: white;
        font-size: 16px;
        font-weight: 400;
    }
}

.isActive_link {
    color: red !important;
}
</style>

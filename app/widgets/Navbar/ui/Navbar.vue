<script setup lang="ts">
import { Button } from '~/shared/ui/Button';
import { menu } from '../model/useMenu';

import { useThemeStore } from '~/shared/model';
import { UserAvatar } from '~/entities/user';

const themeStore = useThemeStore()
</script>

<template>
    <header class="navbar">
        <div class="container">
            <div class="navbar-box">
                <nav>
                    <ul class="nav_list">
                        <li v-for="item in menu" :key="item.to">
                            <NuxtLink
                                active-class="isActive_link"
                                :to="item.to"
                            >
                                {{ item.title }}
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>

                <div class="navbar_actions">
                    <UserAvatar :username="'Suvonov'" />

                    <Button
                        :title="themeStore.theme === 'light' ? 'dark' : 'ligth'"
                        @click="themeStore.toggleTheme"
                    />
                </div>
            </div>
        </div>
    </header>
</template>

<style>
.navbar {
    background: #ffffff;
    border-bottom: 1px solid #e5e7eb;
    margin-bottom: 20px;

    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
}

.navbar-box {
    display: flex;
    align-items: center;
    justify-content: space-between;

    min-height: 72px;
}

.nav_list {
    display: flex;
    align-items: center;
    gap: 8px;

    margin: 0;
    padding: 0;

    list-style: none;
}

.nav_list a {
    display: flex;
    align-items: center;

    padding: 9px 14px;

    border-radius: 8px;

    color: #6b7280;
    text-decoration: none;

    font-size: 15px;
    font-weight: 500;

    transition:
        background 0.2s ease,
        color 0.2s ease;
}

.nav_list a:hover {
    background: #f3f4f6;
    color: #111827;
}

.nav_list .isActive_link {
    background: #111827;
    color: #ffffff !important;
}

.navbar_actions {
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>
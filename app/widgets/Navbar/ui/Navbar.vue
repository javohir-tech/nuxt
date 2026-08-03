<template>
    <header class="navbar">
        <nav>
            <div class="container">
                <ul class="nav_list">
                    <li v-for="item in menu" :key="item.to">
                        <NuxtLink active-class="isActive_link" :to="item.to">{{ item.title }}</NuxtLink>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<style>
@import url("../../../shared/styles/reset.css");

.navbar {
    background-color: #224248;
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
        color: white ;
        font-size: 16px;
        font-weight: 400;
    }
}

.isActive_link {
    color: red !important;
}
</style>

<script setup lang="ts">
import { menu } from '../model/useMenu';
</script>
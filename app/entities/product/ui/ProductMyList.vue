<script setup lang="ts">
import { getMyProducts } from '../api';
import ProductCard from './ProductCard.vue';

const { data, pending, error, refresh } = useAsyncData("my_prodcutes", () => getMyProducts())
</script>

<template>
    <div v-if="data" class="product_box">
        <ProductCard v-for="product in data?.data" :key="product.id" :name="product.name" :price="product.price"
            :id="product.id" :user_id="product.user_id" />
    </div>
    <div v-else-if="pending">
        <h1 style="text-align: center;">Loading...</h1>
    </div>
    <div v-else-if="error">
        <p style="text-align: center;">{{ error }}</p>
    </div>
</template>
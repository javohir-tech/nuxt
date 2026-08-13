<script setup lang="ts">
import { getProducts } from '../api';
import ProductCard from './ProductCard.vue';

const { data, pending, error, refresh } = useAsyncData("products", () => getProducts())


onMounted(() => {
    // console.log(data.value)
})
</script>

<template>
    <div class="product_box" v-if="data">
        <ProductCard v-for="product in data?.data" :key="product.id" :name="product.name" :id="product.id"
            :user_id="product.user_id" :price="product.price" />
    </div>
    <div v-else-if="pending">
        <h1 style="text-align: center;">Loading...</h1>
    </div>
    <div v-else-if="error">
        <p style="text-align: center;">{{ error }}</p>
    </div>
</template>

<style scoped>
.product_box {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}
</style>
<script setup lang="ts">
import { ProductCardWithCart } from '~/features/cart-add-item';
import { getProducts } from '~/entities/product';

const { data , pending , error } = useAsyncData("produxtes", () => getProducts())
</script>
<template>
    <div class="container">
        <h1>Products</h1>
        <div v-if="data?.data" class="product_box">
            <ProductCardWithCart v-for="product in data?.data" :product="product"/>
        </div>
        <div v-else-if="pending">
            <h1 style="text-align: center;">Loading...</h1>
        </div>
        <div v-else-if="error">
            <h1>{{ error }}</h1>
        </div>
    </div>
</template>

<style scoped>
.product_box{
    display: grid;
    grid-template-columns: repeat(4 , 1fr);
    gap: 20px;
}
</style>
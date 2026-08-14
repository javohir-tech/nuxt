<script setup lang="ts">
import { ProductCard } from '~/entities/product';
import type { Product } from '~/entities/product';
import useCart from '../models/useCard';

const { cart_products, getCount, add_cart, increment, decrement } = useCart()

defineProps<{
    product: Product
}>()

</script>

<template>
    <ProductCard :product="product" :count="getCount(product.id)" @add-to-cart="add_cart(product)" @increment="increment"
        @decrement="decrement" />
</template>
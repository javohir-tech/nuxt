<script setup lang="ts">
import { type Order } from '../models/types';

const props = defineProps<{
    order: Order
}>()
</script>

<template>
    <div class="order-item">
        <div class="product-info">
            <div class="product-icon">
                🛍️
            </div>

            <div>
                <p class="product-name">
                    {{ order.product_name }}
                </p>

                <p class="quantity">
                    Quantity: {{ order.quantity }}
                </p>
            </div>
        </div>

        <div class="price">
            ${{ order.price }}
        </div>
    </div>
</template>

<style scoped>
.order-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    padding: 14px;
    border: 1px solid #eeeeee;
    border-radius: 12px;

    background: #fafafa;
    transition: 0.2s ease;
}

.order-item:hover {
    background: #f5f5f5;
    border-color: #dddddd;
}

.product-info {
    display: flex;
    align-items: center;
    gap: 12px;
}

.product-icon {
    width: 44px;
    height: 44px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 10px;
    background: #ffffff;
    border: 1px solid #e5e7eb;

    font-size: 20px;
}

.product-name {
    margin: 0 0 5px;
    color: #111827;
    font-size: 15px;
    font-weight: 600;
}

.quantity {
    margin: 0;
    color: #9ca3af;
    font-size: 13px;
}

.price {
    color: #111827;
    font-size: 16px;
    font-weight: 700;
    white-space: nowrap;
}
</style>
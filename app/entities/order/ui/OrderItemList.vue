<script setup lang="ts">
import type { OrderItem } from '../models/types';
import Order from './Order.vue';

const props = defineProps<{
    orders_list: OrderItem[]
}>()
</script>

<template>
    <div class="orders-list">
        <div
            class="order-card"
            v-for="order in orders_list"
            :key="order.id"
        >
            <div class="order-header">
                <div>
                    <span class="order-label">Order</span>
                    <h3>#{{ order.id }}</h3>
                </div>

                <span class="status">
                    {{ order.status }}
                </span>
            </div>

            <div class="order-items">
                <Order
                    v-for="item in order.items"
                    :order="item"
                    :key="item.id"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.orders-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
}

.order-card {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    padding: 20px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
}

.order-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid #f0f0f0;
}

.order-label {
    display: block;
    color: #9ca3af;
    font-size: 13px;
    margin-bottom: 3px;
}

.order-header h3 {
    margin: 0;
    color: #111827;
    font-size: 18px;
    font-weight: 600;
}

.status {
    padding: 6px 12px;
    border-radius: 20px;
    background: #eff6ff;
    color: #2563eb;
    font-size: 13px;
    font-weight: 600;
    text-transform: capitalize;
}

.order-items {
    display: flex;
    flex-direction: column;
    gap: 12px;
}
</style>
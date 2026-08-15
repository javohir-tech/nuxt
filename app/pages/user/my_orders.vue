<script setup lang="ts">
import { getMyOrders, OrderItemList } from '~/entities/order';



definePageMeta({
    layout: "user"
})
const { data, pending, error } = useAsyncData("my_orders", () => getMyOrders())

</script>

<template>
    <div v-if="data?.data.length    ">
        <OrderItemList :orders_list="data?.data" />
    </div>
    <div v-else-if="pending">
        <h1>loading...</h1>
    </div>
    <div v-else-if="error">
        <p>{{ error }}</p>
    </div>
    <div v-else>
        <h1>Empty</h1>
    </div>
</template>
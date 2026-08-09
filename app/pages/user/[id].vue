<script setup lang="ts">
import { getUserById } from '~/entities/user/api';

const route = useRoute()

const { data: user, pending, error, status, refresh } = useLazyAsyncData(`user-${route.params.id}`, () =>
    getUserById(Number(route.params.id)),
)
</script>

<template>
    <div class="user-page">
        <div v-if="user && status === 'success'" class="user-card">
            <div class="user-header">
                <div class="avatar">
                    {{ user.name.charAt(0) }}
                </div>

                <div>
                    <h1>{{ user.name }}</h1>
                    <p>@{{ user.username }}</p>
                </div>
            </div>

            <div class="user-info">
                <div class="info-item">
                    <span>Email</span>
                    <p>{{ user.email }}</p>
                </div>

                <div class="info-item">
                    <span>Phone</span>
                    <p>{{ user.phone }}</p>
                </div>

                <div class="info-item">
                    <span>Website</span>
                    <p>{{ user.website }}</p>
                </div>
            </div>

            <div class="section">
                <h2>Address</h2>

                <p>{{ user.address.street }}, {{ user.address.suite }}</p>
                <p>{{ user.address.city }}, {{ user.address.zipcode }}</p>
                <p>
                    Coordinates:
                    {{ user.address.geo.lat }},
                    {{ user.address.geo.lng }}
                </p>
            </div>

            <div class="section">
                <h2>Company</h2>

                <p><strong>{{ user.company.name }}</strong></p>
                <p>{{ user.company.catchPhrase }}</p>
                <p>{{ user.company.bs }}</p>
            </div>
        </div>

        <div v-else-if="status === 'pending'" class="loading">
            Loading...
        </div>
    </div>
</template>

<style scoped>
.user-page {
    min-height: 100vh;
    padding: 40px 20px;
    background: #f5f7fa;
}

.user-card {
    max-width: 700px;
    margin: 0 auto;
    padding: 30px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
}

.user-header {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
}

.avatar {
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #e5e7eb;
    font-size: 28px;
    font-weight: 600;
}

.user-header h1 {
    margin: 0;
    font-size: 28px;
}

.user-header p {
    margin: 5px 0 0;
    color: #6b7280;
}

.user-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 30px;
}

.info-item span {
    font-size: 13px;
    color: #6b7280;
}

.info-item p {
    margin: 5px 0 0;
    font-size: 16px;
}

.section {
    padding-top: 25px;
    margin-top: 25px;
    border-top: 1px solid #e5e7eb;
}

.section h2 {
    margin-bottom: 15px;
    font-size: 20px;
}

.section p {
    margin: 7px 0;
    color: #4b5563;
}

.loading {
    text-align: center;
    padding: 50px;
}
</style>
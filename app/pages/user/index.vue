<script setup lang="ts">
import { getUser, UserAvatar, type User } from '~/entities/user'

definePageMeta({
    middleware: [
        (to, from) => {
            const token = useCookie("access_token")

            if (!token.value) {
                return navigateTo("/auth/login")
            }
        }
    ],
    layout: "user"
})

const { data, pending, error } = useAsyncData("user", () => getUser())
</script>

<template>
    <div class="profile-page">

        <!-- Loading -->
        <div v-if="pending" class="loading">
            <div class="spinner"></div>
            <p>Loading...</p>
        </div>

        <!-- Error -->
        <div v-else-if="error" class="error-card">
            Failed to load user
        </div>

        <!-- Profile -->
        <div v-else-if="data" class="profile-card">

            <div class="profile-header"></div>

            <div class="profile-content">

                <div class="profile-top">
                    <div class="avatar">
                        <UserAvatar :username="data.data.username" />
                    </div>

                    <span class="status">
                        <span class="status-dot"></span>
                        Active
                    </span>
                </div>

                <div class="profile-info">
                    <h1>{{ data.data.username }}</h1>
                    <p>{{ data.data.email }}</p>
                </div>

                <div class="info-grid">

                    <div class="info-item">
                        <span class="label">Username</span>
                        <strong>{{ data.data.username }}</strong>
                    </div>

                    <div class="info-item">
                        <span class="label">Email</span>
                        <strong>{{ data.data.email }}</strong>
                    </div>

                    <div class="info-item">
                        <span class="label">Role</span>

                        <span
                            class="role"
                            :class="{ admin: data.data.is_staff }"
                        >
                            {{ data.data.is_staff ? 'Administrator' : 'User' }}
                        </span>
                    </div>

                    <div class="info-item">
                        <span class="label">Status</span>

                        <span class="active">
                            <span class="status-dot"></span>
                            Active
                        </span>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.profile-page {
    min-height: calc(100vh - 80px);
    padding: 30px 20px;
    background: #f9fafb;
}

.profile-card {
    max-width: 700px;
    margin: 0 auto;

    overflow: hidden;

    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 16px;

    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
}

.profile-header {
    height: 120px;

    background: #111827;
}

.profile-content {
    padding: 0 25px 25px;
}

.profile-top {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
}

.avatar {
    width: 82px;
    height: 82px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: -41px;

    background: #ffffff;
    border: 4px solid #ffffff;
    border-radius: 50%;

    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

    overflow: hidden;
}

.status {
    display: inline-flex;
    align-items: center;
    gap: 7px;

    margin-bottom: 10px;
    padding: 6px 11px;

    border: 1px solid #dcfce7;
    border-radius: 20px;

    background: #f0fdf4;
    color: #16a34a;

    font-size: 12px;
    font-weight: 600;
}

.status-dot {
    width: 7px;
    height: 7px;

    display: inline-block;

    border-radius: 50%;
    background: #22c55e;
}

.profile-info {
    margin-top: 18px;
    margin-bottom: 25px;
}

.profile-info h1 {
    margin: 0;

    color: #111827;

    font-size: 25px;
    font-weight: 700;
}

.profile-info p {
    margin: 5px 0 0;

    color: #6b7280;

    font-size: 14px;
}

.info-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
}

.info-item {
    padding: 16px;

    background: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 12px;

    transition: border-color 0.2s ease;
}

.info-item:hover {
    border-color: #d1d5db;
}

.label {
    display: block;

    margin-bottom: 7px;

    color: #9ca3af;

    font-size: 11px;
    font-weight: 600;

    text-transform: uppercase;
    letter-spacing: 0.6px;
}

.info-item strong {
    display: block;

    color: #111827;

    font-size: 14px;
    font-weight: 600;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.role {
    display: inline-flex;

    padding: 5px 10px;

    border-radius: 7px;

    background: #f3f4f6;
    color: #374151;

    font-size: 12px;
    font-weight: 600;
}

.role.admin {
    background: #f3f4f6;
    color: #111827;
}

.active {
    display: inline-flex;
    align-items: center;
    gap: 7px;

    color: #16a34a;

    font-size: 13px;
    font-weight: 600;
}

.loading {
    min-height: 400px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: #6b7280;
}

.loading p {
    margin: 12px 0 0;

    font-size: 14px;
}

.spinner {
    width: 34px;
    height: 34px;

    border: 3px solid #e5e7eb;
    border-top-color: #111827;

    border-radius: 50%;

    animation: spin 0.8s linear infinite;
}

.error-card {
    max-width: 500px;

    margin: 60px auto;
    padding: 18px;

    text-align: center;

    border: 1px solid #fecaca;
    border-radius: 12px;

    background: #fef2f2;
    color: #dc2626;

    font-size: 14px;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

@media (max-width: 600px) {
    .profile-page {
        padding: 20px 15px;
    }

    .profile-content {
        padding: 0 18px 20px;
    }

    .profile-header {
        height: 100px;
    }

    .info-grid {
        grid-template-columns: 1fr;
    }

    .profile-info h1 {
        font-size: 22px;
    }

    .avatar {
        width: 75px;
        height: 75px;
        margin-top: -38px;
    }
}
</style>
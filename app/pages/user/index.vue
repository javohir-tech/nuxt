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
    background: #f5f7fb;
    padding: 50px 20px;
}

.profile-card {
    max-width: 700px;
    margin: 0 auto;
    background: #fff;
    border-radius: 24px;
    overflow: hidden;
    border: 1px solid #e8eaf0;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
}

.profile-header {
    height: 150px;
    background: linear-gradient(
        135deg,
        #4f46e5,
        #6366f1,
        #8b5cf6
    );
}

.profile-content {
    padding: 0 35px 35px;
}

.profile-top {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
}

.avatar {
    width: 100px;
    height: 100px;
    margin-top: -50px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: white;
    border: 5px solid white;
    border-radius: 50%;

    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.12);
    overflow: hidden;
}

.status {
    display: flex;
    align-items: center;
    gap: 7px;

    margin-bottom: 10px;
    padding: 7px 13px;

    border-radius: 20px;

    background: #ecfdf3;
    color: #16a34a;

    font-size: 13px;
    font-weight: 600;
}

.status-dot {
    width: 8px;
    height: 8px;
    display: inline-block;

    border-radius: 50%;
    background: #22c55e;
}

.profile-info {
    margin-top: 20px;
    margin-bottom: 30px;
}

.profile-info h1 {
    margin: 0;

    color: #171717;
    font-size: 28px;
    font-weight: 700;
}

.profile-info p {
    margin: 6px 0 0;

    color: #737373;
    font-size: 15px;
}

.info-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
}

.info-item {
    padding: 18px;

    background: #f8f9fc;
    border: 1px solid #eef0f4;
    border-radius: 16px;
}

.label {
    display: block;

    margin-bottom: 7px;

    color: #9ca3af;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.7px;
}

.info-item strong {
    display: block;

    color: #262626;
    font-size: 15px;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.role {
    display: inline-block;

    padding: 5px 11px;

    border-radius: 20px;

    background: #eff6ff;
    color: #2563eb;

    font-size: 12px;
    font-weight: 600;
}

.role.admin {
    background: #f3e8ff;
    color: #9333ea;
}

.active {
    display: flex;
    align-items: center;
    gap: 7px;

    color: #16a34a;
    font-size: 14px;
    font-weight: 600;
}

.loading {
    min-height: 400px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: #737373;
}

.spinner {
    width: 38px;
    height: 38px;

    margin-bottom: 15px;

    border: 4px solid #e5e7eb;
    border-top-color: #4f46e5;
    border-radius: 50%;

    animation: spin 0.8s linear infinite;
}

.error-card {
    max-width: 500px;
    margin: 80px auto;
    padding: 25px;

    text-align: center;

    border-radius: 16px;
    background: #fef2f2;
    color: #dc2626;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

@media (max-width: 600px) {
    .profile-page {
        padding: 25px 15px;
    }

    .profile-content {
        padding: 0 20px 25px;
    }

    .profile-header {
        height: 120px;
    }

    .info-grid {
        grid-template-columns: 1fr;
    }

    .profile-info h1 {
        font-size: 23px;
    }

    .avatar {
        width: 85px;
        height: 85px;
        margin-top: -42px;
    }
}

</style>
<template>
  <main class="auth-page">
    <section class="auth-card" role="region" aria-labelledby="auth-title">
      <nav class="auth-tabs" aria-label="Authentication tabs">
        <button
          class="auth-tabs__btn"
          :aria-selected="isLogin"
          @click="go('login')"
        >
          Đăng nhập
        </button>
        <button
          class="auth-tabs__btn"
          :aria-selected="isRegister"
          @click="go('register')"
        >
          Đăng ký
        </button>
      </nav>

      <div class="auth-card__body">
        <Login
          v-if="isLogin"
          @submit="onLogin"
          @forgot="onForgot"
        />
        <RegisterForm
          v-else
          @request-otp="onRequestOtp"
        />

        <div class="hr" />

        <p v-if="isLogin" class="text-muted" style="text-align:center">
          Chưa có tài khoản?
          <a class="link" href="#" @click.prevent="go('register')">Đăng ký ngay</a>
        </p>
        <p v-else class="text-muted" style="text-align:center">
          Đã có tài khoản?
          <a class="link" href="#" @click.prevent="go('login')">Đăng nhập</a>
        </p>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Login from '@/components/Login.vue'
import RegisterForm from '@/components/RegisterForm.vue'
import '@/styles/auth.css'

const route = useRoute()
const router = useRouter()

// Determine active tab from query (?tab=login|register). Default is login.
const tab = computed(() => (route.query.tab === 'register' ? 'register' : 'login'))
const isLogin = computed(() => tab.value === 'login')
const isRegister = computed(() => tab.value === 'register')

function go(name) {
  router.push({ name: 'signin', query: { tab: name } })
}

// Emit handlers – wire these up to your API later
function onLogin(payload) {
  console.log('login submit', payload)
}
function onForgot() {
  console.log('forgot password clicked')
}
function onRequestOtp(payload) {
  console.log('request otp', payload)
}
</script>


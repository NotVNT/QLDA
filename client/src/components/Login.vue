<template>
  <form class="login-form" @submit.prevent="submit">
    <div class="form-group">
      <label class="form-label" for="login-email">Email</label>
      <input
        id="login-email"
        class="input"
        type="email"
        inputmode="email"
        autocomplete="email"
        placeholder="Nhập email"
        v-model.trim="form.email"
      />
    </div>

    <div class="form-group input-password">
      <label class="form-label" for="login-password">Mật khẩu</label>
      <input
        type="password"
        id="login-password"
        class="input"
        autocomplete="current-password"
        placeholder="Nhập mật khẩu"
        v-model.trim="form.password"
      />
    </div>

    <div class="row-between">
      <label style="display:flex;align-items:center;gap:8px">
        <input type="checkbox" v-model="form.remember" />
        <span>Ghi nhớ mật khẩu</span>
      </label>
      <a class="link" href="#" @click.prevent="onForgot">Quên mật khẩu?</a>
    </div>

    <div class="form-group" style="margin-top:16px">
      <button
        class="button"
        :class="{ 'button--primary': canSubmit }"
        type="submit"
        :disabled="!canSubmit"
      >
        Đăng nhập
      </button>
    </div>
  </form>
</template>

<script setup>
import { reactive, computed } from 'vue'

const emit = defineEmits(['submit', 'forgot'])

const form = reactive({ email: '', password: '', remember: false })


const canSubmit = computed(() => isValidEmail(form.email) && form.password.length >= 6)

function isValidEmail(email) {
  // A simple regex for email validation.
  // For production, a more robust library like `validator.js` is recommended.
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
}

function submit() {
  if (!canSubmit.value) return
  emit('submit', { ...form })
}

function onForgot() {
  emit('forgot')
}
</script>

<style scoped>
/***** Component-specific hooks (layout comes from shared auth.css) *****/
.login-form .toggle-eye { font-size: 16px; }
</style>

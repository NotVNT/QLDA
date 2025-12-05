<template>
  <form class="login-form" @submit.prevent="submit">
    <div class="form-group">
      <label class="form-label" for="login-phone">Số điện thoại</label>
      <input
        id="login-phone"
        class="input"
        type="tel"
        inputmode="tel"
        autocomplete="tel"
        placeholder="Số điện thoại"
        v-model.trim="form.phone"
      />
    </div>

    <div class="form-group input-password">
      <label class="form-label" for="login-password">Mật khẩu</label>
      <input
        :type="showPass ? 'text' : 'password'"
        id="login-password"
        class="input"
        autocomplete="current-password"
        placeholder="Nhập mật khẩu"
        v-model.trim="form.password"
      />
      <button
        type="button"
        class="toggle-eye"
        :aria-label="showPass ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'"
        @click="showPass = !showPass"
      >
        <span v-if="showPass">🙈</span>
        <span v-else>👁️</span>
      </button>
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
import { reactive, computed, ref } from 'vue'

const emit = defineEmits(['submit', 'forgot'])

const form = reactive({ phone: '', password: '', remember: false })
const showPass = ref(false)

const canSubmit = computed(() => isValidPhone(form.phone) && form.password.length >= 6)

function isValidPhone(v) {
  // Simple, extensible rule: 9-11 digits. Replace with lib later.
  return /^(\+?\d)?\d{9,11}$/.test(v.replace(/\s/g, ''))
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


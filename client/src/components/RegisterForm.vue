<template>
  <form class="register-form" @submit.prevent="submit">
    <div class="form-group">
      <label class="form-label" for="reg-fullname">Họ tên</label>
      <input id="reg-fullname" class="input" placeholder="Nhập họ tên" v-model.trim="form.fullName" />
    </div>

    <div class="form-group">
      <label class="form-label" for="reg-email">Email</label>
      <input id="reg-email" class="input" type="email" placeholder="Nhập email" v-model.trim="form.email" />
    </div>

    <div class="form-group">
      <label class="form-label" for="reg-phone">Số điện thoại</label>
      <input id="reg-phone" class="input" type="tel" placeholder="Nhập số điện thoại" v-model.trim="form.phone" />
    </div>

    <div class="form-group input-password">
      <label class="form-label" for="reg-password">Mật khẩu</label>
      <input type="password" id="reg-password" class="input" placeholder="Nhập mật khẩu" v-model.trim="form.password" />
    </div>

    <div class="form-group input-password">
      <label class="form-label" for="reg-confirm-password">Xác nhận mật khẩu</label>
      <input type="password" id="reg-confirm-password" class="input" placeholder="Nhập lại mật khẩu" v-model.trim="form.confirmPassword" />
    </div>

    <label class="form-group" style="display:flex;align-items:flex-start;gap:10px;margin-top:16px">
      <input type="checkbox" v-model="form.agree" style="margin-top:4px" />
      <span class="text-muted" style="color:#111">
        Tôi đã đọc và đồng ý với
        <a class="link" href="#" @click.prevent>các điều khoản và điều kiện sử dụng</a>
      </span>
    </label>

    <div class="form-group" style="margin-top:16px">
      <button class="button button--primary" type="submit" :disabled="!canSubmit">
        Đăng ký
      </button>
    </div>
  </form>
</template>

<script setup>
import { reactive, computed } from 'vue'

const emit = defineEmits(['submit'])

const form = reactive({
  fullName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  agree: true,
})



const canSubmit = computed(() => {
  return (
    form.fullName &&
    isValidEmail(form.email) &&
    isValidPhone(form.phone) &&
    form.password.length >= 6 &&
    form.password === form.confirmPassword &&
    form.agree
  )
})

function isValidEmail(email) {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
}

function isValidPhone(phone) {
  return /^(\+?\d)?\d{9,11}$/.test(phone.replace(/\s/g, ''))
}

function submit() {
  if (!canSubmit.value) return
  // Exclude confirmPassword from the submitted data
  const { confirmPassword, ...payload } = form
  emit('submit', payload)
}
</script>

<style scoped>
.toggle-eye { font-size: 16px; }
</style>

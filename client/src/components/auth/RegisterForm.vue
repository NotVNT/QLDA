<template>
  <form class="register-form" @submit.prevent="submit">
    <div class="form-group">
      <label class="form-label" for="reg-phone">Số điện thoại</label>
      <div class="input-prefix-wrap">
        <span class="input-prefix" aria-hidden="true">
          <span style="font-size:16px">🇻🇳</span>
          <strong>+84</strong>
        </span>
        <input
          id="reg-phone"
          class="input-with-prefix"
          type="tel"
          inputmode="tel"
          autocomplete="tel"
          placeholder="Nhập số điện thoại để tiếp tục"
          v-model.trim="localNumber"
        />
      </div>
    </div>

    <p class="text-muted" style="margin-top:8px">Mã OTP sẽ được gửi đến số điện thoại này</p>

    <label class="form-group" style="display:flex;align-items:flex-start;gap:10px;margin-top:16px">
      <input type="checkbox" v-model="agree" style="margin-top:4px" />
      <span class="text-muted" style="color:#111">
        Tôi đã đọc và đồng ý với
        <a class="link" href="#" @click.prevent>các điều khoản và điều kiện sử dụng</a>
      </span>
    </label>

    <div class="form-group" style="margin-top:16px">
      <button
        class="button button--primary"
        type="submit"
        :disabled="!canSubmit"
      >
        Gửi OTP
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue'

const emit = defineEmits(['request-otp'])

const countryCode = '+84'
const localNumber = ref('')
const agree = ref(true)

const canSubmit = computed(() => isValidVNPhone(localNumber.value) && agree.value)

function isValidVNPhone(v) {
  // Accept 9-10 digits local format after trimming spaces, ignoring leading 0
  const digits = v.replace(/\s/g, '')
  return /^0?\d{9,10}$/.test(digits)
}

function submit() {
  if (!canSubmit.value) return
  const normalized = localNumber.value.replace(/\s/g, '').replace(/^0/, '')
  emit('request-otp', { phone: countryCode + normalized, countryCode, local: normalized })
}
</script>

<style scoped>
.register-form :is(.input-with-prefix, .input-prefix) { height: 44px; }
</style>


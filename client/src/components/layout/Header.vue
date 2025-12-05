<template>
  <header class="app-header" role="banner">
    <div class="app-header__spacer" aria-hidden="true"></div>
    <div class="app-header__actions">
      <button
        class="app-header__login-button"
        type="button"
        :disabled="disabled"
        :aria-label="ariaLabel || label"
        data-testid="login-button"
        @click="onClick"
      >
        {{ label }}
      </button>
    </div>
  </header>
</template>

<script setup>
// Simple, maintainable Header that only contains a Login button.
// - Props to customize label and accessibility text
// - Emits a single, well-named event "login-click" to decouple behavior
// - Presentation lives in a shared CSS file for easy reuse
import '@/styles/header.css'

const props = defineProps({
  label: { type: String, default: 'Đăng nhập' },
  ariaLabel: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
})

const emit = defineEmits(['login-click'])

function onClick(event) {
  if (props.disabled) return
  emit('login-click', event)
}
</script>


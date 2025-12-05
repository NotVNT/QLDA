import { mount } from '@vue/test-utils'
import Header from '@/components/layout/Header.vue'

// Vitest is configured via vite.config.js with jsdom and globals

describe('Header.vue', () => {
  test('renders header container and a login button with default label', () => {
    const wrapper = mount(Header)
    const header = wrapper.get('header.app-header[role="banner"]')
    expect(header.exists()).toBe(true)

    const btn = wrapper.get('[data-testid="login-button"]')
    expect(btn.text()).toBe('Đăng nhập')
    expect(btn.attributes('type')).toBe('button')
  })

  test('emits "login-click" when button is clicked', async () => {
    const wrapper = mount(Header)
    await wrapper.get('[data-testid="login-button"]').trigger('click')
    const emitted = wrapper.emitted('login-click')
    expect(emitted).toBeTruthy()
    expect(emitted.length).toBe(1)
  })

  test('does NOT emit when disabled', async () => {
    const wrapper = mount(Header, { props: { disabled: true } })
    const btn = wrapper.get('[data-testid="login-button"]')
    expect(btn.attributes()).toHaveProperty('disabled')

    await btn.trigger('click')
    expect(wrapper.emitted('login-click')).toBeUndefined()
  })

  test('supports custom label and aria-label', () => {
    const wrapper = mount(Header, {
      props: {
        label: 'Login',
        ariaLabel: 'Đăng nhập vào hệ thống',
      },
    })
    const btn = wrapper.get('[data-testid="login-button"]')
    expect(btn.text()).toBe('Login')
    expect(btn.attributes('aria-label')).toBe('Đăng nhập vào hệ thống')
  })
})


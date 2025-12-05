<template>
  <Header @login-click="goSignIn" />
</template>

<script setup>
import { useRouter } from 'vue-router'
import Header from '@/components/Header.vue'

const router = useRouter()
const goSignIn = () => router.push({ name: 'signin', query: { tab: 'login' } })
</script>

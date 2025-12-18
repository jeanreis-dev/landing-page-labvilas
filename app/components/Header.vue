<template>
  <header class="fixed top-0 left-0 right-0 bg-white shadow-md z-50 transition-all duration-300" :class="{ 'shadow-lg': scrolled }">
    <nav class="container-custom">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-3 group">
          <img
            src="/logo_labvilas.png"
            alt="Labvilas - Laboratório de Análises Clínicas"
            class="h-14 w-auto transform group-hover:scale-105 transition-transform duration-300"
          />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a
            v-for="item in navItems"
            :key="item.name"
            :href="item.path"
            @click.prevent="scrollToSection(item.path)"
            class="text-gray-700 hover:text-secondary-500 font-medium transition-colors duration-200 relative group cursor-pointer"
          >
            {{ item.name }}
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <button class="btn-primary flex items-center space-x-2">
            <Icon name="mdi:login" class="w-5 h-5" />
            <span>Área do Cliente</span>
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          <Icon :name="mobileMenuOpen ? 'mdi:close' : 'mdi:menu'" class="w-6 h-6 text-gray-700" />
        </button>
      </div>

      <!-- Mobile Navigation -->
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-gray-200">
          <div class="flex flex-col space-y-4">
            <a
              v-for="item in navItems"
              :key="item.name"
              :href="item.path"
              @click.prevent="scrollToSection(item.path); mobileMenuOpen = false"
              class="text-gray-700 hover:text-secondary-500 hover:bg-gray-50 px-4 py-2 rounded-lg font-medium transition-all duration-200 cursor-pointer"
            >
              {{ item.name }}
            </a>
            <button class="btn-primary w-full flex items-center justify-center space-x-2">
              <Icon name="mdi:login" class="w-5 h-5" />
              <span>Área do Cliente</span>
            </button>
          </div>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)
const scrolled = ref(false)

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Serviços', path: '#servicos' },
  { name: 'Laboratório', path: '#laboratorio' },
  { name: 'Contato', path: '#contato' },
  { name: 'Trabalhe Conosco', path: '#trabalhe-conosco' },
]

const scrollToSection = (path: string) => {
  if (path === '/') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }

  const sectionId = path.replace('#', '')
  const element = document.getElementById(sectionId)

  if (element) {
    const headerOffset = 80 // Altura do header fixo
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 50
  })
})
</script>

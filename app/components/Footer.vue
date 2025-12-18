<template>
  <footer class="bg-gray-900 text-gray-300">
    <!-- Main Footer -->
    <div class="container-custom section-padding">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Brand Column -->
        <div>
          <div class="mb-6">
            <img
              src="/logo_labvilas.png"
              alt="Labvilas - Laboratório de Análises Clínicas"
              class="h-12 w-auto"
            />
          </div>
          <p class="text-gray-400 mb-6 leading-relaxed">
            Laboratório de análises clínicas com excelência em atendimento e tecnologia de ponta.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300">
              <Icon name="mdi:facebook" class="w-5 h-5" />
            </a>
            <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300">
              <Icon name="mdi:instagram" class="w-5 h-5" />
            </a>
            <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors duration-300">
              <Icon name="mdi:whatsapp" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-white font-bold text-lg mb-6">Links Rápidos</h3>
          <ul class="space-y-3">
            <li>
              <a href="/" @click.prevent="scrollToSection('/')" class="hover:text-blue-400 transition-colors duration-200 flex items-center cursor-pointer">
                <Icon name="mdi:chevron-right" class="w-4 h-4 mr-2" />
                Home
              </a>
            </li>
            <li>
              <a href="#servicos" @click.prevent="scrollToSection('#servicos')" class="hover:text-blue-400 transition-colors duration-200 flex items-center cursor-pointer">
                <Icon name="mdi:chevron-right" class="w-4 h-4 mr-2" />
                Serviços
              </a>
            </li>
            <li>
              <a href="#laboratorio" @click.prevent="scrollToSection('#laboratorio')" class="hover:text-blue-400 transition-colors duration-200 flex items-center cursor-pointer">
                <Icon name="mdi:chevron-right" class="w-4 h-4 mr-2" />
                Laboratório
              </a>
            </li>
            <li>
              <a href="#contato" @click.prevent="scrollToSection('#contato')" class="hover:text-blue-400 transition-colors duration-200 flex items-center cursor-pointer">
                <Icon name="mdi:chevron-right" class="w-4 h-4 mr-2" />
                Contato
              </a>
            </li>
            <li>
              <a href="#trabalhe-conosco" @click.prevent="scrollToSection('#trabalhe-conosco')" class="hover:text-blue-400 transition-colors duration-200 flex items-center cursor-pointer">
                <Icon name="mdi:chevron-right" class="w-4 h-4 mr-2" />
                Trabalhe Conosco
              </a>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-white font-bold text-lg mb-6">Serviços</h3>
          <ul class="space-y-3">
            <li class="flex items-center">
              <Icon name="mdi:check-circle" class="w-4 h-4 text-blue-400 mr-2" />
              Análises Clínicas
            </li>
            <li class="flex items-center">
              <Icon name="mdi:check-circle" class="w-4 h-4 text-blue-400 mr-2" />
              Microbiologia
            </li>
            <li class="flex items-center">
              <Icon name="mdi:check-circle" class="w-4 h-4 text-blue-400 mr-2" />
              Biologia Molecular
            </li>
            <li class="flex items-center">
              <Icon name="mdi:check-circle" class="w-4 h-4 text-blue-400 mr-2" />
              Checkup Completo
            </li>
            <li class="flex items-center">
              <Icon name="mdi:check-circle" class="w-4 h-4 text-blue-400 mr-2" />
              Medicina do Trabalho
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-white font-bold text-lg mb-6">Contato</h3>
          <ul class="space-y-4">
            <li class="flex items-start">
              <Icon name="mdi:map-marker" class="w-5 h-5 text-blue-400 mr-3 flex-shrink-0 mt-1" />
              <span class="text-sm">
                AV Santos Dumont 2774<br />
                Lauro de Freitas - BA<br />
                CEP 42700-000
              </span>
            </li>
            <li class="flex items-center">
              <Icon name="mdi:phone" class="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
              <a href="tel:+557135084977" class="hover:text-blue-400 transition-colors">
                (71) 3508-4977
              </a>
            </li>
            <li class="flex items-center">
              <Icon name="mdi:email" class="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
              <a href="mailto:Labvilas@labvilas.com.br" class="hover:text-blue-400 transition-colors text-sm">
                Labvilas@labvilas.com.br
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Certifications -->
    <div class="border-t border-gray-800">
      <div class="container-custom py-8">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="flex items-center space-x-6">
            <div class="flex items-center space-x-2">
              <Icon name="mdi:certificate" class="w-6 h-6 text-blue-400" />
              <span class="text-sm">Certificado SBAC</span>
            </div>
            <div class="flex items-center space-x-2">
              <Icon name="mdi:shield-check" class="w-6 h-6 text-blue-400" />
              <span class="text-sm">Qualidade CPQ</span>
            </div>
          </div>
          <div class="text-center md:text-right">
            <p class="text-sm text-gray-400">
              Laboratório credenciado e certificado
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-gray-800">
      <div class="container-custom py-6">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-sm text-gray-400 text-center md:text-left">
            &copy; {{ currentYear }} Labvilas. Todos os direitos reservados.
          </p>
          <div class="flex items-center space-x-6 text-sm">
            <a href="#" class="hover:text-blue-400 transition-colors">Política de Privacidade</a>
            <a href="#" class="hover:text-blue-400 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

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
</script>

<template>
  <section id="servicos" class="section-padding bg-white">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-fade-in">
        <h2 class="section-title">
          Nossos <span class="text-gradient">Serviços</span>
        </h2>
        <p class="section-subtitle">
          Exames laboratoriais completos com tecnologia de ponta e resultados precisos
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="card p-6 group cursor-pointer"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <div class="flex flex-col h-full">
            <!-- Icon -->
            <div class="mb-6">
              <div
                class="w-16 h-16 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                :class="service.bgColor"
              >
                <Icon :name="service.icon" class="w-8 h-8 text-white" />
              </div>
            </div>

            <!-- Content -->
            <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
              {{ service.title }}
            </h3>
            <p class="text-gray-600 mb-4 flex-grow">
              {{ service.description }}
            </p>

            <!-- Features -->
            <ul class="space-y-2 mb-6">
              <li
                v-for="(feature, fIndex) in service.features"
                :key="fIndex"
                class="flex items-center text-sm text-gray-600"
              >
                <Icon name="mdi:check-circle" class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                <span>{{ feature }}</span>
              </li>
            </ul>

            <!-- CTA -->
            <button class="mt-auto text-blue-600 font-semibold flex items-center group-hover:translate-x-2 transition-transform duration-300">
              <span>Saiba mais</span>
              <Icon name="mdi:arrow-right" class="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>

      <!-- Results Access CTA -->
      <div class="mt-16">
        <div class="card p-8 md:p-12 bg-gradient-to-br from-blue-600 to-indigo-600">
          <div class="flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="text-center md:text-left">
              <h3 class="text-2xl md:text-3xl font-bold text-white mb-2">
                Acesse seus Resultados Online
              </h3>
              <p class="text-blue-100 text-lg">
                Consulte seus exames de forma rápida e segura
              </p>
            </div>
            <button class="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2 whitespace-nowrap">
              <Icon name="mdi:file-document-outline" class="w-5 h-5" />
              <span>Acessar Resultados</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    icon: 'mdi:test-tube',
    title: 'Análises Clínicas',
    description: 'Exames completos de sangue, urina e outros fluidos corporais',
    bgColor: 'bg-gradient-to-br from-blue-500 to-blue-600',
    features: [
      'Hemograma completo',
      'Bioquímica clínica',
      'Hormônios',
      'Urinálise'
    ]
  },
  {
    icon: 'mdi:microscope',
    title: 'Microbiologia',
    description: 'Culturas e identificação de microrganismos',
    bgColor: 'bg-gradient-to-br from-green-500 to-green-600',
    features: [
      'Cultura de urina',
      'Cultura de fezes',
      'Antibiogramas',
      'Análises bacteriológicas'
    ]
  },
  {
    icon: 'mdi:dna',
    title: 'Biologia Molecular',
    description: 'Testes genéticos e moleculares avançados',
    bgColor: 'bg-gradient-to-br from-purple-500 to-purple-600',
    features: [
      'PCR',
      'Testes genéticos',
      'Detecção viral',
      'Análises moleculares'
    ]
  },
  {
    icon: 'mdi:heart-pulse',
    title: 'Checkup Completo',
    description: 'Pacotes de exames para monitoramento da saúde',
    bgColor: 'bg-gradient-to-br from-red-500 to-red-600',
    features: [
      'Perfil lipídico',
      'Função renal',
      'Função hepática',
      'Glicemia'
    ]
  },
  {
    icon: 'mdi:baby-face',
    title: 'Pediatria',
    description: 'Exames especializados para crianças',
    bgColor: 'bg-gradient-to-br from-pink-500 to-pink-600',
    features: [
      'Teste do pezinho',
      'Exames pediátricos',
      'Atendimento infantil',
      'Coleta diferenciada'
    ]
  },
  {
    icon: 'mdi:account-tie',
    title: 'Medicina do Trabalho',
    description: 'Exames ocupacionais e admissionais',
    bgColor: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
    features: [
      'Exames admissionais',
      'Periódicos',
      'Demissionais',
      'Toxicológicos'
    ]
  }
]
</script>

<style scoped>
.card {
  animation: slideUp 0.5s ease-out forwards;
  opacity: 0;
}

@keyframes slideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

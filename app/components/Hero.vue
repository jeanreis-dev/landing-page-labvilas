<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    <!-- Background with gradient -->
    <div class="absolute inset-0 gradient-bg">
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </div>

    <!-- Animated circles -->
    <div class="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
    <div class="absolute top-40 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
    <div class="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

    <!-- Content -->
    <div class="container-custom relative z-10">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Left side - Text content -->
        <div class="text-center md:text-left animate-fade-in">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-gray-900 mb-6 leading-tight">
            Exames Laboratoriais com
            <span class="text-gradient">Qualidade e Precisão</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Tecnologia de ponta e equipe especializada para cuidar da sua saúde em Lauro de Freitas, Bahia
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#servicos" class="btn-primary flex items-center justify-center space-x-2">
              <Icon name="mdi:flask-outline" class="w-5 h-5" />
              <span>Conheça Nossos Serviços</span>
            </a>
            <a href="#contato" class="btn-secondary flex items-center justify-center space-x-2">
              <Icon name="mdi:map-marker" class="w-5 h-5" />
              <span>Visite-nos</span>
            </a>
          </div>

          <!-- Quick Info -->
          <div class="mt-12 grid grid-cols-2 gap-6">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Icon name="mdi:certificate" class="w-6 h-6 text-blue-600" />
              </div>
              <div class="text-left">
                <p class="text-sm text-gray-500">Certificação</p>
                <p class="font-semibold text-gray-900">SBAC</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Icon name="mdi:clock-outline" class="w-6 h-6 text-blue-600" />
              </div>
              <div class="text-left">
                <p class="text-sm text-gray-500">Atendimento</p>
                <p class="font-semibold text-gray-900">Seg-Sáb</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right side - Image/Illustration -->
        <div class="hidden md:block animate-slide-up">
          <div class="relative">
            <!-- Main card -->
            <div class="card p-8 backdrop-blur-sm bg-white/80">
              <div class="space-y-6">
                <div class="flex items-center space-x-4">
                  <div class="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                    <Icon name="mdi:microscope" class="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-gray-900">Tecnologia Avançada</h3>
                    <p class="text-gray-600">Equipamentos de última geração</p>
                  </div>
                </div>

                <div class="flex items-center space-x-4">
                  <div class="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                    <Icon name="mdi:account-group" class="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-gray-900">Equipe Qualificada</h3>
                    <p class="text-gray-600">Profissionais especializados</p>
                  </div>
                </div>

                <div class="flex items-center space-x-4">
                  <div class="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <Icon name="mdi:shield-check" class="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-gray-900">Resultados Confiáveis</h3>
                    <p class="text-gray-600">Laudos precisos e rápidos</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Floating badge -->
            <div class="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-xl">
              <div class="text-center">
                <p class="text-3xl font-bold text-blue-600">15+</p>
                <p class="text-sm text-gray-600">Anos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 w-full flex items-center justify-center animate-bounce">
      <Icon name="mdi:chevron-down" class="w-8 h-8 text-gray-400" />
    </div>
  </section>
</template>

<style scoped>
.bg-grid-pattern {
  background-image:
    linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
  background-size: 40px 40px;
}

@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>

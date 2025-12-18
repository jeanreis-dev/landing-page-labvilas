<template>
  <section id="contato" class="section-padding gradient-bg">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-fade-in">
        <h2 class="section-title">
          Nossa <span class="text-gradient">Localização</span>
        </h2>
        <p class="section-subtitle">
          Visite-nos e conheça nossa estrutura moderna e acolhedora
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-8">
        <!-- Map/Info Card -->
        <div class="card p-8 animate-slide-up">
          <div class="mb-6">
            <div ref="mapContainer" class="w-full h-64 rounded-lg overflow-hidden shadow-md mb-6"></div>
          </div>

          <div class="space-y-4">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="mdi:map-marker" class="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-1">Endereço</h4>
                <p class="text-gray-600">
                  AV Santos Dumont 2774 - Térreo, Loja 1 e primeiro andar<br />
                  Estrada do Côco<br />
                  CEP 42700-000 - Lauro de Freitas - Bahia
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="mdi:phone" class="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-1">Telefone</h4>
                <a href="tel:+557135084977" class="text-gray-600 hover:text-blue-600 transition-colors">
                  (71) 3508-4977
                </a>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="mdi:email" class="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-1">Email</h4>
                <a href="mailto:Labvilas@labvilas.com.br" class="text-gray-600 hover:text-blue-600 transition-colors">
                  Labvilas@labvilas.com.br
                </a>
              </div>
            </div>
          </div>

          <div class="mt-8">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=-12.895962,-38.3292847"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-primary w-full flex items-center justify-center space-x-2"
            >
              <Icon name="mdi:directions" class="w-5 h-5" />
              <span>Como Chegar</span>
            </a>
          </div>
        </div>

        <!-- Opening Hours -->
        <div class="space-y-8">
          <div class="card p-8 animate-slide-up" style="animation-delay: 200ms">
            <div class="flex items-center space-x-4 mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Icon name="mdi:clock-outline" class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900">Horários de Atendimento</h3>
            </div>

            <div class="space-y-4">
              <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div class="flex items-center space-x-3">
                  <Icon name="mdi:calendar-week" class="w-5 h-5 text-blue-600" />
                  <span class="font-semibold text-gray-900">Segunda à Sexta</span>
                </div>
                <span class="text-blue-600 font-bold">7:00 - 19:00</span>
              </div>

              <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div class="flex items-center space-x-3">
                  <Icon name="mdi:calendar-weekend" class="w-5 h-5 text-blue-600" />
                  <span class="font-semibold text-gray-900">Sábados</span>
                </div>
                <span class="text-blue-600 font-bold">8:00 - 14:00</span>
              </div>

              <div class="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                <div class="flex items-center space-x-3">
                  <Icon name="mdi:calendar-remove" class="w-5 h-5 text-red-600" />
                  <span class="font-semibold text-gray-900">Domingos e Feriados</span>
                </div>
                <span class="text-red-600 font-bold">Fechado</span>
              </div>
            </div>

            <div class="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div class="flex items-start space-x-3">
                <Icon name="mdi:information" class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 class="font-semibold text-blue-900 mb-1">Atendimento ao Cliente</h4>
                  <p class="text-sm text-blue-700">
                    Segunda à Sexta: 8:00 - 17:00<br />
                    Sábados: 8:00 - 14:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Actions -->
          <div class="card p-8 animate-slide-up" style="animation-delay: 400ms">
            <h3 class="text-xl font-bold text-gray-900 mb-6">Agende sua Visita</h3>
            <div class="space-y-4">
              <button class="w-full flex items-center justify-center space-x-2 py-3 px-6 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                <Icon name="mdi:whatsapp" class="w-5 h-5" />
                <span>WhatsApp</span>
              </button>
              <button class="w-full flex items-center justify-center space-x-2 py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                <Icon name="mdi:phone" class="w-5 h-5" />
                <span>Ligar Agora</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type L from 'leaflet'

const mapContainer = ref<HTMLElement | null>(null)
let map: L.Map | null = null

onMounted(async () => {
  if (typeof window !== 'undefined' && mapContainer.value) {
    // Import Leaflet dinamicamente apenas no cliente
    const L = await import('leaflet')

    // Coordenadas do Labvilas - Av Santos Dumont, Lauro de Freitas
    const labvilasCoords: [number, number] = [-12.895962, -38.3292847]

    // Criar o mapa
    map = L.map(mapContainer.value).setView(labvilasCoords, 16)

    // Adicionar tile layer do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map)

    // Criar ícone customizado
    const customIcon = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    })

    // Adicionar marcador
    L.marker(labvilasCoords, { icon: customIcon })
      .addTo(map)
      .bindPopup(`
        <div style="text-align: center; padding: 8px;">
          <strong style="font-size: 16px; color: #0098da;">Labvilas</strong><br/>
          <p style="margin: 8px 0; font-size: 14px;">Laboratório de Análises Clínicas</p>
          <p style="margin: 4px 0; font-size: 12px; color: #666;">
            AV Santos Dumont 2774<br/>
            Lauro de Freitas - BA
          </p>
        </div>
      `)
      .openPopup()
  }
})
</script>

<style scoped>
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slideUp 0.6s ease-out forwards;
}
</style>

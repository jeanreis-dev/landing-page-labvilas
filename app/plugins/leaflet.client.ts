export default defineNuxtPlugin(() => {
  // Importar CSS do Leaflet apenas no cliente
  if (process.client) {
    import('leaflet/dist/leaflet.css')
  }
})

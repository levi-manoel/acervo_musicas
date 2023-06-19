<template>
  <main>
    {{ musica.no_musica }}
    {{ musica.ordem_cifra }}
  </main>
</template>

<script>
export default {
  props: ['musica'],

  data() {
    return {}
  },

  created() {
    console.log('🚀\n🚀\n🚀\n || this.musica:', this.musica.ordem_cifra.split(';'))
    
  },

  methods: {
    formataCifra() {
      
    }
  }
}
</script>

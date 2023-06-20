<template>
  <main>
    {{ musica.no_musica }}
    {{ musica.ordem_cifra }}

    <div>
      <div v-for="parte of musica.ordem_cifra.split(';')">
        <div v-for="linha of musica.partes_cifra[parte]" >
          <el-text class="mx-1" style="white-space: pre;" type="primary">{{ linha.acordes }}</el-text>
          <p class="mx-1">{{ linha.letra }}</p>
        </div>
        <br />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: ['musica'],

  data() {
    return {
      cifraFormatada: []
    }
  },

  created() {
    this.formataCifra()
    
  },

  methods: {
    formataCifra() {
      const cifraFormatada = []
      const partes = this.musica.ordem_cifra.split(';')

      for (const parte of partes) {
        for (const linha of this.musica.partes_cifra[parte]) {
          cifraFormatada.push({
            texto: linha.acordes, tipo: 'acordes'
          }, {
            texto: linha.letra, tipo: 'letra'
          })
        }
      }

      this.cifraFormatada = cifraFormatada
    }
  }
}
</script>

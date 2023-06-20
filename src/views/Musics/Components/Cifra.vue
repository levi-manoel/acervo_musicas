<template>
  <div>
    <div class="common-layout">
      <el-container>
        <el-header>
          <h3>{{ musica.no_musica }}</h3>
          <el-dropdown trigger="click" @command="mudaTom">
            <span class="el-dropdown-link">
              <el-button>
                Tom: {{ tomSelecionado }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
              </el-button> {{ tomSelecionado !== musica.tom ? `(Original: ${musica.tom})` : '' }}
            </span>

            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item v-for="campo of Object.keys(camposHarmonicos)" :command="campo">{{ campo
                }}</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-header>

        <el-main>
          <div v-for="parte of cifraFormatada">
            <div v-for="linha of parte">
              <el-text class="mx-1" style="white-space: pre;" type="primary">{{ linha.acordes }}</el-text>
              <p class="mx-1">{{ linha.letra }}</p>
            </div>
            <br />
          </div>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  props: ['musica', 'mudaTom', 'tomSelecionado'],

  data() {
    return {
      cifraFormatada: [],
      camposHarmonicos: {
        'C': { I: 'C', II: 'D', III: 'E', IV: 'F', V: 'G', VI: 'A', VII: 'B' },
        'D': { I: 'D', II: 'E', III: 'F#', IV: 'G', V: 'A', VI: 'B', VII: 'C#' },
        'E': { I: 'E', II: 'F#', III: 'G#', IV: 'A', V: 'B', VI: 'C#', VII: 'D#' },
        'F': { I: 'F', II: 'G', III: 'A', IV: 'Bb', V: 'C', VI: 'D', VII: 'Eb' },
        'G': { I: 'G', II: 'A', III: 'B', IV: 'C', V: 'D', VI: 'E', VII: 'F#' },
        'A': { I: 'A', II: 'B', III: 'C#', IV: 'D', V: 'E', VI: 'F#', VII: 'G#' },
        'B': { I: 'B', II: 'C#', III: 'D#', IV: 'E', V: 'F#', VI: 'G#', VII: 'A#' },
      }
    }
  },

  watch: {
    tomSelecionado() {
      this.formataCifra()
    }
  },

  created() {
    this.formataCifra()
  },

  methods: {

    formataCifra() {
      const cifra = []

      for (const parte of this.musica.ordem_cifra.split(';')) {
        cifra.push(JSON.parse(JSON.stringify(this.musica.partes_cifra[parte])))
      }

      for (const parte of cifra) {
        for (const linha of parte) {
          linha.acordes = this.trocaGrausPorNotas(linha.acordes)
        }
      }

      this.cifraFormatada = cifra
    },

    trocaGrausPorNotas(acordes) {
      return acordes
        .replaceAll('(I)', this.camposHarmonicos[this.tomSelecionado]['I'])
        .replaceAll('(II)', this.camposHarmonicos[this.tomSelecionado]['II'])
        .replaceAll('(III)', this.camposHarmonicos[this.tomSelecionado]['III'])
        .replaceAll('(IV)', this.camposHarmonicos[this.tomSelecionado]['IV'])
        .replaceAll('(V)', this.camposHarmonicos[this.tomSelecionado]['V'])
        .replaceAll('(VI)', this.camposHarmonicos[this.tomSelecionado]['VI'])
        .replaceAll('(VII)', this.camposHarmonicos[this.tomSelecionado]['VII'])
    }
  },
}
</script>

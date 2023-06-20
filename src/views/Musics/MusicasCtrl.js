import API from '../../services/API'
import cifra from './Components/Cifra.vue'

export default {
  components: {
    'cifra': cifra
  },
  data() {
    return {
      dadosTabela: [],
      coresTags: {
        'Tá pegada': 'success',
        'Em progresso': 'warning',
        'Pra pegar': 'info'
      },

      musicaSelecionada: null,
      mostraMaisInformacoes: false,
      tomSelecionado: null
    }
  },

  async created() {
    await this.carregaLista()
  },

  methods: {
    async carregaLista() {
      const musicas = await API.musicas.listarMusicas()

      this.dadosTabela = musicas
    },

    async selecionaMusica(musica) {
      this.musicaSelecionada = musica
      this.tomSelecionado = musica.tom
      this.mostraMaisInformacoes = true
    },

    mudaTom(tom) {
      if (this.tomSelecionado) this.mostraMaisInformacoes = false

      this.tomSelecionado = tom
      this.mostraMaisInformacoes = true
    }
  }
}
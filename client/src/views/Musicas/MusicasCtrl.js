import API from '../../services/API'
import cifra from './Components/Cifra.vue'

export default {
  components: {
    'cifra': cifra
  },
  data() {
    return {
      musicas: [],
      coresTags: {
        'Tá pegada': 'success',
        'Em progresso': 'warning',
        'Pra pegar': 'info'
      },

      filtros: {
        nome: '',
        status: [],
        cantor: []
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

      this.musicas = musicas
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
  },

  computed: {
    musicasFiltradas() {
      return this.musicas.filter(musica => {
        const filtroNome = String(musica.no_musica).toLowerCase().includes(String(this.filtros.nome).toLowerCase())
        const filtroStatus = this.filtros.status.length !== 0 ? this.filtros.status.includes(musica.status) : true
        const filtroCantor = this.filtros.cantor.length !== 0 ? this.filtros.cantor.includes(musica.no_cantor) : true

        return filtroNome && filtroStatus && filtroCantor
      })
    }
  }
}

<template>
  <main>
    <el-table :data="tableData" highlight-current-row style="width: 100%">
      <el-table-column align="center" width="220" label="Nome" prop="no_musica" />
      <el-table-column align="center" width="120" label="Cantor(a)" prop="no_cantor" />
      <el-table-column align="center" width="120" label="Tom" prop="tom" />
      <el-table-column align="center" width="120" label="Status" prop="status" >
        <template #default="scope">
          <el-tag
            :type="tagsColors[scope.row.status]"
            disable-transitions
            >{{ scope.row.status }}</el-tag
          >
        </template>
      </el-table-column>
    </el-table>
  </main>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      tagsColors: {
        'Tá pegada': 'success',
        'Em progresso': 'warning',
        'Pra pegar': 'info'
      }
    }
  },

  async created() {
    await this.carregaLista()
  },

  methods: {
    async carregaLista() {
      this.tableData = [
        {
          no_musica: 'Caminho no deserto',
          no_cantor: 'Tamires',
          tom: 'B',
          status: 'Tá pegada'
        },
        {
          no_musica: 'Deserto',
          no_cantor: 'Nyêdja',
          tom: 'B',
          status: 'Em progresso'
        },
        {
          no_musica: 'Reina em mim',
          no_cantor: 'Rogério',
          tom: 'C',
          status: 'Pra pegar'
        }
      ]
    }
  }
}
</script>
<template>
  <main>
    <el-table :data="dadosTabela" highlight-current-row style="width: 100%" @current-change="selecionaMusica">
      <el-table-column align="center" width="220" label="Nome" prop="no_musica" />
      <el-table-column align="center" width="120" label="Cantor(a)" prop="no_cantor" />
      <el-table-column align="center" width="120" label="Tom" prop="tom" />
      <el-table-column align="center" width="120" label="Status" prop="status" >
        <template #default="scope">
          <el-tag
            :type="coresTags[scope.row.status]"
            disable-transitions
            >{{ scope.row.status }}</el-tag
          >
        </template>
      </el-table-column>
    </el-table>

    <section v-if="mostraMaisInformacoes">
      <cifra :musica="musicaSelecionada" :mudaTom="mudaTom" :tomSelecionado="tomSelecionado" />
    </section>
  </main>
</template>

<script src="./MusicasCtrl" />
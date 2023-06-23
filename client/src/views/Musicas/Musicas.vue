<template>
  <main>
    <el-collapse>
      <el-collapse-item title="- Filtros" name="1">
        <div>
          <el-form label-position="top" label-width="100px" :model="filtros">
            <el-row>
              <el-col :span="24">
                <el-form-item label="Nome">
                  <el-input v-model="filtros.nome" />
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :span="12">
                <el-form-item label="Cantor(a)">
                  <el-select v-model="filtros.cantor" multiple placeholder="Selecione">
                    <el-option label="Tamires" value="Tamires" />
                    <el-option label="Nyêdja" value="Nyêdja" />
                    <el-option label="Rogério" value="Rogério" />
                    <el-option label="Dedé" value="Dedé" />
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :span="12">
                <el-form-item label="Status">
                  <el-select v-model="filtros.status" multiple placeholder="Selecione">
                    <el-option label="Tá pegada" value="Tá pegada" />
                    <el-option label="Em progresso" value="Em progresso" />
                    <el-option label="Pra pegar" value="Pra pegar" />
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-collapse-item>
    </el-collapse>

    <br />

    <el-table :data="musicasFiltradas" v-loading="carregandoMusicas" highlight-current-row style="width: 100%" @current-change="selecionaMusica">
      <el-table-column align="center" width="250" label="Nome" prop="nome" />
      <el-table-column align="center" width="120" label="Cantor(a)" prop="cantor" />
      <el-table-column align="center" width="120" label="Tom" prop="tom" />
      <el-table-column align="center" width="120" label="Status" prop="status">
        <template #default="scope">
          <el-tag :type="coresTags[scope.row.status]" disable-transitions>{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
    </el-table>

    <section v-if="mostraMaisInformacoes" style="margin-top: 2.5em;">
      <cifra :musica="musicaSelecionada" :mudaTom="mudaTom" :tomSelecionado="tomSelecionado" />
    </section>
  </main>
</template>

<style scoped></style>

<script src="./MusicasCtrl" />

<template>
  <Container>
    <h2 style="color: white">Transferência</h2>
    <form v-on:submit.prevent="salvar">
      <label for="transferencia-valor">Valor</label>
      <input
        type="number"
        id="transferencia-valor"
        v-model:="transferencia.valor"
      />

      <label for="transferencia-origem">Conta Origem</label>
      <select id="transferencia-origem" v-model:="transferencia.idContaOrigem">
        <option
          v-for="conta in contaSelecionada"
          :value="conta.id"
          disabled
          selected
        >
          {{ conta.numero }} - {{ conta.cliente.nome }}
        </option>
      </select>

      <label for="transferencia-destino">Conta destino</label>
      <select
        v-model:="transferencia.idContaDestino"
        id="transferencia-destino"
      >
        <option value="" disabled selected>Selecione uma conta</option>
        <option v-for="conta in contas" :key="conta.id" :value="conta.id">
          {{ conta.numero }} - {{ conta.cliente.nome }}
        </option>
      </select>

      <button type="submit">Transferir</button>
    </form>
  </Container>
</template>

<script setup>
import ContaService from "../../services/ContaService";

var route = useRoute();
var transferencia = reactive({
  idContaOrigem: route.params.id,
  idContaDestino: "",
  valor: 0,
});
var contas = ref([]);
var contaSelecionada = ref([]);

function setup(id) {
  ContaService.listar(id).then((resposta) => {
    contas.value = resposta.data.filter((conta) => conta.id != route.params.id);
    contaSelecionada.value = resposta.data.filter(
      (conta) => conta.id == route.params.id
    );
  });
}

function salvar() {
  let transferenciaObject = toRaw(transferencia);
  ContaService.transferir(transferenciaObject).then(() => {
    navigateTo("/conta");
  });
}

onMounted(() => {
  setup(route.params.id);
});
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
select {
  padding: 10px 10px;

  border-radius: 8px;
  border: none;

  font-family: "Inter";
  font-size: 1rem;
}
input {
  font-family: "Inter";
  color: black;
  border: none;

  padding: 10px 16px;
  border-radius: 8px;

  font-weight: normal;
  font-size: 1rem;

  height: 40px;
}
label {
  margin-top: 1rem;
  margin-bottom: 0.4rem;

  color: #d9d9d9;
}
button {
  align-self: flex-end;

  width: 8rem;
  border: none;
  padding: 16px;

  font-family: "Inter";
  font-weight: bold;
  font-size: 1.15rem;

  color: #fafafa;
  background-color: #10b981;

  border-radius: 20px;

  cursor: pointer;
  transition: all 0.25s;

  margin-top: 1rem;
}
button:hover {
  color: #fafafa;
  background-color: #0c7653;
}
.numero-row {
  display: flex;
  align-items: center;
}
#conta-numero {
  flex: 1;
}
.transparent {
  background-color: transparent;
  border: none;
  cursor: pointer;

  width: initial;
  margin-top: initial;
}
.transparent:hover {
  color: initial;
  background-color: initial;
}
</style>

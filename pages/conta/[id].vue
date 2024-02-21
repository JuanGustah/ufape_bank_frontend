<template>
  <Container>
    <h2 style="color: white">Editar Conta</h2>
    <form v-on:submit.prevent="salvar">
      <label for="conta-numero">Número da conta</label>
      <div class="numero-row">
        <input type="text" id="conta-numero" v-model:="conta.numero" />
        <button
          type="button"
          title="Gerar novo número de conta"
          @click="gerarNumero"
          class="transparent"
        >
          <img src="@/assets/dice.png" />
        </button>
      </div>

      <label for="conta-cliente">Cliente</label>
      <select v-model:="conta.cliente.id" id="conta-cliente">
        <option value="" disabled selected>Selecione um cliente</option>
        <option
          v-for="cliente in clientes"
          :key="cliente.id"
          :value="cliente.id"
        >
          {{ cliente.nome }}
        </option>
      </select>

      <button type="submit">Cadastrar</button>
    </form>
  </Container>
</template>

<script setup>
import ContaService from "../../services/ContaService";
import ClienteService from "../../services/ClienteService";

var route = useRoute();
var conta = reactive({
  numero: "",
  saldo: 0,
  cliente: {
    id: "",
  },
});
var clientes = ref([]);

function setup(id) {
  ContaService.buscar(id).then((resposta) => {
    ClienteService.listar().then((response) => {
      clientes.value = response.data;
    });
    Object.assign(conta, resposta.data);
  });
}

function salvar() {
  let contaObject = toRaw(conta);
  ContaService.atualizar(route.params.id, contaObject).then(() => {
    navigateTo("/conta");
  });
}

function gerarNumero() {
  conta.numero = crypto.randomUUID().slice(0, 6);
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

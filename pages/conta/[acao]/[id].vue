<template>
  <Container>
    <h2 style="color: white">
      {{ $route.params.acao }} na conta: <strong>{{ conta.numero }}</strong>
    </h2>
    <form v-on:submit.prevent="salvar">
      <label for="credito-valor">Valor</label>
      <input type="number" id="credito-valor" v-model:="valor" />
      <button type="submit">{{ $route.params.acao }}</button>
    </form>
  </Container>
</template>

<script setup>
import ContaService from "../../services/ContaService";

var route = useRoute();
var valor = ref(0);
var conta = reactive({
  numero: "",
});

function salvar() {
  let acao = route.params.acao;
  let dados = {
    valor: valor.value,
    idConta: route.params.id,
  };

  ContaService.acao(acao, dados).then(() => {
    navigateTo("/conta");
  });
}

onMounted(() => {
  let id = route.params.id;
  ContaService.buscar(id).then((resposta) => {
    Object.assign(conta, resposta.data);
  });
});
</script>

<style scoped>
strong {
  color: #10b981;
}
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

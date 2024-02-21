<template>
  <Container>
    <h2 style="color: white">Novo Cliente</h2>
    <form v-on:submit.prevent="salvar">
      <label for="cliente-nome">Nome</label>
      <input
        type="text"
        placeholder="José Silva"
        id="cliente-nome"
        v-model:="cliente.nome"
      />
      <label for="cliente-cpf">Cpf</label>
      <input
        type="text"
        placeholder="827.607.320-45"
        id="cliente-cpf"
        v-model:="cliente.cpf"
      />
      <h4 style="color: white; margin-top: 2rem">Endereço</h4>
      <label for="cliente-cep">Cep</label>
      <input
        type="text"
        placeholder="55038-655"
        id="cliente-cep"
        v-model:="cliente.endereco.cep"
      />
      <label for="cliente-numero">Numero</label>
      <input
        type="text"
        placeholder="1A"
        id="cliente-numero"
        v-model:="cliente.endereco.numero"
      />
      <label for="cliente-complemento">Complemento</label>
      <input
        type="text"
        placeholder="Na esquina"
        id="cliente-complemento"
        v-model:="cliente.endereco.complemento"
      />
      <button type="submit">Cadastrar</button>
    </form>
  </Container>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
input {
  font-family: "Inter";
  color: black;
  border: none;

  padding: 10px 16px;
  border-radius: 16px;

  font-weight: normal;
  font-size: 1rem;
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
</style>

<script setup>
import ClienteService from "../../services/ClienteService";

var cliente = reactive({
  nome: "",
  cpf: "",
  endereco: {
    complemento: "",
    numero: "",
    cep: "",
  },
});

function salvar() {
  const clienteObject = toRaw(cliente);
  ClienteService.criar(clienteObject).then(() => {
    navigateTo("/cliente");
  });
}
</script>

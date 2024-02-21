<template>
  <Container>
    <div class="header">
      <h2 style="color: white">Clientes</h2>
      <NuxtLink to="/cliente/form" class="button">Novo Cliente</NuxtLink>
    </div>
    <div v-for="cliente in clientes" class="item" :key="cliente.id">
      <img src="@/assets/user.png" style="width: 42px; height: 42px" />
      <div class="infos">
        <p class="title">Nome: {{ cliente.nome }}</p>
        <p class="text">Cpf: {{ cliente.cpf }}</p>
        <p class="text">
          Endereço: {{ cliente.endereco.cep }},Nº {{ cliente.endereco.numero }},
          {{ cliente.endereco.complemento }}.
        </p>
      </div>
      <div class="actions">
        <NuxtLink :to="'/cliente/' + cliente.id" class="transparent"
          ><img src="@/assets/edit.png"
        /></NuxtLink>
        <button class="transparent" @click="remover(cliente.id)">
          <img src="@/assets/trash.png" />
        </button>
      </div>
    </div>
  </Container>
</template>

<script setup>
import Container from "../../components/container.vue";
import ClienteService from "../../services/ClienteService";
var clientes = ref([]);

onMounted(() => {
  ClienteService.listar().then((response) => {
    clientes.value = response.data;
  });
});

function remover(id) {
  let confirmacao = confirm("Tem certeza que deseja remover esse cliente?");
  if (confirmacao === true) {
    ClienteService.remover(id).then((response) => {
      let clientesArr = toRaw(clientes.value);
      clientes.value = clientesArr.filter((cliente) => cliente.id !== id);
    });
  }
}
</script>

<style>
.item {
  background-color: white;
  padding: 10px 16px;

  display: flex;
  gap: 1rem;
  align-items: center;

  margin-top: 1rem;

  border-radius: 8px;

  position: relative;
}
.infos {
  display: flex;
  flex-direction: column;
}
.title {
  font-size: 1.5rem;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.button {
  text-decoration: none;
  padding: 10px 16px;

  font-family: "Inter";
  font-weight: bold;

  color: #fafafa;
  background-color: #10b981;

  border-radius: 8px;

  cursor: pointer;
  transition: all 0.25s;
}
.button:hover {
  color: #fafafa;
  background-color: #0c7653;
}
.actions {
  align-self: flex-start;

  position: absolute;
  right: 20px;

  display: flex;
  gap: 0.5rem;
}
.transparent {
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>

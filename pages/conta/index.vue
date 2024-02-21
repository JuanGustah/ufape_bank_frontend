<template>
  <Container>
    <div class="header">
      <h2 style="color: white">Contas</h2>
      <NuxtLink to="/conta/form" class="button">Nova Conta</NuxtLink>
    </div>
    <div v-for="conta in contas" class="item" :key="conta.id">
      <img src="@/assets/wallet.png" style="width: 50px; height: 50px" />
      <div class="infos">
        <p class="title">Número: {{ conta.numero }}</p>
        <p class="title">R$ {{ conta.saldo }}</p>
        <p class="text">Cliente: {{ conta.cliente.nome }}</p>
      </div>
      <div class="actions">
        <NuxtLink :to="'/conta/' + conta.id" class="transparent"
          ><img src="@/assets/edit.png"
        /></NuxtLink>
        <button class="transparent" @click="remover(conta.id)">
          <img src="@/assets/trash.png" />
        </button>
        <NuxtLink :to="'/conta/debitar/' + conta.id" class="transparent"
          ><img src="@/assets/debit.png"
        /></NuxtLink>
        <NuxtLink :to="'/conta/creditar/' + conta.id" class="transparent"
          ><img src="@/assets/credit.png"
        /></NuxtLink>
        <NuxtLink :to="'/conta/transfer/' + conta.id" class="transparent"
          ><img src="@/assets/transfer.png"
        /></NuxtLink>
      </div>
    </div>
  </Container>
</template>

<script setup>
import Container from "../../components/container.vue";
import ContaService from "../../services/ContaService";
var contas = ref([]);

onMounted(() => {
  ContaService.listar().then((resposta) => {
    contas.value = resposta.data;
  });
});

function remover(id) {
  let confirmacao = confirm("Tem certeza que deseja remover essa conta?");
  if (confirmacao === true) {
    ContaService.remover(id).then(() => {
      let contasArr = toRaw(contas.value);
      contas.value = contasArr.filter((conta) => conta.id !== id);
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

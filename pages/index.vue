<template>
  <Container cClass="center gap">
    <img src="@/assets/draw2.png" class="image" />
    <h2 class="title white">Bem vindo ao Ufape Bank!</h2>
    <p class="text white">Selecione uma das opções para prosseguir:</p>
    <div class="buttons">
      <NuxtLink to="/cliente" class="button">Clientes</NuxtLink>
      <NuxtLink to="/conta" class="button">Contas</NuxtLink>
    </div>
  </Container>
</template>

<script>
import Container from "../components/container.vue";
</script>

<style scoped>
.white {
  color: #fafafa;
}
.title {
  font-size: 2.15rem;
}
.text {
  font-size: 1.5rem;
}
.buttons {
  margin-top: 1.4rem;

  display: flex;
  gap: 1rem;
}
.button {
  text-decoration: none;

  background-color: #6ee7b7;
  color: #1f1f1f;
  font-weight: 700;

  padding: 1rem 2rem;
  border-radius: 8px;

  transition: all 0.3s;
}
.button:hover {
  background-color: #10b981;
}
.image {
  width: 50%;
  margin-bottom: 2.5rem;
}
</style>

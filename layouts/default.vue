<template>
  <div class="navbar">
    <h1>Ufape Bank</h1>
    <div class="links">
      <NuxtLink to="/cliente" class="link">Clientes</NuxtLink>
      <NuxtLink to="/conta" class="link">Contas</NuxtLink>
    </div>
  </div>
  <div class="content">
    <slot />
  </div>
</template>

<script>
import "../assets/reset.css";
</script>

<style>
.navbar {
  padding: 20px;
  background-color: #27272a;
  color: #fafafa;

  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 32px 0 #0000004f;

  margin-bottom: 1rem;
}
.links {
  display: flex;
  gap: 1rem;
}
.link {
  color: #fafafa;
  height: 100%;
}
.link:hover {
  color: #6ee7b7;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 4rem;
}
</style>

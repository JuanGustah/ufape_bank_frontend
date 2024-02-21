<template>
  <div class="container" :class="cClass">
    <slot />
  </div>
</template>

<style scoped>
.container {
  width: 70%;
}
.center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.gap {
  display: flex;
  gap: 0.5rem;
}
</style>

<script>
export default {
  name: "Container",
  props: {
    cClass: { type: String },
  },
};
</script>

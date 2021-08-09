<template>
  <div class="VueChild">
    <h1>Vue Child</h1>
  </div>
</template>

<script>
export default {
  name: "VueChildApp"
}
</script>

<style scoped>
  .VueChild {
    border: 1px solid black;
  }

  .VueChild > h1 {
    background-color: orange;
  }
</style>
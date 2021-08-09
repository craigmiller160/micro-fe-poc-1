<template>
  <div class="VueChild">
    <h1>Vue Child</h1>
    <Pager />
  </div>
</template>

<script>
import Pager from './Pager.vue';

export default {
  name: "VueChildApp",
  components: {
    Pager
  }
}
</script>

<style scoped>
  .VueChild {
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }

  .VueChild > h1 {
    background-color: orange;
  }
</style>
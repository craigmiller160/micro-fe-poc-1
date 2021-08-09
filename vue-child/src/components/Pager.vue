<template>
  <div class="Pager">
    <div class="Buttons">
      <button>Page 1</button>
      <button>Page 2</button>
      <button>Page 3</button>
    </div>
  </div>
</template>

<script>
import {computed} from 'vue';

export default {
  name: "Pager",
  setup() {

  }
}
</script>

<style scoped>
  .Pager {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .Pager .Buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .Pager button {
    background-color: unset;
    border: 1px solid black;
  }

  .Pager button.active {
    background-color: green;
  }
</style>
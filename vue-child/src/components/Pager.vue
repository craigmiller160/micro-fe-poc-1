<template>
  <div class="Pager">
    <div class="Buttons">
      <router-link to="/page/1">
        <button>Page 1</button>
      </router-link>
      <router-link to="/page/2">
        <button>Page 2</button>
      </router-link>
      <router-link to="/page/3">
        <button>Page 3</button>
      </router-link>
    </div>
    <router-view />
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
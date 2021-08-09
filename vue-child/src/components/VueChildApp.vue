<template>
  <div class="VueChild">
    <h1>Vue Child</h1>
    <Pager />
  </div>
</template>

<script>
import Pager from './Pager.vue';
import {useRoute, useRouter} from 'vue-router';
import {watch} from 'vue';

export default {
  name: "VueChildApp",
  components: {
    Pager
  },
  setup() {
    const router = useRouter();
    const route = useRoute();

    // TODO leverage this
    watch(route, (newValue, oldValue) => console.log('VueWatch', newValue.fullPath));
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
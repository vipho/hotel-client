<template>
  <WrapperAuth></WrapperAuth>
  <div class="container"><div class="row"><div class="col"><h1><p>{{ $t('key1') }}</p></h1></div></div></div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import WrapperAuth from '../components/WrapperAuth.vue';

export default defineComponent({
  name: "Home",
  components: {
    WrapperAuth,
  },
});
</script>

<style scoped lang="scss">
</style>

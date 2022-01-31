<template>
  <WrapperAuth></WrapperAuth>
  <div class="container"><div class="row"><div class="col p-3"><h1>{{ $t('hello') }}</h1></div></div></div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import WrapperAuth from '../components/WrapperAuth.vue';

export default defineComponent({
  name: "Home",
  components: {
    WrapperAuth,
  },
})
</script>

<style scoped lang="scss">
</style>

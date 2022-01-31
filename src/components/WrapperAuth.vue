<template>
  <Header></Header>
  <slot></slot>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Header from '@/components/Header.vue';

export default defineComponent({
  name: "WrapperAuth",
  components: {
    Header,
  },
});
</script>

<style scoped lang="scss">
</style>

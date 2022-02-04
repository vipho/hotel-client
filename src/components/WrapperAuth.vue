<template>
  <Header></Header>
  <div class="py-3">
    <slot></slot>
  </div>
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
@import "~@/style/utils";
</style>

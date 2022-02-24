<template>
  <slot></slot>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Header from '@/components/Header.vue';

export default defineComponent({
  name: "WrapperGuest",
  components: {
    Header,
  },
});
</script>

<style scoped lang="scss">
@import "~@/style/utils";
</style>

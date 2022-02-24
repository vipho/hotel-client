<template>
  <WrapperAuth>

  </WrapperAuth>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {setTitle} from "@/utils/meta";
import {t} from "@/utils/locale";
import WrapperAuth from "@/components/WrapperAuth.vue";

export default defineComponent({
  name: 'Profile',
  components: {WrapperAuth},
  props: {},
  emits: [],
  data() {
    return {}
  },
  created() {
    setTitle(t('managementPage'))
  },
  watch: {},
  computed: {},
  methods: {},
});
</script>

<style scoped lang="scss">
@import "~@/style/root";
</style>

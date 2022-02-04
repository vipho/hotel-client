<template>
  <router-view/>
  <Toast ref="toast"></Toast>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Toast from "@/components/Toast.vue";

export const AppProps: { toast: any } = {
  toast: {},
}

export default defineComponent({
  name: "App",
  components: {Toast},
  props: {},
  emits: [],
  data() {
    return {}
  },
  mounted() {
    AppProps.toast = this.$refs.toast
  },
  watch: {},
  computed: {
    toast() {}
  },
  methods: {},
});
</script>

<style lang="scss">
@import "~@/style/root";
</style>

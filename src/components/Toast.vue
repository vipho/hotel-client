<template>
  <div class="_toast-wrapper">
    <div ref="toast" class="_toast toast align-items-center text-white bg-primary border-0" role="alert">
      <div class="d-flex">
        <div class="toast-body">
          {{ message }}
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Toast",
  components: {},
  props: {},
  emits: [],
  data() {
    return {
      message: "Hello, world! This is a toast message.",
    }
  },
  watch: {},
  computed: {},
  methods: {
    notify(message: string) {
      this.message = message

      //@ts-ignore
      const toast = new bootstrap.Toast(this.$refs.toast)
      toast.show()
    },
  },
})
</script>

<style scoped lang="scss">
@use 'sass:math';

@import "~@/style/utils";

._toast-wrapper {
  $width: 350px;

  position: fixed;
  bottom: 0;
  left: calc(50% - #{math.div($width, 2)});
  z-index: 11;

  ._toast {
    margin-bottom: 1rem;
  }
}
</style>

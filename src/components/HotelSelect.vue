<template>
  <select class="form-select _select">
    <option selected>My Hotel</option>
  </select>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'HotelSelect',
  components: {},
  props: {},
  emits: [],
  data() {
    return {}
  },
  watch: {},
  computed: {},
  methods: {},
});
</script>

<style lang="scss">
@import "~@/style/root";

._select {
  width: 256px;
}
</style>

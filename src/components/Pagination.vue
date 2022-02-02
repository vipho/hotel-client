<template>
  <nav>
    <ul class="pagination justify-content-center">
      <li class="page-item" v-for="i in 8"><router-link class="page-link"  :to="{ query: { page: i }}">{{ i }}</router-link></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Pagination",
  components: {},
  props: {},
  data: () => ({}),
  computed: {},
  methods: {},
  watch: {},
})
</script>

<style scoped lang="scss">
@import "~@/style/utils";
</style>

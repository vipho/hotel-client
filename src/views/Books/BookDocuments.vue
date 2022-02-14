<template>
  <ul class="list-group">
    <li v-for="document in documents" class="list-group-item _list">
      <span class="_list-desc">{{ document.desc }}</span>
      <button class="btn btn-primary _list-button">{{ $t('open') }}</button>
      <button class="btn btn-danger _list-button">{{ $t('delete') }}</button>
    </li>
  </ul>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: "BookDocuments",
  components: {},
  props: {},
  emits: [],
  data() {
    return {}
  },
  watch: {},
  computed: {
    documents(): any {
      return [
        {
          desc: '#1'
        },
      ]
    },
  },
  methods: {},
});
</script>

<style scoped lang="scss">
@import "~@/style/root";

._list {
  display: flex;
  align-items: center;

  ._list-desc {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-right: .5rem;
    flex-grow: 1;
  }

  ._list-button {
    flex: 0 0 0;
    margin-left: 1rem;
  }
}
</style>

<template>
  <form @submit.prevent="" class="d-flex">
    <input type="text" class="form-control" :placeholder="$t('search')">
    <button type="submit" class="btn btn-primary ms-3">{{ $t('toSearch') }}</button>
  </form>
  <div class="pt-3 d-flex">
    <select class="form-select _select">
      <option selected>{{ $t('room') }}</option>
      <option value="1">#1</option>
      <option value="2">#2</option>
      <option value="3">#3</option>
      <option value="3">#4</option>
    </select>
    <select class="form-select ms-3 _select">
      <option selected>{{ $t('status') }}</option>
      <option value="1">{{ $t('statusLiving') }}</option>
    </select>
  </div>
  <div class="pt-3 d-flex _applied">
    <span class="badge bg-info _badge"><span class="_info">Пример длинного поиска. Пример длинного поиска</span><span class="_close">[x]</span></span>
    <span class="badge bg-info _badge"><span class="_info">#1</span><span class="_close">[x]</span></span>
    <span class="badge bg-info _badge"><span class="_info">{{$t('statusLiving')}}</span><span class="_close">[x]</span></span>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Search",
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

._select {
  width: 300px;
}

._applied {

  ._badge:not(:first-child) {
    margin-left: 1rem;

    ._close {
      margin-left: .5rem;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  ._badge {
    display: flex;

    ._info {
      max-width: 300px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: block;
    }

    ._close {
      margin-left: .5rem;
      cursor: default;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>

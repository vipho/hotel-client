<template>
  <form @submit.prevent="search" class="d-flex">
    <input v-model="inputQuery" type="text" class="form-control" :placeholder="$t('search')">
    <button type="submit" class="btn btn-primary ms-3">{{ $t('toSearch') }}</button>
  </form>
  <div v-if="selectors.length !== 0" class="_selectors">
    <select v-for="selector in selectors" @change="select(selector.name, $event.target.value)" class="form-select _select">
      <option :selected="selectorValues[selector.name] === ''" value="">{{ selector.desc }}</option>
      <option v-for="parameter in selector.parameters" :selected="selectorValues[selector.name] === parameter.key" :value="parameter.key">{{ parameter.desc }}</option>
    </select>
  </div>
  <div class="_applied">
    <span class="badge bg-info _badge"><span class="_info">Пример длинного поиска. Пример длинного поиска</span><span
        class="_close">[x]</span></span>
    <span class="badge bg-info _badge"><span class="_info">#1</span><span class="_close">[x]</span></span>
    <span class="badge bg-info _badge"><span class="_info">{{ $t('statusLiving') }}</span><span
        class="_close">[x]</span></span>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export interface Selector {
  name: string
  desc: string
  parameters: {
    key: string
    desc: string
  }[]
}

const selectorValues: { [key: string]: string } = {}

export default defineComponent({
  name: "Search",
  components: {},
  props: {
    selectors: {
      type: Object,
      default: () => ([]),
    },
  },
  data: () => ({
    query: "",
    selectorValues,
    inputQuery: "",
  }),
  created() {
    if (this.$route.query.query !== undefined) {
      this.query = this.$route.query.query + ""
    }
    this.selectors.forEach((selector: Selector) => {
      if (this.$route.query[selector.name] !== "") {
        this.selectorValues[selector.name] = this.$route.query[selector.name] + ""
      }
    })
  },
  methods: {
    changeURLQuery() {
      const query: { [key: string]: string } = {}
      if (this.query !== "") {
        query.query = this.query
      }
      for (const [key, value] of Object.entries(this.selectorValues)) {
        if (value !== "") {
          query[key] = value
        }
      }
      this.$router.push({query})
    },
    search() {
      this.query = this.inputQuery

      this.changeURLQuery()
    },
    select(name: string, value: string) {
      this.selectorValues[name] = value

      this.changeURLQuery()
    },
  },
  watch: {},
})
</script>

<style scoped lang="scss">
@import "~@/style/utils";

._selectors {
  display: flex;
  flex-wrap: wrap;
  margin-left: -1rem;

  ._select {
    width: 300px;
    margin-top: 1rem;
    margin-left: 1rem;
  }
}

._applied {
  display: flex;
  flex-wrap: wrap;
  margin-left: -1rem;

  ._badge {
    margin-top: 1rem;
    margin-left: 1rem;
    display: flex;
    max-width: 300px;
    overflow: hidden;

    ._info {
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

<template>
  <form @submit.prevent="search" class="d-flex">
    <input v-model="inputQuery" type="text" class="form-control" :placeholder="$t('search')">
    <button type="submit" class="btn btn-primary ms-3">{{ $t('toSearch') }}</button>
  </form>
  <div v-if="Object.keys(selectors).length !== 0" class="_selectors">
    <select v-for="[selectorKey, selector] in Object.entries(selectors)"
            @change="select(selectorKey, $event.target.value)"
            class="form-select _select"
    >
      <option :selected="selectorValues[selectorKey] === ''" value="">{{ selector.name }}</option>
      <option v-for="[key, desc] of Object.entries(selector.parameters)"
              :selected="selectorValues[selectorKey] === key"
              :value="key"
      >
        {{ desc }}
      </option>
    </select>
  </div>
  <div v-if="applied.length !== 0" class="_applied">
    <span v-for="el in applied" class="badge bg-info _badge">
      <span class="_info">{{ el.value }}</span>
      <span @click="cancelApplied(el.type, el.key)" class="_close">[x]</span>
    </span>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export interface Selectors {
  [key: string]: {
    name: string
    parameters: {
      [key: string]: string
    }
  }
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
    for (const key of Object.keys(this.selectors)) {
      if (this.$route.query[key] !== undefined) {
        this.selectorValues[key] = this.$route.query[key] + ""
      }
    }
  },
  watch: {},
  computed: {
    applied() {
      const applied: { type: string, key: string, value: string }[] = []
      if (this.query !== "") {
        applied.push({
          type: "query",
          key: 'query',
          value: this.query,
        })
      }
      for (const [key, value] of Object.entries(this.selectorValues)) {
        if (value !== "") {
          applied.push({
            type: "selector",
            key,
            value: this.selectors[key].parameters[value],
          })
        }
      }
      return applied
    }
  },
  methods: {
    cancelApplied(type: string, key: string) {
      switch (type) {
        case "query":
          this.query = ""
          break
        case "selector":
          this.selectorValues[key] = ""
          break
      }

      this.changeURLQuery()
    },
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
      this.inputQuery = ""

      this.changeURLQuery()
    },
    select(name: string, value: string) {
      this.selectorValues[name] = value

      this.changeURLQuery()
    },
  },
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

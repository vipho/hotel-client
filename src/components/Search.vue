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
      default: () => ({}),
    },
  },
  emits: ['changeQuery'],
  data: () => ({
    query: "",
    selectorValues,
    inputQuery: "",
  }),
  watch: {
    '$route.query': {
      handler() {
        this.syncWithQuery()
      },
      immediate: true,
    },
  },
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
    syncWithQuery() {
      if (this.$route.query.query !== undefined) {
        this.query = this.$route.query.query + ""
      } else {
        this.query = ""
      }
      for (const key of Object.keys(this.selectors)) {
        if (this.$route.query[key] !== undefined) {
          this.selectorValues[key] = this.$route.query[key] + ""
        } else {
          this.selectorValues[key] = ""
        }
      }
    },
    cancelApplied(type: string, key: string) {
      switch (type) {
        case "query":
          this.query = ""
          this.$emit('changeQuery', {key: 'query', value: ""})
          break
        case "selector":
          this.selectorValues[key] = ""
          this.$emit('changeQuery', {key, value: ""})
          break
      }
    },
    search() {
      this.query = this.inputQuery
      this.$emit('changeQuery', {key: 'query', value: this.query})

      this.inputQuery = ""
    },
    select(name: string, value: string) {
      this.selectorValues[name] = value
      this.$emit('changeQuery', {key: name, value})
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

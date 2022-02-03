<template>
  <nav class="overflow-auto">
    <ul class="pagination _pagination">
      <li
          v-for="page in pages"
          :class="{'disabled': page === currentPage}"
          @click="changePage(page)"
          class="page-item _item"
      >
        <span class="page-link _link">{{ page }}</span>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Pagination",
  components: {},
  props: {
    pagesAmount: {
      type: Number,
      default: 1,
    },
  },
  emits: ['changeQuery'],
  data() {
    return {
      currentPage: 1,
    }
  },
  watch: {
    '$route.query': {
      handler() {
        this.syncWithQuery()
      },
      immediate: true,
    },
  },
  computed: {
    pages() {
      const pages: number[] = []

      const min = this.currentPage - 2 > 1 ? this.currentPage - 2 : 1
      const max = this.pagesAmount - this.currentPage > (2+1) ? this.currentPage + (2+1) : this.pagesAmount
      for (let i = min; i < max; i++) {
        pages.push(i)
      }

      if (pages[0] !== 1) {
        pages.unshift(1)
      }

      if (pages[pages.length - 1] !== this.pagesAmount) {
        pages.push(this.pagesAmount)
      }

      if (pages.length < 7 && this.pagesAmount > 7) {
        const amount = 7 - pages.length
        for (let i = 0; i < amount; i++) {
          if (pages[1] === 2) {
            pages.splice(pages.length-1, 0, pages[pages.length-2] + 1)
          } else {
            pages.splice(1, 0, pages[1] - 1)
          }
        }
      }

      return pages
    },
  },
  methods: {
    changePage(value: number) {
      this.currentPage = value
      this.$emit('changeQuery', {key: 'page', value})
    },
    syncWithQuery() {
      if (this.$route.query.page === undefined || this.$route.query.page === null) {
        this.currentPage = 1
        return
      }
      const currentPage: number = +this.$route.query.page
      if (currentPage > 0 && currentPage <= this.pagesAmount) {
        this.currentPage = currentPage
      }
    }
  },
})
</script>

<style scoped lang="scss">
@import "~@/style/utils";

._pagination {
  margin: 0;
  white-space: nowrap;
  user-select: none;

  ._item {
    cursor: default;

    &:first-child {
      margin-left: auto;
    }

    &:last-child {
      margin-right: auto;
    }

    ._link {
      min-width: 56px;
      text-align: center;
    }
  }
}
</style>

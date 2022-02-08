<template>
  <WrapperAuth>
    <Query ref="query"></Query>
    <div class="container py-3">
      <Search @changeQuery="changeQuery"></Search>
    </div>
    <div class="container py-3 overflow-x-auto">
      <div class="overflow-auto">
        <table class="table table-hover _table">
          <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">{{$t('fullName')}}</th>
            <th scope="col">{{$t('room')}}</th>
            <th scope="col">{{$t('status')}}</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Иван Иванов</td>
            <td>#4</td>
            <td><span class="badge bg-primary">{{$t('statusLiving')}}</span></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Ольга Иванова</td>
            <td>#1</td>
            <td></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="container py-3">
      <Pagination :pagesAmount="100" @changeQuery="changeQuery"></Pagination>
    </div>
  </WrapperAuth>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import WrapperAuth from '../../components/WrapperAuth.vue';
import Search from "@/components/Search.vue";
import Pagination from "@/components/Pagination.vue";
import Query from "@/components/Query";

export default defineComponent({
  name: "Home",
  components: {
    Query,
    Pagination,
    Search,
    WrapperAuth,
  },
  props: {},
  emits: {},
  watch: {},
  computed: {},
  methods: {
    changeQuery(p: any) {
      // @ts-ignore
      this.$refs.query.changeQuery(p)
    },
  },
})
</script>

<style scoped lang="scss">
@import "~@/style/utils";

._table {
  min-width: 750px;
  margin: 0;
}
</style>

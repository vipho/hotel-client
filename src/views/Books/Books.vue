<template>
  <WrapperAuth>
    <Query ref="query"></Query>

    <div class="container py-3">
      <Search :selectors="selectors" @changeQuery="changeQuery"></Search>
    </div>
    <div class="container py-3">
      <div class="overflow-auto">
        <table class="table table-hover _table">
          <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">{{ $t('fullName') }}</th>
            <th scope="col">{{ $t('room') }}</th>
            <th scope="col">{{ $t('dates') }}</th>
            <th scope="col">{{ $t('bookingService') }}</th>
            <th scope="col">{{ $t('status') }}</th>
          </tr>
          </thead>
          <tbody>
          <tr @click="$router.push({ name: 'Book', params: { id: 1 } })">
            <th scope="row">1</th>
            <td>Иван Иванов</td>
            <td>#1</td>
            <td>01.02.2022 - 05.02.2022</td>
            <td>Booking</td>
            <td><span class="badge bg-primary">{{ $t('statusLiving') }}</span></td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Иван Иванов</td>
            <td>#1</td>
            <td>01.02.2022 - 05.02.2022</td>
            <td>Островок</td>
            <td><span class="badge bg-primary">{{ $t('statusLiving') }}</span></td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Иван Иванов</td>
            <td>#1</td>
            <td>01.02.2022 - 05.02.2022</td>
            <td></td>
            <td><span class="badge bg-primary">{{ $t('statusLiving') }}</span></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="container py-3">
      <Pagination :pagesAmount="999" @changeQuery="changeQuery"></Pagination>
    </div>
  </WrapperAuth>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import WrapperAuth from '@/components/WrapperAuth.vue';
import Search from "@/components/Search.vue";
import Pagination from "@/components/Pagination.vue";
import Query from "@/components/Query";
import {setTitle} from "@/utils/meta";
import {t} from "@/utils/locale";

export default defineComponent({
  name: "Books",
  components: {
    Query,
    Pagination,
    Search,
    WrapperAuth,
  },
  data() {
    return {
      selectors: {
        'room': {
          name: this.$t('room'),
          parameters: {
            1: '#1',
            2: '#2',
            3: '#3',
          },
        },
        'status': {
          name: this.$t('status'),
          parameters: {
            'living': this.$t('statusLiving'),
          },
        },
      },
    }
  },
  created() {
    setTitle(t('booksPage'))
  },
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
  min-width: 1000px;
  margin: 0;
}
</style>

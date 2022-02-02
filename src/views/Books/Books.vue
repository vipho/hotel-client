<template>
  <WrapperAuth>
    <div class="container py-3">
      <Timeline :rooms="rooms"></Timeline>
    </div>
    <div class="container py-3">
      <Search :selectors="selectors"></Search>
    </div>
    <div class="container py-3">
      <div class="overflow-auto">
        <table class="table table-hover _table">
          <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">{{ $t('room') }}</th>
            <th scope="col">{{ $t('firstName') }}</th>
            <th scope="col">{{ $t('lastName') }}</th>
            <th scope="col">{{ $t('dates') }}</th>
            <th scope="col">{{ $t('bookingService') }}</th>
            <th scope="col">{{ $t('status') }}</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>#1</td>
            <td>Иван</td>
            <td>Иванов</td>
            <td>01.02.2022 - 05.02.2022</td>
            <td>Booking</td>
            <td><span class="badge bg-primary">{{ $t('statusLiving') }}</span></td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>#1</td>
            <td>Иван</td>
            <td>Иванов</td>
            <td>01.02.2022 - 05.02.2022</td>
            <td>Островок</td>
            <td><span class="badge bg-primary">{{ $t('statusLiving') }}</span></td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>#1</td>
            <td>Иван</td>
            <td>Иванов</td>
            <td>01.02.2022 - 05.02.2022</td>
            <td></td>
            <td><span class="badge bg-primary">{{ $t('statusLiving') }}</span></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="container py-3">
      <Pagination></Pagination>
    </div>
  </WrapperAuth>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import WrapperAuth from '@/components/WrapperAuth.vue';
import Timeline from "@/components/Timeline.vue";
import Search from "@/components/Search.vue";
import Pagination from "@/components/Pagination.vue";

export default defineComponent({
  name: "Books",
  components: {
    Pagination,
    Search,
    Timeline,
    WrapperAuth,
  },
  data() {
    return {
      selectors: [
        {
          name: 'room',
          desc: this.$t('room'),
          parameters: [
            {
              key: '1',
              desc: '#1',
            },
            {
              key: '2',
              desc: '#2',
            },
            {
              key: '3',
              desc: '#3',
            },
          ],
        },
        {
          name: 'status',
          desc: this.$t('status'),
          parameters: [
            {
              key: 'living',
              desc: this.$t('statusLiving'),
            },
          ],
        },
      ],
      rooms: [
        {
          room: '#1',
          periods: [
            [
              new Date('2022-02-07'),
              new Date('2022-02-08')
            ],
            [
              new Date('2022-01-30'),
              new Date('2022-02-05')
            ],
          ],
        },
        {
          room: '#4',
          periods: [
            [
              new Date('2022-02-04'),
              new Date('2022-02-09')
            ],
            [
              new Date('2022-01-31'),
              new Date('2022-02-03')
            ],
          ],
        },
      ],
    }
  }
})
</script>

<style scoped lang="scss">
@import "~@/style/utils";

._table {
  min-width: 1000px;
  margin: 0;
}
</style>

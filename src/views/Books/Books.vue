<template>
  <WrapperAuth>
    <div class="container py-3">
      <Timeline :rooms="rooms"></Timeline>
    </div>
    <div class="container py-3">
      <div class="overflow-auto">
        <table class="table table-hover _table">
          <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">{{$t('room')}}</th>
            <th scope="col">{{$t('first-name')}}</th>
            <th scope="col">{{$t('last-name')}}</th>
            <th scope="col">{{$t('dates')}}</th>
            <th scope="col">{{$t('booking-service')}}</th>
            <th scope="col">{{$t('status')}}</th>
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
            <td><span class="badge bg-primary">{{$t('status-living')}}</span></td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>#1</td>
            <td>Иван</td>
            <td>Иванов</td>
            <td>01.02.2022 - 05.02.2022</td>
            <td>Островок</td>
            <td><span class="badge bg-primary">{{$t('status-living')}}</span></td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>#1</td>
            <td>Иван</td>
            <td>Иванов</td>
            <td>01.02.2022 - 05.02.2022</td>
            <td></td>
            <td><span class="badge bg-primary">{{$t('status-living')}}</span></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </WrapperAuth>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import WrapperAuth from '@/components/WrapperAuth.vue';
import Timeline from "@/components/Timeline.vue";

export default defineComponent({
  name: "Books",
  components: {
    Timeline,
    WrapperAuth,
  },
  data: () => ({
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
  }),
})
</script>

<style scoped lang="scss">
@import "~@/style/utils";

._table {
  min-width: 750px;
}
</style>

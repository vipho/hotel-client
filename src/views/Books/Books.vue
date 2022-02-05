<template>
  <WrapperAuth>
    <Query ref="query"></Query>

    <div class="container py-3">
      <h2 class="display-6 mb-4">{{ $t('booking') }}</h2>

      <Timeline :rooms="timelineRooms" :showWeekDay="true"></Timeline>
    </div>

    <div class="container pt-3">
      <BooksForm
          :rooms="rooms"
          :selectedRoom="selectedRoom"
          @change="selectedRoom = $event"
      ></BooksForm>
    </div>

    <div class="container py-3">
      <h2 class="display-6 mb-4">{{ $t('listOfBooks') }}</h2>

      <Search :selectors="selectors" @changeQuery="changeQuery"></Search>
    </div>
    <div class="container py-3">
      <div class="overflow-auto">
        <table class="table table-hover _table">
          <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">{{ $t('firstName') }}</th>
            <th scope="col">{{ $t('lastName') }}</th>
            <th scope="col">{{ $t('room') }}</th>
            <th scope="col">{{ $t('dates') }}</th>
            <th scope="col">{{ $t('bookingService') }}</th>
            <th scope="col">{{ $t('status') }}</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Иван</td>
            <td>Иванов</td>
            <td>#1</td>
            <td>01.02.2022 - 05.02.2022</td>
            <td>Booking</td>
            <td><span class="badge bg-primary">{{ $t('statusLiving') }}</span></td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Иван</td>
            <td>Иванов</td>
            <td>#1</td>
            <td>01.02.2022 - 05.02.2022</td>
            <td>Островок</td>
            <td><span class="badge bg-primary">{{ $t('statusLiving') }}</span></td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Иван</td>
            <td>Иванов</td>
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
import Timeline from "@/components/Timeline.vue";
import Search from "@/components/Search.vue";
import Pagination from "@/components/Pagination.vue";
import Query from "@/components/Query";
import BooksForm from "@/views/Books/BooksForm.vue";

export default defineComponent({
  name: "Books",
  components: {
    BooksForm,
    Query,
    Pagination,
    Search,
    Timeline,
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
      selectedRoom: '',
      rooms: [
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
        {
          key: '4',
          desc: '#4',
        },
        {
          key: '5',
          desc: '#5',
        },
      ],
      timelineRooms: [
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

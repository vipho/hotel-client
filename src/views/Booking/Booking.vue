<template>
  <WrapperAuth>
    <div class="container py-3">
      <Timeline :rooms="timelineRooms" :showWeekDay="true"></Timeline>
    </div>

    <div class="container pt-3">
      <BookingForm
          :rooms="rooms"
          :selectedRoom="selectedRoom"
          @change="selectedRoom = $event"
      ></BookingForm>
    </div>
  </WrapperAuth>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import BookingForm from "@/views/Booking/BookingForm.vue";
import Timeline from "@/components/Timeline.vue";
import WrapperAuth from "@/components/WrapperAuth.vue";
import {setTitle} from "@/utils/meta";
import {t} from "@/utils/locale";

export default defineComponent({
  name: "Booking",
  components: {WrapperAuth, Timeline, BookingForm},
  props: {},
  emits: [],
  data() {
    return {
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
  created() {
    setTitle(t('bookingPage'))
  },
  watch: {},
  computed: {},
  methods: {},
})
</script>

<style scoped lang="scss">
@import "~@/style/utils";
</style>

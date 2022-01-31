<template>
  <WrapperAuth>
    <div class="container py-3">
      <Timeline :rooms="rooms"></Timeline>
    </div>
  </WrapperAuth>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import WrapperAuth from '../../components/WrapperAuth.vue';
import Timeline from "@/components/Timeline.vue";

export default defineComponent({
  name: "Home",
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
</style>

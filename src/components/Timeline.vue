<template>
  <div class="_wrapper">
    <div class="_info">
      <div class="_room">{{$t('room')}}</div>
      <div v-for="room in sortedRooms" class="_room">{{room.room}}</div>
    </div>
    <div class="_lines">
      <div class="_day-line">
        <div v-for="dates in timelineDates" class="_day">
          <div class="_box">
            <div>{{ dates.month }}</div>
            <div>{{ dates.day }}</div>
          </div>
        </div>
      </div>
      <div v-for="room in sortedRooms" class="_room-line">
        <div v-for="period in room.periods" class="_period" :style="{'left': period.offset, 'width': period.width}"><div class="_box"></div></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {t} from '@/utils/locale'

export interface ExternalRoom {
  room: string
  periods: [Date, Date][]
}

interface Period {
  offset: string
  width: string
}

interface Room {
  room: string
  periods: Period[]
}

const size = 48
const dayAmount = 90
const oneDay = 86400000

export default defineComponent({
  name: "Timeline",
  props: {
    rooms: {
      type: Object,
      required: true,
    }
  },
  data: () => ({
    currentDay: ((): Date => {
      const d = new Date()
      d.setUTCHours(0)
      d.setUTCMinutes(0)
      d.setUTCSeconds(0)
      d.setUTCMilliseconds(0)
      return d
    })(),
  }),
  watch: {},
  computed: {
    timelineDates() {
      const dates = [];
      for (let i = 0; i < dayAmount; i++) {
        const date = new Date(this.currentDay.getTime() + (i * oneDay))
        const months = t('months', { returnObjects: true });

        dates.push({
          month: months[date.getMonth()],
          day: date.getUTCDate(),
        })
      }
      return dates
    },
    sortedRooms(): Room[] {
      const currentDay: Date = this.currentDay

      return this.rooms.map((room: ExternalRoom): Room => {
        const externalPeriods = room.periods.sort((a: [Date, Date], b: [Date, Date]): number => {
          return +a[0] - +b[0]
        })
        const periods: Period[] = [];
        externalPeriods.forEach((days: [Date, Date]) => {
          if (days[1] >= currentDay) {
            const offset = `${(+days[0] - +currentDay) / oneDay * size}px`
            const width = `${(+days[1] - +days[0]) / oneDay * size}px`
            periods.push({
              offset,
              width,
            })
          }
        })

        return {
          room: room.room,
          periods,
        }
      })
    },
  },
})
</script>

<style scoped lang="scss">
@import "~@/style/utils";

$_size: 48px;
$_dayAmount: 90;
$_roomLineWidth: calc(#{$_size} * #{$_dayAmount});

._wrapper {
  display: flex;
  background: $_light;
}

._info {
  ._room {
    height: $_size;
    width: 100%;
    padding: 0 16px;
    font-size: 12px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

._lines {
  overflow-x: auto;

  ._day-line {
    height: $_size;
    width: $_roomLineWidth;
    overflow: hidden;

    ._day {
      float: left;
      overflow: hidden;
      width: $_size;
      height: $_size;
      font-size: 12px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;

      ._box {
        line-height: 16px;
      }
    }
  }

  ._room-line {
    height: $_size;
    width: $_roomLineWidth;
    overflow: hidden;
    position: relative;

    ._period {
      height: $_size;
      position: absolute;
      padding: 0 calc(#{$_size} / 4);

      ._box {
        margin-top: calc(#{$_size} / 4);
        height: calc(#{$_size} / 2);
        width: 100%;
        border-radius: 1000px;
        background: $primary;
        @include transition($btn-transition);

        &:hover {
          background: shade-color($primary, $btn-hover-bg-tint-amount);
        }
      }
    }
  }
}
</style>

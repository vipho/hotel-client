<template>
  <div
      @scroll="onScroll"
      ref="timeline"
      class="_timeline"
  >
    <div
        :style="{ top }"
        class="_head-line"
    >
      <div
          :style="{ left }"
          class="_room"
      >
        <span>{{ $t('room') }}</span>
      </div>
      <div class="_day-line">
        <div v-for="dates in timelineDates" class="_day">
          <div class="_box">
            <div>{{ dates.month }}</div>
            <div>{{ dates.day }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="_room-line-wrapper">
      <div v-for="room in sortedRooms" class="_room-line">
        <div
            :style="{ left }"
            class="_room"
        >
          <span>{{ room.room }}</span>
        </div>
        <div class="_period-line">
          <div v-for="period in room.periods" class="_period" :style="{'left': period.offset, 'width': period.width}">
            <div class="_box"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <nav class="overflow-auto">
    <ul class="pagination _pagination">
      <li
          class="page-item _item _no-select"
          @click="currentDay = new Date(currentDay.getTime() - 1296000000)"
      >
        <span class="page-link _link">&laquo;</span>
      </li>
      <li
          class="page-item _item disabled"
      >
          <span class="page-link _link">{{
              dateToString(currentDay)
            }} - {{ dateToString(new Date(currentDay.getTime() + (2592000000 - 86400000))) }}</span>
      </li>
      <li
          class="page-item _item _no-select"
          @click="currentDay = new Date(currentDay.getTime() + 1296000000)"
      >
        <span class="page-link _link">&raquo;</span>
      </li>
    </ul>
  </nav>
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
const dayAmount = 30
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
    left: '0px',
    top: '0px',
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
        const months = t('months', {returnObjects: true});

        dates.push({
          month: months[date.getUTCMonth()],
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
  methods: {
    dateToString(date: Date) {
      const months = t('months', {returnObjects: true});
      return `${date.getUTCDate()} ${months[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
    },
    onScroll() {
      //@ts-ignore
      const left: number = this.$refs.timeline.scrollLeft
      //@ts-ignore
      const top: number = this.$refs.timeline.scrollTop

      this.left = `${left}px`
      this.top = `${top}px`
    },
  },
})
</script>

<style scoped lang="scss">
@import "~@/style/utils";

$_size: 48px;
$_dayAmount: 30;
$_roomLineWidth: calc(#{$_size} * #{$_dayAmount});

._timeline {
  position: relative;
  background: $_light;
  margin-bottom: 1rem;
  max-height: 300px;
  overflow: auto;
}

._head-line {
  position: absolute;
  top: 0; // js
  z-index: 2;
  display: flex;
  background: $_light;

  ._day-line {
    margin-left: 128px;
    display: flex;
  }

  ._day {
    flex-shrink: 0;
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

._room {
  position: absolute;
  left: 0; // js
  z-index: 1;
  flex: 0 0 128px;
  width: 128px;
  background: $_light;
  height: $_size;
  padding: 0 16px;
  font-size: 12px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

._room-line-wrapper {
  margin-top: $_size;
}

._room-line {
  display: flex;
}

._period-line {
  height: $_size;
  width: $_roomLineWidth;
  overflow: hidden;
  position: relative;
  display: flex;
  margin-left: 128px;

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

._no-select {
  user-select: none;
}

._pagination {
  margin: 0;
  white-space: nowrap;

  ._item {
    cursor: default;

    &:first-child {
      margin-left: auto;
    }

    ._link {
      text-align: center;
    }
  }
}
</style>

<template>
  <div class="_timeline">
    <div class="_head-line">
      <div class="_room">
        <span></span>
      </div>

      <div class="_day-line-wrapper">
        <div :style="{ 'margin-left': left }" class="_day-line">
          <div v-for="dates in timelineDates" class="_day">
            <div class="_box">
              <div>{{ dates.month }}</div>
              <div>{{ dates.day }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="_content">
      <div class="_room-col-wrapper">
        <div :style="{ 'margin-top': top }" class="_room-col">
          <div v-for="room in sortedRooms" class="_room">
            <span>{{ room.room }}</span>
          </div>
        </div>
      </div>

      <div
          @scroll="onScroll"
          ref="timeline"
          class="_period-line-wrapper"
      >
        <div v-for="room in sortedRooms" class="_period-line">
          <div class="_square-wrapper">
            <div v-for="_ in dayAmount" class="_square"></div>
          </div>
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
          class="page-item _item _no-select"
          @click="currentDay = new Date(currentDay.getTime() - 86400000)"
      >
        <span class="page-link _link">&lt;</span>
      </li>
      <li class="page-item _item _item-dates disabled">
          <span class="page-link _link">
            {{ dateToString(currentDay) }} - {{
              dateToString(new Date(currentDay.getTime() + (2592000000 - 86400000)))
            }}
          </span>
      </li>
      <li
          class="page-item _item _no-select"
          @click="currentDay = new Date(currentDay.getTime() + 86400000)"
      >
        <span class="page-link _link">&gt;</span>
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
    dayAmount,
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

      this.left = `-${left}px`
      this.top = `-${top}px`
    },
  },
})
</script>

<style scoped lang="scss">
@import "~@/style/utils";

$_size: 48px;
$_dayAmount: 30;
$_roomLineWidth: calc(#{$_size} * #{$_dayAmount});
$_dayWidth: 128px;
$_dayColHeight: 300px;

._timeline {
  //background: $_light;
  margin-bottom: 1rem;
}

._head-line {
  display: flex;
}

._room {
  flex: 0 0 $_dayWidth;
  width: $_dayWidth;
  //background: $_light;
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

._day-line-wrapper {
  overflow: hidden;
}

._day-line {
  display: flex;
  //background: $_light;

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

._content {
  display: flex;
}

._room-col-wrapper {
  overflow: hidden;
  flex: 0 0 $_dayWidth;
  width: $_dayWidth;
}

._room-col {
  height: $_dayColHeight;
  width: $_dayWidth;
  flex: 0 0 $_dayWidth;
}

._period-line-wrapper {
  height: $_dayColHeight;
  overflow: auto;
}

._period-line {
  height: $_size;
  width: $_roomLineWidth;
  overflow: hidden;
  position: relative;
  display: flex;
  box-sizing: border-box;

  &:not(&:last-child) {
    border-bottom: solid 1px #efefef;
  }

  ._square-wrapper {
    display: flex;

    ._square {
      height: $_size;
      width: $_size;
      box-sizing: border-box;

      &:not(&:last-child) {
        border-right: solid 1px #efefef;
      }
    }
  }

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

  ._item-dates {
    width: 256px;
    text-align: center;
  }

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

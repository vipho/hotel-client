<template>
  <form @submit.prevent="$toast($t('NotAllRequiredFieldsFilled'))">
    <div class="row">
      <div class="col-sm-6 col-12 mb-3">
        <label class="form-label">Дата начала</label>
        <input
            v-maska="'##.##.####'"
            type="text"
            class="form-control"
            placeholder="01.01.2022"
        >
      </div>
      <div class="col-sm-6 col-12 mb-3">
        <label class="form-label">Дата окончания</label>
        <input
            v-maska="'##.##.####'"
            type="text"
            class="form-control"
            placeholder="14.01.2022"
        >
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6 col-12 mb-3">
        <button type="submit" class="btn btn-primary w-100">{{ $t('findAvailableRooms') }}</button>
      </div>
    </div>
  </form>
  <div class="py-3 row">
    <div class="col col-sm-6 col-12">
      <p class="lead text-center">{{ $t('availableRoomsByDates', {checkIn: '01.01.2022', checkOut: '14.01.2022'}) }}</p>
      <ul class="list-group">
        <li v-for="room in rooms" class="list-group-item _room">
          <span class="_room-desc">{{ room.desc }}</span>
          <button class="btn btn-primary _room-button">{{ $t('toBook') }}</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export interface Room {
  key: string
  desc: string
}

export default defineComponent({
  name: "BookingForm",
  components: {},
  props: {
    rooms: {
      type: Array,
      default: () => ([]),
    },
    selectedRoom: {
      type: String,
      required: true,
    },
  },
  emits: ['change'],
  data() {
    return {}
  },
  watch: {},
  computed: {},
  methods: {},
})
</script>

<style scoped lang="scss">
@import "~@/style/utils";

._room {
  display: flex;
  align-items: center;

  ._room-desc {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-right: .5rem;
    flex-grow: 1;
  }

  ._room-button {
    flex: 0 0 0;
  }
}
</style>

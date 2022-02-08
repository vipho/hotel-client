<template>
  <form @submit.prevent="$toast($t('NotAllRequiredFieldsFilled'))">
    <div class="row">
      <div class="col mb-3">
        <label class="form-label">Дата начала</label>
        <input
            v-maska="'##.##.####'"
            type="text"
            class="form-control"
            placeholder="01.01.2022"
        >
      </div>
      <div class="col mb-3">
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
      <div class="col mb-3">
        <select
            @change="$emit('change', $event.target.value)"
            class="form-select"
        >
          <option :selected="selectedRoom === ''"
                  value=""
          >
            {{ $t('room') }}
          </option>
          <option v-for="room in rooms"
                  :selected="selectedRoom === room.key"
                  :value="room.desc"
          >
            {{ room.desc }}
          </option>
        </select>
      </div>
      <div class="col mb-3">
        <button type="submit" class="btn btn-primary w-100">{{ $t('toBook') }}</button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

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
</style>

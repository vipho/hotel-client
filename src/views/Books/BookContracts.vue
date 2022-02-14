<template>
  <div class="accordion">
    <div
        v-for="contract in contracts"
        class="accordion-item"
    >
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="`#${contract.id}`">
          {{ contract.name }}
        </button>
      </h2>
      <div :id="contract.id" class="accordion-collapse collapse show">
        <div class="accordion-body">
          <form @submit.prevent>
            <div class="mb-3">
              <label class="form-label">{{ $t('contractName') }}</label>
              <input type="text" class="form-control" :value="contract.name">
            </div>
            <div class="mb-3">
              <label class="form-label">ФИО</label>
              <input type="text" class="form-control">
            </div>
            <div class="mb-3">
              <label class="form-label">Серия и номер паспорта</label>
              <input type="email" class="form-control">
            </div>
            <div class="mb-3">
              <label class="form-label">Адрес регистрации</label>
              <input type="email" class="form-control">
            </div>
            <div class="row">
              <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3">{{ $t('save') }}</button>
              </div>
              <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3">{{ $t('generate') }}</button>
              </div>
              <div class="col-auto">
                <button type="submit" class="btn btn-danger mb-3">{{ $t('delete') }}</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <form @submit.prevent>
    <div class="row">
      <div class="col-auto mt-3">
        <select class="form-select _select">
          <option selected>{{ $t('newContract') }}</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="col-auto mt-3">
        <button type="submit" class="btn btn-primary">{{ $t('create') }}</button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {newID} from "@/utils/bsid";

export default defineComponent({
  name: "BookContracts",
  components: {},
  props: {},
  emits: [],
  data() {
    return {}
  },
  watch: {},
  computed: {
    contracts(): any {
      return [{
        name: '#1',
        id: newID()
      }];
    }
  },
  methods: {},
});
</script>

<style scoped lang="scss">
@import "~@/style/root";
</style>

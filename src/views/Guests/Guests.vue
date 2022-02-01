<template>
  <WrapperAuth>
    <div class="container py-3 overflow-x-auto">
      <div class="overflow-auto">
        <table class="table table-hover _table">
          <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">{{$t('firstName')}}</th>
            <th scope="col">{{$t('lastName')}}</th>
            <th scope="col">{{$t('room')}}</th>
            <th scope="col">{{$t('status')}}</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Иван</td>
            <td>Иванов</td>
            <td>#4</td>
            <td><span class="badge bg-primary">{{$t('statusLiving')}}</span></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Ольга</td>
            <td>Ивановна</td>
            <td>#1</td>
            <td></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </WrapperAuth>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import WrapperAuth from '../../components/WrapperAuth.vue';

export default defineComponent({
  name: "Home",
  components: {
    WrapperAuth,
  },
})
</script>

<style scoped lang="scss">
@import "~@/style/utils";

._table {
  min-width: 750px;
}
</style>

<template>
  <WrapperAuth>
    <div class="container py-3">
      <table class="table table-hover">
        <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Имя</th>
          <th scope="col">Фамилия</th>
          <th scope="col">Номер</th>
          <th scope="col">Статус</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Иван</td>
          <td>Иванов</td>
          <td>#4</td>
          <td><span class="badge bg-primary">Проживает</span></td>
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
</style>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">HotelMan</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link active-class="active" class="nav-link" :to="{name: 'Home'}">{{$t('home-page')}}</router-link>
          </li>
          <li class="nav-item">
            <router-link active-class="active" class="nav-link" :to="{name: 'Guests'}">{{$t('guests-page')}}</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">{{$t('settings-page')}}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: "Header",
});
</script>

<style scoped lang="scss">
@import "~@/style/utils";
</style>

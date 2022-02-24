<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link class="navbar-brand" :to="{name: 'Home'}">{{$t('project')}}</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link active-class="active" class="nav-link" :to="{name: 'Booking'}">{{$t('bookingPage')}}</router-link>
          </li>
          <li class="nav-item">
            <router-link active-class="active" class="nav-link" :to="{name: 'Books'}">{{$t('booksPage')}}</router-link>
          </li>
          <li class="nav-item">
            <router-link active-class="active" class="nav-link" :to="{name: 'Profile'}">{{$t('profilePage')}}</router-link>
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

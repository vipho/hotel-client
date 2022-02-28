<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link class="navbar-brand" :to="{name: 'Home'}">{{$t('project')}}</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" :data-bs-target="`#${navID}`">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-between" :id="navID">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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

        <div>
          <HotelSelect></HotelSelect>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {newID} from "@/utils/bsid";
import HotelSelect from "@/components/HotelSelect.vue";

export default defineComponent({
  name: "Header",
  components: {HotelSelect},
  data() {
    return {
      navID: newID(),
    }
  },
});
</script>

<style scoped lang="scss">
@import "~@/style/utils";
</style>

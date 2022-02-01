<template>
  <WrapperAuth>
    <div class="container py-5 d-flex justify-content-center">
      <div class="_form">
        <form @submit.prevent="">
          <div class="mb-4">
            <label class="form-label">{{ $t("user-nickname") }}</label>
            <input type="email" class="form-control" placeholder="mynick">
          </div>
          <div class="mb-4">
            <label class="form-label">{{ $t("user-password") }}</label>
            <input type="password" class="form-control" placeholder="• • •">
          </div>
          <div class="mb-4">
            <button type="submit" class="btn btn-primary w-100">{{$t("sign-in")}}</button>
          </div>
          <div class="mb-4">
            <div class="g-recaptcha" :data-sitekey="$config.GOOGLE_RECAPTCHA_KEY"></div>
          </div>
        </form>
      </div>
    </div>
  </WrapperAuth>
  <component :is="'script'" src="https://www.google.com/recaptcha/api.js" async defer></component>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import WrapperAuth from "@/components/WrapperAuth.vue";

export default defineComponent({
  name: "Home",
  components: {WrapperAuth},
  props: {},
  data: () => ({}),
  computed: {},
  methods: {},
  watch: {},
})
</script>

<style scoped lang="scss">
@import "~@/style/utils";

._form {
  width: 100%;
  max-width: 450px;
}
</style>

<template>
  <WrapperGuest>
    <div class="py-5 text-center">
      <h1 class="display-5">VIPHO.Hotel</h1>
    </div>
    <div class="container pb-5 d-flex justify-content-center">
      <div class="_g_w-sm">
        <form @submit.prevent="">
          <div class="mb-4">
            <label class="form-label">{{ $t("userNickname") }}</label>
            <input type="text" class="form-control" :placeholder="$t('userNicknamePlaceholder')">
          </div>
          <div class="mb-4">
            <label class="form-label">{{ $t("userPassword") }}</label>
            <input type="password" class="form-control" :placeholder="$t('userPasswordPlaceholder')">
          </div>
          <div class="mb-4">
            <button type="submit" class="btn btn-primary w-100">{{$t("signIn")}}</button>
          </div>
          <div class="mb-4">
            <div class="g-recaptcha" :data-sitekey="$config.GOOGLE_RECAPTCHA_KEY"></div>
          </div>
        </form>
      </div>
    </div>
  </WrapperGuest>
  <component :is="'script'" src="https://www.google.com/recaptcha/api.js" async defer></component>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {setTitle} from "@/utils/meta";
import {t} from "@/utils/locale";
import WrapperGuest from "@/components/WrapperGuest.vue";

export default defineComponent({
  name: "Home",
  components: {WrapperGuest},
  props: {},
  data: () => ({}),
  created() {
    setTitle(t('homePage'))
  },
  watch: {},
  computed: {},
  methods: {},
})
</script>

<style scoped lang="scss">
@import "~@/style/utils";

</style>

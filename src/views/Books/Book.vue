<template>
  <WrapperAuth>
    <div class="container py-3">
      <h1 class="display-4 m-0">{{ bookTitle }}</h1>
      <div class="row">
        <div class="col-sm-6 col-12 mb-3">
          <ul class="_list">
            <li>Полное имя: Иванов Иван Иванович <span class="_badge badge bg-primary">{{ $t('edit') }}</span></li>
            <li>Номер: #1</li>
            <li>Даты: 01.01.2022 - 14.01.2022</li>
            <li>Сервис: Booking</li>
          </ul>
        </div>
        <div class="col-sm-6 col-12 mb-3">
          <p class="display-6 m-0">{{ $t('documents') }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 col-12 mb-3">
          <p class="display-6">{{ $t('bookManagement') }}</p>
          <button class="btn btn-danger">{{ $t('cancel') }}</button>
        </div>
      </div>
    </div>
  </WrapperAuth>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import WrapperAuth from "@/components/WrapperAuth.vue";
import {setTitle} from "@/utils/meta";
import {t} from "@/utils/locale";

export default defineComponent({
  name: "Book",
  components: {WrapperAuth},
  props: {},
  emits: [],
  data() {
    return {
      bookTitle: t('bookPage', {id: this.$route.params.id})
    }
  },
  created() {
    setTitle(this.bookTitle)
  },
  watch: {},
  computed: {},
  methods: {},
});
</script>

<style lang="scss">
@import "~@/style/root";

._list {
  list-style: none;
  margin: 0;
  padding: 1rem 0;

  ._badge {
    margin-left: .25rem;
    cursor: default;

    &:hover {
      text-decoration: underline;
    }
  }

  li {
    line-height: 32px;
  }
}
</style>

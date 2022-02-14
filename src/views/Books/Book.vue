<template>
  <WrapperAuth>
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-12">
          <div class="my-3">
            <h1 class="display-6 mb-3">{{ bookTitle }}</h1>

            <ul class="_list">
              <li>Полное имя: <span class="_name">Иванов Иван Иванович</span>
                <span class="_badge badge bg-primary">{{ $t('edit') }}</span>
              </li>
              <li>Номер: #1</li>
              <li>Даты: 01.01.2022 - 14.01.2022</li>
              <li>Сервис: Booking</li>
            </ul>
          </div>

          <div class="my-3">
            <p class="display-6 mb-3">{{ $t('contracts') }}</p>

            <BookContracts></BookContracts>
          </div>
        </div>
        <div class="col-sm-6 col-12 my-3">
          <p class="display-6 mb-3">{{ $t('documents') }}</p>

          <BookDocuments></BookDocuments>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 col-12 my-3">
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
import BookContracts from "@/views/Books/BookContracts.vue";
import BookDocuments from "@/views/Books/BookDocuments.vue";

export default defineComponent({
  name: "Book",
  components: {BookDocuments, BookContracts, WrapperAuth},
  props: {},
  emits: [],
  data() {
    return {
      bookTitle: this.$t('bookPage', {id: this.$route.params.id})
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

<style scoped lang="scss">
@import "~@/style/root";

._select {
  margin: 0;
}

._list {
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    padding: .5rem 0;
  }

  ._name {
    margin-right: .5rem;
  }

  ._badge {
    cursor: default;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>

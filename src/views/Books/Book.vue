<template>
  <WrapperAuth>
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-12">
          <div class="my-3">
            <h1 class="display-6 mb-3">{{ bookTitle }}</h1>

            <ul class="_list">
              <li>Полное имя: <span class="_name">Иванов Иван Иванович</span><span class="_badge badge bg-primary">{{ $t('edit') }}</span></li>
              <li>Номер: #1</li>
              <li>Даты: 01.01.2022 - 14.01.2022</li>
              <li>Сервис: Booking</li>
            </ul>
          </div>

          <div class="my-3">
            <p class="display-6 mb-3">{{ $t('contracts') }}</p>

            <div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    #1
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <form>
                      <div class="mb-3">
                        <label class="form-label">{{ $t('contractName') }}</label>
                        <input type="text" class="form-control" value="#1">
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

            <button class="btn btn-primary mt-3">{{ $t('newContract') }}</button>
          </div>
        </div>
        <div class="col-sm-6 col-12 my-3">
          <p class="display-6 m-0">{{ $t('documents') }}</p>
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

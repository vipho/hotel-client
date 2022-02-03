import {defineComponent} from 'vue'

export default defineComponent({
  render: () => {},
  name: "Query",
  components: {},
  props: {
  },
  data() {
    const query: { [key: string]: string } = {}

    return {
      query,
    }
  },
  watch: {
    query(parameters: {[key: string]: string}) {
      const query: { [key: string]: string } = {}
      for (const [key, value] of Object.entries(parameters)) {
        query[key] = value
      }
      this.$router.push({query})
    },
  },
  computed: {},
  methods: {
    changeQuery(parameter: {key: string, value: string}) {
      const query = {...this.query}
      if (parameter.value === '') {
        delete query[parameter.key]
      } else {
        query[parameter.key] = parameter.value
      }
      this.query = query
    }
  },
})

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-for="item in list" :key="item">
      <div>{{item}}</div>
      <div @click="aas(item)">hahaha</div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState({
      list: state => state.list
    })
  },
  created() {
    this.$store.commit('lists', [1,2,3,4,5])
  },
  methods: {
    aas(val) {
      this.$store.commit('lists', this.list.filter(item => item !== val))
    }
  }
}

</script>

<template>
  <div>
    <my v-show="showMy"></my>
    <v-header class="pos-header"></v-header>
    <v-nav></v-nav>
  </div>
</template>

<script>
import vHeader from '@/components/vHeader.vue'
import vNav from '@/components/vNav.vue'
import my from '@/components/my.vue'
export default {
  created() {
    this.$store.commit('muShowMy', false)
  },
  components: {
    vHeader,
    vNav,
    my
  },
  computed: {
    showMy() {
      return this.$store.state.showMy
    }
  }
}
</script>

<style scoped>
.pos-header {
  position: fixed;
  top: 0;
}
</style>

<template>
  <div id="app">
    <!-- <template v-if="currentUser"> -->
    <template>
      <Header></Header>
    </template>
    <template v-if="currentUser">
      <Sidebar></Sidebar>
    </template>
    <div>
      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper">

        <!-- Main content -->
        <section class="content">

          <router-view></router-view>

        </section>
        <!-- /.content -->
      </div>
      <!-- /.content-wrapper -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '@/components/backend/Header'
import Sidebar from '@/components/backend/Sidebar'
/*
export default {
  name: 'app',
  computed: {
    ...mapGetters({ currentUser: 'currentUser' })
  },
  created () {
    this.checkCurrentLogin()
  },
  updated () {
    this.checkCurrentLogin()
  },
  methods: {
    checkCurrentLogin () {
      if (!this.currentUser && this.$route.path !== '/login') {
        this.$router.push('/?redirect=' + this.$route.path)
      }
    }
  },
  components: {
    Navbar,
    Foot
  }
}
*/

export default {
  name: 'app',
  computed: {
    ...mapGetters({ currentUser: 'currentUser' })
  },
  components: {
    Header,
    Sidebar
  }
}

</script>

<style>
</style>
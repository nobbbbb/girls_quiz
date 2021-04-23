<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
		<Footer />
  </v-app>
</template>

<script>
import Header from './components/TheHeader'
import Footer from './components/TheFooter'

export default {
  name: 'App',
  components: {
		Header,
		Footer
  },
  data: () => ({
    //
  }),
};
</script>

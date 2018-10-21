<template>
  <div id="app">
    <Header/>
	<Navigation/>
  </div>
</template>

<script>
new Vue = ({
  name: 'App',
  components: {
   'Header': httpVueLoader('/components/Header.vue'),
	'Navigation': httpVueLoader('components/Navigation.vue')
  }
})
</script>

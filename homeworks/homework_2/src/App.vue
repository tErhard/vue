<template>
  <div>
    <Header/>
    <main role="main" class="container">
      <router-view/>
    </main>
  </div>
</template>


<script>
  import Header from './components/Header';

  export default {
    components: {Header},
    created() {
      this.$store.dispatch('autoLogin');
    }
  }
</script>

<style>
  body {
    min-height: 75rem;
    padding-top: 4.5rem;
  }

  .bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
  }

  @media (min-width: 768px) {
    .bd-placeholder-img-lg {
      font-size: 3.5rem;
    }
  }
</style>

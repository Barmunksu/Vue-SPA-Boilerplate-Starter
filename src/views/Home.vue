<template>
  <div class="home">
    <h1>Home</h1>
    <router-link to="login">Login</router-link>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  display: block;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

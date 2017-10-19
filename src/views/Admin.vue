<template>
  <div>
    <h1>Admin Area</h1>
    <a href="#" @click.prevent="logout">Log Out</a>
  </div>
</template>

<script>
export default {
  name: 'admin',
  methods: {
    logout() {
      window.localStorage.removeItem('token');
      this.$router.push({ name: 'login' });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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

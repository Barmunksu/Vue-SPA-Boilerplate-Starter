<template>
  <form @submit.prevent="login">
    <h1>Login</h1>
    <input type="email" name="text" v-model="email">
    <input type="password" name="password" v-model="password">
    <button type="submit">Login</button>
    <router-link to="/">Return Home</router-link>
  </form>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      email: 'example@example.com',
      password: 'password',
    };
  },
  methods: {
    login() {
      this.axios.post(`${process.env.API_URL}/oauth/token`, {
        grant_type: 'password',
        client_id: process.env.API_CLIENT_ID,
        client_secret: process.env.API_CLIENT_SECRET,
        username: this.email,
        password: this.password,
        scope: '*',
      }).then((response) => {
        window.localStorage.setItem('token', response.data.access_token);
        this.$router.push({ name: 'admin' });
      }).catch(() => {
        // eslint-disable-next-line
        console.log('Login failed');
      });
    },
  },
};
</script>

<style scoped>

h1, h2 {
  font-weight: normal;
}

a {
  margin-top: 2em;
  color: #42b983;
  display: block;
}

</style>

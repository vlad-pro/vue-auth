<template>
  <div class="about">
    <form @submit.prevent="login">
      <input v-model="email" type="email" name="email" value="" />
      <input v-model="password" type="password" name="" value="" />
      <button type="submit" name="button">Login</button>

      <p>
        {{ error }}
      </p>

      <router-link to="/register">
        Register if you do not have an account.
      </router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push("/dashboard");
        })
        .catch(err => {
          this.error = err.response.data.error;
        });
    }
  }
};
</script>

<template>
  <section class="section has-background-white-bis">
    <div class="container">
      <div class="is-max-w-md mx-auto">
        <div class="mb-6 has-text-centered">
          <a href="#"
            ><img src="metis-assets/logos/metis/metis.svg" alt="" width="106"
          /></a>
        </div>
        <div class="box has-text-centered py-6 px-5">
          <span class="subtitle is-spaced">Sign In</span>
          <h4 class="title is-size-3">Join our community</h4>
          <form @submit.prevent="handleLogin">
            <div class="field">
              <div class="control has-icons-right">
                <input
                  class="input"
                  type="email"
                  placeholder="name@email.com"
                  v-model.trim="login.email"
                />
                <span class="icon is-small is-right">
                  <svg
                    class="image is-24x24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewbox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
            <div class="field">
              <div class="control has-icons-right">
                <input
                  class="input"
                  type="password"
                  placeholder="Enter your password"
                  v-model.trim="login.password"
                />
                <span class="icon is-small is-right">
                  <svg
                    class="image is-24x24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewbox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
            <div class="field mb-5">
              <div class="control">
                <button class="button is-primary is-fullwidth" type="submit">
                  Sign In
                </button>
              </div>
            </div>
            <p class="mb-5">or continue with</p>
            <button
              class="mb-3 button is-dark is-outlined is-fullwidth"
              href="#"
            >
              <img
                class="mr-2"
                src="metis-assets/logos/facebook-sign.svg"
                alt=""
              />
              <span>Sign In with Facebook</span>
            </button>
            <button class="button is-dark is-outlined is-fullwidth" href="#">
              <img
                class="mr-2"
                src="metis-assets/logos/google-sign.svg"
                alt=""
              />
              <span>Sign In with Google</span>
            </button>
          </form>
        </div>
        <div class="has-text-centered">
          <p><a href="#">Police privacy</a> and <a href="#">Terms of Use</a></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    handleLogin() {
      this.$store.dispatch("login", this.login);
      this.$router.replace("/");
    },
  },
};
</script>

<style></style>

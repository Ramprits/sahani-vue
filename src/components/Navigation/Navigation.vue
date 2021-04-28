<template>
  <div class="">
    <section
      class="is-background-contain is-background-no-repeat"
      style="
        background-image: url('metis-assets/backgrounds/intersect.svg');
        background-position: top;
      "
    >
      <nav
        class="navbar is-relative is-transparent py-3"
        aria-label="main navigation"
      >
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item" href="#"
              ><img
                src="metis-assets/logos/metis/metis.svg"
                alt=""
                style="min-height: 40px"
            /></a>
            <a
              class="navbar-burger"
              role="button"
              type="button"
              data-toggle="side-menu"
              data-target="#sideMenuHeaders02"
              aria-controls="sideMenuHeaders02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div class="navbar-menu">
            <div class="navbar-start is-centered-absolute">
              <a class="navbar-item" href="#">Product</a
              ><a class="navbar-item" href="#">Company</a
              ><a class="navbar-item" href="#">About Us</a
              ><a class="navbar-item" href="#">Features</a>
            </div>
            <div class="navbar-end">
              <div class="navbar-item">
                <div class="buttons" v-if="!isAuthenticated">
                  <router-link class="button is-primary is-outlined" to="/login"
                    >Log In</router-link
                  ><router-link class="button is-primary" to="/register"
                    >Sign Up</router-link
                  >
                </div>
                <button
                  v-else
                  class="button is-primary is-outlined"
                  @click="handleLogout"
                >
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div class="section">
        <div class="container">
          <slot />
        </div>
      </div>
      <div class="is-hidden" id="sideMenuHeaders02">
        <div
          class="is-fixed is-top is-right is-fullsize has-background-grey"
          style="z-index: 1"
        ></div>
        <nav
          class="is-fixed is-top is-left is-bottom navbar is-flex is-flex-direction-column pt-4 px-4"
          style="width: 80%; height: 100%; overflow-y: scroll"
        >
          <div
            class="mb-5 navbar-brand is-flex is-justify-content-space-between"
          >
            <a class="navbar-item" href="#"
              ><img
                style="min-height: 35px"
                src="metis-assets/logos/metis/metis.svg"
                alt=""
                width="auto"
            /></a>
            <a
              class="navbar-item"
              data-toggle="side-menu"
              data-target="#sideMenuHeaders02"
              aria-controls="sideMenuHeaders02"
              aria-label="Close"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </a>
          </div>
          <div>
            <nav class="navbar mb-5">
              <div class="is-fullwidth">
                <a class="navbar-item" href="#">Product</a
                ><a class="navbar-item" href="#">Company</a
                ><a class="navbar-item" href="#">About Us</a
                ><a class="navbar-item" href="#">Features</a>
              </div>
            </nav>
            <div class="mb-6 pt-5 has-border-top">
              <a class="button is-block is-primary is-outlined mb-2" href="#"
                >Log In</a
              ><a class="button is-block is-primary" href="#">Sign Up</a>
            </div>
          </div>
          <div class="pl-4 pb-4 mt-auto">
            <p class="mb-5 is-size-7">
              <span>Get in Touch</span>
              <a href="#">info@example.com</a>
            </p>
            <a href="#"
              ><img src="metis-assets/icons/facebook-blue.svg" alt="" /></a
            ><a href="#"
              ><img src="metis-assets/icons/twitter-blue.svg" alt="" /></a
            ><a href="#"
              ><img src="metis-assets/icons/instagram-blue.svg" alt=""
            /></a>
          </div>
        </nav>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
  methods: {
    handleLogout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    },
  },
};
</script>

<style></style>

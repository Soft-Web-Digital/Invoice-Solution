<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper login-body">
    <!-- Notification -->
    <div
      v-if="store.state.auth.error"
      style="width: fit-content; position: fixed; right: 10px; top: 5px"
      class="alert alert-danger alert-dismissible fade show pb-2 text-sm"
      role="alert"
    >
      <p>{{ store.state.auth.error }}</p>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
    <div
      v-if="store.state.auth.message"
      style="width: fit-content; position: fixed; right: 10px; top: 5px"
      class="alert alert-success alert-dismissible fade show pb-2 text-sm"
      role="alert"
    >
      <p>{{ store.state.auth.message }}</p>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
    <!-- Notification end -->
    <div class="login-wrapper">
      <div class="container">
        <img
          class="img-fluid logo-dark mb-2"
          src="../../assets/img/logo.png"
          alt="Logo"
        />

        <div class="loginbox">
          <div class="login-right">
            <div class="login-right-wrap">
              <h1>Forgot Password?</h1>
              <p class="account-subtitle">
                Enter your email to get a password reset link
              </p>

              <!-- Form -->
              <form @submit.prevent="sendResetPassword">
                <div class="form-group">
                  <label class="form-control-label">Email Address</label
                  ><span class="text-danger">*</span>
                  <input
                    class="form-control"
                    v-model="form.email"
                    type="text"
                  />
                </div>
                <div class="form-group mb-0">
                  <button
                    class="btn btn-lg btn-block btn-primary w-100"
                    type="submit"
                    :disabled="isLoading"
                  >
                    <span
                      v-if="isLoading"
                      class="spinner-border spinner-border-sm me-1"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    <span v-if="!isLoading">Reset Password</span>
                    <span v-if="isLoading">Loading...</span>
                  </button>
                </div>
              </form>
              <!-- /Form -->

              <div class="text-center dont-have">
                Remember your password? <router-link to="/">Login</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Main Wrapper -->
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const isLoading = ref(false);

const form = ref({
  email: "",
});

const sendResetPassword = () => {
  isLoading.value = true;
  store
    .dispatch("auth/sendPasswordReset", form.value)
    .then(() => {
      isLoading.value = false;
    })
    .catch(() => {
      isLoading.value = false;
    });
};
</script>

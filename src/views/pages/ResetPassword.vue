<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper login-body">
    <!-- Notification -->
    <div
      v-if="error || success"
      style="width: fit-content; position: fixed; right: 10px; top: 5px"
      class="alert alert-dismissible fade show pb-2 text-sm"
      role="alert"
      :class="{
        'alert-danger': error,
        'alert-success': success,
      }"
    >
      <p>{{ error }}</p>
      <p>{{ success }}</p>
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
              <h1>Reset Password?</h1>
              <p class="account-subtitle">
                Enter the token sent to your email and your new password
              </p>

              <!-- Form -->
              <Form
                @submit.prevent="sendResetPassword"
                :validation-schema="schema"
              >
                <div class="form-group">
                  <label class="form-control-label">Token</label
                  ><span class="text-danger">*</span>
                  <Field
                    name="token"
                    class="form-control"
                    v-model="form.token"
                    type="text"
                  />
                </div>
                <div class="form-group">
                  <label class="form-control-label">New Password</label
                  ><span class="text-danger">*</span>
                  <Field
                    name="password"
                    class="form-control"
                    v-model="form.password"
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
              </Form>
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
import { Form, Field } from "vee-validate";

const store = useStore();

const isLoading = ref(false);

const error = ref("");
const success = ref("");

const form = ref({
  email: "",
});

const sendResetPassword = async () => {
  isLoading.value = true;
  let result = await store.dispatch("auth/sendPasswordReset", form.value);
  if (result) {
    isLoading.value = false;
    success.value = store.state.auth.success;
    setTimeout(() => {
      success.value = "";
    }, 3000);
  } else {
    isLoading.value = false;
    error.value = store.state.auth.error;
    setTimeout(() => {
      error.value = "";
    }, 3000);
  }
};
</script>

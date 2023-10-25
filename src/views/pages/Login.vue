<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper login-body">
    <!-- Notification -->
    <div
      v-if="store.state.auth.error"
      class="alert notify-danger alert-dismissible"
      role="alert"
    >
      <p>{{ store.state.auth.error }}</p>
      <!-- <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button> -->
    </div>
    <div
      v-if="store.state.auth.message"
      class="alert notify-success alert-dismissible"
      role="alert"
    >
      <p>{{ store.state.auth.message }}</p>
      <!-- <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button> -->
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
              <h1>Login</h1>
              <p class="account-subtitle">Access to our dashboard</p>

              <Form class="login" @submit="loginUser">
                <div class="form-group">
                  <label class="form-control-label">Email Address</label
                  ><span class="text-danger">*</span>
                  <Field
                    name="email"
                    type="text"
                    class="form-control mt-2"
                    v-model="form.email"
                  />
                  <div class="emailshow text-danger" id="email"></div>
                </div>
                <div class="form-group">
                  <label class="form-control-label">Password</label
                  ><span class="text-danger">*</span>
                  <div class="pass-group">
                    <Field
                      name="password"
                      type="password"
                      v-model="form.password"
                      class="form-control pass-input mt-2"
                    /><span class="fa fa-eye-slash toggle-password pt-4"></span>
                    <div class="emailshow text-danger" id="password"></div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="row">
                    <div class="col-6">
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="cb1"
                        />
                        <label class="custom-control-label ms-1" for="cb1"
                          >Remember me</label
                        >
                      </div>
                    </div>
                    <div class="col-6 text-end">
                      <router-link class="forgot-link" to="/forgot-password"
                        >Forgot Password ?</router-link
                      >
                    </div>
                  </div>
                </div>
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
                  <span v-if="!isLoading">Login</span>
                  <span v-if="isLoading">Loading...</span>
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Main Wrapper -->
</template>
<script setup>
import { ref, reactive, onMounted } from "vue";
import { useStore } from "vuex";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";

const store = useStore();

const isLoading = ref(false);
const form = reactive({
  email: "babatundehezekiah7@gmail.com",
  password: "Babz12345.",
});

const loginUser = () => {
  isLoading.value = true;
  store
    .dispatch("auth/login", form)
    .then(() => {
      isLoading.value = false;
    })
    .catch(() => {
      isLoading.value = false;
    });
};
onMounted(() => {
  if ($(".toggle-password").length > 0) {
    $(document).on("click", ".toggle-password", function () {
      $(this).toggleClass("fa-eye fa-eye-slash");
      var input = $(".pass-input");
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });
  }
});
</script>
<style></style>

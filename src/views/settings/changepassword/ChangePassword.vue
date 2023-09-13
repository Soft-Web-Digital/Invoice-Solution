<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Notification -->
    <div
      v-if="store.state.auth.error"
      style="
        width: fit-content;
        position: fixed;
        right: 10px;
        top: 5px;
        z-index: 9999;
      "
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
      style="
        width: fit-content;
        position: fixed;
        right: 10px;
        top: 5px;
        z-index: 9999;
      "
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

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <div class="content container-fluid">
        <changepasswordheader />

        <div class="row">
          <div class="col-xl-3 col-md-4">
            <settingsidebar />
          </div>

          <div class="col-xl-9 col-md-8">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title">Change Password</h5>
              </div>

              <div class="card-body">
                <!-- Form -->
                <Form
                  class="login"
                  @submit="onSubmit"
                  :validation-schema="schema"
                  v-slot="{ errors }"
                >
                  <div class="row form-group">
                    <label
                      for="current_password"
                      class="col-sm-3 col-form-label input-label"
                      >Current Password</label
                    >
                    <div class="col-sm-9">
                      <Field
                        type="password"
                        v-model="form.old_password"
                        class="form-control"
                        name="current_password"
                        id="current_password"
                        :class="{ 'is-invalid': errors.current_password }"
                        placeholder="Enter current password"
                      />
                      <div class="invalid-feedback">
                        {{ errors.current_password }}
                      </div>
                      <div class="emailshow text-danger" id="password"></div>
                    </div>
                  </div>
                  <div class="row form-group">
                    <label
                      for="new_password"
                      class="col-sm-3 col-form-label input-label"
                      >New Password</label
                    >
                    <div class="col-sm-9">
                      <Field
                        type="password"
                        v-model="form.new_password"
                        class="form-control"
                        name="new_password"
                        id="new_password"
                        placeholder="Enter new password"
                        :class="{ 'is-invalid': errors.new_password }"
                      />
                      <div class="invalid-feedback">
                        {{ errors.new_password }}
                      </div>
                      <div class="emailshow text-danger" id="password"></div>
                    </div>
                  </div>
                  <div class="row form-group">
                    <label
                      for="confirm_password"
                      class="col-sm-3 col-form-label input-label"
                      >Confirm new password</label
                    >
                    <div class="col-sm-9">
                      <div class="mb-3">
                        <Field
                          type="password"
                          class="form-control"
                          id="confirm_password"
                          name="confirm_password"
                          :class="{ 'is-invalid': errors.confirm_password }"
                          placeholder="Confirm your new password"
                        />
                        <div class="invalid-feedback">
                          {{ errors.confirm_password }}
                        </div>
                        <div class="emailshow text-danger" id="password"></div>
                      </div>

                      <h5>Password requirements:</h5>
                      <p class="mb-2">
                        Ensure that these requirements are met:
                      </p>
                      <ul class="list-unstyled small">
                        <li
                          :class="{
                            'text-danger': !hasLeastCharacters,
                            'text-success': hasLeastCharacters,
                          }"
                        >
                          Minimum 8 characters long - the more, the better
                        </li>
                        <li
                          :class="{
                            'text-danger': !hasLowerCase,
                            'text-success': hasLowerCase,
                          }"
                        >
                          At least one lowercase character
                        </li>
                        <li
                          :class="{
                            'text-danger': !hasUpperCase,
                            'text-success': hasUpperCase,
                          }"
                        >
                          At least one uppercase character
                        </li>
                        <li
                          :class="{
                            'text-danger': !hasNumber,
                            'text-success': hasNumber,
                          }"
                        >
                          At least one number, symbol
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="text-end">
                    <button
                      :disabled="isLoading"
                      type="submit"
                      class="btn btn-primary"
                    >
                      <span
                        v-if="isLoading"
                        class="spinner-border spinner-border-sm me-1"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      <span v-if="!isLoading">Save Changes</span>
                      <span v-if="isLoading">Saving...</span>
                    </button>
                  </div>
                </Form>
                <!-- /Form -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Page Wrapper -->
  </div>
  <!-- /Main Wrapper -->
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";

const store = useStore();
const showCurrentPassword = ref(true);
const showNewPassword = ref(true);
const showConfirmPassword = ref(true);
const uppercase = /^(?=.*[A-Z]).+$/;
const lowercase = /^(?=.*[a-z]).+$/;
const digit = /^(?=.*[\d\W]).+$/;
const minLength = /^.{8,}$/;
const isLoading = ref(false);

const form = ref({
  old_password: "",
  new_password: "",
});

const toggleNewPassword = () => {
  showNewPassword.value = !showNewPassword.value;
};
const toggleCurrentPassword = () => {
  showCurrentPassword.value = !showCurrentPassword.value;
};
const toggleConfirmPassword = () => {
  showConfirmPassword.value = !showConfirmPassword.value;
};

// Regex check
const hasUpperCase = computed(() => {
  return uppercase.test(form.value.new_password);
});
const hasLowerCase = computed(() => {
  return lowercase.test(form.value.new_password);
});
const hasNumber = computed(() => {
  return digit.test(form.value.new_password);
});
const hasLeastCharacters = computed(() => {
  return minLength.test(form.value.new_password);
});

const schema = Yup.object().shape({
  current_password: Yup.string()
    .min(8, "Current password must be at least 8 characters")
    .required("Current password is required"),
  new_password: Yup.string()
    .min(8, "New password must be at least 8 characters")
    .required("New password is required"),
  confirm_password: Yup.string()
    .min(8, "Confirm password must be at least 8 characters")
    .required("Confirm password is required")
    .oneOf([Yup.ref("new_password")], "Passwords do not match"),
});

const onSubmit = () => {
  if (
    hasUpperCase.value &&
    hasLowerCase.value &&
    hasNumber.value &&
    hasLeastCharacters.value
  ) {
    isLoading.value = true;
    store
      .dispatch("auth/updatePassword", form.value)
      .then(() => {
        isLoading.value = false;
      })
      .catch(() => {
        isLoading.value = false;
      });
  }
};
</script>

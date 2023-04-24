<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Notification -->
    <div
      v-if="store.state.admin.error"
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
      <p>{{ store.state.admin.error }}</p>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
    <div
      v-if="store.state.admin.message"
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
      <p>{{ store.state.admin.message }}</p>
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
        <div class="page-header">
          <div class="row">
            <div class="col-sm-12">
              <h3 class="page-title">Admins</h3>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <router-link to="/">Dashboard</router-link>
                </li>
                <li class="breadcrumb-item">
                  <router-link to="/admin">Admins</router-link>
                </li>
                <li class="breadcrumb-item active">Add Admin</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <form @submit.prevent="addAdmin">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Name</label>
                        <input
                          v-model="form.name"
                          type="text"
                          placeholder="SoftWeb"
                          class="form-control"
                          required
                        />
                      </div>
                      <div class="form-group">
                        <label>Email</label>
                        <input
                          v-model="form.email"
                          type="text"
                          class="form-control"
                          placeholder="softwebdigital@gmail.com"
                          required
                        />
                      </div>
                      <div class="form-group">
                        <label>Role:</label>
                        <v-select
                          v-model="form.role_id"
                          :options="roles"
                          :required="true"
                          placeholder="Select Role"
                          label="name"
                          :reduce="(role) => role.id"
                        ></v-select>
                      </div>
                      <div class="text-end mt-4">
                        <button
                          class="btn btn-primary"
                          type="submit"
                          :disabled="isLoading"
                        >
                          <span
                            v-if="isLoading"
                            class="spinner-border spinner-border-sm me-1"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          <span v-if="!isLoading">Add Admin</span>
                          <span v-if="isLoading">Adding...</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
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
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const isLoading = ref(false);

const form = ref({
  name: "",
  email: "",
  role_id: "",
});

const addAdmin = () => {
  isLoading.value = true;
  console.log(form.value);
  store
    .dispatch("admin/createAdmin", form.value)
    .then(() => {
      isLoading.value = false;
    })
    .catch(() => {
      isLoading.value = false;
    });
};

const roles = computed(() => {
  return store.getters["roles/roles"].data;
});

const getRoles = () => {
  let data = {
    page: 1,
    per_page: 50,
    query: "",
  };
  store.dispatch("roles/getRoles", data);
};

onMounted(() => {
  getRoles();
});
</script>

<style>
.vs__dropdown-toggle {
  min-height: 42px;
}
</style>

<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Notification -->
    <div
      v-if="store.state.roles.error"
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
      <p>{{ store.state.roles.error }}</p>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
    <div
      v-if="store.state.roles.message"
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
      <p>{{ store.state.roles.message }}</p>
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
              <h3 class="page-title">Expenses</h3>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <router-link to="/">Dashboard</router-link>
                </li>
                <li class="breadcrumb-item">
                  <router-link to="/roles-and-permissions"
                    >Roles and Permissions</router-link
                  >
                </li>
                <li class="breadcrumb-item active">Edit Role</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <form @submit.prevent="editRole">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Role Name</label>
                        <input
                          v-model="form.name"
                          placeholder="Super Admin"
                          type="text"
                          class="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Permissions:</label>
                        <v-select
                          multiple
                          :closeOnSelect="false"
                          v-model="form.permissions"
                          :options="permissions"
                          label="name"
                          :required="true"
                          placeholder="Select Permissions"
                          :reduce="(permission) => permission.id"
                        ></v-select>
                      </div>
                      <div class="text-end mt-4">
                        <!-- <button type="submit" class="btn btn-primary">
                          Add Role
                        </button> -->
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
                          <span v-if="!isLoading">Edit Role</span>
                          <span v-if="isLoading">Updating...</span>
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
import { computed, ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const store = useStore();
const route = useRoute();
const isLoading = ref(false);

const form = ref({
  name: "",
  permissions: "",
});

const editRole = () => {
  isLoading.value = true;
  let data = {
    id: route.params.id,
    payload: form.value,
  };
  store
    .dispatch("roles/editRole", data)
    .then(() => {
      isLoading.value = false;
    })
    .catch(() => {
      isLoading.value = false;
    });
};

const role = computed(() => {
  return store.getters["roles/role"];
});

const getRole = () => {
  store.dispatch("roles/showRole", route.params.id).then(() => {
    form.value.name = role.value.name;
    form.value.permissions = role.value.permissions;
  });
};

const permissions = computed(() => {
  return store.getters["roles/permissions"];
});

onMounted(() => {
  getRole();
  store.dispatch("roles/getPermissions");
});
</script>

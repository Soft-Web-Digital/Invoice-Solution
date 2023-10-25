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
        <!-- Page Header -->
        <div class="page-header">
          <div class="row align-items-center">
            <div class="col">
              <h3 class="page-title">Roles and Permissions</h3>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <router-link to="/">Dashboard</router-link>
                </li>
                <li class="breadcrumb-item active">Roles and Permissions</li>
              </ul>
            </div>
            <div class="col-auto">
              <router-link to="/add-role" class="btn btn-primary me-2">
                <i class="fas fa-plus"></i>
              </router-link>
              <!-- <a
                class="btn btn-primary filter-btn"
                href="javascript:void(0);"
                @click="toggleFilter"
                id="filter_search"
              >
                <i class="fas fa-filter"></i>
              </a> -->
            </div>
          </div>
        </div>

        <div v-if="filter" class="card filter-card">
          <div class="card-body pb-0">
            <div class="row">
              <div class="col-sm-6 col-md-3">
                <div class="form-group">
                  <label>Date</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-sm-6 col-md-3">
                <div class="form-group">
                  <label>Status</label>
                  <vue-select :options="paymentfilter" />
                </div>
              </div>
              <div class="col-sm-6 col-md-3">
                <div class="form-group">
                  <label>Type</label>
                  <vue-select :options="paymentfilter" />
                </div>
              </div>
              <div class="col-sm-6 col-md-3">
                <div class="form-group">
                  <label>Method</label>
                  <vue-select :options="paymentfilter" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12">
            <div class="card card-table">
              <div class="card-body">
                <div class="table-responsive">
                  <div
                    class="d-flex align-items-center justify-content-between p-4"
                  >
                    <div>
                      <span>Show</span>
                      <select class="mx-1 py-1" v-model="perPage" name="" id="">
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="200">200</option>
                        <option value="500">500</option>
                      </select>
                      <span>roles</span>
                    </div>

                    <div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                  <table class="table table-center table-hover datatable">
                    <thead class="thead-light">
                      <tr>
                        <th>Name</th>
                        <th>No of Admins</th>
                        <th>No of Permissions</th>
                        <th>Date Added</th>
                        <th class="text-end">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in roles.data" :key="item.id">
                        <td>
                          <a href="javascript:void(0);">{{ item.name }}</a>
                        </td>
                        <td>{{ item.admins }}</td>
                        <td>{{ item.permissions.length }}</td>
                        <td>{{ formatted(item.created_at) }}</td>
                        <td class="text-center">
                          <div class="dropdown dropdown-action">
                            <a
                              href="javascript:void(0)"
                              class="action-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              ><i class="fas fa-ellipsis-h"></i
                            ></a>
                            <div
                              class="dropdown-menu dropdown-menu-right"
                              style="width: fit-content"
                            >
                              <router-link
                                :to="'/edit-role/' + item.id"
                                class="dropdown-item"
                                ><i class="fa fa-edit me-2"></i>
                                Edit</router-link
                              >
                              <a
                                class="dropdown-item cursor-pointer"
                                data-bs-toggle="modal"
                                href="javascript:void(0);"
                                @click="openModal(item)"
                                ><i class="fa fa-trash me-2"></i>Delete</a
                              >
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div
                    v-if="isFetching"
                    class="d-flex my-5 align-items-center justify-content-center"
                  >
                    Loading...
                  </div>
                  <div
                    v-if="length === 0"
                    class="d-flex my-5 align-items-center justify-content-center"
                  >
                    No Data Available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Page Wrapper -->
    <div
      id="top-modal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-top">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="topModalLabel">Delete Role</h4>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <!-- <h5>Text in a modal</h5> -->
            <p>
              Are you sure you want to delete
              <span v-if="selectedItem">{{ selectedItem.name }}?</span>
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-light me-1"
              @click="closeModal"
            >
              Close
            </button>
            <button type="button" @click="deleteRole" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
  </div>
  <!-- /Main Wrapper -->
</template>

<script setup>
import { ref, onMounted, computed, watch } from "vue";
import { useStore } from "vuex";
import { formatted } from "../../../assets/composables/date";

const store = useStore();
const filter = ref(false);
const currentPage = ref(1);
const perPage = ref(50);
const search = ref("");
const selectedItem = ref(null);
const isFetching = ref(false);
const length = ref(null);

watch(search, (newValue) => {
  Search(newValue);
});

const Search = (keyword) => {
  let data = {
    page: currentPage.value,
    per_page: perPage.value,
    query: keyword,
  };
  store.dispatch("roles/getRoles", data);
};

const toggleFilter = () => {
  filter.value = !filter.value;
};

const openModal = (item) => {
  var myModal = new bootstrap.Modal(document.getElementById("top-modal"), {
    backdrop: "static",
  });
  myModal.show();

  selectedItem.value = item;
};
const closeModal = () => {
  var myModal = document.getElementById("top-modal");
  var modalTrigger = document.querySelector('[data-bs-dismiss="modal"]');
  modalTrigger.setAttribute("data-bs-target", "#" + myModal.id);
  modalTrigger.click();
};

const deleteRole = () => {
  store.dispatch("roles/deleteRole", selectedItem.value.id);
  closeModal();
};

watch(perPage, (newValue) => {
  perPage.value = newValue;
  getRoles();
});

const paymentfilter = ["Payment Mode", "Cash", "Cheque", "Card", "Online"];

const roles = computed(() => {
  return store.getters["roles/roles"];
});

const getRoles = () => {
  isFetching.value = true;
  let data = {
    page: currentPage.value,
    per_page: perPage.value,
    query: "",
  };
  store
    .dispatch("roles/getRoles", data)
    .then(() => {
      isFetching.value = false;
      length.value = roles.value.data.length;
      store.dispatch("roles/getPermissions");
    })
    .catch(() => {
      isFetching.value = false;
    });
};

// Pagination start
const total = computed(() => {
  return store.getters["admin/total"];
});

const setPage = (pageNumber) => {
  currentPage.value = pageNumber;
  getRoles();
};

const nextPage = () => {
  if (pageNumbers.length > 1) {
    currentPage.value++;
    getRoles();
  }
};

const previousPage = () => {
  if (currentPage.value != 1) {
    currentPage.value--;
    getRoles();
  }
};

const pageNumbers = computed(() => {
  const pageNumbers = [];
  for (let i = 1; i <= total.value; i++) {
    pageNumbers.push(i);
  }
  if (pageNumbers.length > 10) {
    return pageNumbers.splice(0, 10);
  } else {
    return pageNumbers;
  }
});
// Pagination End

onMounted(() => {
  getRoles();
});
</script>

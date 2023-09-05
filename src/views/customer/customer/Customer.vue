<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Notification -->
    <div
      v-if="store.state.users.error"
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
      <p>{{ store.state.users.error }}</p>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
    <div
      v-if="store.state.users.message"
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
      <p>{{ store.state.users.message }}</p>
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
              <h3 class="page-title">User Customer</h3>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <router-link to="/">Dashboard</router-link>
                </li>
                <li class="breadcrumb-item">
                  <router-link to="/users">Users</router-link>
                </li>
                <li class="breadcrumb-item active">Customers</li>
              </ul>
            </div>
            <div class="col-auto">
              <a
                @click="openModal"
                class="btn btn-primary filter-btn"
                id="filter_search"
              >
                <i class="feather feather-download-cloud"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12">
            <div class="card card-table">
              <div class="card-header">
                <h5 class="card-title" v-if="user">{{ user.name }}</h5>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <div
                    class="d-flex align-items-center justify-content-between p-4"
                  >
                    <div>
                      <span>Show</span>
                      <select class="mx-1 py-1" name="" v-model="perPage" id="">
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="200">200</option>
                        <option value="500">500</option>
                      </select>
                      <span>customers</span>
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
                        <th>Email Address</th>
                        <th>Country</th>
                        <th>State</th>
                        <th>Date added</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in customers.data" :key="item.id">
                        <td>
                          {{ item.name }}
                        </td>
                        <td>{{ item.email }}</td>
                        <td>{{ item.country }}</td>
                        <td>{{ item.state }}</td>
                        <td>{{ formatted(item.created_at) }}</td>
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
                  <div
                    v-if="!isFetching && length !== 0"
                    class="d-flex align-items-center justify-content-between p-4"
                  >
                    <p v-if="customers.meta">
                      Showing {{ customers.data.length }} of
                      {{ customers.meta.total }} customers
                    </p>
                    <div>
                      <ul class="pagination mb-4">
                        <li
                          class="page-item"
                          @click="previousPage"
                          :class="{ disabled: currentPage == 1 }"
                        >
                          <a class="page-link" href="javascript:;" tabindex="-1"
                            >Previous</a
                          >
                        </li>
                        <li
                          class="page-item"
                          v-for="pageNumber in pageNumbers"
                          :key="pageNumber"
                          @click="setPage(pageNumber)"
                          :class="{
                            active: pageNumber === currentPage,
                          }"
                        >
                          <a class="page-link" href="javascript:;">{{
                            pageNumber
                          }}</a>
                        </li>
                        <li
                          class="page-item"
                          @click="nextPage"
                          :class="{ disabled: pageNumbers.length <= 1 }"
                        >
                          <a class="page-link" href="javascript:;">Next</a>
                        </li>
                      </ul>
                    </div>
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
            <h4 class="modal-title" id="topModalLabel">Export</h4>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p v-if="user">
              Are you sure you want to export {{ user.name }} customers?
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
            <button
              type="button"
              @click="exportCustomers"
              class="btn btn-primary"
              :disabled="isLoading"
            >
              <span
                v-if="isLoading"
                class="spinner-border spinner-border-sm me-1"
                role="status"
                aria-hidden="true"
              ></span>
              <span v-if="!isLoading">Export</span>
              <span v-if="isLoading">Exporting...</span>
            </button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
    </div>
    <!-- /.modal-dialog -->
  </div>
  <!-- /Main Wrapper -->
</template>

<script setup>
import { onMounted, computed, ref, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { formatted } from "../../../assets/composables/date";

const store = useStore();
const route = useRoute();
const currentPage = ref(1);
const perPage = ref(50);
const search = ref("");
const isLoading = ref(false);
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
  store.dispatch("users/getUserCustomers", data);
};

watch(perPage, (newValue) => {
  perPage.value = newValue;
  getUserCustomers();
});

const customers = computed(() => {
  return store.getters["users/usercustomers"];
});

const user = computed(() => {
  return store.getters["users/user"];
});

const openModal = () => {
  var myModal = new bootstrap.Modal(document.getElementById("top-modal"), {
    backdrop: "static",
  });
  myModal.show();
};
const closeModal = () => {
  var myModal = document.getElementById("top-modal");
  var modalTrigger = document.querySelector('[data-bs-dismiss="modal"]');
  modalTrigger.setAttribute("data-bs-target", "#" + myModal.id);
  modalTrigger.click();
};

const getUserCustomers = () => {
  isFetching.value = true;
  let data = {
    id: route.params.id,
    page: currentPage.value,
    per_page: perPage.value,
    query: "",
  };
  store
    .dispatch("users/getUserCustomers", data)
    .then(() => {
      isFetching.value = false;
      length.value = customers.value.data.length;
    })
    .catch(() => {
      isFetching.value = false;
    });
};

const getUser = () => {
  store.dispatch("users/getUser", route.params.id);
};

// Pagination start
const total = computed(() => {
  return store.getters["users/total"];
});

const setPage = (pageNumber) => {
  currentPage.value = pageNumber;
  getUserCustomers();
};

const nextPage = () => {
  if (pageNumbers.length > 1) {
    currentPage.value++;
    getUserCustomers();
  }
};

const previousPage = () => {
  if (currentPage.value != 1) {
    currentPage.value--;
    getUserCustomers();
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

const exportCustomers = async () => {
  isLoading.value = true;
  await store
    .dispatch("users/exportCustomers", route.params.id)
    .then(() => {
      saveExcel(store.state.users.url);
    })
    .then(() => {
      closeModal();
      isLoading.value = false;
    })
    .catch(() => {
      closeModal();
      isLoading.value = false;
    });
};

const saveExcel = (fileUrl) => {
  const link = document.createElement("a");
  link.href = fileUrl;
  link.setAttribute("download", "fileName");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

onMounted(() => {
  getUser();
  getUserCustomers();
});
</script>

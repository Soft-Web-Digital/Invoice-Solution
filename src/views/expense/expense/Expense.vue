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
        <!-- Page Header -->
        <div class="page-header">
          <div class="row align-items-center">
            <div class="col">
              <h3 class="page-title">Admins</h3>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <router-link to="/">Dashboard</router-link>
                </li>
                <li class="breadcrumb-item active">Admins</li>
              </ul>
            </div>
            <div class="col-auto">
              <router-link to="/add-admin" class="btn btn-primary me-2">
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
                      <span>admins</span>
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
                        <th>Email</th>
                        <th>Role</th>
                        <th>Date Added</th>
                        <th>Status</th>
                        <th class="text-end">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in admins.data" :key="item.id">
                        <td>
                          <a href="javascript:void(0);">{{ item.name }}</a>
                        </td>
                        <td>{{ item.email }}</td>
                        <td>{{ item.role.name }}</td>
                        <td>{{ formatted(item.created_at) }}</td>
                        <td>
                          <span
                            class="badge badge-pill bg-success-light"
                            v-if="item.active"
                            >Active</span
                          >
                          <span class="badge badge-pill bg-danger-light" v-else
                            >Inactive</span
                          >
                        </td>
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
                                :to="'/edit-admin/' + item.id"
                                class="dropdown-item"
                                href="javascript:void(0);"
                                ><i class="fa fa-edit me-2"></i>
                                Edit</router-link
                              >
                              <a
                                class="dropdown-item"
                                href="javascript:void(0);"
                                @click="openModal(item)"
                                ><i
                                  v-if="item.active"
                                  class="fa fa-user-times me-2"
                                ></i>
                                <i v-else class="fa fa-user-plus me-2"></i>
                                {{ item.active ? "Restrict" : "Restore" }}</a
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
                    Loading
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
                    <p v-if="admins.meta">
                      Showing {{ admins.data.length }} of
                      {{ admins.meta.total }} users
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
            <h4 class="modal-title" id="topModalLabel">Admin</h4>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p v-if="selectedItem">
              Are you sure you want to
              {{ selectedItem.active ? "restrict" : "restore" }}
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
            <button
              v-if="selectedItem && selectedItem.active"
              type="button"
              @click="restrictAdmin"
              class="btn btn-danger"
            >
              Restrict
            </button>
            <button
              v-if="selectedItem && !selectedItem.active"
              type="button"
              @click="restoreAdmin"
              class="btn btn-success"
            >
              Restore
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
import { ref, onMounted, computed, watch } from "vue";
import { useStore } from "vuex";
import { formatted } from "../../../assets/composables/date";

const store = useStore();
const filter = ref(false);
const currentPage = ref(1);
const perPage = ref(50);
const search = ref("");
const isFetching = ref(false);
const length = ref(null);

const selectedItem = ref(null);

watch(search, (newValue) => {
  Search(newValue);
});

const Search = (keyword) => {
  let data = {
    page: currentPage.value,
    per_page: perPage.value,
    query: keyword,
  };
  store.dispatch("admin/getAdmins", data);
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

const restrictAdmin = () => {
  store.dispatch("admin/restrictAdmin", selectedItem.value.id).then(() => {
    getAdmins();
  });
  closeModal();
};
const restoreAdmin = () => {
  store.dispatch("admin/restoreAdmin", selectedItem.value.id).then(() => {
    getAdmins();
  });
  closeModal();
};

watch(perPage, (newValue) => {
  perPage.value = newValue;
  getAdmins();
});

const paymentfilter = ["Payment Mode", "Cash", "Cheque", "Card", "Online"];

const admins = computed(() => {
  return store.getters["admin/admins"];
});

const getAdmins = () => {
  isFetching.value = true;
  let data = {
    page: currentPage.value,
    per_page: perPage.value,
    query: "",
  };
  store
    .dispatch("admin/getAdmins", data)
    .then(() => {
      isFetching.value = false;
      length.value = admins.value.data.length;
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
  getAdmins();
};

const nextPage = () => {
  if (pageNumbers.length > 1) {
    currentPage.value++;
    getAdmins();
  }
};

const previousPage = () => {
  if (currentPage.value != 1) {
    currentPage.value--;
    getAdmins();
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
  getAdmins();
});
</script>

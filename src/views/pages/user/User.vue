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
        <userheader />

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
                      <span>transactions</span>
                    </div>

                    <div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                  <table
                    class="table table-stripped table-center table-hover datatable"
                  >
                    <thead class="thead-light">
                      <tr>
                        <th>Name</th>
                        <th>Country</th>
                        <th>Balance</th>
                        <th>Registered on</th>
                        <th>Status</th>
                        <th class="text-end">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="user in users.data" :key="user.id">
                        <td>
                          <h2 class="table-avatar">
                            <router-link to="/profile">
                              {{ user.name }}</router-link
                            >
                          </h2>
                        </td>
                        <td>{{ user.country }}</td>
                        <td>{{ useCurrency(user.wallet_balance) }}</td>
                        <td>{{ formatted(user.created_at) }}</td>
                        <td>
                          <span
                            class="badge badge-pill bg-success-light"
                            v-if="user.active"
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
                              <!-- <router-link to="/" class="dropdown-item"
                                ><i class="fa fa-eye me-2"></i> View
                                Users</router-link
                              > -->
                              <router-link
                                :to="{
                                  name: 'user-activities',
                                  params: { id: user.id },
                                }"
                                class="dropdown-item"
                                ><i class="fa fa-signal me-2"></i> View
                                Activities</router-link
                              >
                              <!-- <router-link to="/" class="dropdown-item"
                                ><i class="fa fa-eye me-2"></i> View
                                Settings</router-link
                              > -->
                              <router-link
                                :to="{
                                  name: 'user-customers',
                                  params: { id: user.id },
                                }"
                                class="dropdown-item"
                                ><i class="fa fa-users me-2"></i> View
                                Customers</router-link
                              >
                              <!-- <router-link to="/" class="dropdown-item"
                                ><i class="fa fa-bell me-2"></i> Send
                                Notification</router-link
                              > -->
                              <a
                                class="dropdown-item"
                                href="javascript:void(0);"
                                @click="openModal(user)"
                                ><i
                                  v-if="user.active"
                                  class="fa fa-user-times me-2"
                                ></i>
                                <i v-else class="fa fa-user-plus me-2"></i>
                                {{ user.active ? "Restrict" : "Restore" }}</a
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
                    <p v-if="users.meta">
                      Showing {{ users.data.length }} of
                      {{ users.meta.total }} users
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
            <h4 class="modal-title" id="topModalLabel">User</h4>
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
import { useCurrency } from "../../../assets/composables/currency";

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
  store.dispatch("users/getUsers", data);
};

const toggleFilter = () => {
  filter.value = !filter.value;
};

watch(perPage, (newValue) => {
  perPage.value = newValue;
  getUsers();
});

const openModal = (user) => {
  var myModal = new bootstrap.Modal(document.getElementById("top-modal"), {
    backdrop: "static",
  });
  myModal.show();

  selectedItem.value = user;
};
const closeModal = () => {
  var myModal = document.getElementById("top-modal");
  var modalTrigger = document.querySelector('[data-bs-dismiss="modal"]');
  modalTrigger.setAttribute("data-bs-target", "#" + myModal.id);
  modalTrigger.click();
};

const restrictAdmin = () => {
  store.dispatch("users/restrictUser", selectedItem.value.id).then(() => {
    getUsers();
  });
  closeModal();
};
const restoreAdmin = () => {
  store.dispatch("users/restoreUser", selectedItem.value.id).then(() => {
    getUsers();
  });
  closeModal();
};

const paymentfilter = ["Payment Mode", "Cash", "Cheque", "Card", "Online"];

const users = computed(() => {
  return store.getters["users/users"];
});

const getUsers = () => {
  isFetching.value = true;
  let data = {
    page: currentPage.value,
    per_page: perPage.value,
    query: "",
  };
  store
    .dispatch("users/getUsers", data)
    .then(() => {
      isFetching.value = false;
      length.value = users.value.data.length;
    })
    .catch(() => {
      isFetching.value = false;
    });
};

// Pagination start
const total = computed(() => {
  return store.getters["users/total"];
});

const setPage = (pageNumber) => {
  currentPage.value = pageNumber;
  getUsers();
};

const nextPage = () => {
  if (pageNumbers.length > 1) {
    currentPage.value++;
    getUsers();
  }
};

const previousPage = () => {
  if (currentPage.value != 1) {
    currentPage.value--;
    getUsers();
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
  getUsers();
});
</script>

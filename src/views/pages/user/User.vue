<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <div class="content container-fluid">
        <userheader />

        <div class="row">
          <div class="col-sm-12">
            <div class="card card-table">
              <div class="card-header">
                <h4 class="card-title">Users</h4>
              </div>
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
                              <router-link
                                to="/"
                                class="dropdown-item"
                                href="javascript:void(0);"
                                ><i class="fa fa-eye me-2"></i> View
                                Users</router-link
                              >
                              <router-link
                                to="/"
                                class="dropdown-item"
                                href="javascript:void(0);"
                                ><i class="fa fa-eye me-2"></i> View
                                Activities</router-link
                              >
                              <router-link
                                to="/"
                                class="dropdown-item"
                                href="javascript:void(0);"
                                ><i class="fa fa-eye me-2"></i> View
                                Settings</router-link
                              >
                              <router-link
                                to="/"
                                class="dropdown-item"
                                href="javascript:void(0);"
                                ><i class="fa fa-bell me-2"></i> Send
                                Notification</router-link
                              >
                              <router-link
                                to="/"
                                class="dropdown-item"
                                href="javascript:void(0);"
                                ><i class="fa fa-user-times me-2"></i>
                                Restrict</router-link
                              >
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div
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

const paymentfilter = ["Payment Mode", "Cash", "Cheque", "Card", "Online"];

const users = computed(() => {
  return store.getters["users/users"];
});

const getUsers = () => {
  let data = {
    page: currentPage.value,
    per_page: perPage.value,
    query: "",
  };
  store.dispatch("users/getUsers", data);
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

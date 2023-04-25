<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Notification -->
    <div
      v-if="store.state.notification.error"
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
      <p>{{ store.state.notification.error }}</p>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
    <div
      v-if="store.state.notification.message"
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
      <p>{{ store.state.notification.message }}</p>
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
              <h3 class="page-title">Notifications</h3>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <router-link to="/">Dashboard</router-link>
                </li>
                <li class="breadcrumb-item active">Notifications</li>
              </ul>
            </div>
            <div class="col-auto">
              <router-link
                to="/create-notification"
                class="btn btn-primary me-2"
              >
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
                      <span>transactions</span>
                    </div>

                    <div>
                      <input
                        type="text"
                        class="form-control"
                        v-model="search"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                  <table class="table table-center table-hover datatable">
                    <thead class="thead-light">
                      <tr>
                        <th>User</th>
                        <th>Title</th>
                        <th>Date Created</th>
                        <th>Status</th>
                        <th class="text-end">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in notifications.data" :key="item.id">
                        <td>
                          <a href="javascript:void(0);">{{
                            item.recipients
                          }}</a>
                        </td>
                        <td>{{ item.subject.slice(0, 20) }}</td>
                        <td>{{ formatted(item.created_at) }}</td>
                        <td>
                          <span
                            class="badge badge-pill bg-success-light"
                            v-if="item.status == 'success'"
                            >Successful</span
                          >
                          <span
                            class="badge badeg-pill bg-warning"
                            v-if="item.status == 'queued'"
                            >Queued</span
                          >
                          <span
                            class="badge badeg-pill bg-warning"
                            v-if="item.status == 'sending'"
                            >Sending</span
                          >
                          <span
                            class="badge bg-danger"
                            v-if="item.status == 'failed'"
                            >Failed</span
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
                              <a
                                class="dropdown-item"
                                href="javascript:void(0);"
                                @click="resendNotification(item.id)"
                                ><i class="fa fa-undo me-2"></i> Resend</a
                              >
                              <a
                                class="dropdown-item"
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
                    class="d-flex align-items-center justify-content-between p-4"
                  >
                    <p v-if="notifications.meta">
                      Showing {{ notifications.data.length }} of
                      {{ notifications.meta.total }} transactions
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
                        <li class="page-item" @click="nextPage">
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
              <span v-if="selectedItem"
                >{{ selectedItem.subject.slice(0, 20) }}?</span
              >
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
              @click="deleteNotification"
              class="btn btn-danger"
            >
              Delete
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
import { formatted } from "../../assets/composables/date";
import paymentz from "../../assets/json/payments.json";

const payments = paymentz;

const store = useStore();
const filter = ref(false);
const currentPage = ref(1);
const perPage = ref(50);
const search = ref("");
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
  store.dispatch("notification/getNotifications", data);
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

const resendNotification = (id) => {
  store.dispatch("notification/resendNotification", id);
};

const deleteNotification = () => {
  store.dispatch("notification/deleteNotification", selectedItem.value.id);
  closeModal();
};

watch(perPage, (newValue) => {
  perPage.value = newValue;
  getNotifications();
});

const paymentfilter = ["Payment Mode", "Cash", "Cheque", "Card", "Online"];

const notifications = computed(() => {
  return store.getters["notification/notifications"];
});

const getNotifications = () => {
  let data = {
    page: currentPage.value,
    per_page: perPage.value,
    query: "",
  };
  store.dispatch("notification/getNotifications", data);
};

// Pagination start
const total = computed(() => {
  return store.getters["notification/total"];
});

const setPage = (pageNumber) => {
  currentPage.value = pageNumber;
  getNotifications();
};

const nextPage = () => {
  if (pageNumbers.length > 1) {
    currentPage.value++;
    getNotifications();
  }
};

const previousPage = () => {
  if (currentPage.value != 1) {
    currentPage.value--;
    getNotifications();
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
  getNotifications();
});
</script>

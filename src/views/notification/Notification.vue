<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

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
              <a
                class="btn btn-primary filter-btn"
                href="javascript:void(0);"
                @click="toggleFilter"
                id="filter_search"
              >
                <i class="fas fa-filter"></i>
              </a>
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
                  <table
                    class="table table-center table-hover datatable"
                    id="paymentTable"
                  >
                    <thead class="thead-light">
                      <tr>
                        <th>User</th>
                        <th>User count</th>
                        <th>Title</th>
                        <th>Date Created</th>
                        <th>Status</th>
                        <th class="text-end">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in payments" :key="item.id">
                        <td>
                          <a href="javascript:void(0);">{{
                            item.customer_name
                          }}</a>
                        </td>
                        <td>43</td>
                        <td>The new feature is coming</td>
                        <td>{{ item.date }}</td>
                        <td>
                          <span class="badge badge-pill bg-success-light"
                            >Successful</span
                          >
                          <!-- <span class="badge badeg-pill bg-warning"
                              >Warning</span
                            >
                            <span class="badge bg-danger">Danger</span> -->
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
                                to="/edit-notification"
                                class="dropdown-item"
                                href="javascript:void(0);"
                                ><i class="fa fa-edit me-2"></i>
                                Resend</router-link
                              >
                              <a
                                class="dropdown-item"
                                href="javascript:void(0);"
                                ><i class="fa fa-trash me-2"></i>Delete</a
                              >
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import paymentz from "../../assets/json/payments.json";
import util from "../../assets/utils/util";
const images = require.context(
  "../../assets/img/profiles",
  false,
  /\.png$|\.jpg$/
);

const store = useStore();

const filter = ref(false);

const toggleFilter = () => {
  filter.value = !filter.value;
};

const payments = paymentz;
const paymentfilter = ["Payment Mode", "Cash", "Cheque", "Card", "Online"];

onMounted(() => {
  util.datatable("#paymentTable");
  store.dispatch("transactions/getTransactions");
});
</script>

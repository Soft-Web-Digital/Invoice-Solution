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
              <h3 class="page-title">Customers</h3>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <router-link to="/">Dashboard</router-link>
                </li>
                <li class="breadcrumb-item active">Customers</li>
              </ul>
            </div>
            <div class="col-auto">
              <!-- <router-link to="/add-payments" class="btn btn-primary me-2">
				  <i class="fas fa-plus"></i>
				</router-link> -->
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
                    id="customerTable"
                  >
                    <thead class="thead-light">
                      <tr>
                        <th>User</th>
                        <th>Category</th>
                        <th>Email Address</th>
                        <th>Country</th>
                        <th>State</th>
                        <th>Date added</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in customers" :key="item.id">
                        <td>
                          <h2 class="table-avatar">
                            <router-link
                              to="/profile"
                              class="avatar avatar-sm me-2"
                              ><img
                                class="avatar-img rounded-circle"
                                :src="loadImg(item.customer_image)"
                                alt="User Image"
                            /></router-link>
                            <router-link to="/profile"
                              >{{ item.customer_name }}
                              <span>{{
                                item.customer_mobile
                              }}</span></router-link
                            >
                          </h2>
                        </td>
                        <td>Category</td>
                        <td>softwebdigital@gmail.com</td>
                        <td>Nigeria</td>
                        <td>Lagos</td>
                        <td>20 Sep 2021</td>
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
import customer from "../../../assets/json/customers.json";
import util from "../../../assets/utils/util";
const images = require.context(
  "../../../assets/img/profiles",
  false,
  /\.png$|\.jpg$/
);

const filter = ref(false);

const toggleFilter = () => {
  filter.value = !filter.value;
};

const customers = customer;
const paymentfilter = ["Payment Mode", "Cash", "Cheque", "Card", "Online"];

const loadImg = (imgPath) => {
  return images("./" + imgPath).default;
};

onMounted(() => {
  util.datatable("#customerTable");
});
</script>

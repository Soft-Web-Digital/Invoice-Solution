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
              <h3 class="page-title">Subscriptions</h3>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <router-link to="/">Dashboard</router-link>
                </li>
                <li class="breadcrumb-item active">Subscriptions</li>
              </ul>
            </div>
            <div class="col-auto">
              <div class="btn btn-primary me-4">
                <a
                  href="javascript:;"
                  data-bs-toggle="modal"
                  class="text-white"
                  data-bs-target="#add_items"
                >
                  <i data-feather="plus-circle"></i> Add New Plan
                </a>
              </div>
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
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Discount</th>
                        <th>Duration</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in customers" :key="item.id">
                        <td>Premium</td>
                        <td>#50,000</td>
                        <td>1%</td>
                        <td>1 year</td>
                        <td>
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
                                data-bs-toggle="modal"
                                @click="open"
                                data-bs-target="#add_items"
                                ><i class="fa fa-edit me-2"></i> Edit</a
                              >
                              <a
                                class="dropdown-item"
                                href="javascript:void(0);"
                                data-bs-toggle="modal"
                                @click="open"
                                data-bs-target="#delete_paid"
                                ><i class="fa fa-trash me-2"></i> Delete</a
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

    <!-- Add Invoices Items Modal -->
    <div
      class="modal custom-modal fade bank-details"
      id="add_items"
      role="dialog"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <div class="form-header text-start mb-0">
              <h4 class="mb-0">Create New Plan</h4>
            </div>
            <button
              type="button"
              class="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="bank-inner-details">
              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <label>Item Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Add New Item"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <label>Category</label>
                    <vue-select
                      :options="category"
                      placeholder="Select category"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <label>Price Per unit</label>
                    <input type="text" class="form-control" placeholder="$" />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <label>Discount</label>
                    <input type="text" class="form-control" placeholder="%" />
                  </div>
                </div>
                <div class="col-lg-12 col-md-12">
                  <div class="form-group">
                    <label>Description (Optional) </label>
                    <textarea
                      class="form-control"
                      placeholder="Add item description"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <div class="bank-details-btn">
              <a
                href="javascript:void(0);"
                data-bs-dismiss="modal"
                class="btn bank-cancel-btn me-2"
                >Cancel</a
              >
              <a href="javascript:void(0);" class="btn bank-save-btn"
                >Save Item</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Add Items Modal -->

    <!-- Delete Items Modal -->
    <div
      class="modal custom-modal fade"
      id="delete_paid"
      tabindex="-1"
      role="dialog"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <div class="form-header">
              <h3>Delete Subscription Plan</h3>
              <p>Are you sure want to delete?</p>
            </div>
            <div class="modal-btn delete-action">
              <div class="row">
                <div class="col-6">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-primary paid-continue-btn"
                    >Delete</a
                  >
                </div>
                <div class="col-6">
                  <a
                    href="javascript:void(0);"
                    data-bs-dismiss="modal"
                    @click="closeModal"
                    id="cancel"
                    class="btn btn-primary paid-cancel-btn"
                    >Cancel</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Delete Items Modal -->
  </div>
  <!-- /Main Wrapper -->
</template>

<script setup>
import { ref, onMounted } from "vue";
import customer from "../../assets/json/customers.json";
import util from "../../assets/utils/util";
const images = require.context(
  "../../assets/img/profiles",
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

const open = () => {
  console.log("babz");
  $("#delete_paid").modal("dispose");
};

onMounted(() => {
  util.datatable("#customerTable");
});
</script>

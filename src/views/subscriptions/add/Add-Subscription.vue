<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <div class="content container-fluid">
        <div class="page-header">
          <div class="row">
            <div class="col-sm-12">
              <h3 class="page-title">Subscriptions</h3>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <router-link to="/">Dashboard</router-link>
                </li>
                <li class="breadcrumb-item">
                  <router-link to="/subscriptions">Subscriptions</router-link>
                </li>
                <li class="breadcrumb-item active">Add Subscription</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <form action="#">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Item Name</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Add New Item"
                        />
                      </div>
                      <div class="form-group">
                        <label>Category</label>
                        <vue-select
                          :options="category"
                          placeholder="Select category"
                        />
                      </div>
                      <div class="form-group">
                        <label>Discount</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="%"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Price Per unit</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="$"
                        />
                      </div>
                      <div class="form-group">
                        <label>Description (Optional) </label>
                        <textarea
                          class="form-control"
                          placeholder="Add item description"
                        ></textarea>
                      </div>
                      <div class="text-end mt-4">
                        <button type="submit" class="btn btn-primary">
                          Add Subscription
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
import { ref, onMounted } from "vue";
const currentDate = ref(new Date());

const startdate = ref(currentDate);

onMounted(() => {
  // Select 2
  if ($(".select").length > 0) {
    $(".select").select2({
      minimumResultsForSearch: -1,
      width: "100%",
    });
  }
});
</script>

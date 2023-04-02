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
              <h3 class="page-title">Expenses</h3>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <router-link to="/">Dashboard</router-link>
                </li>
                <li class="breadcrumb-item">
                  <router-link to="/admin">Admin</router-link>
                </li>
                <li class="breadcrumb-item active">Edit Admin</li>
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
                        <label>Name</label>
                        <input type="text" class="form-control" />
                      </div>
                      <div class="form-group">
                        <label>Phone</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <!-- <div class="form-group">
						  <label>Date:</label>
						  <div class="cal-icon">
							<datepicker
							  v-model="startdate"
							  class="picker"
							  :editable="true"
							  :clearable="false"
							/>
						  </div>
						</div> -->
                      <div class="form-group">
                        <label>Email</label>
                        <input type="text" class="form-control" />
                      </div>
                      <div class="form-group">
                        <label>Role:</label>
                        <select class="select">
                          <option>Select Role</option>
                          <option>Advertising</option>
                          <option>Marketing</option>
                          <option>Software</option>
                          <option>Travel</option>
                        </select>
                      </div>
                      <div class="text-end mt-4">
                        <button type="submit" class="btn btn-primary">
                          Save Changes
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

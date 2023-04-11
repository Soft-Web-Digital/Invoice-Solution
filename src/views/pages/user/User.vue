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
                  <table
                    class="table table-stripped table-center table-hover datatable"
                    id="usersTable"
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
                      <tr v-for="item in users" :key="item.id">
                        <td>
                          <h2 class="table-avatar">
                            <router-link to="/profile"
                              ><img
                                class="avatar avatar-sm me-2 avatar-img rounded-circle"
                                :src="loadImg(item.customer_image)"
                                alt="User Image"
                              />
                              {{ item.customer_name }}</router-link
                            >
                          </h2>
                        </td>
                        <td>Nigeria</td>
                        <td>#30,000</td>
                        <td>{{ item.registered_on }}</td>
                        <td>
                          <span
                            class="badge badge-pill bg-success-light"
                            v-if="item.status == 'Active'"
                            >Active</span
                          >
                          <span
                            class="badge badge-pill bg-danger-light"
                            v-if="item.status == 'Inactive'"
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
import { onMounted } from "vue";
import userz from "../../../assets/json/users.json";
import util from "../../../assets/utils/util";
const images = require.context(
  "../../../assets/img/profiles",
  false,
  /\.png$|\.jpg$/
);

const users = userz;

onMounted(() => {
  util.datatable("#usersTable");
});

const loadImg = (imgPath) => {
  return images("./" + imgPath).default;
};
</script>

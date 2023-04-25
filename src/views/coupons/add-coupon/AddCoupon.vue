<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Notification -->
    <div
      v-if="store.state.coupon.error"
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
      <p>{{ store.state.coupon.error }}</p>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
    <div
      v-if="store.state.coupon.message"
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
      <p>{{ store.state.coupon.message }}</p>
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
        <div class="page-header">
          <div class="row">
            <div class="col-sm-12">
              <h3 class="page-title">Coupons</h3>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <router-link to="/">Dashboard</router-link>
                </li>
                <li class="breadcrumb-item">
                  <router-link to="/coupons">Coupons</router-link>
                </li>
                <li class="breadcrumb-item active">Add Coupon</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <form @submit.prevent="createCoupon">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Code</label>
                        <input
                          v-model="form.code"
                          type="text"
                          class="form-control"
                        />
                      </div>
                      <div class="form-group">
                        <label>User Count</label>
                        <input
                          v-model="form.total"
                          type="text"
                          class="form-control"
                        />
                      </div>
                      <div class="form-group">
                        <label>Discount</label>
                        <input
                          v-model="form.discount"
                          type="text"
                          class="form-control"
                        />
                      </div>
                      <div class="form-group">
                        <label>Expiry Date:</label>
                        <div>
                          <input
                            style="width: 100%; height: 40px"
                            type="datetime-local"
                            v-model="form.expiry_date"
                          />
                        </div>
                      </div>
                      <div class="text-end mt-4">
                        <button
                          class="btn btn-primary"
                          type="submit"
                          :disabled="isLoading"
                        >
                          <span
                            v-if="isLoading"
                            class="spinner-border spinner-border-sm me-1"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          <span v-if="!isLoading">Add Coupon</span>
                          <span v-if="isLoading">Adding...</span>
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
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const isLoading = ref(false);

const form = ref({
  code: "",
  discount: null,
  total: null,
  expiry_date: "",
});

const createCoupon = () => {
  isLoading.value = true;
  store
    .dispatch("coupon/createCoupon", form.value)
    .then(() => {
      isLoading.value = false;
    })
    .catch(() => {
      isLoading.value = false;
    });
};
</script>

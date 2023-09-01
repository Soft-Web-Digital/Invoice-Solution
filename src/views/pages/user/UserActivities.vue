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
              <h3 class="page-title">User Activities</h3>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <router-link to="/">Dashboard</router-link>
                </li>
                <li class="breadcrumb-item">
                  <router-link to="/users">Users</router-link>
                </li>
                <li class="breadcrumb-item active">User activities</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12">
            <div class="card bg-white">
              <div class="card-header">
                <h5 class="card-title" v-if="user">{{ user.name }}</h5>
              </div>
              <div class="card-body">
                <ul class="nav nav-tabs nav-tabs-bottom">
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      :class="{ 'active': active === 'invoice' }"
                      href="#bottom-tab1"
                      data-bs-toggle="tab"
                      >Invoices</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      :class="{ 'active': active === 'estimates' }"
                      href="#bottom-tab2"
                      data-bs-toggle="tab"
                      >Estimates</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      :class="{ 'active': active === 'expenses' }"
                      href="#bottom-tab3"
                      data-bs-toggle="tab"
                      >Expenses</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      :class="{ 'active': active === 'transactions' }"
                      href="#bottom-tab4"
                      data-bs-toggle="tab"
                      >Transactions</a
                    >
                  </li>
                </ul>

                <div class="tab-content">
                  <div class="tab-pane show active" id="bottom-tab1">
                    <Invoices />
                  </div>
                  <div class="tab-pane" id="bottom-tab2"><Estimates /></div>
                  <div class="tab-pane" id="bottom-tab3"><Expenses /></div>
                  <div class="tab-pane" id="bottom-tab4"><Transactions /></div>
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
import { onMounted, computed, ref, defineAsyncComponent } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const store = useStore();
const route = useRoute();

const active = ref("invoice");

const Invoices = defineAsyncComponent(() => import("./tabs/UserInvoices.vue"));
const Estimates = defineAsyncComponent(() =>
  import("./tabs/UserEstimates.vue")
);
const Expenses = defineAsyncComponent(() => import("./tabs/UserExpenses.vue"));
const Transactions = defineAsyncComponent(() =>
  import("./tabs/UserTransactions.vue")
);

const user = computed(() => {
  return store.getters["users/user"];
});

const getUser = () => {
  store.dispatch("users/getUser", route.params.id);
};

onMounted(() => {
  getUser();
});
</script>

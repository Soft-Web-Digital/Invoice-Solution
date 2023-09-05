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
              <h3 class="page-title" v-if="user">{{ user.name }}</h3>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <router-link to="/">Dashboard</router-link>
                </li>
                <li class="breadcrumb-item">
                  <router-link to="/users">Users</router-link>
                </li>
                <li class="breadcrumb-item active">User view</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12">
            <ul class="nav nav-tabs nav-tabs-bottom mb-4">
              <li class="nav-item">
                <a
                  class="nav-link"
                  :class="{ 'active': active === 'userinfo' }"
                  href="#bottom-tab1"
                  data-bs-toggle="tab"
                  >User Information</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  :class="{ 'active': active === 'subscriptions' }"
                  href="#bottom-tab2"
                  data-bs-toggle="tab"
                  >Subscriptions</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  :class="{ 'active': active === 'bankaccounts' }"
                  href="#bottom-tab3"
                  data-bs-toggle="tab"
                  >Bank Accounts</a
                >
              </li>
            </ul>
            <!-- <div class="card bg-white">
              <div class="card-body pt-0"> -->
            <div class="tab-content pt-0">
              <div class="tab-pane show active" id="bottom-tab1">
                <UserInformation />
              </div>
              <div class="tab-pane" id="bottom-tab2"><Subscriptions /></div>
              <div class="tab-pane" id="bottom-tab3"><Banks /></div>
            </div>
            <!-- </div>
            </div> -->
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

const active = ref("userinfo");

const UserInformation = defineAsyncComponent(() =>
  import("./tabs/UserInformation.vue")
);
const Subscriptions = defineAsyncComponent(() =>
  import("./tabs/UserSubscription.vue")
);
const Banks = defineAsyncComponent(() => import("./tabs/UserBanks.vue"));

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

<script setup>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const fetchUser = () => {
  store.dispatch("auth/getUser");
};

const user = computed(() => store.getters["auth/user"]);

const logoutUser = () => {
  $cookies.remove("user");
  router.push("/login");
};
onMounted(() => {
  fetchUser();
});
</script>

<template>
  <!-- User Menu -->
  <li class="nav-item dropdown has-arrow main-drop">
    <a
      href="javascript:void(0)"
      class="dropdown-toggle nav-link"
      data-bs-toggle="dropdown"
    >
      <span class="user-img">
        <img src="../assets/img/profiles/avatar-01.jpg" alt="" />
        <span class="status online"></span>
      </span>
      <span class="adminmodule"> {{ user.name }}</span>
    </a>
    <div class="dropdown-menu">
      <!-- <router-link class="dropdown-item" to="/profile"
        ><i data-feather="user" class="me-1"></i> Profile</router-link
      > -->
      <router-link class="dropdown-item" to="/change-password"
        ><i data-feather="settings" class="me-1"></i> Settings</router-link
      >
      <a class="dropdown-item" href="#" @click="logoutUser"
        ><i data-feather="log-out" class="me-1"></i> Logout</a
      >
    </div>
  </li>
  <!-- /User Menu -->
</template>

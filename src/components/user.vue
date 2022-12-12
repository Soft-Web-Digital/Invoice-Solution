<script>

export default {
    mounted() {
      this.fetchUser();
  },
  methods: {
      logoutUser() {
        $cookies.remove("user");
        router.push('/login');
      },
      fetchUser() {
        this.axios.defaults.headers.common['Authorization'] = `Bearer 402|3JCVMJTgRUzw3NqHhiJInAaU5Ql9PKp10Z1f5WeV`;
        // this.axios.defaults.headers.common['Authorization'] = `Bearer ${this.$cookies.get("token")}`;
        // if (this.$cookies.get("token")) {
          this.axios.get('https://testapi.codedevents.com/admin/auth/user')
          .then((res) => {
            //   console.log(res);
              // console.log($cookies.get("token"));
              
          })
          .catch((err) => {
              // this.error = true
              console.log(err);
          })
          .finally(() => {
                // this.loading =  false
          });
        // } else {
        //     localStorage.removeItem('user');
        // }
      }
    }


}
</script>

<template>
    <!-- User Menu -->
    <li class="nav-item dropdown has-arrow main-drop">
        <a href="javascript:void(0)" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
            <span class="user-img">
                <img src="../assets/img/profiles/avatar-01.jpg" alt="">
                <span class="status online"></span>
            </span>
        <span class="adminmodule"> Admin</span>
        </a>
        <div class="dropdown-menu">
            <router-link class="dropdown-item" to="/profile"><i data-feather="user" class="me-1"></i> Profile</router-link>
            <router-link class="dropdown-item" to="/settings"><i data-feather="settings" class="me-1"></i> Settings</router-link>
            <a class="dropdown-item" href="#" @click="logoutUser"><i data-feather="log-out" class="me-1"></i> Logout</a>
        </div>
    </li>
    <!-- /User Menu -->
</template>
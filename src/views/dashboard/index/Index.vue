<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layout-header />
    <layout-sidebar />

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <div class="content container-fluid">
        <dashboardwidget />
		{{ count }}
        <dashboardgraph />

        <div class="row">
          <invoicetable />
          <estimatetable1 />
        </div>
      </div>
    </div>
    <!-- /Page Wrapper -->
  </div>
  <!-- /Main Wrapper -->
</template>

<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();
const count = store.state.auth.count
const updateCount = () => {
  store.dispatch("auth/increaseCount");
};

onMounted(() => {
	updateCount();
})
</script>

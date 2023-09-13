<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layout-header />
    <layout-sidebar />

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <div class="content container-fluid">
        <dashboardwidget />
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

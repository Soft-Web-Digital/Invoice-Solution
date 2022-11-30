<template>
<!-- Page Header -->
					<div class="page-header">
						<div class="row align-items-center">
							<div class="col">
								<h3 class="page-title">Sales Report</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><router-link to="/">Dashboard</router-link></li>
									<li class="breadcrumb-item active">Reports</li>
								</ul>
							</div>
							<div class="col-auto">
								<a href="javascript:void(0)"  class="btn btn-primary me-1">
									<i class="fas fa-file-pdf"></i>
								</a>
								<a class="btn btn-primary filter-btn" href="javascript:void(0);" @click="toggleContent" id="filter_search">
									<i class="fas fa-filter"></i>
								</a>
							</div>
						</div>
					</div>
					<!-- /Page Header -->
</template>
<script>
export default {
mounted() {
	$(document).on('click', '#filter_search', function() {
		$('#filter_inputs').slideToggle("slow");
	});
	},
}
</script>
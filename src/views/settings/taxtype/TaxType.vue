<template>
    <!-- Main Wrapper -->
		<div class="main-wrapper">
            <layout-header></layout-header>
			<layout-sidebar></layout-sidebar>
			<!-- Page Wrapper -->
			<div class="page-wrapper">
				<div class="content container-fluid">
				
					<taxtypeheader />
				
					<div class="row">
						<div class="col-xl-3 col-md-4">
                            <settingsidebar />
						</div>
						
						<div class="col-xl-9 col-md-8">
							<div class="card card-table">
								<div class="card-header">
									<div class="row">
										<div class="col">
											<h5 class="card-title">Tax Types</h5>
										</div>
										<div class="col-auto">
											<a href="javascript:void(0);" class="btn btn-outline-primary btn-sm" data-bs-toggle="modal" data-bs-target="#add_tax">Add New Tax</a>
										</div>
									</div>
								</div>
								<div class="card-body">
									<div class="table-responsive">
										<taxtypetable />
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<taxtypemodal />
					
				</div>
			</div>
			<!-- /Page Wrapper -->
			
		</div>
		<!-- /Main Wrapper -->
</template>

<script>
export default {
	mounted() {
	},
}
</script>
<template>
    <!-- Main Wrapper -->
        <div class="main-wrapper">
            <layout-header></layout-header>
            <layout-sidebar></layout-sidebar>
			
			<!-- Page Wrapper -->
            <div class="page-wrapper">
			
				<div class="content container-fluid">

					<formverticalheader />

					<div class="row">
						<div class="col-md-6">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title">Basic Form</h5>
								</div>
								<basicverticalform />
							</div>
						</div>
						<div class="col-md-6">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title">Address Form</h5>
								</div>
								<verticaladdress />
							</div>
						</div>
					</div>
					
					<div class="row">
						<div class="col-md-12">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title">Two Column Vertical Form</h5>
								</div>
								<twocolumnvertical />
							</div>
						</div>
					</div>
					
					<div class="row">
						<div class="col-md-12">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title">Two Column Vertical Form</h5>
								</div>
								<twocolumnvertical1 />
							</div>
						</div>
					</div>
					
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
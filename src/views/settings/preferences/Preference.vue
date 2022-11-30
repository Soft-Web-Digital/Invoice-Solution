<template>
    	<!-- Main Wrapper -->
		<div class="main-wrapper">
            <layout-header></layout-header>
			<layout-sidebar></layout-sidebar>
			
			<!-- Page Wrapper -->
			<div class="page-wrapper">
				<div class="content container-fluid">
					
					<preferenceheader />
					
					<div class="row">
						<div class="col-xl-3 col-md-4">
                           <settingsidebar />
						</div>
						
						<div class="col-xl-9 col-md-8">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title">Preferences</h5>
								</div>
								<div class="card-body">
									<preferenceform />
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

<script>
export default {
	mounted() {
	},
}
</script>
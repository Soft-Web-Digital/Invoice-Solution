<template>
    <!-- Main Wrapper -->
		<div class="main-wrapper">
            <layout-header></layout-header>
			<layout-sidebar></layout-sidebar>
			
			<!-- Page Wrapper -->
			<div class="page-wrapper">
				<div class="content container-fluid">
				
					<!-- Page Header -->
					<addcustomerheader />
					<!-- /Page Header -->
					
					<div class="row">
						<div class="col-md-12">
							<formaddcustomer />
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

    }
}
</script>
<template>
    	<!-- Main Wrapper -->

		<div class="main-wrapper">

            <layout-header></layout-header>

			<layout-sidebar></layout-sidebar>
			
			<!-- Page Wrapper -->

			<div class="page-wrapper">

				<div class="content container-fluid">
				
					<editcustomerheader />
					
					<div class="row">

						<div class="col-md-12">

							<div class="card">

								<div class="card-body">

									<h4 class="card-title">Basic Info</h4>

									<formbasicinfo />

									<h4 class="card-title mt-4">Billing Address</h4>

									<formeditbilling />

									<h4 class="card-title mt-4">Shipping Address</h4>

									<formeditshipping />
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

    }
}
</script>
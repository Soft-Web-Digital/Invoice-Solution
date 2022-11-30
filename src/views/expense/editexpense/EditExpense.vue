<template>

		<!-- Main Wrapper -->

		<div class="main-wrapper">

            <layout-header></layout-header>

			<layout-sidebar></layout-sidebar>
			
			<!-- Page Wrapper -->

			<div class="page-wrapper">

				<div class="content container-fluid">
				
					<editexpensesheader />
					
					<div class="row">

						<div class="col-md-12">

							<div class="card">

								<div class="card-body">

									<formeditexpense />

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
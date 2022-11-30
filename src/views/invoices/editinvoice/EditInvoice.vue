<template>
    <!-- Main Wrapper -->
		<div class="main-wrapper">
            <layout-header></layout-header>

			<layout-sidebar></layout-sidebar>

            <!-- Page Wrapper -->
			<div class="page-wrapper">

				<div class="content container-fluid">
			
				<editinvoiceheader></editinvoiceheader>
					
					<div class="row">
						<div class="col-md-12">
							<div class="card invoices-add-card">
								<div class="card-body">
									<form action="#" class="invoices-form">
										<div class="invoices-main-form">
											<div class="row">
												<formeditinvoice></formeditinvoice>
												<editinvoicetable></editinvoicetable>
												<editinvoicetable1></editinvoicetable1>
											</div>
										</div>
										<div class="invoice-item">
											<div class="row">
												<div class="col-xl-4 col-lg-6 col-md-6">
													<div class="invoice-info">
														<strong class="customer-text">Invoice From <router-link class="small" to="/edit-invoice">Edit Address</router-link></strong>
														<p class="invoice-details invoice-details-two">
															Darren Elder <br>
															806  Twin Willow Lane, Old Forge,<br>
															Newyork, USA <br>
														</p>
													</div>
												</div>
												<div class="col-xl-4 col-lg-6 col-md-6">
													<div class="invoice-info">
														<strong class="customer-text">Invoice To</strong>
														<p class="invoice-details invoice-details-two">
															Walter Roberson <br>
															299 Star Trek Drive, Panama City, <br>
															Florida, 32405, USA <br>
														</p>
													</div>
												</div>
											</div>
										</div>
										<editinvoicetable2></editinvoicetable2>
										<editinvoicetable3></editinvoicetable3>
									</form>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- /Page Wrapper -->

		   <editinvoicemodal></editinvoicemodal>

		</div>
		<!-- /Main Wrapper -->
</template>

<script>
export default {
    mounted() {

    }
}
</script>
<template>
    
		<!-- Main Wrapper -->
		<div class="main-wrapper">
            <layout-header></layout-header>
			<layout-sidebar></layout-sidebar>
			
			<!-- Page Wrapper -->
			<div class="page-wrapper">
				<div class="content container-fluid">
			
					<div class="row justify-content-center">
						<div class="col-xl-10">
							<div class="card">
								<div class="card-body">
									<div class="invoice-item">
										<div class="row">
											<div class="col-md-6">
												<div class="invoice-logo">
													<img src="../../../assets/img/logo.png" alt="logo">
												</div>
											</div>
											<div class="col-md-6">
												<p class="invoice-details">
													<strong>Order:</strong> #00124 <br>
													<strong>Issued:</strong> 20/07/2019
												</p>
											</div>
										</div>
									</div>
									
									<viewinvoiceitem />
									
									<!-- Invoice Item -->
									<div class="invoice-item">
										<div class="row">
											<div class="col-md-12">
												<div class="invoice-info">
													<strong class="customer-text">Payment Method</strong>
													<p class="invoice-details invoice-details-two">
														Debit Card <br>
														XXXXXXXXXXXX-2541 <br>
														HDFC Bank<br>
													</p>
												</div>
											</div>
										</div>
									</div>
									<!-- /Invoice Item -->
									
									<viewtable />
									
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
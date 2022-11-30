<template>
    <!-- Main Wrapper -->
		<div class="main-wrapper">
            <layout-header></layout-header>
			<layout-sidebar></layout-sidebar>
			
			<!-- Page Wrapper -->
			<div class="page-wrapper">
				<div class="content container-fluid">
			
					<div class="row justify-content-center">
						<div class="col-xl-8">
							<div class="text-md-end">
								<div class="btn-group btn-group-sm d-print-none mb-4">
									<a href="javascript:window.print()" class="btn btn-white text-black-50"><i class="fa fa-print"></i> Print</a>
									<a href="" class="btn btn-white text-black-50 shadow-none"><i class="fa fa-download"></i> Download</a>
								</div>
							</div>
								
							<div class="card">
								<div class="card-body">
									<div class="invoice-item">
										<div class="row">
											<div class="col-md-6">
												<div class="invoice-logo">
													<img src="../assets/img/logo.png" alt="logo">
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
									
									<!-- Invoice Item -->
									<div class="invoice-item">
										<div class="row">
											<div class="col-md-6">
												<div class="invoice-info">
													<strong class="customer-text">Invoice From</strong>
													<p class="invoice-details invoice-details-two">
														Darren Elder <br>
														806  Twin Willow Lane, Old Forge,<br>
														Newyork, USA <br>
													</p>
												</div>
											</div>
											<div class="col-md-6">
												<div class="invoice-info invoice-info2">
													<strong class="customer-text">Invoice To</strong>
													<p class="invoice-details">
														Walter Roberson <br>
														299 Star Trek Drive, Panama City, <br>
														Florida, 32405, USA <br>
													</p>
												</div>
											</div>
										</div>
									</div>
									<!-- /Invoice Item -->
									<hr class="mt-0">
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
									
									<!-- Invoice Item -->
									<div class="invoice-item invoice-table-wrap">
										<h5>Items</h5>
										<div class="row">
											<div class="col-md-12">
												<div class="table-responsive">
												
													<table class="invoice-table table table-border mb-0">
														<thead>
															<tr>
																<th class="w-75">Items</th>
																<th class="text-end">Quantity</th>
																<th class="text-end">Price</th>
																<th class="text-end">Total</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td class="w-50">UI/UX Designing</td>
																<td class="text-end">2</td>
																<td class="text-end">$200</td>
																<td class="text-end">$400</td>
															</tr>
															<tr>
																<td class="w-50">Website Development</td>
																<td class="text-end">1</td>
																<td class="text-end">$900</td>
																<td class="text-end">$900</td>
															</tr>
															<tr>
																<td class="w-50">SEO Services</td>
																<td class="text-end">5</td>
																<td class="text-end">$100</td>
																<td class="text-end">$500</td>
															</tr>
															<tr>
																<td colspan="3" class="text-end text-muted border-bottom-0">Subtotal</td>
																<td class="text-end border-bottom-0">$1,800</td>
															</tr>
															<tr>
																<td colspan="3" class="text-end text-muted border-bottom-0">Tax</td>
																<td class="text-end border-bottom-0">$200</td>
															</tr>
															<tr>
																<td colspan="3" class="text-end text-muted">Discount (11%)</td>
																<td class="text-end">$100</td>
															</tr>
														</tbody>
														<tfoot class="border-bottom border-1">
															<tr>
																<th colspan="3" class="text-end font-weight-600">Total</th>
																<th class="text-end font-weight-600">$2,000</th>
															</tr>
														</tfoot>
													</table>
												</div>
											</div>
										</div>
									</div>
									<!-- /Invoice Item -->
									
									<div class="invoice-sign text-end py-5">
										<img class="img-fluid d-inline-block" src="../assets/img/signature.png" alt="sign">
										<span class="d-block">Digital Signature</span>
									</div>
									<hr>
									<div class="invoice-terms">
										<h6>Notes:</h6>
										<p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed dictum ligula, cursus blandit risus. Maecenas eget metus non tellus dignissim aliquam ut a ex. Maecenas sed vehicula dui, ac suscipit lacus.</p>
									</div>
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
        // Select 2
	if ($('.select').length > 0) {
		$('.select').select2({
			minimumResultsForSearch: -1,
			width: '100%'
		});
	}
	},
}
</script>
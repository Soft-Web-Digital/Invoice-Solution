<template>
    <!-- Main Wrapper -->
		<div class="main-wrapper">
            <layout-header></layout-header>
			<layout-sidebar></layout-sidebar>
			
			<!-- Page Wrapper -->
			<div class="page-wrapper">
				<div class="content container-fluid">
			
					<!-- Page Header -->
					<div class="page-header">
						<div class="row align-items-center">
							<div class="col">
								<h3 class="page-title">Invoice Grid</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
									<li class="breadcrumb-item active">Invoice Grid</li>
								</ul>
							</div>
							<div class="col-auto">
								<router-link to="/add-invoice" class="btn btn-primary me-1">
									<i class="fas fa-plus"></i>
                                </router-link>
								<a class="btn btn-primary filter-btn" href="javascript:void(0);" id="filter_search">
									<i class="fas fa-filter"></i>
								</a>
							</div>
						</div>
					</div>
					<!-- /Page Header -->
					
					<!-- Search Filter -->
					<div id="filter_inputs" class="card filter-card">
						<div class="card-body pb-0">
							<div class="row">
								<div class="col-md-3">
									<div class="form-group">
									<label>Customer:</label>
										<input type="text" class="form-control">
									</div>
								</div>
								<div class="col-md-2">
									<div class="form-group">
										<label>Status:</label>
										<select class="select">
											<option>Select Status</option>
											<option>Draft</option>
											<option>Sent</option>
											<option>Viewed</option>
											<option>Expired</option>
											<option>Accepted</option>
											<option>Rejected</option>
										</select>
									</div>
								</div>
								<div class="col-md-2">
									<div class="form-group">
										<label>From</label>
										<div class="cal-icon">
											<input class="form-control datetimepicker" type="text">
										</div>
									</div>
								</div>
								<div class="col-md-2">
									<div class="form-group">
										<label>To</label>
										<div class="cal-icon">
											<input class="form-control datetimepicker" type="text">
										</div>
									</div>
								</div>
								<div class="col-md-3">
									<div class="form-group">
										<label>Invoice Number</label>
										<input type="text" class="form-control">
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- /Search Filter -->
					
						<div class="row">
							<div class="col-sm-6 col-lg-4 col-xl-3">
								<div class="card">
									<div class="card-body">
										<div class="inv-header mb-3">
											<router-link to="/profile" class="avatar avatar-sm me-2">
												<img class="avatar-img rounded-circle" src="../assets/img/profiles/avatar-04.jpg" alt="User Image"> 
                                            </router-link>
											<router-link class="text-dark" to="/profile">Barbara Moore</router-link>
										</div>
										<div class="invoice-id mb-3">
											<router-link to="/view-invoice" class="text-primary btn-link">#20220001</router-link>
										</div>
										<div class="row align-items-center">
											<div class="col">
												<span class="text-sm text-muted"><i class="far fa-money-bill-alt"></i> Amount</span>
												<h6 class="mb-0">$118</h6>
											</div>
											<div class="col-auto text-end">
												<span class="text-sm text-muted"><i class="far fa-calendar-alt"></i> Due Date</span>
												<h6 class="mb-0">23 Nov, 2022</h6>
											</div>
										</div>
									</div>
									<div class="card-footer">
										<div class="row align-items-center">
											<div class="col-auto">
												<span class="badge bg-success-light">Paid</span>
											</div>
											<div class="col d-flex justify-content-end">
												<router-link to="/view-invoice" class="btn btn-light btn-sm me-2 rounded-pill circle-btn">
													<i class="far fa-eye"></i>
                                                </router-link>
												<a href="javascript:;" class="btn btn-light btn-sm rounded-pill circle-btn">
													<i class="fas fa-download"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-sm-6 col-lg-4 col-xl-3">
								<div class="card">
									<div class="card-body">
										<div class="inv-header mb-3">
											<router-link to="/profile" class="avatar avatar-sm me-2">
												<img class="avatar-img rounded-circle" src="../assets/img/profiles/avatar-06.jpg" alt="User Image"> 
                                            </router-link>
											<router-link class="text-dark" to="/profile">Karlene Chaidez</router-link>
										</div>
										<div class="invoice-id mb-3">
											<router-link to="/view-invoice" class="text-primary btn-link">#20220002</router-link>
										</div>
										<div class="row align-items-center">
											<div class="col">
												<span class="text-sm text-muted"><i class="far fa-money-bill-alt"></i> Amount</span>
												<h6 class="mb-0">$222</h6>
											</div>
											<div class="col-auto text-end">
												<span class="text-sm text-muted"><i class="far fa-calendar-alt"></i> Due Date</span>
												<h6 class="mb-0">18 Nov, 2022</h6>
											</div>
										</div>
									</div>
									<div class="card-footer">
										<div class="row align-items-center">
											<div class="col-auto">
												<span class="badge bg-info-light">Sent</span>
											</div>
											<div class="col text-end d-flex justify-content-end">
												<router-link to="/view-invoice" class="btn btn-light btn-sm me-2 rounded-pill circle-btn">
													<i class="far fa-eye"></i>
                                                </router-link>
												<a href="javascript:;" class="btn btn-light btn-sm rounded-pill circle-btn">
													<i class="fas fa-download"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-sm-6 col-lg-4 col-xl-3">
								<div class="card">
									<div class="card-body">
										<div class="inv-header mb-3">
											<router-link to="/profile" class="avatar avatar-sm me-2">
												<img class="avatar-img rounded-circle" src="../assets/img/profiles/avatar-08.jpg" alt="User Image"> 
                                            </router-link>
											<router-link class="text-dark" to="/profile">Russell Copeland</router-link>
										</div>
										<div class="invoice-id mb-3">
											<router-link to="/view-invoice" class="text-primary btn-link">#20220003</router-link>
										</div>
										<div class="row align-items-center">
											<div class="col">
												<span class="text-sm text-muted"><i class="far fa-money-bill-alt"></i> Amount</span>
												<h6 class="mb-0">$347</h6>
											</div>
											<div class="col-auto text-end">
												<span class="text-sm text-muted"><i class="far fa-calendar-alt"></i> Due Date</span>
												<h6 class="mb-0">10 Nov, 2022</h6>
											</div>
										</div>
									</div>
									<div class="card-footer">
										<div class="row align-items-center">
											<div class="col-auto">
												<span class="badge bg-warning-light">Partially Paid</span>
											</div>
											<div class="col text-end d-flex justify-content-end">
												<router-link to="/view-invoice" class="btn btn-light btn-sm me-2 rounded-pill circle-btn">
													<i class="far fa-eye"></i>
                                                </router-link>
												<a href="javascript:;" class="btn btn-light btn-sm rounded-pill circle-btn">
													<i class="fas fa-download"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-sm-6 col-lg-4 col-xl-3">
								<div class="card">
									<div class="card-body">
										<div class="inv-header mb-3">
											<router-link to="/profile" class="avatar avatar-sm me-2">
												<img class="avatar-img rounded-circle" src="../assets/img/profiles/avatar-10.jpg" alt="User Image"> 
                                            </router-link>
											<router-link class="text-dark" to="/profile">Joseph Collins</router-link>
										</div>
										<div class="invoice-id mb-3">
											<router-link to="/view-invoice" class="text-primary btn-link">#20220004</router-link>
										</div>
										<div class="row align-items-center">
											<div class="col">
												<span class="text-sm text-muted"><i class="far fa-money-bill-alt"></i> Amount</span>
												<h6 class="mb-0">$826</h6>
											</div>
											<div class="col-auto text-end">
												<span class="text-sm text-muted"><i class="far fa-calendar-alt"></i> Due Date</span>
												<h6 class="mb-0">25 Sep, 2022</h6>
											</div>
										</div>
									</div>
									<div class="card-footer">
										<div class="row align-items-center">
											<div class="col-auto">
												<span class="badge bg-danger-light">Overdue</span>
											</div>
											<div class="col text-end d-flex justify-content-end">
												<router-link to="/view-invoice" class="btn btn-light btn-sm me-2 rounded-pill circle-btn">
													<i class="far fa-eye"></i>
                                                </router-link>
												<a href="javascript:;" class="btn btn-light btn-sm rounded-pill circle-btn">
													<i class="fas fa-download"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-sm-6 col-lg-4 col-xl-3">
								<div class="card">
									<div class="card-body">
										<div class="inv-header mb-3">
											<router-link to="/profile" class="avatar avatar-sm me-2">
												<img class="avatar-img rounded-circle" src="../assets/img/profiles/avatar-11.jpg" alt="User Image"> 
                                            </router-link>
											<router-link class="text-dark" to="/profile">Jennifer Floyd</router-link>
										</div>
										<div class="invoice-id mb-3">
											<router-link to="/view-invoice" class="text-primary btn-link">#20220005</router-link>
										</div>
										<div class="row align-items-center">
											<div class="col">
												<span class="text-sm text-muted"><i class="far fa-money-bill-alt"></i> Amount</span>
												<h6 class="mb-0">$519</h6>
											</div>
											<div class="col-auto text-end">
												<span class="text-sm text-muted"><i class="far fa-calendar-alt"></i> Due Date</span>
												<h6 class="mb-0">17 Sep, 2022</h6>
											</div>
										</div>
									</div>
									<div class="card-footer">
										<div class="row align-items-center">
											<div class="col-auto">
												<span class="badge bg-info-light">Sent</span>
											</div>
											<div class="col text-end d-flex justify-content-end">
												<router-link to="/view-invoice" class="btn btn-light btn-sm me-2 rounded-pill circle-btn">
													<i class="far fa-eye"></i>
                                                </router-link>
												<a href="javascript:;" class="btn btn-light btn-sm rounded-pill circle-btn">
													<i class="fas fa-download"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-sm-6 col-lg-4 col-xl-3">
								<div class="card">
									<div class="card-body">
										<div class="inv-header mb-3">
											<router-link to="/profile" class="avatar avatar-sm me-2">
												<img class="avatar-img rounded-circle" src="../assets/img/profiles/avatar-09.jpg" alt="User Image"> 
                                            </router-link>
											<router-link class="text-dark" to="/profile">Leatha Bailey </router-link>
										</div>
										<div class="invoice-id mb-3">
											<router-link to="/view-invoice" class="text-primary btn-link">#20220006</router-link>
										</div>
										<div class="row align-items-center">
											<div class="col">
												<span class="text-sm text-muted"><i class="far fa-money-bill-alt"></i> Amount</span>
												<h6 class="mb-0">$480</h6>
											</div>
											<div class="col-auto text-end">
												<span class="text-sm text-muted"><i class="far fa-calendar-alt"></i> Due Date</span>
												<h6 class="mb-0">2 Oct, 2022</h6>
											</div>
										</div>
									</div>
									<div class="card-footer">
										<div class="row align-items-center">
											<div class="col-auto">
												<span class="badge bg-warning-light">Partially Paid</span>
											</div>
											<div class="col text-end d-flex justify-content-end">
												<router-link to="/view-invoice" class="btn btn-light btn-sm me-2 rounded-pill circle-btn">
													<i class="far fa-eye"></i>
                                                </router-link>
												<a href="javascript:;" class="btn btn-light btn-sm rounded-pill circle-btn">
													<i class="fas fa-download"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-sm-6 col-lg-4 col-xl-3">
								<div class="card">
									<div class="card-body">
										<div class="inv-header mb-3">
											<router-link to="/profile" class="avatar avatar-sm me-2">
												<img class="avatar-img rounded-circle" src="../assets/img/profiles/avatar-03.jpg" alt="User Image"> 
                                            </router-link>
											<router-link class="text-dark" to="/profile">Marie Canales </router-link>
										</div>
										<div class="invoice-id mb-3">
											<router-link to="/view-invoice" class="text-primary btn-link">#20220007</router-link>
										</div>
										<div class="row align-items-center">
											<div class="col">
												<span class="text-sm text-muted"><i class="far fa-money-bill-alt"></i> Amount</span>
												<h6 class="mb-0">$2700</h6>
											</div>
											<div class="col-auto text-end">
												<span class="text-sm text-muted"><i class="far fa-calendar-alt"></i> Due Date</span>
												<h6 class="mb-0">30 Dec, 2022</h6>
											</div>
										</div>
									</div>
									<div class="card-footer">
										<div class="row align-items-center">
											<div class="col-auto">
												<span class="badge bg-danger-light">Overdue</span>
											</div>
											<div class="col text-end d-flex justify-content-end">
												<router-link to="/view-invoice" class="btn btn-light btn-sm me-2 rounded-pill circle-btn">
													<i class="far fa-eye"></i>
                                                </router-link>
												<a href="javascript:;" class="btn btn-light btn-sm rounded-pill circle-btn">
													<i class="fas fa-download"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-sm-6 col-lg-4 col-xl-3">
								<div class="card">
									<div class="card-body">
										<div class="inv-header mb-3">
											<router-link to="/profile" class="avatar avatar-sm me-2">
												<img class="avatar-img rounded-circle" src="../assets/img/profiles/avatar-12.jpg" alt="User Image"> 
                                            </router-link>
											<router-link class="text-dark" to="/profile">Alex Campbell </router-link>
										</div>
										<div class="invoice-id mb-3">
											<router-link to="/view-invoice" class="text-primary btn-link">#20220008</router-link>
										</div>
										<div class="row align-items-center">
											<div class="col">
												<span class="text-sm text-muted"><i class="far fa-money-bill-alt"></i> Amount</span>
												<h6 class="mb-0">$1999</h6>
											</div>
											<div class="col-auto text-end">
												<span class="text-sm text-muted"><i class="far fa-calendar-alt"></i> Due Date</span>
												<h6 class="mb-0">27 Apr, 2022</h6>
											</div>
										</div>
									</div>
									<div class="card-footer">
										<div class="row align-items-center">
											<div class="col-auto">
												<span class="badge bg-success-light">Paid</span>
											</div>
											<div class="col text-end d-flex justify-content-end">
												<router-link to="/view-invoice" class="btn btn-light btn-sm me-2 rounded-pill circle-btn">
													<i class="far fa-eye"></i>
                                                </router-link>
												<a href="javascript:;" class="btn btn-light btn-sm rounded-pill circle-btn">
													<i class="fas fa-download"></i>
												</a>
											</div>
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
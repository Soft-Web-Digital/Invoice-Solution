<template>
<div class="card invoices-tabs-card">
						<div class="card-body card-body pt-0 pb-0">
							<div class="invoices-main-tabs">
								<div class="row align-items-center">
									<div class="col-lg-8 col-md-8">
										<div class="invoices-tabs">
											<ul>
												<li><router-link to="/invoices">All Invoice</router-link></li>
												<li><router-link to="/invoices-paid">Paid</router-link></li>	
												<li><router-link to="/invoices-overdue">Overdue</router-link></li>		
												<li><router-link to="/invoices-draft">Draft</router-link></li>	
												<li><router-link to="/invoices-recurring">Recurring</router-link></li>
												<li><router-link to="/invoices-cancelled">Cancelled</router-link></li>
											</ul>
										</div>
									</div>
									<div class="col-lg-4 col-md-4">
										<div class="invoices-settings-btn">
											<router-link to="/invoices-settings" class="invoices-settings-icon">
												<i data-feather="settings"></i>
                                            </router-link>
											<router-link to="/add-invoice" class="btn">
												<i data-feather="plus-circle"></i> New Invoice
                                            </router-link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
</template>
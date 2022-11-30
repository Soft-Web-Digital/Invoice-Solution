<template>
<!-- Page Header -->
					<div class="page-header">
						<div class="row align-items-center">
							<div class="col">
								<h3 class="page-title">Invoices</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
									<li class="breadcrumb-item"><router-link to="/invoices">Invoice</router-link></li>
									<li class="breadcrumb-item active">Invoices Cancelled</li>
								</ul>
							</div>
							<div class="col-auto">
								<router-link to="/invoices" class="invoices-links active">
									<i data-feather="list"></i>
                                </router-link>
								<router-link to="/invoice-grid" class="invoices-links">
									<i data-feather="grid"></i>
                                </router-link>
							</div>
						</div>
					</div>
					<!-- /Page Header -->
</template>
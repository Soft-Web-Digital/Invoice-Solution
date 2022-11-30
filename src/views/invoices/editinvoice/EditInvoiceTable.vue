<template>
<div class="col-xl-5 col-md-6 col-sm-12 col-12">
													<h4 class="invoice-details-title">Invoice details</h4>
													<div class="invoice-details-box">
														<div class="invoice-inner-head">
															<span>Invoice No. <router-link to="/view-invoice">IN093439#@09</router-link></span>
														</div>
														<div class="invoice-inner-footer">
															<div class="row align-items-center">
																<div class="col-lg-6 col-md-6">
																	<div class="invoice-inner-date">
																		<span>
																			Date <input class="form-control datetimepicker" type="text" placeholder="15/02/2022">
																		</span>
																	</div>
																</div>
																<div class="col-lg-6 col-md-6">
																	<div class="invoice-inner-date invoice-inner-datepic">
																		<span>
																			Due Date <input class="form-control datetimepicker" type="text" placeholder="Select">
																		</span>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
</template>
<template>
<div class="col-xl-3 col-md-12 col-sm-12 col-12">
													<div class="inovices-month-info">
														<div class="form-group mb-0">
															<label class="custom_check w-100">
																<input type="checkbox" id="enableTax" name="invoice">
																<span class="checkmark"></span> Enable tax
															</label>
															<label class="custom_check w-100">
																<input type="checkbox" id="chkYes" name="invoice">
																<span class="checkmark"></span> Recurring Invoice
															</label>
														</div>
														<div id="show-invoices">
															<div class="row">
																<div class="col-md-6">
																	<div class="form-group">
																		<select class="select">
																			<option>By month</option>
																			<option>March</option>
																			<option>April</option>
																			<option>May</option>
																			<option>June</option>
																			<option>July</option>
																		</select>
																	</div>
																</div>
																<div class="col-md-6">
																	<div class="form-group">
																		<input class="form-control" type="text" placeholder="Enter Months">
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
</template>
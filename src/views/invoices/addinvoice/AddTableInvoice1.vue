<template>
<div class="row">
											<div class="col-lg-7 col-md-6">
												<div class="invoice-fields">
													<h4 class="field-title">More Fields</h4>
													<div class="field-box">
														<p>Payment Details</p>
														<a class="btn btn-primary" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#bank_details"><i class="fas fa-plus-circle me-2"></i>Add Bank Details</a>
													</div>
												</div>
												<div class="invoice-faq">
													<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
														<div class="faq-tab">
															<div class="panel panel-default">
																<div class="panel-heading" role="tab" id="headingTwo">
																	<p class="panel-title">
																		<a class="collapsed" data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
																		<i class="fas fa-plus-circle me-1"></i> Add Terms & Conditions
																		</a>
																	</p>
																</div>
																<div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo" data-bs-parent="#accordion">
																	<div class="panel-body">
																		<textarea class="form-control"></textarea>
																	</div>
																</div>
															</div>
														</div>
														<div class="faq-tab">
															<div class="panel panel-default">
																<div class="panel-heading" role="tab" id="headingThree">
																	<p class="panel-title">
																		<a class="collapsed" data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
																		<i class="fas fa-plus-circle me-1"></i> Add Notes
																		</a>
																	</p>
																</div>
																<div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree" data-bs-parent="#accordion">
																	<div class="panel-body">
																		<textarea class="form-control"></textarea>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="col-lg-5 col-md-6">
												<div class="invoice-total-card">
													<h4 class="invoice-total-title">Summary</h4>
													<div class="invoice-total-box">
														<div class="invoice-total-inner">
															<p>Taxable Amount <span>$21</span></p>
															<p>Round Off 
																<input type="checkbox" id="status_1" class="check">
																<label for="status_1" class="checktoggle">checkbox</label> 
																<span>$54</span>
															</p>
															<div class="links-info-one">
																<div class="links-info">
																	<div class="links-cont">
																		<!-- <a href="javascript:void(0)" class="service-trash">
																			<i class="feather-trash-2"></i>
																		</a> -->
																	</div>
																</div>
															</div>
															<a href="javascript:void(0);" class="add-links">
																<i class="fas fa-plus-circle me-1"></i> Additional Charges
															</a>
															<div class="links-info-discount">
																<div class="links-cont-discount">
																	<a href="javascript:void(0);" class="add-links-one">
																		<i class="fas fa-plus-circle me-1"></i> Add more Discount
																	</a>
																	<!-- <a href="javascript:void(0)" class="service-trash-one">
																		<i class="feather-trash-2"></i>
																	</a> -->
																</div>
															</div>
														</div>
														<div class="invoice-total-footer">
															<h4>Total Amount <span>$ 894.00</span></h4>
														</div>
													</div>
												</div>
												<div class="upload-sign">
													<div class="form-group service-upload">
														<span>Upload Sign</span>
														<input type="file" multiple>
													</div>
													<div class="form-group">
														<input type="text" class="form-control" placeholder="Name of the Signatuaory">
													</div>
													<div class="form-group float-end mb-0">
														<button class="btn btn-primary" type="submit">Save Invoice</button>
													</div>
												</div>
											</div>
										</div>
</template>
<template>
<div class="row">
						<div class="col-md-12">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title">Two Column Horizontal Form</h5>
								</div>
								<div class="card-body">
									<form action="#">
										<div class="row">
											<div class="col-xl-6">
												<h5 class="card-title">Personal Details</h5>
												<div class="form-group row">
													<label class="col-lg-3 col-form-label">First Name</label>
													<div class="col-lg-9">
														<input type="text" class="form-control">
													</div>
												</div>
												<div class="form-group row">
													<label class="col-lg-3 col-form-label">Last Name</label>
													<div class="col-lg-9">
														<input type="text" class="form-control">
													</div>
												</div>
												<div class="form-group row">
													<label class="col-lg-3 col-form-label">Password</label>
													<div class="col-lg-9">
														<input type="password" class="form-control">
													</div>
												</div>
												<div class="form-group row">
													<label class="col-lg-3 col-form-label">State</label>
													<div class="col-lg-9">
													<vue-select :options="horizontalstate" />
													</div>
												</div>
												<div class="form-group row">
													<label class="col-lg-3 col-form-label">About</label>
													<div class="col-lg-9">
														<textarea rows="4" cols="5" class="form-control" placeholder="Enter message"></textarea>
													</div>
												</div>
											</div>
											<div class="col-xl-6">
												<h5 class="card-title">Personal details</h5>
												<div class="row">
													<label class="col-lg-3 col-form-label">Name</label>
													<div class="col-lg-9">
														<div class="row">
															<div class="col-md-6">
																<div class="form-group">
																	<input type="text" placeholder="First Name" class="form-control">
																</div>
															</div>
															<div class="col-md-6">
																<div class="form-group">
																	<input type="text" placeholder="Last Name" class="form-control">
																</div>
															</div>
														</div>
													</div>
												</div>
												<div class="form-group row">
													<label class="col-lg-3 col-form-label">Email</label>
													<div class="col-lg-9">
														<input type="text" class="form-control">
													</div>
												</div>
												<div class="form-group row">
													<label class="col-lg-3 col-form-label">Phone</label>
													<div class="col-lg-9">
														<input type="text" class="form-control">
													</div>
												</div>
												<div class="form-group row">
													<label class="col-lg-3 col-form-label">Address</label>
													<div class="col-lg-9">
														<input type="text" class="form-control m-b-20">
														<div class="row mt-4">
															<div class="col-md-6">
																<div class="form-group">
																<vue-select :options="horizontalcountry" />
																</div>
																<div class="form-group">
																	<input type="text" placeholder="ZIP code" class="form-control">
																</div>
															</div>
															<div class="col-md-6">
																<div class="form-group">
																	<input type="text" placeholder="State/Province" class="form-control">
																</div>
																<div class="form-group">
																	<input type="text" placeholder="City" class="form-control">
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="text-end">
											<button type="submit" class="btn btn-primary">Submit</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
</template>
<script>
  import Vue from 'vue'
  export default {
     data() {
    return {
      horizontalstate: ["Select State", "California", "Texas", "Florida"],
      horizontalcountry: ["Select Country", "USA", "France", "India", "Spain"]
    }
    },
    components: {
   
    },
    mounted() {
    }
  }
</Script>
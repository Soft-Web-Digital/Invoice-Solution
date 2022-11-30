<template>
<div class="row">
						<div class="col-md-12">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title">Two Column Horizontal Form</h5>
								</div>
								<div class="card-body">
									<h5 class="card-title">Personal Information</h5>
									<form action="#">
										<div class="row">
											<div class="col-xl-6">
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
													<label class="col-lg-3 col-form-label">Gender</label>
													<div class="col-lg-9">
														<div class="form-check form-check-inline">
															<input class="form-check-input" type="radio" name="gender" id="gender_male" value="option1" checked>
															<label class="form-check-label" for="gender_male">
															Male
															</label>
														</div>
														<div class="form-check form-check-inline">
															<input class="form-check-input" type="radio" name="gender" id="gender_female" value="option2">
															<label class="form-check-label" for="gender_female">
															Female
															</label>
														</div>
													</div>
												</div>
												<div class="form-group row">
													<label class="col-lg-3 col-form-label">Blood Group</label>
													<div class="col-lg-9">
													<vue-select :options="horizontalbloodgroup" />
													</div>
												</div>
											</div>
											<div class="col-xl-6">
												<div class="form-group row">
													<label class="col-lg-3 col-form-label">Username</label>
													<div class="col-lg-9">
														<input type="text" class="form-control">
													</div>
												</div>
												<div class="form-group row">
													<label class="col-lg-3 col-form-label">Email</label>
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
													<label class="col-lg-3 col-form-label">Repeat Password</label>
													<div class="col-lg-9">
														<input type="password" class="form-control">
													</div>
												</div>
											</div>
										</div>
										<h5 class="card-title">Address</h5>
										<div class="row">
											<div class="col-xl-6">
												<div class="form-group row">
													<label class="col-lg-3 col-form-label">Address Line 1</label>
													<div class="col-lg-9">
														<input type="text" class="form-control">
													</div>
												</div>
												<div class="form-group row">
													<label class="col-lg-3 col-form-label">Address Line 2</label>
													<div class="col-lg-9">
														<input type="text" class="form-control">
													</div>
												</div>
												<div class="form-group row">
													<label class="col-lg-3 col-form-label">State</label>
													<div class="col-lg-9">
														<input type="text" class="form-control">
													</div>
												</div>
											</div>
											<div class="col-xl-6">
												<div class="form-group row">
													<label class="col-lg-3 col-form-label">City</label>
													<div class="col-lg-9">
														<input type="text" class="form-control">
													</div>
												</div>
												<div class="form-group row">
													<label class="col-lg-3 col-form-label">Country</label>
													<div class="col-lg-9">
														<input type="text" class="form-control">
													</div>
												</div>
												<div class="form-group row">
													<label class="col-lg-3 col-form-label">Postal Code</label>
													<div class="col-lg-9">
														<input type="text" class="form-control">
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
      horizontalbloodgroup: ["Select", "A+", "O+", "B+", "AB+"]
    }
    },
    components: {
   
    },
    mounted() {
    }
  }
</Script>
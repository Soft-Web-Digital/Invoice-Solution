<template>
<!-- Validation Tooltips -->
							<div class="card">
								<div class="card-header">
									<h5 class="card-title">Tooltips</h5>
									<p class="card-text">You can swap the <code>.{valid|invalid}-feedback</code> classes for <code>.{valid|invalid}-tooltip</code> classes to display validation feedback in a styled tooltip.</p>
								</div>
								<div class="card-body">
									<form class="needs-validation" novalidate>
										<div class="form-row row">
											<div class="col-md-4 mb-3">
												<label for="validationTooltip01">First name</label>
												<input type="text" class="form-control" id="validationTooltip01" placeholder="First name" value="Mark" required>
												<div class="valid-tooltip">
													Looks good!
												</div>
											</div>
											<div class="col-md-4 mb-3">
												<label for="validationTooltip02">Last name</label>
												<input type="text" class="form-control" id="validationTooltip02" placeholder="Last name" value="Otto" required>
												<div class="valid-tooltip">
													Looks good!
												</div>
											</div>
											<div class="col-md-4 mb-3">
												<label for="validationTooltipUsername">Username</label>
												<input type="text" class="form-control" id="validationTooltipUsername" placeholder="Username" required>
												<div class="invalid-tooltip">
													Please choose a unique and valid username.
												</div>
											</div>
										</div>
										<div class="form-row row">
											<div class="col-md-6 mb-3">
												<label for="validationTooltip03">City</label>
												<input type="text" class="form-control" id="validationTooltip03" placeholder="City" required>
												<div class="invalid-tooltip">
													Please provide a valid city.
												</div>
											</div>
											<div class="col-md-3 mb-3">
												<label for="validationTooltip04">State</label>
												<input type="text" class="form-control" id="validationTooltip04" placeholder="State" required>
												<div class="invalid-tooltip">
													Please provide a valid state.
												</div>
											</div>
											<div class="col-md-3 mb-3">
												<label for="validationTooltip05">Zip</label>
												<input type="text" class="form-control" id="validationTooltip05" placeholder="Zip" required>
												<div class="invalid-tooltip">
													Please provide a valid zip.
												</div>
											</div>
										</div>
										<button class="btn btn-primary" type="submit">Submit form</button>
									</form>
								</div>
							</div>
							<!-- /Validation Tooltips -->
</template>
<template>
<!-- Add Tax Modal -->
					<div id="add_tax" class="modal custom-modal fade" role="dialog">
						<div class="modal-dialog modal-dialog-centered" role="document">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title">Add Tax</h5>
									<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>
								<div class="modal-body">
									<form>
										<div class="form-group">
											<label>Tax Name <span class="text-danger">*</span></label>
											<input class="form-control" type="text">
										</div>
										<div class="form-group">
											<label>Tax Percentage (%) <span class="text-danger">*</span></label>
											<input class="form-control" type="text">
										</div>
										<div class="form-group">
											<label>Status <span class="text-danger">*</span></label>
											<vue-select :options="taxtypestatus" />
										</div>
										<div class="submit-section">
											<button class="btn btn-primary submit-btn">Submit</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
					<!-- /Add Tax Modal -->
					
					<!-- Edit Tax Modal -->
					<div id="edit_tax" class="modal custom-modal fade" role="dialog">
						<div class="modal-dialog modal-dialog-centered" role="document">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title">Edit Tax</h5>
									<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>
								<div class="modal-body">
									<form>
										<div class="form-group">
											<label>Tax Name <span class="text-danger">*</span></label>
											<input class="form-control" value="VAT" type="text">
										</div>
										<div class="form-group">
											<label>Tax Percentage (%)  <span class="text-danger">*</span></label>
											<input class="form-control" value="14%" type="text">
										</div>
										<div class="form-group">
											<label>Status <span class="text-danger">*</span></label>
											<vue-select :options="taxtypestatusdetail" />
										</div>
										<div class="submit-section">
											<button class="btn btn-primary submit-btn">Save</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
					<!-- /Edit Tax Modal -->
					
					<!-- Delete Tax Modal -->
					<div class="modal custom-modal fade" id="delete_tax" role="dialog">
						<div class="modal-dialog modal-dialog-centered">
							<div class="modal-content">
								<div class="modal-body">
									<div class="modal-icon text-center mb-3">
										<i class="fas fa-trash-alt text-danger"></i>
									</div>
									<div class="modal-text text-center">
										<h2>Delete Tax</h2>
										<p>Are you sure want to delete?</p>
									</div>
								</div>
								<div class="modal-footer text-center">
									<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
									<button type="button" class="btn btn-primary">Delete</button>
								</div>
							</div>
						</div>
					</div>
					<!-- /Delete Tax Modal -->
</template>
<script>
  export default {
     data() {
    return {
      taxtypestatus: ["Pending", "Approved"],
      taxtypestatusdetail: ["Active", "Inactive"]
    }
    },
    components: {
   
    },
    mounted() {
    }
  }
</Script>
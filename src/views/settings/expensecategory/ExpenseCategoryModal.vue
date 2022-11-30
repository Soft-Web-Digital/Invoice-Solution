<template>
<!-- Add Category Modal -->

					<div id="add_category" class="modal custom-modal fade" role="dialog">
						<div class="modal-dialog modal-dialog-centered" role="document">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title">Add Expense Category</h5>
									<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>
								<div class="modal-body">
									<form>
										<div class="form-group">
											<label>Category <span class="text-danger">*</span></label>
											<input class="form-control" type="text">
										</div>
										<div class="form-group">
											<label>Description <span class="text-danger">*</span></label>
											<textarea class="form-control"></textarea>
										</div>
										<div class="form-group">
											<label>Status <span class="text-danger">*</span></label>
											<vue-select :options="addexpensecategorystatus" />
										</div>
										<div class="submit-section">
											<button class="btn btn-primary submit-btn">Submit</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
					<!-- /Add Category Modal -->
					
					<!-- Edit Category Modal -->
					<div id="edit_category" class="modal custom-modal fade" role="dialog">
						<div class="modal-dialog modal-dialog-centered" role="document">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title">Edit Expense Category</h5>
									<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>
								<div class="modal-body">
									<form>
										<div class="form-group">
											<label>Category <span class="text-danger">*</span></label>
											<input class="form-control" value="VAT" type="text">
										</div>
										<div class="form-group">
											<label>Description <span class="text-danger">*</span></label>
											<textarea class="form-control"></textarea>
										</div>
										<div class="form-group">
											<label>Status <span class="text-danger">*</span></label>
											<vue-select :options="editexpensecategorystatus" />
										</div>
										<div class="submit-section">
											<button class="btn btn-primary submit-btn">Save</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
					<!-- /Edit Category Modal -->
					
					<!-- Delete Category Modal -->
					<div class="modal custom-modal fade" id="delete_category" role="dialog">
						<div class="modal-dialog modal-dialog-centered">
							<div class="modal-content">
								<div class="modal-body">
									<div class="modal-icon text-center mb-3">
										<i class="fas fa-trash-alt text-danger"></i>
									</div>
									<div class="modal-text text-center">
										<h3>Delete Expense Category</h3>
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
					<!-- /Delete Category Modal -->
</template>
<script>
  import Vue from 'vue'
  export default {
     data() {
    return {
      addexpensecategorystatus: ["Pending", "Approved"],
      editexpensecategorystatus: ["Pending", "Approved"]
    }
    },
    components: {
   
    },
    mounted() {
    }
  }
</Script>
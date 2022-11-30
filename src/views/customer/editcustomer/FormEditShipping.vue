<template>
<form action="#">
										<div class="text-end">
											<button type="submit" class="btn btn-outline-primary btn-sm">Copy from Billing</button>
										</div>
										<div class="row">
											<div class="col-md-6">
												<div class="form-group">
													<label>Name</label>
													<input type="text" class="form-control" value="Brian Johnson">
												</div>
												<div class="form-group">
													<label>State</label>
													<input type="text" class="form-control" value="Georgia">
												</div>
												<div class="form-group">
													<label>Address</label>
													<textarea rows="5" cols="5" class="form-control" placeholder="938 Green Acres Road"></textarea>
												</div>
											</div>
											<div class="col-md-6">
												<div class="form-group">
													<label>Country</label>
													<vue-select :options="editcustomershippingcountry" />
												</div>
												<div class="form-group">
													<label>City</label>
													<input type="text" class="form-control" value="ROME">
												</div>
												<div class="form-group">
													<label>Phone</label>
													<input type="text" class="form-control" value="+1-252-444-7535">
												</div>
												<div class="form-group">
													<label>Zip Code:</label>
													<input type="text" class="form-control" value="30161">
												</div>
											</div>
										</div>
										<div class="text-end mt-4">
											<button type="submit" class="btn btn-primary">Save Changes</button>
										</div>
									</form>
</template>
<script>
  import Vue from 'vue'
  export default {
     data() {
    return {
      editcustomershippingcountry: ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "United States"]

    }
    },
    components: {
   
    },
    mounted() {
    }
  }
</Script>
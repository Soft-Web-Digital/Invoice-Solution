<template>
<form action="#">
										<div class="row">
											<div class="col-md-6">
												<div class="form-group">
													<label>Display Name</label>
													<input type="text" class="form-control" value="Brian Johnson">
												</div>
												<div class="form-group">
													<label>Email</label>
													<input type="email" class="form-control" value="brianjohnson@example.com">
												</div>
												<div class="form-group">
													<label>Primary Currency</label>
                                                    <vue-select :options="editcustomerbasicinfocurrency" />
												</div>
											</div>
											<div class="col-md-6">
												<div class="form-group">
													<label>Primary Contact Name</label>
													<input type="text" class="form-control" value="Brian Johnson">
												</div>
												<div class="form-group">
													<label>Phone</label>
													<input type="text" class="form-control" value="+1-252-444-7535">
												</div>
												<div class="form-group">
													<label>Website</label>
													<input type="text" class="form-control" value="http://www.example.com">
												</div>
											</div>
										</div>
									</form>
</template>
<script>
  import Vue from 'vue'
  export default {
     data() {
    return {
      editcustomerbasicinfocurrency: ["USD- US Dollar", "EUR Euro", "INR Indoan Rupee"]

    }
    },
    components: {
   
    },
    mounted() {
    }
  }
</Script>
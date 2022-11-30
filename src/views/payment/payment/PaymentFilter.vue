<template>
<!-- Search Filter -->
					<div id="filter_inputs" class="card filter-card">
						<div class="card-body pb-0">
							<div class="row">
								<div class="col-sm-6 col-md-3">
									<div class="form-group">
										<label>Customer</label>
										<input type="text" class="form-control">
									</div>
								</div>
								<div class="col-sm-6 col-md-3">
									<div class="form-group">
										<label>Price</label>
										<input type="text" class="form-control">
									</div>
								</div>
								<div class="col-sm-6 col-md-3">
									<div class="form-group">
										<label>Payment Mode</label>
										 <vue-select :options="paymentfilter" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- /Search Filter -->
</template>
<script>
  import Vue from 'vue'
  export default {
     data() {
    return {
      paymentfilter: ["Payment Mode", "Cash", "Cheque", "Card", "Online"]
    }
    },
    components: {
   
    },
    mounted() {
    }
  }
</Script>
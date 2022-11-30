<template>
<form action="#">
										<div class="row">
											<div class="col-md-6">
												<div class="form-group">
													<label>Date:</label>
													<div class="cal-icon">
                                                        <datepicker v-model="startdate"  class="picker" 
                                                        :editable="true"
                                                        :clearable="false" />
                                                    </div>
												</div>
												<div class="form-group">
													<label>Customer:</label>
													<vue-select :options="addcustomerinvoice" />
												</div>
												<div class="form-group">
													<label>Address:</label>
													<textarea rows="5" cols="5" class="form-control" placeholder="Enter Address"></textarea>
												</div>
											</div>
											<div class="col-md-6"> 
												<div class="form-group">
													<label>Amount:</label>
													<input type="text" class="form-control">
												</div> 
												<div class="form-group">
													<label>Payment Number:</label>
													<input type="text" class="form-control">
												</div> 
												<div class="form-group">
													<label>Invoice:</label>
													<vue-select :options="addpaymentinvoice" />
												</div> 
												<div class="form-group">
													<label>Payment Mode:</label>
													<vue-select :options="addpaymentmode" />
												</div> 
												<div class="text-end mt-4">
													<button type="submit" class="btn btn-primary">Add Payments</button>
												</div>
											</div> 
										</div>
									</form> 
</template>
<script>
  import Vue from 'vue'
  import { ref } from 'vue'
  const currentDate = ref(new Date())
  export default {
     data() {
    return {
      startdate: currentDate,
      addcustomerinvoice: ["Select Customer", "Brian Johnson", "Marie Canales", "Barbara Moore", "Greg Lynch", "Karlene Chaidez"],
      addpaymentinvoice: ["Select Invoice", "List Empty"],
      addpaymentmode: ["Select Payment Mode", "Cash", "Credit", "Cheque"]
    }
    },
    components: {
   
    },
    mounted() {
    }
  }
</Script>
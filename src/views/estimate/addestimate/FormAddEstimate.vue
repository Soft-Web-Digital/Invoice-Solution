<template>
<form action="#">
										<div class="row">
											<div class="col-md-4">
												<div class="form-group">
													<label>Customer:</label>
													<select class="select">
														<option>Select Customer</option>
														<option>Brian Johnson</option>
														<option>Marie Canales</option>
														<option>Barbara Moore</option>
														<option>Greg Lynch</option>
														<option>Karlene Chaidez</option>
													</select>
												</div>
											</div>
											<div class="col-md-4">
												<div class="form-group">
													<label>From</label>
													<div class="cal-icon">
                                                        <datepicker v-model="startdate"  class="picker" 
                                                        :editable="true"
                                                        :clearable="false" />
                                                    </div>
												</div>
											</div>
											<div class="col-md-4">
												<div class="form-group">
													<label>To</label>
													<div class="cal-icon">
                                                        <datepicker v-model="enddate"  class="picker" 
                                                        :editable="true"
                                                        :clearable="false" />
                                                    </div>
												</div>
											</div>
											<div class="col-md-4 mt-3">
												<div class="form-group">
													<label>Estimate Number</label>
													<input type="text" class="form-control">
												</div>
											</div>
											<div class="col-md-4 mt-3">
												<div class="form-group">
													<label>Ref Number</label>
													<input type="text" class="form-control">
												</div>
											</div>
										</div>
										<addtableestimate />
										<addtableestimate1 />
										<div class="text-end mt-4">
											<button type="submit" class="btn btn-primary">Add Estimate</button>
										</div>
									</form>
</template>
<script>
  import Vue from 'vue'
  import { ref } from 'vue'
  const currentDate = ref(new Date())
  const currentDate1 = ref(new Date())
  export default {
     data() {
    return {
      startdate: currentDate,
      enddate: currentDate1
    }
    },
    components: {
   
    },
    mounted() {
	// Select 2
	if ($('.select').length > 0) {
		$('.select').select2({
			minimumResultsForSearch: -1,
			width: '100%'
		});
	}
    }
  }
</Script>
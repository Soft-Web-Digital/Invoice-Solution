<template>
<form action="#">
										<div class="row">
											<div class="col-md-6">
												<div class="form-group">
													<label>Category:</label>
													<select class="select">
														<option>Select Category</option>
														<option>Advertising</option>
														<option>Marketing</option>
														<option>Software</option>
														<option>Travel</option>
													</select>
												</div>
												<div class="form-group">
													<label>Note:</label>
													<textarea rows="5" cols="5" class="form-control"></textarea>
												</div>
											</div>
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
													<input type="text" class="form-control">
												</div>
												<div class="form-group">
													<label>Amount:</label>
													<input type="text" class="form-control">
												</div>
												<div class="text-end mt-4">
													<button type="submit" class="btn btn-primary">Add Expenses</button>
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
      startdate: currentDate
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
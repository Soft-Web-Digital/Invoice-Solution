<template>
<!-- Search Filter -->

					<div id="filter_inputs" class="card filter-card">
						<div class="card-body pb-0">
							<div class="row">
								<div class="col-md-4">
									<div class="form-group">
										<label>Slect Date Range</label>
										<vue-select :options="salesreportdate" />
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
							</div>
						</div>
					</div>
					<!-- /Search Filter -->
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
      enddate: currentDate1,
      salesreportdate: ["Select", "Today", "This Week", "This Month", "This Quarter", "This Year", "Previous Week", "Previous Month", "Previous Quarter", "Previous Year"]
    }
    },
    components: {
   
    },
    mounted() {
    }
  }
</Script>
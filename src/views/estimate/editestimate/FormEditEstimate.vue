<template>
										<div class="row">
											<div class="col-md-4">
												<div class="form-group">
													<label>Customer:</label>
                                                    <vue-select :options="editestimatecustomer" />
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
													<input type="text" class="form-control" value="#Edk555AS">
												</div>
											</div>
											<div class="col-md-4 mt-3">
												<div class="form-group">
													<label>Ref Number</label>
													<input type="text" class="form-control" value="#IkL555AS">
												</div>
											</div>
										</div>				
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
      editestimatecustomer: ["Select Customer", "Brian Johnson", "Marie Canales", "Barbara Moore", "Greg Lynch", "Karlene Chaidez"]
    }
    },
    components: {
   
    },
    mounted() {
    }
  }
</Script>
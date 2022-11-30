<template>
<form action="#">
										<div class="row">
											<div class="col-md-6">
												<div class="form-group">
													<label>Category:</label>
													<vue-select :options="editexpensecategory" />
												</div>
												<div class="form-group">
													<label>Note:</label>
													<textarea rows="5" cols="5" class="form-control" placeholder="Ut et est et autem quaerat. Dolores consequuntur ut "></textarea>
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
													<input type="text" class="form-control" value="Karlene Chaidez" disabled>
												</div>
												<div class="form-group">
													<label>Amount:</label>
													<input type="text" class="form-control" value="$75">
												</div>
												<div class="text-end mt-4">
													<button type="submit" class="btn btn-primary">Save Changes</button>
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
      editexpensecategory: ["Select Category", "Advertising", "Marketing", "Software", "Travel"]
    }
    },
    components: {
   
    },
    mounted() {
    }
  }
</Script>
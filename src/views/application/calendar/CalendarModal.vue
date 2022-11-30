<template>
<!-- Add Event Modal -->

				<div id="add_event" class="modal custom-modal fade" role="dialog">
					<div class="modal-dialog modal-dialog-centered" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title">Add Event</h5>
								 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-hidden="true"></button>
							</div>
							<div class="modal-body">
								<form>
									<div class="form-group">
										<label>Event Name <span class="text-danger">*</span></label>
										<input class="form-control" type="text">
									</div>
									<div class="form-group">
										<label>Event Date <span class="text-danger">*</span></label>
										<div class="cal-icon">
                                                        <datepicker v-model="startdate"  class="picker" 
                                                        :editable="true"
                                                        :clearable="false" />
                                        </div>
									</div>
									<div class="submit-section">
										<button class="btn btn-primary submit-btn">Submit</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<!-- /Add Event Modal -->
				
                <!-- Add Event Modal -->
                <div class="modal custom-modal fade none-border" id="my_event">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">Add Event</h4>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-hidden="true"></button>
                            </div>
                            <div class="modal-body"></div>
                            <div class="modal-footer justify-content-center">
                                <button type="button" class="btn btn-success save-event submit-btn">Create event</button>
                                <button type="button" class="btn btn-danger delete-event submit-btn" data-bs-dismiss="modal">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
				<!-- /Add Event Modal -->
				
                <!-- Add Category Modal -->
                <div class="modal custom-modal fade" id="add_new_event">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">Add Category</h4>
                                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-hidden="true"></button>
                            </div>
                            <div class="modal-body">
                                <form>
									<div class="form-group">
										<label>Category Name</label>
										<input class="form-control form-white" placeholder="Enter name" type="text" name="category-name" />
									</div>
									<div class="form-group mb-0">
										<label>Choose Category Color</label>
										<vue-select :options="calendarcategory" />
									</div>
									<div class="submit-section">
										<button type="button" class="btn btn-primary save-category submit-btn" data-bs-dismiss="modal">Save</button>
									</div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Add Category Modal -->
                
                <!-- Edit Event Modal -->
			    <div id="edit_event" class="modal fade">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h4 id="modalTitle" class="modal-title">Add Event</h4>
							 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-hidden="true"></button>

						</div>
						<div id="modalBody" class="modal-body">
							<form><label>Change event name</label><div class="input-group"><input class="form-control" type="text" id="event_value"><span class="input-group-append"><button type="submit" class="btn btn-success"><i class="fa fa-check"></i> Save</button></span></div></form>
						</div>
						<div class="modal-footer justify-content-center">
							<button type="button" class="btn btn-danger delete-event submit-btn" data-bs-dismiss="modal" style="">Delete</button>
							<button class="btn btn-info displaynone" type="button" id="triggerevent" data-bs-toggle="modal" data-bs-target="#edit_event"></button>
							<button class="btn btn-default displaynone"  type="button" id="cancelevent" data-bs-dismiss="modal" >cancel</button>
						</div>
					</div>
				</div>
			    </div>
			    <!-- /Edit Event Modal -->

			    <!-- Create Event Modal -->
			    <div id="create_event" class="modal fade">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h4 id="modalTitle" class="modal-title">Add Event</h4>
							 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-hidden="true"></button>

						</div>
						<div id="modalBody" class="modal-body">
								<form>
									<div class="event-inputs">
										<div class="form-group">
											<label class="control-label">Event Name</label>
											<input class="form-control" placeholder="Insert Event Name" type="text" id="event_name" name="title">
										</div>
										<div class="form-group mb-0">
											<label class="control-label">Category</label>
											<vue-select :options="calendarcategory1" />
										</div>
									</div>
								</form>
						</div>
						<div class="modal-footer justify-content-center">
							<button type="submit" class="btn btn-success save-event" style="">Create event</button>
							<button class="btn btn-info displaynone" type="button" id="addevent" data-bs-toggle="modal" data-bs-dismiss="#create_event"></button>
							<button class="btn btn-default displaynone"  type="button" id="cancelevents" data-bs-dismiss="modal" >cancel</button>
							<button type="button" class="btn btn-danger displaynone delete-event submit-btn" data-bs-dismiss="modal">Delete</button>
						</div>
					</div>
				</div>
			    </div>
			    <!-- /Create Event Modal -->
</template>
<script>
  import Vue from 'vue'
  import { ref } from 'vue'
  const currentDate = ref(new Date())
  export default {
     data() {
    return {
      startdate: currentDate,
      calendarcategory: ["Success", "Danger", "Info", "Primary", "Warning", "Reverse"],
      calendarcategory1: ["Success", "Danger", "Info", "Primary", "Warning", "Reverse"]
    }
    },
    components: {
   
    },
    mounted() {
    }
  }
</Script>
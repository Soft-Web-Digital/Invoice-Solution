<template>
    
		<!-- Main Wrapper -->
		<div class="main-wrapper">
            <layout-header></layout-header>
			<layout-sidebar></layout-sidebar>
			
			<!-- Page Wrapper -->
			<div class="page-wrapper">
				<div class="content container-fluid">
			
					<invoiceoverdue></invoiceoverdue>
			   
					<invoicegridheader></invoicegridheader>

					<invoicelistheader></invoicelistheader>

					<invoicelistwidget></invoicelistwidget>

					<div class="row">
						<div class="col-sm-12">
							<div class="card card-table"> 
								<div class="card-body">
									<div class="table-responsive">
										<table class="table table-stripped table-hover datatable" id="invoiceoverdue">
											<thead class="thead-light">
												<tr>
												   <th>Invoice ID</th>
												   <th>Invoice to</th>
												   <th>Amount</th>
												   <th>Created on</th>
												   <th>Last date</th>
												   <th>Status</th>
												   <th class="text-end">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in invoiceoverdue" :key="item.id">
													<td>
														<label class="custom_check">
															<input type="checkbox" name="invoice">
															<span class="checkmark"></span> 
														</label>
														<router-link to="/view-invoice" class="invoice-link">{{item.invoiceno}}</router-link>
													</td>
													<td>
														<h2 class="table-avatar">
															<router-link to="/profile"><img class="avatar avatar-sm me-2 avatar-img rounded-circle" :src="loadImg(item.img)" alt="User Image"> {{item.name}}</router-link>
														</h2>
													</td>
													<td class="text-primary">{{item.amt}}</td>
													<td>{{item.date}}</td>
													<td>{{item.date1}}</td>
													<td><span class="badge bg-danger-light">{{item.status}}</span></td>
													<td class="text-end">
														<router-link to="/edit-invoice" class="btn btn-sm btn-white text-success me-2"><i class="far fa-edit me-1"></i> Edit</router-link> 
														<a class="btn btn-sm btn-white text-danger" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#delete_paid"><i class="far fa-trash-alt me-1"></i>Delete</a>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- /Page Wrapper -->
			
		    <!-- Delete Paid Modal -->
			<div class="modal custom-modal fade" id="delete_paid" role="dialog">
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content">
						<div class="modal-body">
							<div class="form-header">
								<h3>Delete Invoice Overdue</h3>
								<p>Are you sure want to delete?</p>
							</div>
							<div class="modal-btn delete-action">
								<div class="row">
									<div class="col-6">
										<a href="javascript:void(0);" class="btn btn-primary paid-continue-btn">Delete</a>
									</div>
									<div class="col-6">
										<a href="javascript:void(0);" data-bs-dismiss="modal" class="btn btn-primary paid-cancel-btn">Cancel</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- /Delete Paid Modal -->
			
		</div>
		<!-- /Main Wrapper -->
</template>
<script>
	import invoiceoverdue from '../../../assets/json/invoiceoverdue.json';
	import util from '../../../assets/utils/util'
	const images = require.context('../../../assets/img/profiles', false, /\.png$|\.jpg$/)
	export default {
		data() {
			return {
				invoiceoverdue: invoiceoverdue
			}
		},
		mounted() {
			// Checkbox Select
	
	$('.app-listing .selectBox').on("click", function() {
        $(this).parent().find('#checkBoxes').fadeToggle();
        $(this).parent().parent().siblings().find('#checkBoxes').fadeOut();
    });

    $('.invoices-main-form .selectBox').on("click", function() {
        $(this).parent().find('#checkBoxes-one').fadeToggle();
        $(this).parent().parent().siblings().find('#checkBoxes-one').fadeOut();
    });

	// Datetimepicker
	
	if($('.datetimepicker').length > 0 ){
		$('.datetimepicker').datetimepicker({
			format: 'DD-MM-YYYY',
			icons: {
				up: "fas fa-angle-up",
				down: "fas fa-angle-down",
				next: 'fas fa-angle-right',
				previous: 'fas fa-angle-left'
			}
		});
	}
// Select 2
	if ($('.select').length > 0) {
		$('.select').select2({
			minimumResultsForSearch: -1,
			width: '100%'
		});
	}
			util.datatable('#invoiceoverdue')
		},
		methods: {
			loadImg(imgPath) {
				return images('./' + imgPath).default
			}
		},
	}
	</script>
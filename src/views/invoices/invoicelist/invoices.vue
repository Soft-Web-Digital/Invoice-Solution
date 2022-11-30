<template>
    
		<!-- Main Wrapper -->
		<div class="main-wrapper">
            <layout-header></layout-header>
			<layout-sidebar></layout-sidebar>
			
			<!-- Page Wrapper -->
			<div class="page-wrapper">
				<div class="content container-fluid">
			
					<invoiceheader></invoiceheader>
			   
					<invoicegridheader></invoicegridheader>

					<invoicelistheader></invoicelistheader>

					<invoicelistwidget></invoicelistwidget>

					<div class="row">
						<div class="col-sm-12">
							<div class="card card-table"> 
								<div class="card-body">
									<div class="table-responsive">
										<table class="table table-stripped table-hover datatable" id="invoicedraft">
											<thead class="thead-light">
												<tr>
												   <th>Invoice ID</th>
												   <th>Category</th>
												   <th>Created on</th>
												   <th>Invoice to</th>
												   <th>Amount</th>
												   <th>Due date</th>
												   <th>Status</th>
												   <th class="text-end">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in invoicedraft" :key="item.id">
													<td>
														<label class="custom_check">
															<input type="checkbox" name="invoice">
															<span class="checkmark"></span> 
														</label>
														<router-link to="/view-invoice" class="invoice-link">{{item.invoiceno}}</router-link>
													</td>
													<td>{{item.category}}</td>
													<td>{{item.date}}</td>
													<td>
														<h2 class="table-avatar">
															<router-link to="/profile"><img class="avatar avatar-sm me-2 avatar-img rounded-circle" :src="loadImg(item.img)"  alt="User Image"> {{item.name}}</router-link>
														</h2>
													</td>
													<td class="text-primary">{{item.amt}}</td>
													<td>{{item.date1}}</td>
													<td><span class="badge bg-success-light">{{item.status}}</span></td>
													<td class="text-end">
														<div class="dropdown dropdown-action">
															<a href="javascript:void(0)" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-ellipsis-v"></i></a>
															<div class="dropdown-menu dropdown-menu-end">
																<router-link class="dropdown-item" to="/edit-invoice"><i class="far fa-edit me-2"></i>Edit</router-link>
																<router-link class="dropdown-item" to="/view-invoice"><i class="far fa-eye me-2"></i>View</router-link>
																<a class="dropdown-item" href="javascript:void(0);"><i class="far fa-trash-alt me-2"></i>Delete</a>
																<a class="dropdown-item" href="javascript:void(0);"><i class="far fa-check-circle me-2"></i>Mark as sent</a>
																<a class="dropdown-item" href="javascript:void(0);"><i class="far fa-paper-plane me-2"></i>Send Invoice</a>
																<a class="dropdown-item" href="javascript:void(0);"><i class="far fa-copy me-2"></i>Clone Invoice</a>
															</div>
														</div>
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
			
		</div>
		<!-- /Main Wrapper -->
</template>
<script>
	import invoicedraft from '../../../assets/json/invoicedraft.json';
	import util from '../../../assets/utils/util'
	const images = require.context('../../../assets/img/profiles', false, /\.png$|\.jpg$/)
	export default {
		data() {
			return {
				invoicedraft: invoicedraft
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
			util.datatable('#invoicedraft')
		},
		methods: {
			loadImg(imgPath) {
				return images('./' + imgPath).default
			}
		},
	}
	</script>
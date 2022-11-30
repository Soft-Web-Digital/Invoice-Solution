<template>
    
		<!-- Main Wrapper -->
		<div class="main-wrapper">
            <layout-header></layout-header>
			<layout-sidebar></layout-sidebar>
			
			<!-- Page Wrapper -->
			<div class="page-wrapper">
				<div class="content container-fluid">
			
					<invoicegrid></invoicegrid>
			   
					<invoicegridheader></invoicegridheader>

					<div class="card invoices-tabs-card">
						<div class="card-body card-body pt-0 pb-0">
							<div class="invoices-main-tabs border-0 pb-0">
								<div class="row align-items-center">
									<div class="col-lg-12 col-md-12">
										<div class="invoices-settings-btn invoices-settings-btn-one">
											<router-link to="/invoices-settings" class="invoices-settings-icon">
												<i data-feather="settings"></i>
                                            </router-link>
											<router-link to="/add-invoice" class="btn">
												<i data-feather="plus-circle"></i> New Invoice
                                            </router-link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					

					<div class="row">
						<div class="col-sm-6 col-lg-4 col-xl-3 d-flex" v-for="item in invoicegrid" :key="item.id">
							<div class="card invoices-grid-card w-100">
								<div class="card-header d-flex justify-content-between align-items-center">
									<router-link to="/view-invoice" class="invoice-grid-link">{{item.invoiceno}}</router-link>
									<div class="dropdown dropdown-action">
										<a href="javascript:void(0)" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-ellipsis-v"></i></a>
										<div class="dropdown-menu dropdown-menu-end">
											<router-link class="dropdown-item" to="/edit-invoice"><i class="far fa-edit me-2"></i>Edit</router-link>
											<router-link class="dropdown-item" to="/view-invoice"><i class="far fa-eye me-2"></i>View</router-link>
											<a class="dropdown-item" href="javascript:void(0);"><i class="far fa-trash-alt me-2"></i>Delete</a>
										</div>
									</div>
								</div>
								<div class="card-middle">
									<h2 class="card-middle-avatar">
										<router-link to="/profile"><img class="avatar avatar-sm me-2 avatar-img rounded-circle" :src="loadImg(item.img)" alt="User Image"> {{item.name}}</router-link>
									</h2>
								</div>
								<div class="card-body">
									<div class="row align-items-center">
										<div class="col">
											<span><i class="far fa-money-bill-alt"></i> {{item.detail}}</span>
											<h6 class="mb-0">{{item.rate}}</h6>
										</div>
										<div class="col-auto">
											<span><i class="far fa-calendar-alt"></i> {{item.detail1}}</span>
											<h6 class="mb-0">{{item.rate1}}</h6>
										</div>
									</div>
								</div>
								<div class="card-footer">
									<div class="row align-items-center">
										<div class="col-auto">
											<span class="badge bg-success-dark" v-if="item.status == 'Paid'">Paid</span>
											<span class="badge bg-danger-dark" v-if="item.status == 'Overdue'">Overdue</span>
											<span class="badge bg-secondary-dark" v-if="item.status == 'Cancelled'">Cancelled</span>
											<span class="badge bg-primary-dark" v-if="item.status == 'Sent'">Sent</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-12">
							<div class="invoice-load-btn">
								<a href="javascript:void(0)" class="btn">
									<span class="spinner-border text-primary"></span> Load more
								</a>
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
	import invoicegrid from '../../../assets/json/invoicegrid.json';
	const images = require.context('../../../assets/img/profiles', false, /\.png$|\.jpg$/)
	export default {
		data() {
			return {
				invoicegrid: invoicegrid
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
		},
		methods: {
			loadImg(imgPath) {
				return images('./' + imgPath).default
			}
		},
	}
	</script>
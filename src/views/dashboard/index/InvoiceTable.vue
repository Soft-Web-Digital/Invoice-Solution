<template>
<div class="col-md-6 col-sm-6">
							<div class="card">
								<div class="card-header">
									<div class="row">
										<div class="col">
											<h5 class="card-title">Recent Invoices</h5>
										</div>
										<div class="col-auto">
											<router-link to="/invoices" class="btn-right btn btn-sm btn-outline-primary">
												View Page
											</router-link>
										</div>
									</div>
								</div>
								<div class="card-body">
									<div class="mb-3">
										<div class="progress progress-md rounded-pill mb-3">
											<div class="progress-bar bg-success" role="progressbar" style="width: 47%" aria-valuenow="47" aria-valuemin="0" aria-valuemax="100"></div>
											<div class="progress-bar bg-warning" role="progressbar" style="width: 28%" aria-valuenow="28" aria-valuemin="0" aria-valuemax="100"></div>
											<div class="progress-bar bg-danger" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
											<div class="progress-bar bg-info" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
										<div class="row">
											<div class="col-auto">
												<i class="fas fa-circle text-success me-1"></i> Paid
											</div>
											<div class="col-auto">
												<i class="fas fa-circle text-warning me-1"></i> Unpaid
											</div>
											<div class="col-auto">
												<i class="fas fa-circle text-danger me-1"></i> Overdue
											</div>
											<div class="col-auto">
												<i class="fas fa-circle text-info me-1"></i> Draft
											</div>
										</div>
									</div>
				
									<div class="table-responsive">
									
										<table class="table table-stripped table-hover">
											<thead class="thead-light">
												<tr>
												   <th>Customer</th>
												   <th>Amount</th>
												   <th>Due Date</th>
												   <th>Status</th>
												   <th class="text-end">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in recentinvoices" :key="item.id">
													<td>
														<h2 class="table-avatar">
															<router-link to="/profile"><img class="avatar avatar-sm me-2 avatar-img rounded-circle" :src="loadImg(item.image)" alt="User Image">{{item.customer_name}}</router-link>
														</h2>
													</td>
													<td>{{item.amount}}</td>
													<td>{{item.due_date}}</td>
													<td>
														<span class="badge bg-success-light" v-if="item.status == 'Paid'">{{item.status}}</span>
														<span class="badge bg-info-light" v-if="item.status == 'Sent'">{{item.status}}</span>
														<span class="badge bg-warning-light" v-if="item.status == 'Partially Paid'">{{item.status}}</span>
														<span class="badge bg-danger-light" v-if="item.status == 'Overdue'">{{item.status}}</span>
													</td>
													<td class="text-end">
														<div class="dropdown dropdown-action">
															<a href="javascript:void(0)" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-ellipsis-h"></i></a>
															<div class="dropdown-menu dropdown-menu-right">
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
</template>
<script>
import recentinvoices from '../../../assets/json/recentinvoices.json';
const images = require.context('../../../assets/img/profiles', false, /\.png$|\.jpg$/)
export default {
data() {
		return {
			recentinvoices: recentinvoices
		}
	},
	components: {
  },
    mounted() {
        
	},
	 methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
        },
        
    },
}
</script>
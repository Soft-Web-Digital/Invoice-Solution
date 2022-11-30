<template>
<div class="col-md-6 col-sm-6">
							<div class="card card-two">
								<div class="card-header">
									<div class="row">
										<div class="col">
											<h5 class="card-title">Recent Estimates</h5>
										</div>
										<div class="col-auto">
											<router-link to="/estimates" class="btn-right btn btn-sm btn-outline-primary">
												View All 
											</router-link>
										</div>
									</div>
								</div>
								<div class="card-body">
									<div class="mb-3">
										<div class="progress progress-md rounded-pill mb-3">
											<div class="progress-bar bg-success" role="progressbar" style="width: 39%" aria-valuenow="39" aria-valuemin="0" aria-valuemax="100"></div>
											<div class="progress-bar bg-danger" role="progressbar" style="width: 35%" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
											<div class="progress-bar bg-warning" role="progressbar" style="width: 26%" aria-valuenow="26" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
										<div class="row">
											<div class="col-auto">
												<i class="fas fa-circle text-success me-1"></i> Sent
											</div>
											<div class="col-auto">
												<i class="fas fa-circle text-warning me-1"></i> Draft
											</div>
											<div class="col-auto">
												<i class="fas fa-circle text-danger me-1"></i> Expired
											</div>
										</div>
									</div>
									<div class="table-responsive">
										<table class="table table-hover">
											<thead class="thead-light">
												<tr>
													<th>Customer</th>
													<th>Expiry Date</th>
													<th>Amount</th>
													<th>Status</th>
													<th class="text-end">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in recentestimates" :key="item.id">
													<td>
														<h2 class="table-avatar">
															<router-link to="/profile"><img class="avatar avatar-sm me-2 avatar-img rounded-circle" :src="loadImg(item.image)" alt="User Image">{{item.customer_name}}</router-link>
														</h2>
													</td>
													<td>{{item.expiry_date}}</td>
													<td>{{item.amount}}</td>
													<td>
														<span class="badge bg-info-light" v-if="item.status == 'Sent'">{{item.status}}</span>
														<span class="badge bg-warning-light" v-if="item.status == 'Expired'">{{item.status}}</span>
														<span class="badge bg-success-light" v-if="item.status == 'Accepted'">{{item.status}}</span>
													</td>
													<td class="text-end">
														<div class="dropdown dropdown-action">
															<a href="javascript:void(0)" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-ellipsis-h"></i></a>
															<div class="dropdown-menu dropdown-menu-right">
																<router-link class="dropdown-item" to="/edit-invoice"><i class="far fa-edit me-2"></i>Edit</router-link>
																<a class="dropdown-item" href="javascript:void(0);"><i class="far fa-trash-alt me-2"></i>Delete</a>
																<router-link class="dropdown-item" to="/view-estimate"><i class="far fa-eye me-2"></i>View</router-link>
																<a class="dropdown-item" href="javascript:void(0);"><i class="far fa-file-alt me-2"></i>Convert to Invoice</a>
																<a class="dropdown-item" href="javascript:void(0);"><i class="far fa-check-circle me-2"></i>Mark as sent</a>
																<a class="dropdown-item" href="javascript:void(0);"><i class="far fa-paper-plane me-2"></i>Send Estimate</a>
																<a class="dropdown-item" href="javascript:void(0);"><i class="far fa-check-circle me-2"></i>Mark as Accepted</a>
																<a class="dropdown-item" href="javascript:void(0);"><i class="far fa-times-circle me-2"></i>Mark as Rejected</a>
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
import recentestimates from '../../../assets/json/recentestimates.json';
const images = require.context('../../../assets/img/profiles', false, /\.png$|\.jpg$/)
export default {
data() {
		return {
			recentestimates: recentestimates
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
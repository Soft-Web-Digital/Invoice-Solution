<template>
<table class="table table-stripped table-hover datatable" id="estimatestable">
											<thead class="thead-light">
												<tr>
													<th>Estimate Number</th>
													<th>Customer</th>
													<th>Estimate Date</th>
													<th>Expiry Date</th>
													<th>Amount</th>
													<th>Status</th>
													<th class="text-end">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in estimates" :key="item.id">
													<td><router-link to="/view-estimate">{{item.estimate_number}}</router-link></td>
													<td>
														<h2 class="table-avatar">
															<router-link to="/profile"><img class="avatar avatar-sm me-2 avatar-img rounded-circle" :src="loadImg(item.customer_image)" alt="User Image"> {{item.customer_name}}</router-link>
														</h2>
													</td>
													<td>{{item.estimated_date}}</td>
													<td>{{item.expiry_date}}</td>
													<td>{{item.amount}}</td>
													<td>
                                                        <span class="badge bg-success-light" v-if="item.status == 'Accepted'">{{item.status}}</span>
                                                        <span class="badge bg-danger-light" v-if="item.status == 'Declined'">{{item.status}}</span>
                                                        <span class="badge bg-info-light" v-if="item.status == 'Sent'">{{item.status}}</span>
                                                         <span class="badge bg-warning-light" v-if="item.status == 'Expired'">{{item.status}}</span>
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
</template>
<script>
import estimates from '../../../assets/json/estimates.json';
import util from '../../../assets/utils/util'
const images = require.context('../../../assets/img/profiles', false, /\.png$|\.jpg$/)
export default {
	data() {
		return {
			estimates: estimates
		}
	},
	mounted() {	
	util.datatable('#estimatestable')
	},
	methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
		},
    },
}
</script>
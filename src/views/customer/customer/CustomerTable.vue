<template>
<div class="card card-table">
								<div class="card-body">
									<div class="table-responsive">
										<table class="table table-center table-hover datatable" id="customerTable">
											<thead class="thead-light">
												<tr>
													<th>Customer</th>
													<th>Email</th>
													<th>Amount Due</th>
													<th>Registered On</th>
													<th>Status</th>
													<th class="text-end">Actions</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in customers" :key="item.id">
													<td>
														<h2 class="table-avatar">
															<router-link to="/profile" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" :src="loadImg(item.customer_image)" alt="User Image"></router-link>
															<router-link to="/profile">{{item.customer_name}} <span>{{item.customer_mobile}}</span></router-link>
														</h2>
													</td>
													<td>{{item.customer_email}}</td>
													<td>{{item.amount_due}}</td>
													<td>{{item.registered_on}}</td>
													<td>
														<span class="badge badge-pill bg-success-light" v-if="item.status == 'Active'">Active</span>
														<span class="badge badge-pill bg-danger-light" v-if="item.status == 'Inactive'">Inactive</span>
													</td>
													<td class="text-end">
														<router-link to="/edit-customer" class="btn btn-sm btn-white text-success me-2"><i class="far fa-edit me-2"></i> Edit</router-link> 
														<a href="javascript:void(0);" class="btn btn-sm btn-white text-danger me-2"><i class="far fa-trash-alt me-2"></i>Delete</a>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
</template>
<script>
import customers from '../../../assets/json/customers.json';
import util from '../../../assets/utils/util'
const images = require.context('../../../assets/img/profiles', false, /\.png$|\.jpg$/)
export default {
	data() {
		return {
			customers: customers
		}
	},
	mounted() {
     util.datatable('#customerTable')
	},
	methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
		}
    },
}
</script>
<template>
<table class="table table-center table-hover datatable" id="paymentTable">
											<thead class="thead-light">
												<tr>
													<th>Reference ID</th>
													<th>Customer</th>
													<th>Amount</th>
													<th>Date</th>
													<th>Payment Method</th>
													<th class="text-end">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in payments" :key="item.id">
													<td><a href="javascript:void(0);">{{item.reference_id}}</a></td>
													<td>
														<h2 class="table-avatar">
															<router-link to="/profile"><img class="avatar avatar-sm me-2 avatar-img rounded-circle" :src="loadImg(item.customer_image)" alt="User Image"> {{item.customer_name}}</router-link>
														</h2>
													</td>
													<td>{{item.amount}}</td>
													<td>{{item.date}}</td>
													<td>{{item.payment_card}} <strong>{{item.card_no}}</strong></td>
													<td class="text-end">
														<a class="btn btn-sm btn-white me-2" href="javascript:void(0);">
															<i class="fas fa-download me-1"></i> PDF
														</a>
														<router-link class="btn btn-sm btn-white ms-1" to="/view-invoice">
															<i class="far fa-eye me-1"></i> View
														</router-link>
													</td>
												</tr>
											</tbody>
										</table>
</template>
<script>
import payments from '../../../assets/json/payments.json';
import util from '../../../assets/utils/util'
const images = require.context('../../../assets/img/profiles', false, /\.png$|\.jpg$/)
export default {
	data() {
		return {
			payments: payments
		}
	},
	mounted() {
	util.datatable('#paymentTable')
	},
	methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
        },
        
    },
}
</script>
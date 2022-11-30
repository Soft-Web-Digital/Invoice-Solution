<template>
<table class="table table-center table-hover datatable" id="expensesTable">
											<thead class="thead-light">
												<tr>
													<th>Category</th>
													<th>Customer</th>
													<th>Expense Date</th>
													<th>Notes</th>
													<th>Amount</th>
													<th>Status</th>
													<th class="text-end">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in expenses" :key="item.id">
													<td>{{item.category}}</td>
													<td>
														<h2 class="table-avatar">
															<router-link to="/profile"><img class="avatar avatar-sm me-2 avatar-img rounded-circle" :src="loadImg(item.customer_image)" alt="User Image"> {{item.customer_name}}</router-link>
														</h2>
													</td>
													<td>{{item.expense_date}}</td>
													<td>{{item.notes}}</td>
													<td>{{item.amount}}</td>
													<td>
                                                        <span class="badge badge-pill bg-success-light" v-if="item.status == 'Approved'">Approved</span>
                                                        <span class="badge badge-pill bg-danger-light" v-if="item.status == 'Pending'">Pending</span>
                                                    </td>
													<td class="text-end">
														<router-link to="/edit-expenses" class="btn btn-sm btn-white text-success me-2"><i class="far fa-edit me-1"></i> Edit</router-link> 
														<a href="javascript:void(0);" class="btn btn-sm btn-white text-danger"><i class="far fa-trash-alt me-1"></i>Delete</a>
													</td>
												</tr>
											</tbody>
										</table>
</template>
<script>
import expenses from '../../../assets/json/expenses.json';
import util from '../../../assets/utils/util'
const images = require.context('../../../assets/img/profiles', false, /\.png$|\.jpg$/)
export default {
	data() {
		return {
			expenses: expenses
		}
	},
	mounted() {
		 util.datatable('#expensesTable')
	},
	methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
        }
    },
}
</script>
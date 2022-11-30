<template>
<table class="table table-center table-hover datatable" id="expensereportTable">
											<thead class="thead-light">
												<tr>
													<th>Category</th>
													<th>Customer</th>
													<th>Expense Date</th>
													<th>Amount</th>
													<th>Status</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in expensereport" :key="item.id">
													<td>{{item.category}}</td>
													<td>
														<h2 class="table-avatar">
															<router-link to="/profile"><img class="avatar avatar-sm me-2 avatar-img rounded-circle" :src="loadImg(item.img)"  alt="User Image"> {{item.customername}}</router-link>
														</h2>
													</td>
													<td>{{item.expensedate}}</td>
													<td>{{item.amount}}</td>
													<td><span class="badge badge-pill bg-success-light">{{item.status}}</span></td>
													
												</tr>
											</tbody>
										</table>
</template>
<script>
import expensereport from '../../../assets/json/expensereport.json';
import util from '../../../assets/utils/util'
const images = require.context('../../../assets/img/profiles', false, /\.png$|\.jpg$/)
export default {
	data() {
		return {
			expensereport: expensereport
		}
	},
	mounted() {
		util.datatable('#expensereportTable')
	},
	methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
		}
        
    },
}
</script>
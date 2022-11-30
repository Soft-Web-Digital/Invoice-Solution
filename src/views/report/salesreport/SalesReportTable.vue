<template>
<table class="table table-center table-hover datatable" id="salereport">
											<thead class="thead-light">
												<tr>
													<th>#</th>
													<th>Date</th>
													<th>Category</th>
													<th>Sales</th>
													<th>Refunded</th>
													<th>Discounts</th>
													<th>Taxs</th>
													<th class="text-end">Amount</th>
												</tr>
											</thead>
											
											<tbody>
												<tr v-for="item in salereport" :key="item.id">
													<td>{{item.no}}</td>
													<td>{{item.date}}</td>
													<td>{{item.category}}</td>
													<td>{{item.sales}}</td>
													<td>{{item.refunded}}</td>
													<td>{{item.discounts}}</td>
													<td>{{item.taxs}}</td>
													<td class="text-end">{{item.amount}}</td>
												</tr>
											</tbody>
										</table>
</template>
<script>
import salereport from '../../../assets/json/salereport.json';
import util from '../../../assets/utils/util'
export default {
	data() {
		return {
			salereport: salereport
		}
	},
	mounted() {
	util.datatable('#salereport')	
	}
}
</script>
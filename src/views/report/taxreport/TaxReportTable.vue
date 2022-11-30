<template>
<table class="table table-center table-hover datatable" id="taxreporttable">
											<thead class="thead-light">
												<tr>
													<th>#</th>
													<th>Date</th>
													<th>Economic Zone</th>
													<th>Tax</th>
													<th>Tax Rate</th>
													<th>Net Revenue</th>
													<th>Gross Revenue</th>
													<th class="text-end">Amount</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in taxreport" :key="item.id">
													<td>{{item.no}}</td>
													<td>{{item.date}}</td>
													<td>{{item.economiczone}}</td>
													<td>{{item.tax}}</td>
													<td>{{item.taxrate}}</td>
													<td>{{item.netrevenue}}</td>
													<td>{{item.grossrevenue}}</td>
													<td class="text-end">{{item.amount}}</td>
												</tr>
											</tbody>
										</table>
</template>
<script>
import taxreport from '../../../assets/json/taxreport.json';
import util from '../../../assets/utils/util'
export default {
	data() {
		return {
			taxreport: taxreport
		}
	},
	mounted() {
	util.datatable('#taxreporttable')
	}
}
</script>
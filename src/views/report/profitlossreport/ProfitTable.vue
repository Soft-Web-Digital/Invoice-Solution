<template>
<table class="table table-center table-hover datatable" id="profitTable">
											<thead class="thead-light">
												<tr>
													<th>#</th>
													<th>Date</th>
													<th>Income</th>
													<th>Income Amount</th>
													<th>Expense</th>
													<th>Expenses Amount</th>
													<th class="text-end">Net Profit</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in profit" :key="item.id">
												    <td>{{item.no}}</td>
													<td>{{item.date}}</td>
													<td>{{item.income}}</td>
													<td>{{item.amount}}</td>
													<td>{{item.expense}}</td>
													<td>{{item.expenseamount}}</td>
													<td class="text-end">{{item.netprofit}}</td>
												</tr>
											</tbody>
										</table>
</template>
<script>
import profit from '../../../assets/json/profit.json';
import util from '../../../assets/utils/util'
export default {
	data() {
		return {
			profit: profit
		}
	},
	mounted() {
	util.datatable('#profitTable')
	}
}
</script>
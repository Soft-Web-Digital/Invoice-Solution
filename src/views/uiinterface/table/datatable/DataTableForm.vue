<template>
<div class="table-responsive">
										<table class="datatable table table-stripped datatable" id="dataTable">
											<thead>
												<tr>
													<th>Name</th>
													<th>Position</th>
													<th>Office</th>
													<th>Age</th>
													<th>Start date</th>
													<th>Salary</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in datatable" :key="item.id">
													<td>{{item.name}}</td>
													<td>{{item.position}}</td>
													<td>{{item.office}}</td>
													<td>{{item.age}}</td>
													<td>{{item.startdate}}</td>
													<td>{{item.salary}}</td>
												</tr>
											</tbody>
										</table>
									</div>
</template>
<script>
import datatable from '../../../../assets/json/datatable.json';
import util from '../../../../assets/utils/util'
export default {
	data() {
		return {
			datatable: datatable
		}
	},
	mounted() {
     util.datatable('#dataTable')
	}
}
</script>
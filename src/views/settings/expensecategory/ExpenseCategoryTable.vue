<template>
<table class="table table-striped custom-table mb-0">
											<thead>
												<tr>
													<th>Category</th>
													<th>Description</th>
													<th>Status</th>
													<th class="text-end">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in expensecategory" :key="item.id">
													<td>{{item.category}}</td>
													<td>{{item.description}}</td>
													<td>
														<span class="badge bg-success-light">{{item.status}}</span>
													</td>
													<td class="text-end">
														<a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit_category" class="btn btn-sm btn-white text-success me-2"><i class="far fa-edit me-1"></i> Edit</a> 
														<a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#delete_category" class="btn btn-sm btn-white text-danger me-2"><i class="far fa-trash-alt me-1"></i>Delete</a>
													</td>
												</tr>
											</tbody>
										</table>
</template>
<script>
import expensecategory from '../../../assets/json/expensecategory.json';
export default {
	data() {
		return {
			expensecategory: expensecategory
		}
	}
}
</script>
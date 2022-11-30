<template>
<table class="table table-hover mb-0">
											<thead class="thead-light">
												<tr>
													<th>Tax Name </th>
													<th>Tax Percentage (%) </th>
													<th>Status</th>
													<th class="text-end">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>VAT</td>
													<td>14%</td>
													<td>
														<span class="badge bg-success-light">Active</span>
													</td>
													<td class="text-end">
														<a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit_tax" class="btn btn-sm btn-white text-success me-2"><i class="far fa-edit me-1"></i> Edit</a> 
														<a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#delete_tax" class="btn btn-sm btn-white text-danger me-2"><i class="far fa-trash-alt me-1"></i>Delete</a>
													</td>
												</tr>
												<tr>
													<td>GST</td>
													<td>30%</td>
													<td>
														<span class="badge bg-danger-light">Inactive</span>
													</td>
													<td class="text-end">
														<a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit_tax" class="btn btn-sm btn-white text-success me-2"><i class="far fa-edit me-1"></i> Edit</a> 
														<a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#delete_tax" class="btn btn-sm btn-white text-danger me-2"><i class="far fa-trash-alt me-1"></i>Delete</a>
													</td>
												</tr>
											</tbody>
										</table>
</template>
<template>
	<div class="table-responsive">
		<div class="d-flex align-items-center justify-content-between py-4">
			<div>
				<span>Show</span>
				<select class="mx-1 py-1" v-model="perPage" name="" id="">
					<option value="50">50</option>
					<option value="100">100</option>
					<option value="200">200</option>
					<option value="500">500</option>
				</select>
				<span>Invoices</span>
			</div>

			<div>
				<input
					type="text"
					v-model="search"
					class="form-control"
					placeholder="Search"
				/>
			</div>
		</div>
		<table class="table table-stripped table-center table-hover datatable">
			<thead class="thead-light">
				<tr>
					<th>#</th>
					<th>Invoice ID</th>
					<th>Customer</th>
					<th>Amount</th>
					<th>Date Created</th>
					<th>Due Date</th>
					<th>Status</th>
					<!-- <th class="text-end">Action</th> -->
				</tr>
			</thead>
			<tbody>
				<tr v-for="(invoice, index) in invoices.data" :key="invoice.id">
					<td>{{ index + 1 }}</td>
					<td>
						{{ invoice.invoice_id }}
					</td>
					<td>{{ invoice.customer.name }}</td>
					<td>
						{{
							`${invoice.currency} ${addCurrencyComma(
								invoice.total_amount
							)}`
						}}
					</td>
					<td>{{ formatted(invoice.created_at) }}</td>
					<td>{{ formatted(invoice.due_date) }}</td>
					<td>
						<span
							class="badge badge-pill text-capitalize bg-success-light"
							v-if="
								invoice.status === 'paid' ||
								invoice.status === 'sent' ||
								invoice.status === 'viewed' ||
								invoice.status === 'accepted'
							"
							>{{ invoice.status }}</span
						>
						<span
							class="badge badge-pill text-capitalize bg-warning-light"
							v-else-if="
								invoice.status === 'draft' ||
								invoice.status === 'unpaid' ||
								invoice.status === 'recurring' ||
								invoice.status === 'partially_paid'
							"
							>{{
								invoice.status === "partially_paid"
									? "Partially paid"
									: invoice.status
							}}</span
						>
						<span
							class="badge badge-pill text-capitalize bg-danger-light"
							v-else-if="
								invoice.status === 'expired' ||
								invoice.status === 'rejected' ||
								invoice.status === 'refunded' ||
								invoice.status === 'overdue'
							"
							>{{ invoice.status }}</span
						>
					</td>
					<!-- <td class="text-center">
						<div class="dropdown dropdown-action">
							<a
								class="action-icon dropdown-toggle"
								data-bs-toggle="dropdown"
								aria-expanded="false"
								><i class="fas fa-ellipsis-h"></i
							></a>
							<div
								class="dropdown-menu dropdown-menu-right"
								style="width: fit-content"
							>
								<router-link
									:to="{
										name: 'user-invoice-view',
										params: { id: invoice.id },
									}"
									class="dropdown-item"
									><i class="fa fa-eye me-2"></i> View
								</router-link>
							</div>
						</div>
					</td> -->
				</tr>
			</tbody>
		</table>
		<div
			v-if="isFetching"
			class="d-flex my-5 align-items-center justify-content-center"
		>
			Loading...
		</div>
		<div
			v-if="length === 0"
			class="d-flex my-5 align-items-center justify-content-center"
		>
			No Data Available
		</div>
		<div
			v-if="!isFetching && length !== 0"
			class="d-flex align-items-center justify-content-between p-4"
		>
			<p v-if="invoices.meta">
				Showing {{ invoices.data.length }} of {{ invoices.meta.total }} invoices
			</p>
			<div>
				<ul class="pagination mb-4">
					<li
						class="page-item"
						@click="previousPage"
						:class="{ disabled: currentPage == 1 }"
					>
						<a class="page-link" href="javascript:;" tabindex="-1">Previous</a>
					</li>
					<li
						class="page-item"
						v-for="pageNumber in pageNumbers"
						:key="pageNumber"
						@click="setPage(pageNumber)"
						:class="{
							active: pageNumber === currentPage,
						}"
					>
						<a class="page-link" href="javascript:;">{{ pageNumber }}</a>
					</li>
					<li
						class="page-item"
						@click="nextPage"
						:class="{ disabled: pageNumbers.length <= 1 }"
					>
						<a class="page-link" href="javascript:;">Next</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref, onMounted, computed, watch } from "vue";
	import { useStore } from "vuex";
	import { useRoute } from "vue-router";
	import { formatted } from "../../../../assets/composables/date";
	import { addCurrencyComma } from "../../../../assets/composables/currency";

	const store = useStore();
	const route = useRoute();
	const currentPage = ref(1);
	const perPage = ref(50);
	const search = ref("");
	const isFetching = ref(false);
	const length = ref(null);

	watch(search, (newValue) => {
		getInvoices(newValue);
	});

	watch(perPage, (newValue) => {
		perPage.value = newValue;
		getInvoices();
	});

	const invoices = computed(() => {
		return store.getters["users/userinvoices"];
	});

	const getInvoices = (keyword = "") => {
		isFetching.value = true;
		let data = {
			id: route.params.id,
			page: currentPage.value,
			per_page: perPage.value,
			query: keyword,
		};
		store
			.dispatch("users/getUserInvoices", data)
			.then(() => {
				isFetching.value = false;
				length.value = invoices.value.data.length;
			})
			.catch(() => {
				isFetching.value = false;
			});
	};

	// Pagination start
	const total = computed(() => {
		return store.getters["users/total"];
	});

	const setPage = (pageNumber) => {
		currentPage.value = pageNumber;
		getInvoices();
	};

	const nextPage = () => {
		if (pageNumbers.length > 1) {
			currentPage.value++;
			getInvoices();
		}
	};

	const previousPage = () => {
		if (currentPage.value != 1) {
			currentPage.value--;
			getInvoices();
		}
	};

	const pageNumbers = computed(() => {
		const maxVisiblePages = 10;
		let startPage = Math.max(
			currentPage.value - Math.floor(maxVisiblePages / 2),
			1
		);
		const endPage = Math.min(startPage + maxVisiblePages - 1, total.value);

		if (endPage - startPage + 1 < maxVisiblePages) {
			startPage = Math.max(endPage - maxVisiblePages + 1, 1);
		}

		const pages = [];
		for (let i = startPage; i <= endPage; i++) {
			pages.push(i);
		}

		return pages;
	});
	// Pagination End

	onMounted(() => {
		getInvoices();
	});
</script>

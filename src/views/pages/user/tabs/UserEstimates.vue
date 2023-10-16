<template>
	<div class="table-responsive mt-0">
		<div class="d-flex align-items-center justify-content-between py-4">
			<div>
				<span>Show</span>
				<select class="mx-1 py-1" v-model="perPage" name="" id="">
					<option value="50">50</option>
					<option value="100">100</option>
					<option value="200">200</option>
					<option value="500">500</option>
				</select>
				<span>estimates</span>
			</div>

			<div>
				<input
					v-model="search"
					type="text"
					class="form-control"
					placeholder="Search"
				/>
			</div>
		</div>
		<table class="table table-stripped table-center table-hover datatable">
			<thead class="thead-light">
				<tr>
					<th>#</th>
					<th>Estimate ID</th>
					<th>Customer</th>
					<th>Amount</th>
					<th>Date Created</th>
					<th>Due Date</th>
					<th>Status</th>
				</tr>
			</thead>
			<tbody v-if="estimates.data && estimates.data.length > 0">
				<tr v-for="(estimate, index) in estimates.data" :key="estimate.id">
					<td>{{ index + 1 }}</td>
					<td>
						{{ estimate.estimate_id }}
					</td>
					<td>{{ estimate.customer.name }}</td>
					<td>
						{{ `${estimate.currency} ${estimate.total_amount.toFixed(2)}` }}
					</td>
					<td>{{ formatted(estimate.created_at) }}</td>
					<td>{{ formatted(estimate.due_date) }}</td>
					<td>
						<span
							class="badge badge-pill text-capitalize bg-success-light"
							v-if="
								estimate.status === 'paid' ||
								estimate.status === 'sent' ||
								estimate.status === 'viewed' ||
								estimate.status === 'accepted'
							"
							>{{ estimate.status }}</span
						>
						<span
							class="badge badge-pill text-capitalize bg-warning-light"
							v-else-if="
								estimate.status === 'draft' ||
								estimate.status === 'pending' ||
								estimate.status === 'unpaid' ||
								estimate.status === 'recurring' ||
								estimate.status === 'partially_paid'
							"
							>{{
								estimate.status === "partially_paid"
									? "Partially paid"
									: estimate.status
							}}</span
						>
						<span
							class="badge badge-pill text-capitalize bg-danger-light"
							v-else-if="
								estimate.status === 'expired' ||
								estimate.status === 'rejected' ||
								estimate.status === 'refunded' ||
								estimate.status === 'overdue'
							"
							>{{ estimate.status }}</span
						>
					</td>
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
			<p v-if="estimates.meta">
				Showing {{ estimates.data.length }} of
				{{ estimates.meta.total }} estimates
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
	import { useCurrency } from "../../../../assets/composables/currency";

	const store = useStore();
	const route = useRoute();
	const currentPage = ref(1);
	const perPage = ref(50);
	const search = ref("");
	const isFetching = ref(false);
	const length = ref(null);

	watch(search, (newValue) => {
		getEstimates(newValue);
	});

	watch(perPage, (newValue) => {
		perPage.value = newValue;
		getEstimates();
	});

	const estimates = computed(() => {
		return store.getters["users/userestimates"];
	});

	const getEstimates = (keyword = "") => {
		isFetching.value = true;
		let data = {
			id: route.params.id,
			page: currentPage.value,
			per_page: perPage.value,
			query: keyword,
		};
		store
			.dispatch("users/getUserEstimates", data)
			.then(() => {
				isFetching.value = false;
				length.value = estimates.value.data.length;
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
		getEstimates();
	};

	const nextPage = () => {
		if (pageNumbers.length > 1) {
			currentPage.value++;
			getEstimates();
		}
	};

	const previousPage = () => {
		if (currentPage.value != 1) {
			currentPage.value--;
			getEstimates();
		}
	};

	const pageNumbers = computed(() => {
		const pageNumbers = [];
		for (let i = 1; i <= total.value; i++) {
			pageNumbers.push(i);
		}
		if (pageNumbers.length > 10) {
			return pageNumbers.splice(0, 10);
		} else {
			return pageNumbers;
		}
	});
	// Pagination End

	onMounted(() => {
		getEstimates();
	});
</script>

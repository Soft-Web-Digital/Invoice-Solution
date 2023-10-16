<template>
	<!-- Main Wrapper -->
	<div class="main-wrapper">
		<layout-header></layout-header>
		<layout-sidebar></layout-sidebar>

		<!-- Notification -->
		<div
			v-if="store.state.transaction.error"
			style="
				width: fit-content;
				position: fixed;
				right: 10px;
				top: 5px;
				z-index: 9999;
			"
			class="alert alert-danger alert-dismissible fade show pb-2 text-sm"
			role="alert"
		>
			<p>{{ store.state.transaction.error }}</p>
			<button
				type="button"
				class="btn-close"
				data-bs-dismiss="alert"
				aria-label="Close"
			></button>
		</div>
		<div
			v-if="store.state.transaction.message"
			style="
				width: fit-content;
				position: fixed;
				right: 10px;
				top: 5px;
				z-index: 9999;
			"
			class="alert alert-success alert-dismissible fade show pb-2 text-sm"
			role="alert"
		>
			<p>{{ store.state.transaction.message }}</p>
			<button
				type="button"
				class="btn-close"
				data-bs-dismiss="alert"
				aria-label="Close"
			></button>
		</div>
		<!-- Notification end -->

		<!-- Page Wrapper -->
		<div class="page-wrapper">
			<div class="content container-fluid">
				<!-- Page Header -->
				<div class="page-header">
					<div class="row align-items-center">
						<div class="col">
							<h3 class="page-title">All Transactions</h3>
							<ul class="breadcrumb">
								<li class="breadcrumb-item">
									<router-link to="/">Dashboard</router-link>
								</li>
								<li class="breadcrumb-item active">All Transactions</li>
							</ul>
						</div>
						<div class="col-auto">
							<!-- <router-link to="/add-payments" class="btn btn-primary me-2">
                <i class="fas fa-plus"></i>
              </router-link> -->
							<a
								class="btn btn-primary filter-btn"
								href="javascript:void(0);"
								@click="toggleFilter"
								id="filter_search"
							>
								<i class="fas fa-filter"></i>
							</a>
						</div>
					</div>
				</div>

				<div v-if="filter" class="card filter-card">
					<div class="card-body pb-0">
						<div class="row">
							<!-- <div class="col-sm-6 col-md-3">
								<div class="form-group">
									<label>Date</label>
									<input type="text" class="form-control" />
								</div>
							</div> -->
							<!-- <div class="col-sm-6 col-md-3">
								<div class="form-group">
									<label>Status</label>
									<vue-select :options="paymentfilter" />
								</div>
							</div> -->
							<div class="col-sm-6 col-md-3">
								<div class="form-group">
									<label>Type</label>
									<vue-select
										:options="paymentfilter"
										placeholder="Select an option"
										v-model="searchForm.type"
									/>
								</div>
							</div>
							<!-- <div class="col-sm-6 col-md-3">
								<div class="form-group">
									<label>Method</label>
									<vue-select :options="paymentfilter" />
								</div>
							</div> -->
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-sm-12">
						<div class="card card-table">
							<div class="card-body">
								<div class="table-responsive">
									<div
										class="d-flex align-items-center justify-content-between p-4"
									>
										<div>
											<span>Show</span>
											<select class="mx-1 py-1" v-model="perPage" name="" id="">
												<option value="50">50</option>
												<option value="100">100</option>
												<option value="200">200</option>
												<option value="500">500</option>
											</select>
											<span>transactions</span>
										</div>

										<div>
											<input
												type="text"
												class="form-control"
												v-model="searchForm.search"
												placeholder="Search"
											/>
										</div>
									</div>
									<table class="table table-center table-hover datatable">
										<thead class="thead-light">
											<tr>
												<th>#</th>
												<th>Reference ID</th>
												<th>User</th>
												<th>Amount</th>
												<th>Date</th>
												<th>Type</th>
												<th>Method</th>
												<th>Status</th>
												<th class="text-end">Action</th>
											</tr>
										</thead>
										<tbody>
											<tr
												v-for="(item, index) in transactions.data"
												:key="item.id"
											>
												<td>
													{{ index + 1 }}
												</td>
												<td>
													{{ item.reference }}
												</td>
												<td>
													<!-- <h2 class="table-avatar">
													<router-link to="/profile">
														{{ item.customer_name }}</router-link
													>
													</h2> -->
												</td>
												<td>{{ `${item.currency} ${item.amount}` }}</td>
												<td>
													{{ formatted(item.created_at) }}
												</td>
												<td class="text-capitalize">{{ item.type }}</td>
												<td class="text-capitalize">
													{{ item.method }}
												</td>
												<td>
													<span
														class="badge badge-pill text-capitalize"
														:class="{
															'bg-warning': item.status == 'pending',
															'bg-danger': item.status == 'declined',
															'bg-success-light': item.status == 'approved',
														}"
														>{{ item.status }}</span
													>
												</td>
												<td class="text-center">
													<div class="dropdown dropdown-action">
														<a
															:disabled="
																item.status === 'declined' ||
																item.status === 'approved'
															"
															class="action-icon dropdown-toggle"
															data-bs-toggle="dropdown"
															aria-expanded="false"
															><i class="fas fa-ellipsis-h"></i
														></a>
														<div
															class="dropdown-menu dropdown-menu-right"
															style="width: fit-content"
														>
															<a
																class="dropdown-item"
																v-if="item.status == 'pending'"
																href="javascript:void(0);"
																@click="approveTransaction(item.id)"
																><i class="far fa-check-circle me-2"></i>
																Approve</a
															>
															<a
																class="dropdown-item"
																v-if="item.status == 'pending'"
																href="javascript:void(0);"
																@click="declineTransaction(item.id)"
																><i class="far fa-times-circle me-2"></i>
																Decline</a
															>
														</div>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
									<div
										v-if="isFetching"
										class="d-flex my-5 align-items-center justify-content-center"
									>
										Loading
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
										<p v-if="transactions.meta">
											Showing {{ transactions.data.length }} of
											{{ transactions.meta.total }} transactions
										</p>
										<div>
											<ul class="pagination mb-4">
												<li
													class="page-item"
													@click="previousPage"
													:class="{ disabled: currentPage == 1 }"
												>
													<a class="page-link" tabindex="-1">Previous</a>
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
													<a class="page-link">{{ pageNumber }}</a>
												</li>
												<li class="page-item" @click="nextPage">
													<a class="page-link">Next</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /Page Wrapper -->
	</div>
	<!-- /Main Wrapper -->
</template>

<script setup>
	import { ref, onMounted, computed, watch } from "vue";
	import { useStore } from "vuex";
	import { formatted } from "../../../assets/composables/date";

	const store = useStore();
	const filter = ref(false);
	const currentPage = ref(1);
	const perPage = ref(50);
	const isFetching = ref(false);
	const length = ref(null);

	const searchForm = ref({
		search: "",
		type: "",
	});

	watch(
		() => searchForm.value,
		(newValue) => {
			let data = {
				page: currentPage.value,
				per_page: perPage.value,
				type: newValue.type === "All" ? "" : newValue.type.toLowerCase(),
				query: newValue.search,
			};
			store.dispatch("transaction/getTransactions", data);
		},
		{ deep: true }
	);

	const toggleFilter = () => {
		filter.value = !filter.value;
	};

	watch(perPage, (newValue) => {
		perPage.value = newValue;
		getTransactions();
	});

	const paymentfilter = ["All", "Deposit", "Withdrawal", "Others"];

	const transactions = computed(() => {
		return store.getters["transaction/transactions"];
	});

	const getTransactions = () => {
		isFetching.value = true;
		let data = {
			page: currentPage.value,
			per_page: perPage.value,
			type: "",
			query: "",
		};
		store
			.dispatch("transaction/getTransactions", data)
			.then(() => {
				isFetching.value = false;
				length.value = transactions.value.data.length;
			})
			.catch(() => {
				isFetching.value = false;
			});
	};

	const approveTransaction = (id) => {
		store.dispatch("transaction/approveTransaction", id).then(() => {
			getTransactions();
		});
	};
	const declineTransaction = (id) => {
		store.dispatch("transaction/declineTransaction", id).then(() => {
			getTransactions();
		});
	};

	// Pagination start
	const total = computed(() => {
		return store.getters["transaction/total"];
	});

	const setPage = (pageNumber) => {
		currentPage.value = pageNumber;
		getTransactions();
	};

	const nextPage = () => {
		currentPage.value++;
		getTransactions();
	};

	const previousPage = () => {
		if (currentPage.value != 1) {
			currentPage.value--;
			getTransactions();
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
		getTransactions();
	});
</script>

<template>
	<!-- Main Wrapper -->
	<div class="main-wrapper">
		<layout-header></layout-header>
		<layout-sidebar></layout-sidebar>

		<!-- Page Wrapper -->
		<div class="page-wrapper">
			<div class="content container-fluid">
				<!-- Page Header -->
				<div class="page-header">
					<div class="row align-items-center">
						<div class="col">
							<h3 class="page-title">Subscriptions</h3>
							<ul class="breadcrumb">
								<li class="breadcrumb-item">
									<router-link to="/">Dashboard</router-link>
								</li>
								<li class="breadcrumb-item active">Subscriptions</li>
							</ul>
						</div>
						<div class="col-auto">
							<!-- <div class="btn btn-primary me-4">
								<router-link
									class="text-white"
									:to="{ name: 'addsubscriptions' }"
								>
									<i data-feather="plus-circle"></i> Add New Plan
								</router-link>
							</div> -->
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
							<div class="col-sm-6 col-md-3">
								<div class="form-group">
									<label>Date</label>
									<input type="text" class="form-control" />
								</div>
							</div>
							<div class="col-sm-6 col-md-3">
								<div class="form-group">
									<label>Status</label>
									<vue-select :options="paymentfilter" />
								</div>
							</div>
							<div class="col-sm-6 col-md-3">
								<div class="form-group">
									<label>Type</label>
									<vue-select :options="paymentfilter" />
								</div>
							</div>
							<div class="col-sm-6 col-md-3">
								<div class="form-group">
									<label>Method</label>
									<vue-select :options="paymentfilter" />
								</div>
							</div>
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
											<span>subscriptions</span>
										</div>

										<div>
											<input
												type="text"
												class="form-control"
												placeholder="Search"
											/>
										</div>
									</div>
									<table class="table table-center table-hover datatable">
										<thead class="thead-light">
											<tr>
												<th>#</th>
												<th>Plan</th>
												<th>Amount</th>
												<th>Discount</th>
												<th>Duration</th>
												<!-- <th>Action</th> -->
											</tr>
										</thead>
										<tbody>
											<tr
												v-for="(item, index) in subscriptions.data"
												:key="item.id"
											>
												<td>{{ index + 1 }}</td>
												<td>{{ item.name }}</td>
												<td>
													{{
														`NGN ${item.amount_ngn} (USD ${item.amount_usd})`
													}}
												</td>
												<td>1%</td>
												<td>
													<span
														class="text-capitalize"
														v-if="item.duration === 'unlimited'"
													>
														{{ item.duration }}
													</span>
													<span v-else-if="item.duration === 1">
														{{ `${item.duration} month` }}
													</span>
													<span v-else> 1 year </span>
												</td>
												<!-- <td>
													<div class="dropdown dropdown-action">
														<a
															href="javascript:void(0)"
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
																href="javascript:void(0);"
																><i class="fa fa-edit me-2"></i> Edit</a
															>
															<a
																class="dropdown-item"
																href="javascript:void(0);"
																><i class="fa fa-trash me-2"></i> Delete</a
															>
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
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /Page Wrapper -->

		<!-- Add Invoices Items Modal -->
		<div
			class="modal custom-modal fade bank-details"
			id="add_items"
			role="dialog"
		>
			<div class="modal-dialog modal-dialog-centered modal-lg">
				<div class="modal-content">
					<div class="modal-header">
						<div class="form-header text-start mb-0">
							<h4 class="mb-0">Create New Plan</h4>
						</div>
						<button
							type="button"
							class="close"
							data-bs-dismiss="modal"
							aria-label="Close"
						>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="bank-inner-details">
							<div class="row">
								<div class="col-lg-6 col-md-6">
									<div class="form-group">
										<label>Item Name</label>
										<input
											type="text"
											class="form-control"
											placeholder="Add New Item"
										/>
									</div>
								</div>
								<div class="col-lg-6 col-md-6">
									<div class="form-group">
										<label>Category</label>
										<vue-select
											:options="category"
											placeholder="Select category"
										/>
									</div>
								</div>
								<div class="col-lg-6 col-md-6">
									<div class="form-group">
										<label>Price Per unit</label>
										<input type="text" class="form-control" placeholder="$" />
									</div>
								</div>
								<div class="col-lg-6 col-md-6">
									<div class="form-group">
										<label>Discount</label>
										<input type="text" class="form-control" placeholder="%" />
									</div>
								</div>
								<div class="col-lg-12 col-md-12">
									<div class="form-group">
										<label>Description (Optional) </label>
										<textarea
											class="form-control"
											placeholder="Add item description"
										></textarea>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<div class="bank-details-btn">
							<a
								href="javascript:void(0);"
								data-bs-dismiss="modal"
								class="btn bank-cancel-btn me-2"
								>Cancel</a
							>
							<a href="javascript:void(0);" class="btn bank-save-btn"
								>Save Item</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /Add Items Modal -->

		<!-- Delete Items Modal -->
		<!-- <div
      class="modal custom-modal fade"
      id="delete_paid"
      tabindex="-1"
      role="dialog"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <div class="form-header">
              <h3>Delete Subscription Plan</h3>
              <p>Are you sure want to delete?</p>
            </div>
            <div class="modal-btn delete-action">
              <div class="row">
                <div class="col-6">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-primary paid-continue-btn"
                    >Delete</a
                  >
                </div>
                <div class="col-6">
                  <a
                    href="javascript:void(0);"
                    data-bs-dismiss="modal"
                    @click="closeModal"
                    id="cancel"
                    class="btn btn-primary paid-cancel-btn"
                    >Cancel</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
		<!-- /Delete Items Modal -->
	</div>
	<!-- /Main Wrapper -->
</template>

<script setup>
	import { ref, onMounted, computed, watch } from "vue";
	import { useStore } from "vuex";
	import { useCurrency } from "../../assets/composables/currency";

	const store = useStore();
	const filter = ref(false);
	const currentPage = ref(1);
	const perPage = ref(50);
	const isFetching = ref(false);
	const length = ref(null);

	const toggleFilter = () => {
		filter.value = !filter.value;
	};

	watch(perPage, (newValue) => {
		perPage.value = newValue;
		getSubscriptions();
	});

	const paymentfilter = ["Payment Mode", "Cash", "Cheque", "Card", "Online"];

	const subscriptions = computed(() => {
		return store.getters["subscription/subscriptions"];
	});

	const getSubscriptions = () => {
		isFetching.value = true;
		let data = {
			page: currentPage.value,
			per_page: perPage.value,
			query: "",
		};
		store.dispatch("subscription/getSubscriptions", data);
		store
			.dispatch("users/getUsers", data)
			.then(() => {
				isFetching.value = false;
				length.value = subscriptions.value.data.length;
			})
			.catch(() => {
				isFetching.value = false;
			});
	};

	// Pagination start
	const total = computed(() => {
		return store.getters["subscription/total"];
	});

	const setPage = (pageNumber) => {
		currentPage.value = pageNumber;
		getSubscriptions();
	};

	const nextPage = () => {
		currentPage.value++;
		getSubscriptions();
	};

	const previousPage = () => {
		if (currentPage.value != 1) {
			currentPage.value--;
			getSubscriptions();
		}
	};

	const pageNumbers = computed(() => {
		const pageNumbers = [];
		for (let i = 1; i <= total.value; i++) {
			pageNumbers.push(i);
		}
		if (pageNumbers.length > 10) {
			return pageNumbers.splice(0, 10);
		}

		return pageNumbers;
	});
	// Pagination End

	onMounted(() => {
		getSubscriptions();
	});

	const open = () => {
		console.log("babz");
		$("#delete_paid").modal("dispose");
	};
</script>

<template>
	<div class="card bg-white">
		<div class="card-body pt-0">
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
						<span>subscriptions</span>
					</div>

					<div>
						<input type="text" class="form-control" placeholder="Search" />
					</div>
				</div>
				<table class="table table-stripped table-center table-hover datatable">
					<thead class="thead-light">
						<tr>
							<th>#</th>
							<th>Plan</th>
							<th>Duration</th>
							<th>Amount</th>
							<th>Date Created</th>
							<th>Due Date</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody v-if="subscriptions.data && subscriptions.data.length > 0">
						<tr
							v-for="(subscription, index) in subscriptions.data"
							:key="subscription.id"
						>
							<td>{{ index + 1 }}</td>
							<td class="text-capitalize">
								{{ subscription.plan.name }}
							</td>
							<td>
								<span
									class="text-capitalize"
									v-if="subscription.plan.duration === 'unlimited'"
								>
									{{ subscription.plan.duration }}
								</span>
								<span v-else-if="subscription.plan.duration === 1">
									{{ `${subscription.plan.duration} month` }}
								</span>
								<span v-else> 1 year </span>
							</td>
							<td>
								{{
									`NGN ${subscription.plan.amount_ngn} (USD ${subscription.plan.amount_usd})`
								}}
							</td>
							<td>{{ formatted(subscription.starts_at) }}</td>
							<td>{{ formatted(subscription.ends_at) }}</td>
							<td>
								<span
									class="badge badge-pill text-capitalize bg-success-light"
									v-if="subscription.status === 'active'"
									>{{ subscription.status }}</span
								>
								<span
									class="badge badge-pill text-capitalize bg-danger-light"
									v-else-if="
										subscription.status === 'inactive' ||
										subscription.status === 'cancelled'
									"
									>{{ subscription.status }}</span
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
				<!-- <div
      v-if="!isFetching && length !== 0"
      class="d-flex align-items-center justify-content-between p-4"
    >
      <p v-if="subscriptions.meta">
        Showing {{ subscriptions.data.length }} of
        {{ subscriptions.meta.total }} estimates
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
    </div> -->
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
		Search(newValue);
	});

	const Search = (keyword) => {
		let data = {
			page: currentPage.value,
			per_page: perPage.value,
			query: keyword,
		};
		store.dispatch("users/getUserSubscriptions", data);
	};

	watch(perPage, (newValue) => {
		perPage.value = newValue;
		getSubscriptions();
	});

	const subscriptions = computed(() => {
		return store.getters["users/usersubscriptions"];
	});

	const getSubscriptions = () => {
		isFetching.value = true;
		let data = {
			id: route.params.id,
			page: currentPage.value,
			per_page: perPage.value,
			query: "",
		};
		store
			.dispatch("users/getUserSubscriptions", data)
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
		return store.getters["users/total"];
	});

	const setPage = (pageNumber) => {
		currentPage.value = pageNumber;
		getEstimates();
	};

	const nextPage = () => {
		if (pageNumbers.length > 1) {
			currentPage.value++;
			getSubscriptions();
		}
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
		} else {
			return pageNumbers;
		}
	});
	// Pagination End

	onMounted(() => {
		getSubscriptions();
	});
</script>

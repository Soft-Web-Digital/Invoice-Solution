<template>
  <div class="table-responsive">
    <div class="d-flex align-items-center justify-content-between p-4">
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
        <input type="text" class="form-control" placeholder="Search" />
      </div>
    </div>
    <table class="table table-stripped table-center table-hover datatable">
      <thead class="thead-light">
        <tr>
          <th>#</th>
          <th>Reference ID</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Type</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(transaction, index) in transactions.data"
          :key="transaction.id"
        >
          <td>{{ index + 1 }}</td>
          <td>
            {{ transaction.reference }}
          </td>
          <td>{{ useCurrency(transaction.amount) }}</td>
          <td>{{ formatted(transaction.created_at) }}</td>
          <td class="text-capitalize">{{ transaction.type }}</td>
          <td>
            <span
              class="badge badge-pill text-capitalize bg-success-light"
              v-if="transaction.status === 'approved'"
              >{{ transaction.status }}</span
            >
            <span
              class="badge badge-pill text-capitalize bg-warning-light"
              v-else-if="transaction.status === 'pending'"
              >{{ transaction.status }}</span
            >
            <span
              class="badge badge-pill text-capitalize bg-danger-light"
              v-else-if="transaction.status === 'declined'"
              >{{ transaction.status }}</span
            >
          </td>
        </tr>
      </tbody>
    </table>
    <div
      v-if="length === 0"
      class="d-flex my-5 align-items-center justify-content-center"
    >
      No Data Available
    </div>
    <div
      v-if="length !== 0"
      class="d-flex align-items-center justify-content-between p-4"
    >
      <p v-if="transactions.meta">
        Showing {{ transactions.data.length }} of
        {{ transactions.meta.total }} estimates
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

watch(search, (newValue) => {
  Search(newValue);
});

const Search = (keyword) => {
  let data = {
    page: currentPage.value,
    per_page: perPage.value,
    query: keyword,
  };
  store.dispatch("users/getTransactions", data);
};

watch(perPage, (newValue) => {
  perPage.value = newValue;
  getTransactions();
});

const transactions = computed(() => {
  return store.getters["users/usertransactions"];
});

const length = ref(null);

const getTransactions = () => {
  let data = {
    id: route.params.id,
    page: currentPage.value,
    per_page: perPage.value,
    query: "",
  };
  store.dispatch("users/getUserTransactions", data).then(() => {
    length.value = transactions.value.data.length;
  });
};

// Pagination start
const total = computed(() => {
  return store.getters["users/transactions_total"];
});

const setPage = (pageNumber) => {
  currentPage.value = pageNumber;
  getTransactions();
};

const nextPage = () => {
  if (pageNumbers.length > 1) {
    currentPage.value++;
    getTransactions();
  }
};

const previousPage = () => {
  if (currentPage.value != 1) {
    currentPage.value--;
    getTransactions();
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
  getTransactions();
});
</script>

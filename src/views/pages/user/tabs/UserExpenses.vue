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
        <span>expenses</span>
      </div>

      <div>
        <input type="text" class="form-control" placeholder="Search" />
      </div>
    </div>
    <table class="table table-stripped table-center table-hover datatable">
      <thead class="thead-light">
        <tr>
          <th>#</th>
          <th>Customer</th>
          <th>Amount</th>
          <th>Date Created</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(expense, index) in expenses.data" :key="expense.id">
          <td>{{ index + 1 }}</td>

          <td>{{ expense.customer.name }}</td>
          <td>{{ useCurrency(expense.amount) }}</td>
          <td>{{ formatted(expense.created_at) }}</td>
          <td>
            <span
              class="badge badge-pill text-capitalize bg-success-light"
              v-if="
                expense.status === 'paid' ||
                expense.status === 'sent' ||
                expense.status === 'viewed' ||
                expense.status === 'accepted'
              "
              >{{ expense.status }}</span
            >
            <span
              class="badge badge-pill text-capitalize bg-warning-light"
              v-else-if="
                expense.status === 'draft' ||
                expense.status === 'pending' ||
                expense.status === 'unpaid' ||
                expense.status === 'recurring' ||
                expense.status === 'partially_paid'
              "
              >{{
                expense.status === "partially_paid"
                  ? "Partially paid"
                  : expense.status
              }}</span
            >
            <span
              class="badge badge-pill text-capitalize bg-danger-light"
              v-else-if="
                expense.status === 'expired' ||
                expense.status === 'rejected' ||
                expense.status === 'refunded' ||
                expense.status === 'overdue'
              "
              >{{ expense.status }}</span
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
      <p v-if="expenses.meta">
        Showing {{ expenses.data.length }} of {{ expenses.meta.total }} expenses
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
  store.dispatch("users/getUserExpenses", data);
};

watch(perPage, (newValue) => {
  perPage.value = newValue;
  getExpenses();
});

const expenses = computed(() => {
  return store.getters["users/userexpenses"];
});

const length = ref(null);

const getExpenses = () => {
  let data = {
    id: route.params.id,
    page: currentPage.value,
    per_page: perPage.value,
    query: "",
  };
  store.dispatch("users/getUserExpenses", data).then(() => {
    length.value = expenses.value.data.length;
  });
};

// Pagination start
const total = computed(() => {
  return store.getters["users/expenses_total"];
});

const setPage = (pageNumber) => {
  currentPage.value = pageNumber;
  getExpenses();
};

const nextPage = () => {
  if (pageNumbers.length > 1) {
    currentPage.value++;
    getExpenses();
  }
};

const previousPage = () => {
  if (currentPage.value != 1) {
    currentPage.value--;
    getExpenses();
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
  getExpenses();
});
</script>

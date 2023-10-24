<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <div class="content container-fluid">
        <div class="row justify-content-center">
          <div class="col-xl-10">
            <!-- Page Header -->
            <div class="page-header">
              <div class="row align-items-center">
                <div class="col">
                  <ul class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a style="cursor: pointer" @click="$router.go(-1)"
                        ><i data-feather="chevron-left" class="mb-1"></i>Back</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <div class="invoice-item mb-4">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="invoice-logo">
                        <img src="../../../assets/img/logo.png" alt="logo" />
                      </div>
                    </div>
                    <div class="col-md-6 des">
                      <h2 class="my-0">{{ invoice.invoice_id }}</h2>
                      <p class="invoice-details">
                        {{ invoice.description }}
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Invoice Item -->
                <div class="invoice-item">
                  <div class="row" v-if="user">
                    <div class="col-md-5">
                      <div class="invoice-info">
                        <strong class="customer-text">Invoice From</strong>
                        <p class="invoice-details invoice-details-two">
                          {{ user.name }} <br />
                          {{ user.email }} <br />
                          {{ user.phone }} <br v-if="user.phone" />
                          {{ user.address }} <br v-if="user.address" />
                          {{ user.state }} {{ user.country }}
                        </p>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="invoice-info">
                        <strong class="customer-text">Invoice To</strong>
                        <p class="invoice-details invoice-details-two">
                          {{ invoice.customer.name }} <br />
                          {{ invoice.customer.email }} <br />
                          {{
                            `${invoice.customer.country_code}${invoice.customer.phone}`
                          }}
                          <br v-if="invoice.customer.phone" />
                          {{ invoice.customer.address }}
                          <br v-if="invoice.customer.address" />
                          {{ invoice.customer.state }}
                          {{ invoice.customer.country }}
                        </p>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="invoice-info">
                        <p
                          class="invoice-details-two stat invoice-details text-capitalize"
                        >
                          Status<br />
                          <span
                            class="invoice-status text-success"
                            v-if="
                              invoice.status === 'paid' ||
                              invoice.status === 'sent' ||
                              invoice.status === 'viewed' ||
                              invoice.status === 'accepted'
                            "
                            >{{ invoice.status }}</span
                          >
                          <span
                            class="invoice-status text-warning"
                            v-else-if="
                              invoice.status === 'draft' ||
                              invoice.status === 'pending' ||
                              invoice.status === 'unpaid' ||
                              invoice.status === 'recurring'
                            "
                            >{{ invoice.status }}</span
                          >
                          <span
                            class="invoice-status text-warning"
                            v-else-if="invoice.status === 'partially_paid'"
                            >Partially paid</span
                          >
                          <span
                            class="invoice-status text-danger"
                            v-else-if="
                              invoice.status === 'expired' ||
                              invoice.status === 'rejected' ||
                              invoice.status === 'refunded' ||
                              invoice.status === 'overdue'
                            "
                            >{{ invoice.status }}</span
                          >
                          <br />
                          Date<br /><strong v-if="invoice.date">{{
                            formatDateToDigits(invoice.date)
                          }}</strong>
                          <br />
                          Due on<br /><strong v-if="invoice.due_date">{{
                            formatDateToDigits(invoice.due_date)
                          }}</strong>
                          <br />
                          Amount<br /><strong
                            >{{ invoice.currency.slice(0, 3) }}
                            {{ addCurrencyComma(invoice.total_amount) }}</strong
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- /Invoice Item -->
                <hr class="mt-0" />
                <!-- Invoice Item -->
                <!-- <div class="invoice-item">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="invoice-info">
                        <strong class="customer-text">Payment Method</strong>
                        <p class="invoice-details invoice-details-two">
                          Debit Card <br />
                          XXXXXXXXXXXX-2541 <br />
                          HDFC Bank<br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div> -->
                <!-- /Invoice Item -->

                <!-- Invoice Item -->
                <div class="invoice-item invoice-table-wrap">
                  <h5>Items</h5>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="table-responsive">
                        <table class="invoice-table table table-border mb-0">
                          <thead>
                            <tr>
                              <th class="w-75">Items</th>
                              <th class="text-end">Quantity</th>
                              <th class="text-end">Price</th>
                              <th class="text-end">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="w-50">UI/UX Designing</td>
                              <td class="text-end">2</td>
                              <td class="text-end">$200</td>
                              <td class="text-end">$400</td>
                            </tr>
                            <tr>
                              <td class="w-50">Website Development</td>
                              <td class="text-end">1</td>
                              <td class="text-end">$900</td>
                              <td class="text-end">$900</td>
                            </tr>
                            <tr>
                              <td class="w-50">SEO Services</td>
                              <td class="text-end">5</td>
                              <td class="text-end">$100</td>
                              <td class="text-end">$500</td>
                            </tr>
                            <tr>
                              <td
                                colspan="3"
                                class="text-end text-muted border-bottom-0"
                              >
                                Subtotal
                              </td>
                              <td class="text-end border-bottom-0">$1,800</td>
                            </tr>
                            <tr>
                              <td
                                colspan="3"
                                class="text-end text-muted border-bottom-0"
                              >
                                Tax
                              </td>
                              <td class="text-end border-bottom-0">$200</td>
                            </tr>
                            <tr>
                              <td colspan="3" class="text-end text-muted">
                                Discount (11%)
                              </td>
                              <td class="text-end">$100</td>
                            </tr>
                          </tbody>
                          <tfoot class="border-bottom border-1">
                            <tr>
                              <th colspan="3" class="text-end font-weight-600">
                                Total
                              </th>
                              <th class="text-end font-weight-600">$2,000</th>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- /Invoice Item -->

                <div class="invoice-sign text-end pb-5">
                  <img
                    v-if="invoice.signature"
                    class="img-fluid d-inline-block"
                    :src="invoice.signature"
                    alt="sign"
                  />
                  <span class="d-block">{{ invoice.signatory_name }}</span>
                </div>
                <hr v-if="invoice.terms" />
                <div class="invoice-terms" v-if="invoice.terms">
                  <h6>Terms and Conditions</h6>
                  <p class="mb-0" v-html="invoice.terms"></p>
                </div>
                <hr v-if="invoice.notes" />
                <div class="invoice-terms" v-if="invoice.notes">
                  <h6>Note</h6>
                  <p class="mb-0" v-html="invoice.notes"></p>
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
import { useRoute } from "vue-router";
import {
  formatted,
  formatDateToDigits,
} from "../../../assets/composables/date";
import { addCurrencyComma } from "../../../assets/composables/currency";

const store = useStore();
const route = useRoute();

const user = computed(() => store.getters["users/user"]);

const invoice = computed(() => {
  return store.getters["users/invoice"];
});

const getInvoice = () => {
  let data = {
    user_id: route.params.user_id,
    id: route.params.id,
  };
  store.dispatch("users/getUser", route.params.user_id);
  store.dispatch("users/getInvoice", data);
};

onMounted(() => {
  getInvoice();
});
</script>

<style scoped>
.invoice-info .stat,
.des {
  text-align: end;
}

@media screen and (max-width: 960px) {
  .invoice-info .stat,
  .des {
    text-align: start;
  }
}
</style>

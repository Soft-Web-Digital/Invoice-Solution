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
                      <div class="invoice-logo" v-if="user.settings">
                        <img :src="user.settings.business_logo" alt="logo" />
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
                  <div class="row">
                    <div class="col-md-5">
                      <div class="invoice-info" v-if="user">
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
                      <div class="invoice-info" v-if="invoice.customer">
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
                      <div class="invoice-info" v-if="invoice.customer">
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
                  <div class="row">
                    <div class="col-md-12">
                      <div class="table-responsive">
                        <table class="invoice-table table table-border mb-0">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Product / Service</th>
                              <th>Quantity</th>
                              <th>Price</th>
                              <th>Discount</th>
                              <th class="text-end">Amount</th>
                            </tr>
                          </thead>
                          <tbody v-if="invoice.items">
                            <tr
                              v-for="(item, index) in invoice.items"
                              :key="index"
                            >
                              <td>{{ index + 1 }}</td>
                              <td>{{ item.name }}</td>
                              <td>{{ item.quantity }}</td>
                              <td>
                                {{ invoice.currency.slice(0, 3) }}
                                {{ addCurrencyComma(item.price) }}
                              </td>
                              <td>{{ item.discount }}%</td>
                              <td class="text-end">
                                {{ invoice.currency.slice(0, 3) }}
                                {{ addCurrencyComma(item.amount) }}
                              </td>
                            </tr>
                            <tr v-if="invoice">
                              <td
                                colspan="5"
                                class="text-end text-muted border-bottom-0"
                              >
                                Taxable Amount
                              </td>
                              <td class="text-end border-bottom-0">
                                {{ invoice.currency.slice(0, 3) }}
                                {{ addCurrencyComma(invoice.amount) }}
                              </td>
                            </tr>
                            <tr>
                              <td
                                colspan="5"
                                class="text-end text-muted border-bottom-0"
                              >
                                Discount
                              </td>
                              <td class="text-end border-bottom-0">
                                {{ invoice.currency.slice(0, 3) }}
                                {{ totalProductDiscount.toFixed(2) }}
                              </td>
                            </tr>
                            <tr v-if="invoice.tax_enabled === 1">
                              <td colspan="5" class="text-end text-muted">
                                {{ `VAT(${invoice.tax_percentage}%)` }}
                              </td>
                              <td class="text-end">
                                {{ invoice.currency.slice(0, 3) }}
                                {{ addCurrencyComma(vat) }}
                              </td>
                            </tr>
                            <tr
                              v-for="(discount, index) in invoice.more_discount"
                              :key="index"
                            >
                              <td colspan="5" class="text-end text-muted">
                                {{ discount.description }}
                              </td>
                              <td class="text-end">
                                - {{ invoice.currency.slice(0, 3) }}
                                {{ addCurrencyComma(discount.value) }}
                              </td>
                            </tr>
                            <tr
                              v-for="(
                                charge, index
                              ) in invoice.additional_charges"
                              :key="index"
                            >
                              <td colspan="5" class="text-end text-muted">
                                {{ charge.description }}
                              </td>
                              <td class="text-end">
                                + {{ invoice.currency.slice(0, 3) }}
                                {{ addCurrencyComma(charge.value) }}
                              </td>
                            </tr>
                          </tbody>
                          <tr class="border-bottom border-top mt-4">
                            <th class="text-muted" v-if="invoice.items">
                              Total Items : {{ invoice.items.length }}
                            </th>
                            <th colspan="4" class="text-end font-weight-600">
                              <h4>Total Amount</h4>
                            </th>
                            <th class="text-end font-weight-600">
                              <h4 v-if="invoice.currency">
                                {{ invoice.currency.slice(0, 3) }}
                                {{ addCurrencyComma(invoice.total_amount) }}
                              </h4>
                            </th>
                          </tr>
                          <tr v-if="invoice.amount_paid != 0">
                            <th colspan="5" class="text-end font-weight-600">
                              Amount Paid
                            </th>
                            <th
                              v-if="invoice.currency"
                              class="text-end font-weight-600"
                            >
                              {{ invoice.currency.slice(0, 3) }}
                              {{ addCurrencyComma(invoice.amount_paid) }}
                            </th>
                          </tr>
                          <tr class="border-bottom">
                            <th colspan="5" class="text-end font-weight-600">
                              Balance
                            </th>
                            <th
                              v-if="invoice.currency"
                              class="text-end font-weight-600"
                            >
                              {{ invoice.currency.slice(0, 3) }}
                              {{ addCurrencyComma(invoice.amount_due) }}
                            </th>
                          </tr>
                          <tr class="border-bottom">
                            <th colspan="6" class="text-muted">
                              Total Amount ( in words ):
                              <span
                                style="
                                  margin-left: 2px;
                                  color: black;
                                  text-transform: capitalize;
                                "
                                v-if="invoice.total_amount"
                              >
                                {{
                                  amountToWords(
                                    invoice.total_amount,
                                    invoice.currency
                                  )
                                }}
                              </span>
                            </th>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- /Invoice Item -->

                <div class="invoice-sign text-end py-0">
                  <span class="d-block">{{ invoice.signatory_name }}</span>
                  <img
                    v-if="invoice.signature"
                    class="img-fluid d-inline-block"
                    :src="invoice.signature"
                    alt="sign"
                  />
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
import {
  addCurrencyComma,
  amountToWords,
} from "../../../assets/composables/currency";

const store = useStore();
const route = useRoute();
const totalCharges = ref(0);
const totalDiscount = ref(0);
const totalAmount = ref(0);
const tax_percentage = ref(0);
const vat = ref(0);
const totalProductDiscount = ref(0);

const user = computed(() => store.getters["users/user"]);

const invoice = computed(() => {
  return store.getters["users/invoice"];
});

const calculateCharges = () => {
  let totalcharges = 0;
  totalCharges.value = 0;
  for (let i = 0; i < invoice.value.additional_charges.length; i++) {
    const item = invoice.value.additional_charges[i];
    totalcharges += parseInt(item.value);
  }
  totalCharges.value = totalcharges;
};
const calculateDiscount = () => {
  let totaldiscount = 0;
  totalDiscount.value = 0;
  for (let i = 0; i < invoice.value.more_discount.length; i++) {
    const item = invoice.value.more_discount[i];
    totaldiscount += parseInt(item.value);
  }
  totalDiscount.value = totaldiscount;
};
const calculateTotalAmount = () => {
  // Caalculate Total amount
  let totalproductamount = 0;
  let totalproductdiscount = 0;
  let totalamount = 0;
  for (let i = 0; i < invoice.value.items.length; i++) {
    const item = invoice.value.items[i];
    totalproductamount += item.amount;
    totalproductdiscount += (item.discount / 100) * item.amount;
  }
  totalProductDiscount.value = totalproductdiscount;
  calculateCharges();
  calculateDiscount();
  let T1 = totalproductamount + totalCharges.value;
  let T2 = totalproductdiscount + totalDiscount.value;
  totalamount = T1 - T2;
  // Calculate Tax
  if (invoice.value.tax_enabled === 1) {
    vat.value = (tax_percentage.value * totalamount) / 100;
    totalAmount.value = totalamount + vat.value;
  } else {
    totalAmount.value = totalamount;
  }
};

const getInvoice = () => {
  let data = {
    user_id: route.params.user_id,
    id: route.params.id,
  };
  store.dispatch("users/getUser", route.params.user_id);
  store
    .dispatch("users/getInvoice", data)
    .then(() => {
      tax_percentage.value = invoice.value.tax_percentage;
    })
    .then(() => {
      calculateTotalAmount();
    });
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

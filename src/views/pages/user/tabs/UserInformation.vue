<template>
  <div class="row">
    <div class="col-12 col-md-6 col-lg-5 d-flex" v-if="user">
      <div class="card flex-fill bg-white">
        <img
          v-if="user.image"
          alt="Card Image"
          :src="user.image"
          class="card-img-top"
        />
        <img
          v-else
          alt="Card Image"
          src="../../../../assets/img/img-01.jpg"
          class="card-img-top"
        />
        <div class="card-header">
          <h5 class="card-title mb-0">User Information</h5>
        </div>
        <div class="card-body">
          <p class="card-text">
            <span class="bold_text">Name:</span> {{ user.name }}
          </p>
          <p class="card-text">
            <span class="bold_text">Email:</span> {{ user.email }}
          </p>
          <p class="card-text">
            <span class="bold_text">Phone:</span>
            {{ user.phone ? user.phone : "N/A" }}
          </p>
          <p class="card-text">
            <span class="bold_text">Country:</span>
            {{ user.country ? user.country : "N/A" }}
          </p>
          <p class="card-text">
            <span class="bold_text">State:</span>
            {{ user.state ? user.state : "N/A" }}
          </p>
          <p class="card-text">
            <span class="bold_text">Address:</span>
            {{ user.address ? user.address : "N/A" }}
          </p>
          <p class="card-text">
            <span class="bold_text">Postal code:</span>
            {{ user.postal_code ? user.postal_code : "N/A" }}
          </p>

          <div>
            <span class="bold_text">Referral code:</span>
            <span class="badge badge-soft-primary mx-1 py-2"
              ><p class="card-text" style="font-size: 14px">
                {{ user.referral_code }}
              </p></span
            >
            <span class="ms-2"
              ><button
                @click="copyReferralCode(user.referral_code)"
                type="button"
                class="btn btn-light btn-sm me-1"
              >
                <i class="feather feather-copy"></i></button
            ></span>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="col-12 col-md-6 col-lg-4 d-flex">
      <div class="card flex-fill bg-white">
        <div class="card-header">
          <h5 class="card-title mb-0">Settings</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
      </div>
    </div> -->
    <!-- <div class="col-12 col-md-6 col-lg-4 d-flex">
      <div class="card flex-fill bg-white">
        <div class="card-header">
          <h5 class="card-title mb-0">Invoice Settings</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
      </div>
    </div> -->
  </div>
</template>

<script setup>
import { onMounted, computed, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { formatted } from "../../../../assets/composables/date";

const store = useStore();
const route = useRoute();

// Copy referral code
const copyReferralCode = (code) => {
  if (!navigator.clipboard) {
    return;
  }

  navigator.clipboard
    .writeText(code)
    .then(() => {})
    .catch(() => {});
};

const user = computed(() => {
  return store.getters["users/user"];
});
const settings = computed(() => {
  return store.getters["users/usersettings"];
});

const getUserSettings = () => {
  store.dispatch("users/getUserSettings", route.params.id);
};

onMounted(() => {
  getUserSettings();
});
</script>

<style>
.bold_text {
  font-weight: 500;
}
</style>

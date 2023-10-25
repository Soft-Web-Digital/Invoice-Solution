<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Notification -->
    <div
      v-if="store.state.notification.error"
      class="alert notify-danger alert-dismissible"
      role="alert"
    >
      <p>{{ store.state.notification.error }}</p>
    </div>
    <div
      v-if="store.state.notification.message"
      style="
        width: fit-content;
        position: fixed;
        right: 10px;
        top: 5px;
        z-index: 9999;
      "
      class="alert notify-success alert-dismissible"
      role="alert"
    >
      <p>{{ store.state.notification.message }}</p>
    </div>
    <!-- Notification end -->

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <div class="content container-fluid">
        <div class="page-header">
          <div class="row">
            <div class="col-sm-12">
              <h3 class="page-title">Notifications</h3>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <router-link to="/">Dashboard</router-link>
                </li>
                <li class="breadcrumb-item">
                  <router-link to="/notification">Notifications</router-link>
                </li>
                <li class="breadcrumb-item active">Create Notification</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <form @submit.prevent="Send">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Title</label>
                        <input
                          type="text"
                          v-model="form.subject"
                          class="form-control"
                          required
                        />
                      </div>
                      <div class="form-group">
                        <label>Recipients</label>
                        <v-select
                          v-model="form.recipients"
                          :options="recipients"
                          label="name"
                          :required="true"
                          :reduce="(recipient) => recipient.value"
                        />
                      </div>
                      <div class="form-group">
                        <label>Body</label>
                        <textarea
                          v-model="form.body"
                          class="form-control"
                          required
                        ></textarea>
                      </div>
                      <div class="text-end mt-4">
                        <button
                          class="btn btn-primary"
                          type="submit"
                          :disabled="isLoading"
                        >
                          <span
                            v-if="isLoading"
                            class="spinner-border spinner-border-sm me-1"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          <span v-if="!isLoading">Send</span>
                          <span v-if="isLoading">Sending...</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
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
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const isLoading = ref(false);

const form = ref({
  recipients: "",
  subject: "",
  body: "",
  inapp_notification: true,
});

const recipients = [
  { name: "All Users", value: "all_users" },
  { name: "All Verified Users", value: "all_verified_users" },
];

const openModal = (item) => {
  selectedItem.value = item;
  var myModal = new bootstrap.Modal(document.getElementById("top-modal"), {
    backdrop: "static",
  });
  myModal.show();
};
const closeModal = () => {
  var myModal = document.getElementById("top-modal");
  var modalTrigger = document.querySelector('[data-bs-dismiss="modal"]');
  modalTrigger.setAttribute("data-bs-target", "#" + myModal.id);
  modalTrigger.click();
};

const Send = () => {
  isLoading.value = true;
  store
    .dispatch("notification/createNotification", form.value)
    .then(() => {
      isLoading.value = false;
    })
    .catch(() => {
      isLoading.value = false;
    });
};
</script>

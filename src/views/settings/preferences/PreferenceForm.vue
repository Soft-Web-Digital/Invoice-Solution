<template>

<!-- Form -->
									<form>
										<div class="row form-group">
											<label for="currencyLabel" class="col-sm-3 col-form-label input-label">Currency</label>
											<div class="col-sm-9">
                                             <vue-select :options="currenypreference" />
											</div>
										</div>
										<div class="row form-group">
											<label for="languageLabel" class="col-sm-3 col-form-label input-label">Language</label>
											<div class="col-sm-9">
											<vue-select :options="languagepreference" />
											</div>
										</div>
										<div class="row form-group">
											<label for="timezoneLabel" class="col-sm-3 col-form-label input-label">Time Zone</label>
											<div class="col-sm-9">
											<vue-select :options="timepreference" />
											</div>
										</div>
										<div class="row form-group">
											<label for="dateformat" class="col-sm-3 col-form-label input-label">Date Format</label>
											<div class="col-sm-9">
											<vue-select :options="formatpreference" />
											</div>
										</div>
										<div class="row form-group">
											<label for="financialyear" class="col-sm-3 col-form-label input-label">Financial Year</label>
											<div class="col-sm-9">
											<vue-select :options="financialpreference" />
											</div>
										</div>

										<!-- Toggle Switch -->
										<label class="row form-group toggle-switch" for="preferencesSwitch1">
											<span class="col-8 col-sm-9 toggle-switch-content ml-0">
												<span class="d-block text-dark">Discount Per Item</span>
												<span class="d-block text-muted">Enable this if you want to add Discount to individual invoice items. By default, Discount is added directly to the invoice.</span>
											</span>
											<span class="col-4 col-sm-3">
												<input type="checkbox" class="toggle-switch-input" id="preferencesSwitch1">
												<span class="toggle-switch-label ms-auto">
													<span class="toggle-switch-indicator"></span>
												</span>
											</span>
										</label>
										<!-- /Toggle Switch -->

										<div class="text-end">
											<button type="submit" class="btn btn-primary">Save Changes</button>
										</div>
									</form>
									<!-- /Form -->
</template>
<script>
  import Vue from 'vue'
  export default {
     data() {
    return {
      currenypreference: ["USD - US Dollar", "GBP - British Pound", "EUR - Euro", "INR - Indian Rupee", "AUD - Australian Dollar"],
      languagepreference: ["English", "French", "German", "Italian", 'Spanish'],
      timepreference: ["English", "French", "German", "Italian", 'Spanish'],
      formatpreference: ["2020 Nov 09", "09 Nov 2020", "09/11/2020", "09/11/2020", '09/11/2020'],
      financialpreference: ["anuary-december", "february-january", "march-february", "april-march", "may-april", "june-may", "july-june", "august-july", "september-august", "october-september", "november-october", "december-novembe"]

    }
    },
    components: {
   
    },
    mounted() {
    }
  }
</Script>
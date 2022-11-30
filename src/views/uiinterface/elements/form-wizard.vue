<template>
    <!-- Main Wrapper -->
    <div class="main-wrapper">
        <layout-header></layout-header>
        <layout-sidebar></layout-sidebar>
        
        <!-- Page Wrapper -->
        <div class="page-wrapper">
            <div class="content container-fluid">
                <formwizardheader></formwizardheader>
                <div class="row">
					
                    <!-- Lightbox -->
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title mb-0">Basic Wizard</h4>
                            </div>
                            <div class="card-body">
                                <div id="basic-pills-wizard" class="twitter-bs-wizard">
                                    <ul class="twitter-bs-wizard-nav nav nav-pills nav-justified">
                                        <li class="nav-item">
                                            <a href="#seller-details" class="nav-link active" data-toggle="tab">
                                                <div class="step-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-original-title="Seller Details">
                                                    <i class="fa fa-user"></i>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#company-document" class="nav-link" data-toggle="tab">
                                                <div class="step-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-original-title="Company Document">
                                                    <i class="fa fa-map-pin"></i>
                                                </div>
                                            </a>
                                        </li>
                                        
                                        <li class="nav-item">
                                            <a href="#bank-detail" class="nav-link" data-toggle="tab">
                                                <div class="step-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-original-title="Bank Details">
                                                    <i class="fa fa-credit-card"></i>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                    <!-- wizard-nav -->

                                    <div class="tab-content twitter-bs-wizard-tab-content">
                                        <div class="tab-pane active" id="seller-details">
                                            <div class="mb-4">
                                                <h5>Enter Your Personal Details</h5>
                                            </div>
                                            <form>
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <div class="mb-3">
                                                            <label for="basicpill-firstname-input">First name</label>
                                                            <input type="text" class="form-control" id="basicpill-firstname-input">
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="mb-3">
                                                            <label for="basicpill-lastname-input">Last name</label>
                                                            <input type="text" class="form-control" id="basicpill-lastname-input">
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <div class="mb-3">
                                                            <label for="basicpill-phoneno-input">Phone</label>
                                                            <input type="text" class="form-control" id="basicpill-phoneno-input">
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="mb-3">
                                                            <label for="basicpill-email-input">Email</label>
                                                            <input type="email" class="form-control" id="basicpill-email-input">
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                            <ul class="pager wizard twitter-bs-wizard-pager-link">
                                                <li class="next"><a href="javascript:;" data-toggle="tab" class="btn btn-primary">Next <i class="bx bx-chevron-right ms-1"></i></a></li>
                                            </ul>
                                        </div>
                                        <!-- tab pane -->
                                        <div class="tab-pane" id="company-document">
                                          <div>
                                            <div class="mb-4">
                                                <h5>Enter Your Address</h5>
                                            </div>
                                            <form>
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <div class="mb-3">
                                                            <label for="basicpill-pancard-input">Address 1</label>
                                                            <input type="text" class="form-control" id="basicpill-pancard-input">
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-6">
                                                        <div class="mb-3">
                                                            <label for="basicpill-vatno-input">Address 2</label>
                                                            <input type="text" class="form-control" id="basicpill-vatno-input">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <div class="mb-3">
                                                            <label for="basicpill-cstno-input">Landmark</label>
                                                            <input type="text" class="form-control" id="basicpill-cstno-input">
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-6">
                                                        <div class="mb-3">
                                                            <label for="basicpill-servicetax-input">Town</label>
                                                            <input type="text" class="form-control" id="basicpill-servicetax-input">
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                            <ul class="pager wizard twitter-bs-wizard-pager-link">
                                                <li class="previous disabled"><a href="javascript:;" data-toggle="tab" class="btn btn-primary me-1"><i class="bx bx-chevron-left me-1"></i> Previous</a></li>
                                                <li class="next"><a href="javascript:;" data-toggle="tab" class="btn btn-primary">Next <i class="bx bx-chevron-right ms-1"></i></a></li>
                                            </ul>
                                            </div>
                                        </div>
                                        <!-- tab pane -->
                                        <div class="tab-pane" id="bank-detail">
                                            <div>
                                                <div class="mb-4">
                                                    <h5>Payment Details</h5>
                                                </div>
                                                <form>
                                                    <div class="row">
                                                        <div class="col-lg-6">
                                                            <div class="mb-3">
                                                                <label for="basicpill-namecard-input">Name on Card</label>
                                                                <input type="text" class="form-control" id="basicpill-namecard-input">
                                                            </div>
                                                        </div>

                                                        <div class="col-lg-6">
                                                            <div class="mb-3">
                                                                <label>Credit Card Type</label>
                                                                <vue-select :options="type" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-lg-6">
                                                            <div class="mb-3">
                                                                <label for="basicpill-cardno-input">Credit Card Number</label>
                                                                <input type="text" class="form-control" id="basicpill-cardno-input">
                                                            </div>
                                                        </div>

                                                        <div class="col-lg-6">
                                                            <div class="mb-3">
                                                                <label for="basicpill-card-verification-input">Card Verification Number</label>
                                                                <input type="text" class="form-control" id="basicpill-card-verification-input">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-lg-6">
                                                            <div class="mb-3">
                                                                <label for="basicpill-expiration-input">Expiration Date</label>
                                                                <input type="text" class="form-control" id="basicpill-expiration-input">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                                <ul class="pager wizard twitter-bs-wizard-pager-link">
                                                    <li class="previous disabled"><a href="javascript:;" data-toggle="tab" class="btn btn-primary me-1"><i class="bx bx-chevron-left me-1"></i> Previous</a></li>
                                                    <li class="float-end"><a href="javascript: void(0);" class="btn btn-primary" data-toggle="modal" data-target=".confirmModal">Save
                                                            Changes</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <!-- tab pane -->
                                    </div>
                                    <!-- right tab content -->
                                </div>
                            </div>
                            <!-- end card body -->
                        </div>
                    </div>
                    <!-- /Wizard -->
                    
                    <!-- Wizard -->
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title mb-0">Wizard with Progressbar</h4>
                            </div>
                            <div class="card-body">

                                <div id="progrss-wizard" class="twitter-bs-wizard">
                                    <ul class="twitter-bs-wizard-nav nav nav-pills nav-justified">
                                        <li class="nav-item">
                                            <a href="#progress-seller-details" class="nav-link active" data-toggle="tab">
                                                <div class="step-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-original-title="User Details">
                                                    <i class="fa fa-user"></i>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#progress-company-document" class="nav-link" data-toggle="tab">
                                                <div class="step-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-original-title="Address Detail">
                                                    <i class="fa fa-map-pin"></i>
                                                </div>
                                            </a>
                                        </li>
                                        
                                        <li class="nav-item">
                                            <a href="#progress-bank-detail" class="nav-link" data-toggle="tab">
                                                <div class="step-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-original-title="Payment Details">
                                                    <i class="fa fa-credit-card"></i>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                    <!-- wizard-nav -->

                                    <div id="bar" class="progress mt-4">
                                        <div class="progress-bar bg-success progress-bar-striped progress-bar-animated" style="width: 33.3333%;"></div>
                                    </div>
                                    <div class="tab-content twitter-bs-wizard-tab-content">
                                        <div class="tab-pane active" id="progress-seller-details">
                                            <div class="mb-4">
                                                <h5>User Details</h5>
                                            </div>
                                            <form>
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <div class="mb-3">
                                                            <label for="progresspill-firstname-input">First name</label>
                                                            <input type="text" class="form-control" id="progresspill-firstname-input">
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="mb-3">
                                                            <label for="progresspill-lastname-input">Last name</label>
                                                            <input type="text" class="form-control" id="progresspill-lastname-input">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <div class="mb-3">
                                                            <label for="progresspill-phoneno-input">Phone</label>
                                                            <input type="text" class="form-control" id="progresspill-phoneno-input">
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="mb-3">
                                                            <label for="progresspill-email-input">Email</label>
                                                            <input type="email" class="form-control" id="progresspill-email-input">
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                            <ul class="pager wizard twitter-bs-wizard-pager-link">
                                                <li class="next"><a href="javascript:;" data-toggle="tab" class="btn btn-primary">Next <i class="bx bx-chevron-right ms-1"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="tab-pane" id="progress-company-document">
                                          <div>
                                            <div class="mb-4">
                                                <h5>Location Details</h5>
                                            </div>
                                            <form>
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <div class="mb-3">
                                                            <label for="progresspill-pancard-input">Address Line 1</label>
                                                            <input type="text" class="form-control" id="progresspill-pancard-input">
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-6">
                                                        <div class="mb-3">
                                                            <label for="progresspill-vatno-input">Address Line 2</label>
                                                            <input type="text" class="form-control" id="progresspill-vatno-input">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <div class="mb-3">
                                                            <label for="progresspill-cstno-input">Landmark</label>
                                                            <input type="text" class="form-control" id="progresspill-cstno-input">
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-6">
                                                        <div class="mb-3">
                                                            <label for="progresspill-servicetax-input">City</label>
                                                            <input type="text" class="form-control" id="progresspill-servicetax-input">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <div class="mb-3">
                                                            <label for="progresspill-companyuin-input">State</label>
                                                            <input type="text" class="form-control" id="progresspill-companyuin-input">
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-6">
                                                        <div class="mb-3">
                                                            <label for="progresspill-declaration-input">Country</label>
                                                            <input type="text" class="form-control" id="progresspill-declaration-input">
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                            <ul class="pager wizard twitter-bs-wizard-pager-link">
                                                <li class="previous disabled"><a href="javascript:;" data-toggle="tab" class="btn btn-primary me-1"><i class="bx bx-chevron-left me-1"></i> Previous</a></li>
                                                <li class="next"><a href="javascript:;" data-toggle="tab" class="btn btn-primary">Next <i class="bx bx-chevron-right ms-1"></i></a></li>
                                            </ul>
                                          </div>
                                        </div>
                                        <div class="tab-pane" id="progress-bank-detail">
                                            <div>
                                                <div class="mb-4">
                                                    <h5>Payment Details</h5>
                                                </div>
                                              <form>
                                                  <div class="row">
                                                      <div class="col-lg-6">
                                                          <div class="mb-3">
                                                              <label for="progresspill-namecard-input">Name on Card</label>
                                                              <input type="text" class="form-control" id="progresspill-namecard-input">
                                                          </div>
                                                      </div>

                                                      <div class="col-lg-6">
                                                          <div class="mb-3">
                                                              <label>Credit Card Type</label>
                                                              <vue-select :options="type" />
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="row">
                                                      <div class="col-lg-6">
                                                          <div class="mb-3">
                                                              <label for="progresspill-cardno-input">Credit Card Number</label>
                                                              <input type="text" class="form-control" id="progresspill-cardno-input">
                                                          </div>
                                                      </div>

                                                      <div class="col-lg-6">
                                                          <div class="mb-3">
                                                              <label for="progresspill-card-verification-input">Card Verification Number</label>
                                                              <input type="text" class="form-control" id="progresspill-card-verification-input">
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="row">
                                                      <div class="col-lg-6">
                                                          <div class="mb-3">
                                                              <label for="progresspill-expiration-input">Expiration Date</label>
                                                              <input type="text" class="form-control" id="progresspill-expiration-input">
                                                          </div>
                                                      </div>  
                                                  </div>
                                                </form>
                                                <ul class="pager wizard twitter-bs-wizard-pager-link">
                                                    <li class="previous disabled"><a href="javascript:;" data-toggle="tab" class="btn btn-primary me-1"><i class="bx bx-chevron-left me-1"></i> Previous</a></li>
                                                    <li class="float-end"><a href="javascript: void(0);" class="btn btn-primary" data-toggle="modal" data-target=".confirmModal">Save Changes</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- end card body -->
                        </div>
                        <!-- end card -->
                    </div>
                    <!-- /Wizard -->
                    
                </div>
            </div>			
        </div>
        <!-- /Page Wrapper -->
    
    </div>
    <!-- /Main Wrapper -->
    <!-- Modal -->
    <div class="modal fade confirmModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content p-3">
                <div class="modal-header border-bottom-0">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="text-center">
                        <h5 class="mb-3">Confirm Save Changes</h5>
                        <button type="button" class="btn btn-dark w-md me-1" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary w-md" data-bs-dismiss="modal"
                       >Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue'
    export default {
      data() {
      return {
        type:["American Express","Visa","MasterCard","Discover"]
      }
      },
    mounted(){
     $(document).ready(function(){({tabClass:"nav nav-pills nav-justified"}),({onTabShow:function(a,r,i){r=(i+1)/r.find("li").length*100;$("#progrss-wizard").find(".progress-bar").css({width:r+"%"})}})});var triggerTabList=[].slice.call(document.querySelectorAll(".twitter-bs-wizard-nav .nav-link"));triggerTabList.forEach(function(a){var r=new bootstrap.Tab(a);a.addEventListener("click",function(a){a.preventDefault(),r.show()})});
    }
    }
  import '../../../assets/plugins/twitter-bootstrap-wizard/form-wizard.css'
  import '../../../assets/plugins/twitter-bootstrap-wizard/jquery.bootstrap.wizard.min.js'
  import '../../../assets/plugins/twitter-bootstrap-wizard/prettify.js'
  </Script>
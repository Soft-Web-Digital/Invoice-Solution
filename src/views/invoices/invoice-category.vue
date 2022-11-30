<template>
    <!-- Main Wrapper -->
    <div class="main-wrapper">
        <layout-header></layout-header>
        <layout-sidebar></layout-sidebar>
        
        <!-- Page Wrapper -->
        <div class="page-wrapper">
            <div class="content container-fluid">
                <invoiceitemsheader></invoiceitemsheader>
                <div class="card invoices-tabs-card">
                    <div class="card-body card-body pt-0 pb-0">
                        <div class="invoices-items-main-tabs">
                            <div class="row align-items-center">
                                <div class="col-lg-12 col-md-12">
                                    <div class="invoices-items-tabs">
                                        <ul>
                                            <li><router-link to="invoice-items">All Items</router-link></li>
                                            <li><router-link to="invoice-category" class="active">Category</router-link></li>	
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card invoices-tabs-card">
                    <div class="card-body card-body pt-0 pb-0">
                        <div class="invoices-main-tabs border-0 pb-0">
                            <div class="row align-items-center">
                                <div class="col-lg-12 col-md-12">
                                    <div class="invoices-settings-btn invoices-settings-btn-one">
                                        <a href="#" class="btn" data-bs-toggle="modal" data-bs-target="#add_items">
                                            <i data-feather="plus-circle"></i> Add New Category
                                        </a>
                                    </div>
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
                                    <table class="table table-stripped table-hover datatable" id="invoicecategory">
                                        <thead class="thead-light">
                                            <tr>
                                               <th>Name</th>
                                               <th>Description</th>
                                               <th>Date Added</th>
                                               <th class="text-end">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="item in invoicecategory" :key="item.id">
                                                <td>
                                                    <label class="custom_check">
                                                        <input type="checkbox" name="invoice">
                                                        <span class="checkmark"></span> 
                                                    </label>
                                                    <a href="javascript:;" class="invoice-link">{{item.Name}}</a>
                                                </td>
                                                <td class="items-text">{{item.Description}}</td>
                                                <td>{{item.DateAdded}}</td>
                                                <td class="text-end">
                                                    <router-link to="edit-invoice" class="btn btn-sm btn-white text-success me-2"><i class="far fa-edit me-1"></i>{{item.Action}}</router-link> 
                                                    <a class="btn btn-sm btn-white text-danger" href="javascript:;" data-bs-toggle="modal" data-bs-target="#delete_paid"><i class="far fa-trash-alt me-1"></i>{{item.Action1}}</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>			
        </div>
        <!-- /Page Wrapper -->
        <!-- Add Invoices Items Modal -->
        <div class="modal custom-modal fade bank-details" id="add_items" role="dialog">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="form-header text-start mb-0">
                            <h4 class="mb-0">Create New Category</h4>
                        </div>
                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="bank-inner-details">
                            <div class="row">
                                <div class="col-lg-12 col-md-12">
                                    <div class="form-group">
                                        <label>Category Name</label>
                                        <input type="text" class="form-control" placeholder="Add New Item">
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                    <div class="form-group">
                                        <label>Category Description</label>
                                        <textarea class="form-control"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <div class="bank-details-btn">
                            <a href="javascript:void(0);" data-bs-dismiss="modal" class="btn bank-cancel-btn me-2">Cancel</a>
                            <a href="javascript:void(0);" class="btn bank-save-btn">Save Item</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Add Items Modal -->

        <!-- Delete Paid Modal -->
        <div class="modal custom-modal fade" id="delete_paid" role="dialog">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="form-header">
                            <h3>Delete Invoice Iems</h3>
                            <p>Are you sure want to delete?</p>
                        </div>
                        <div class="modal-btn delete-action">
                            <div class="row">
                                <div class="col-6">
                                    <a href="javascript:void(0);" class="btn btn-primary paid-continue-btn">Delete</a>
                                </div>
                                <div class="col-6">
                                    <a href="javascript:void(0);" data-bs-dismiss="modal" class="btn btn-primary paid-cancel-btn">Cancel</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Delete Paid Modal -->
    </div>
    <!-- /Main Wrapper -->
</template>
<script>
    import Vue from 'vue'
    import invoicecategory from '../../assets/json/invoicecategory.json';
	import util from '../../assets/utils/util'
    export default {
      components: {
        
      },
      data() {
            return {
                invoicecategory: invoicecategory 
            }
        },
        mounted() {
            util.datatable('#invoicecategory')
        }
    }
</script>
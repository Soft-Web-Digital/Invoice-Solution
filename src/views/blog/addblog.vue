<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <div class="content container-fluid">
        <div class="row">
          <div class="col-xl-8 offset-xl-2">
            <!-- Page Header -->
            <div class="page-header">
              <div class="row">
                <div class="col-sm-12">
                  <h3 class="page-title">Add Post</h3>
                </div>
              </div>
            </div>
            <!-- /Page Header -->

            <div class="card">
              <div class="card-body">
                <div class="bank-inner-details">
                  <div class="row">
                    <div class="col-lg-12 col-md-12">
                      <div class="form-group">
                        <label>Title<span class="text-danger">*</span></label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12">
                      <div class="form-group modal-select-box">
                        <label>Category</label>
                        <vue-select
                          :options="Expenses"
                          placeholder="Expenses"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12">
                      <div class="form-group">
                        <label>Tag</label>
                        <vue3-tags-input
                          :tags="tags"
                          placeholder="Enter Tags"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12">
                      <div class="form-group">
                        <label>Blog Image</label>
                        <div class="change-photo-btn">
                          <div>
                            <p>Add Image</p>
                          </div>
                          <input type="file" class="upload" />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12">
                      <div class="form-group blogeditor">
                        <label>Description</label>
                        <SummernoteEditor
                          v-model="myValue"
                          @update:modelValue="summernoteChange($event)"
                          @summernoteImageLinkInsert="summernoteImageLinkInsert"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class=" blog-categories-btn pt-0">
                <div class="bank-details-btn ">
                  <router-link to="/blog" class="btn btn-primary me-2"
                    >Add Post</router-link
                  >
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
<script>
import Vue3TagsInput from "vue3-tags-input";
import SummernoteEditor from "vue3-summernote-editor";
export default {
  components: {
    Vue3TagsInput,
    SummernoteEditor,
  },
  data() {
    return {
      tags: ["tax"],
      myValue: "",
      Expenses: ["Expenses", "Sales", "profit-loss"],
    };
  },
  methods: {
    summernoteChange(newValue) {
      console.log("summernoteChange", newValue);
    },
    summernoteImageLinkInsert(...args) {
      console.log("summernoteImageLinkInsert()", args);
    },
  },
}
  </script>

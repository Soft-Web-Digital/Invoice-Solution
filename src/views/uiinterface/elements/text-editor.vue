<template>
    <!-- Main Wrapper -->
    <div class="main-wrapper">
        <layout-header></layout-header>
        <layout-sidebar></layout-sidebar>
        
        <!-- Page Wrapper -->
        <div class="page-wrapper">
            <div class="content container-fluid">
                <texteditorheader></texteditorheader>
                <div class="row">
					
                    <!-- Editor -->
                    <div class="col-md-12">	
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title">Editor</h5>
                            </div>
                            <div class="card-body">
                                <SummernoteEditor
                                    v-model="myValue"
                                    @update:modelValue="summernoteChange($event)"
                                    @summernoteImageLinkInsert="summernoteImageLinkInsert"
                                    />
                            </div>
                        </div>
                    </div>
                    <!-- /Editor -->
                        
                </div>	
            </div>			
        </div>
        <!-- /Page Wrapper -->
    
    </div>
    <!-- /Main Wrapper -->
</template>
<script>
    import Vue from 'vue'
    import SummernoteEditor from 'vue3-summernote-editor';
    export default {
      components: {
          SummernoteEditor,
      },
      data() {
      return {
          myValue: '',
      }
      },
      methods: {
         summernoteChange(newValue) {
            console.log("summernoteChange", newValue);
         },
          summernoteImageLinkInsert(...args) {
            console.log("summernoteImageLinkInsert()", args);
         },
      },
      name: 'text-editor'
    }
  </Script>
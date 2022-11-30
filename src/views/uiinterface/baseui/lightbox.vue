<template>
    <!-- Main Wrapper -->
    <div class="main-wrapper">
        <layout-header></layout-header>
        <layout-sidebar></layout-sidebar>
        
        <!-- Page Wrapper -->
        <div class="page-wrapper">
            <div class="content container-fluid">
                <lightboxheader></lightboxheader>
                <div class="row">
					
                    <!-- Lightbox -->
                    <div class="col-md-12">	
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title">Single Image Lightbox</h5>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-4 mb-2 mb-md-0">
                                        <a href="https://picsum.photos/785/501" class="image-popup fancystyle" data-fancybox="gallery">
                                            <img src="../../../assets/img/img-01.jpg" class="img-fluid" alt="image" />
                                        </a>
                                    </div>
                                    <div class="col-md-4 mb-2 mb-md-0">
                                        <a href="https://picsum.photos/785/502" class="image-popup fancystyle"  data-fancybox="gallery">
                                            <img src="../../../assets/img/img-02.jpg" class="img-fluid" alt="image" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Lightbox -->
                    
                    <!-- Lightbox -->
                    <div class="col-md-12">	
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title">Image with Description</h5>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-4 mb-2 mb-md-0">
                                        <a href="https://picsum.photos/785/503" class="image-popup-desc fancystyle"  data-fancybox="gallery" data-title="Title 01" data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit">
                                            <img src="../../../assets/img/img-03.jpg" class="img-fluid" alt="work-thumbnail">
                                        </a>
                                    </div>
                                    <div class="col-md-4 mb-2 mb-md-0">
                                        <a href="https://picsum.photos/785/504" class="image-popup-desc fancystyle"  data-fancybox="gallery" data-title="Title 02" data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit">
                                            <img src="../../../assets/img/img-04.jpg" class="img-fluid" alt="work-thumbnail">
                                        </a>
                                    </div>
                                    <div class="col-md-4 mb-2 mb-md-0">
                                        <a href="https://picsum.photos/785/505" class="image-popup-desc fancystyle"  data-fancybox="gallery" data-title="Title 03" data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit">
                                            <img src="../../../assets/img/img-05.jpg" class="img-fluid" alt="work-thumbnail">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Lightbox -->
                    
                </div>

            </div>			
        </div>
        <!-- /Page Wrapper -->
       
    </div>
    <!-- /Main Wrapper -->
</template>
<script>
    import Vue from 'vue'
    export default {
      components: {
        
      },
      data() {
            return {
             
            }
        },
        mounted() {
            
        }
    }
</script>
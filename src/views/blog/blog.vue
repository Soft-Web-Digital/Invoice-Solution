<template>
    <!-- Main Wrapper -->
		<div class="main-wrapper">
			<layout-header></layout-header>
			<layout-sidebar></layout-sidebar>
			
			<!-- Page Wrapper -->
			<div class="page-wrapper">
				<div class="content container-fluid">

					<!-- Page Header -->
					<!-- Blog List -->
                    <div class="row">
                        <div class="col-md-9">
                            <ul class="list-links mb-4">
                                <li><router-link to="/blog">Active Blog</router-link></li>
                                <li><router-link to="/pending-blog">Pending Blog</router-link></li>
                            </ul>
                        </div>
                        <div class="col-md-3 text-md-end">
                            <router-link to="/add-blog" class="btn btn-primary btn-blog mb-3" ><i class="feather-plus-circle me-1"></i> Add New</router-link>
                        </div>
                    </div>
                    
                    <div class="row">
                        
                        <!-- Blog Post -->
                        <div class="col-md-6 col-xl-4 col-sm-12 d-flex">
                            <div class="blog grid-blog flex-fill">
                                <div class="blog-image">
                                    <router-link to="/blog-details"><img class="img-fluid" src="../../assets/img/category/blog-1.jpg" alt="Post Image"></router-link>
                                    <div class="blog-views">
                                        <i class="feather-eye me-1"></i> 225
                                    </div>
                                    
                                </div>
                                <div class="blog-content">
                                    <ul class="entry-meta meta-item">
                                        <li>
                                            <div class="post-author">
                                                <router-link to="/profile">
                                                    <img src="../../assets/img/profiles/avatar-12.jpg" alt="Post Author"> 
                                                    <span>
                                                        <span class="post-title">Alex Campbell</span>
                                                        <span class="post-date"><i class="far fa-clock"></i>  4 Dec 2022</span>
                                                    </span>
                                                </router-link>
                                            </div>
                                        </li>
                                    </ul>
                                    <h3 class="blog-title"><router-link to="/blog-details">
										Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</router-link></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                                <div class="row">
                                    <div class="edit-options">
                                        <div class= "edit-delete-btn">
                                            <router-link to="/edit-blog" class="text-success"><i class="feather-edit-3 me-1"></i> Edit</router-link>
                                            <a href="javascript:;" class="text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i class="feather-trash-2 me-1"></i> Delete</a>
                                        </div>
                                        <div class="text-end inactive-style">
                                            <a href="javascript:void(0);" class="text-danger" data-bs-toggle="modal" data-bs-target="#deleteNotConfirmModal"><i class="feather-eye-off me-1"></i> Inactive</a>
                                        </div>
                                    </div>
                                </div>
                            </div>										
                        </div>
                        <!-- /Blog Post -->
                        
                        <!-- Blog Post -->
                        <div class="col-md-6 col-xl-4 col-sm-12 d-flex">
                            <div class="blog grid-blog flex-fill">
                                <div class="blog-image">
                                    <router-link to="/blog-details"><img class="img-fluid" src="../../assets/img/category/blog-2.jpg" alt="Post Image"></router-link>
                                    <div class="blog-views">
                                        <i class="feather-eye me-1"></i> 132
                                    </div>
                                    
                                </div>
                                <div class="blog-content">
                                    <ul class="entry-meta meta-item">
                                        <li>
                                            <div class="post-author">
                                                <router-link to="/profile">
                                                    <img src="../../assets/img/profiles/avatar-04.jpg" alt="Post Author"> 
                                                    <span>
                                                        <span class="post-title">Barbara Moore</span>
                                                        <span class="post-date"><i class="far fa-clock"></i>  4 Dec 2022</span>
                                                    </span>
                                                </router-link>
                                            </div>
                                        </li>
                                    </ul>
                                    <h3 class="blog-title"><router-link to="/blog-details">
										Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</router-link></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                                <div class="row">
                                    <div class="edit-options">
                                        <div class= "edit-delete-btn">
                                            <router-link to="/edit-blog" class="text-success"  ><i class="feather-edit-3 me-1"></i> Edit</router-link>
                                            <router-link to="/edit-blog" href="javascript:;" class="text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i class="feather-trash-2 me-1"></i>Delete</router-link>
                                        </div>
                                        <div class="text-end inactive-style">
                                            <a href="javascript:void(0);" class="text-danger" data-bs-toggle="modal" data-bs-target="#deleteNotConfirmModal"><i class="feather-eye-off me-1"></i> Inactive</a>
                                        </div>
                                    </div>
                                </div>
                            </div>										
                        </div>
                        <!-- /Blog Post -->
                        
                        <!-- Blog Post -->
                        <div class="col-md-6 col-xl-4 col-sm-12 d-flex">    
                            <div class="blog grid-blog flex-fill">
                                <div class="blog-image">
                                    <router-link to="/blog-details"><img class="img-fluid" src="../../assets/img/category/blog-3.jpg" alt="Post Image"></router-link>
                                    <div class="blog-views">
                                        <i class="feather-eye me-1"></i> 344
                                    </div>
                                    
                                </div>
                                <div class="blog-content">
                                    <ul class="entry-meta meta-item">
                                        <li>
                                            <div class="post-author">
                                                <router-link to="/profile">
                                                    <img src="../../assets/img/profiles/avatar-02.jpg" alt="Post Author"> 
                                                    <span>
                                                        <span class="post-title">Brian Johnson</span>
                                                        <span class="post-date"><i class="far fa-clock"></i>  4 Dec 2022</span>
                                                    </span>
                                                </router-link>
                                            </div>
                                        </li>
                                    </ul>
                                    <h3 class="blog-title"><router-link to="/blog-details">
                                        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</router-link></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                                <div class="row">
                                    <div class="edit-options">
                                        <div class= "edit-delete-btn">
                                            <router-link to="/edit-blog" class="text-success"  ><i class="feather-edit-3 me-1"></i> Edit</router-link>
                                            <router-link to="/edit-blog" class="text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i class="feather-trash-2 me-1"></i> Delete</router-link>
                                        </div>
                                        <div class="text-end inactive-style">
                                            <a href="javascript:void(0);" class="text-danger" data-bs-toggle="modal" data-bs-target="#deleteNotConfirmModal"><i class="feather-eye-off me-1"></i> Inactive</a>
                                        </div>
                                    </div>
                                </div>
                            </div>										
                        </div>
                        <!-- /Blog Post -->
                        
                        <!-- Blog Post -->
                        <div class="col-md-6 col-xl-4 col-sm-12 d-flex">
                            <div class="blog grid-blog flex-fill">
                                <div class="blog-image">
                                    <router-link to="/blog-details"><img class="img-fluid" src="../../assets/img/category/blog-4.jpg" alt="Post Image"></router-link>
                                    <div class="blog-views">
                                        <i class="feather-eye me-1"></i> 215
                                    </div>
                                    
                                </div>
                                <div class="blog-content">
                                    <ul class="entry-meta meta-item">
                                        <li>
                                            <div class="post-author">
                                                <router-link to="/profile">
                                                    <img src="../../assets/img/profiles/avatar-05.jpg" alt="Post Author"> 
                                                    <span>
                                                        <span class="post-title">Greg Lynch </span>
                                                        <span class="post-date"><i class="far fa-clock"></i>  4 Dec 2022</span>
                                                    </span>
                                                </router-link>
                                            </div>
                                        </li>
                                    </ul>
                                    <h3 class="blog-title"><router-link to="/blog-details">
                                        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. </router-link></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                                <div class="row">
                                    <div class="edit-options">
                                        <div class= "edit-delete-btn">
                                            <router-link to="/edit-blog" class="text-success"  ><i class="feather-edit-3 me-1"></i> Edit</router-link>
                                            <router-link to="/edit-blog" class="text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i class="feather-trash-2 me-1"></i> Delete</router-link>
                                        </div>
                                        <div class="text-end inactive-style">
                                            <a href="javascript:void(0);" class="text-danger" data-bs-toggle="modal" data-bs-target="#deleteNotConfirmModal"><i class="feather-eye-off me-1"></i> Inactive</a>
                                        </div>
                                    </div>
                                </div>
                            </div>										
                        </div>
                        <!-- /Blog Post -->
                        
                        <!-- Blog Post -->
                        <div class="col-md-6 col-xl-4 col-sm-12 d-flex">
                            <div class="blog grid-blog flex-fill">
                                <div class="blog-image">
                                    <router-link to="/blog-details"><img class="img-fluid" src="../../assets/img/category/blog-5.jpg" alt="Post Image"></router-link>
                                    <div class="blog-views">
                                        <i class="feather-eye me-1"></i> 285
                                    </div>
                                    
                                </div>
                                <div class="blog-content">
                                    <ul class="entry-meta meta-item">
                                        <li>
                                            <div class="post-author">
                                                <router-link to="/profile">
                                                    <img src="../../assets/img/profiles/avatar-11.jpg" alt="Post Author"> 
                                                    <span>
                                                        <span class="post-title">Jennifer Floyd  </span>
                                                        <span class="post-date"><i class="far fa-clock"></i>  4 Dec 2022</span>
                                                    </span>
                                                </router-link>
                                            </div>
                                        </li>
                                    </ul>
                                    <h3 class="blog-title"><router-link to="/blog-details">
                                        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</router-link></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                                <div class="row">
                                    <div class="edit-options">
                                        <div class= "edit-delete-btn">
                                            <router-link to="/edit-blog" class="text-success"  ><i class="feather-edit-3 me-1"></i> Edit</router-link>
                                            <router-link to="/edit-blog" class="text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i class="feather-trash-2 me-1"></i> Delete</router-link>
                                        </div>
                                        <div class="text-end inactive-style">
                                            <a href="javascript:void(0);" class="text-danger" data-bs-toggle="modal" data-bs-target="#deleteNotConfirmModal"><i class="feather-eye-off me-1"></i> Inactive</a>
                                        </div>
                                    </div>
                                </div>
                            </div>										
                        </div>
                        <!-- /Blog Post -->
                        
                        <!-- Blog Post -->
                        <div class="col-md-6 col-xl-4 col-sm-12 d-flex">
                            <div class="blog grid-blog flex-fill">
                                <div class="blog-image">
                                    <router-link to="/blog-details"><img class="img-fluid" src="../../assets/img/category/blog-6.jpg" alt="Post Image"></router-link>
                                    <div class="blog-views">
                                        <i class="feather-eye me-1"></i> 654
                                    </div>
                                    
                                </div>
                                <div class="blog-content">
                                    <ul class="entry-meta meta-item">
                                        <li>
                                            <div class="post-author">
                                                <router-link to="/profile">
                                                    <img src="../../assets/img/profiles/avatar-06.jpg" alt="Post Author"> 
                                                    <span>
                                                        <span class="post-title">Karlene Chaidez </span>
                                                        <span class="post-date"><i class="far fa-clock"></i>  4 Dec 2022</span>
                                                    </span>
                                                </router-link>
                                            </div>
                                        </li>
                                    </ul>
                                    <h3 class="blog-title"><router-link to="/blog-details">
                                        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</router-link></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                                <div class="row">
                                    <div class="edit-options">
                                        <div class= "edit-delete-btn">
                                            <router-link to="/edit-blog" class="text-success"  ><i class="feather-edit-3 me-1"></i> Edit</router-link>
                                            <router-link to="/edit-blog" class="text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"><i class="feather-trash-2 me-1"></i> Delete</router-link>
                                        </div>
                                        <div class="text-end inactive-style">
                                            <a href="javascript:void(0);" class="text-danger" data-bs-toggle="modal" data-bs-target="#deleteNotConfirmModal"><i class="feather-eye-off me-1"></i> Inactive</a>
                                        </div>
                                    </div>
                                </div>
                            </div>										
                        </div>
                        <!-- /Blog Post -->
                
                        
                    </div>
                    <!-- Pagination -->
                        <div class="row ">
                            <div class="col-md-12">
                                <div class="pagination-tab  d-flex justify-content-center">
                                    <ul class="pagination mb-0">
                                        <li class="page-item disabled">
                                            <a class="page-link" href="javascript:;" tabindex="-1"><i class="feather-chevron-left me-2"></i>Previous</a>
                                        </li>
                                        <li class="page-item"><a class="page-link" href="javascript:;">1</a></li>
                                        <li class="page-item active">
                                            <a class="page-link" href="javascript:;">2 <span class="sr-only">(current)</span></a>
                                        </li>
                                        <li class="page-item"><a class="page-link" href="javascript:;">3</a></li>
                                        <li class="page-item"><a class="page-link" href="javascript:;">4</a></li>
                                        <li class="page-item">
                                            <a class="page-link" href="javascript:;">Next<i class="feather-chevron-right ms-2"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- /Pagination -->
                        <!-- Modal -->
            <div class="modal fade contentmodal" id="deleteModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content doctor-profile">
                        <div class="modal-header pb-0 border-bottom-0  justify-content-end">
                            <button type="button" class="close-btn" data-bs-dismiss="modal" aria-label="Close"><i class="feather-x-circle"></i></button>
                        </div>
                        <div class="modal-body">
                            <div class="delete-wrap text-center">
                                <div class="del-icon"><i class="feather-x-circle"></i></div>
                                <h2>Sure you want to delete</h2>
                                <div class="submit-section">
                                    <router-link to="/blog" class="btn btn-success me-2">Yes</router-link>
                                    <a href="javascript:;" class="btn btn-danger" data-bs-dismiss="modal">No</a>
                                </div>								
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
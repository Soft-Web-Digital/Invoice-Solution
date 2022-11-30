<template>
    <!-- Main Wrapper -->
    <div class="main-wrapper">
        <layout-header></layout-header>
        <layout-sidebar></layout-sidebar>
        
        <!-- Page Wrapper -->
        <div class="page-wrapper">
            <div class="content container-fluid">
                <paginationheader></paginationheader>
                <!-- Pagination -->
						<div class="card bg-white">
							<div class="card-body">
								<div>
									<ul class="pagination mb-4">
										<li class="page-item disabled">
											<a class="page-link" href="javascript:;" tabindex="-1">Previous</a>
										</li>
										<li class="page-item"><a class="page-link" href="javascript:;">1</a></li>
										<li class="page-item active">
											<a class="page-link" href="javascript:;">2 <span class="sr-only">(current)</span></a>
										</li>
										<li class="page-item"><a class="page-link" href="javascript:;">3</a></li>
										<li class="page-item">
											<a class="page-link" href="javascript:;">Next</a>
										</li>
									</ul>
								</div>
								<div>
									<ul class="pagination mb-4">
										<li class="page-item">
											<a class="page-link" href="javascript:;" aria-label="Previous">
												<span aria-hidden="true">&laquo;</span>
												<span class="sr-only">Previous</span>
											</a>
										</li>
										<li class="page-item"><a class="page-link" href="javascript:;">1</a></li>
										<li class="page-item"><a class="page-link" href="javascript:;">2</a></li>
										<li class="page-item"><a class="page-link" href="javascript:;">3</a></li>
										<li class="page-item">
											<a class="page-link" href="javascript:;" aria-label="Next">
												<span aria-hidden="true">&raquo;</span>
											<span class="sr-only">Next</span>
											</a>
										</li>
									</ul>
								</div>
								<div>
									<ul class="pagination pagination-lg mb-4">
										<li class="page-item disabled">
											<a class="page-link" href="javascript:;" tabindex="-1">Previous</a>
										</li>
										<li class="page-item"><a class="page-link" href="javascript:;">1</a></li>
										<li class="page-item active">
											<a class="page-link" href="javascript:;">2 <span class="sr-only">(current)</span></a>
										</li>
										<li class="page-item"><a class="page-link" href="javascript:;">3</a></li>
										<li class="page-item">
											<a class="page-link" href="javascript:;">Next</a>
										</li>
									</ul>
								</div>
								
								<div>
									<ul class="pagination pagination-sm mb-0">
										<li class="page-item disabled">
											<a class="page-link" href="javascript:;" tabindex="-1">Previous</a>
										</li>
										<li class="page-item"><a class="page-link" href="javascript:;">1</a></li>
										<li class="page-item active">
											<a class="page-link" href="javascript:;">2 <span class="sr-only">(current)</span></a>
										</li>
										<li class="page-item"><a class="page-link" href="javascript:;">3</a></li>
										<li class="page-item">
											<a class="page-link" href="javascript:;">Next</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					<!-- /Pagination -->
            </div>			
        </div>
        <!-- /Page Wrapper -->
    
    </div>
    <!-- /Main Wrapper -->
</template>

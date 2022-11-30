<template>
    <!-- Main Wrapper -->
		<div class="main-wrapper">
			<layout-header></layout-header>
			<layout-sidebar></layout-sidebar>
			
				<!-- Page Wrapper -->
            <div class="page-wrapper">
                <div class="content container-fluid">
				
					<profitheader />
			   
					<profitfilter />
					
					<div class="row">
						<div class="col-sm-12">
							<div class="card card-table"> 
								<div class="card-body">
									<div class="table-responsive">
										<profittable />
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
<template>
    
		<!-- Main Wrapper -->
        <div class="main-wrapper">
            <layout-header></layout-header>
			<layout-sidebar></layout-sidebar>
			
			<!-- Page Wrapper -->
            <div class="page-wrapper">
                <div class="content container-fluid">
				
					<formbasicheader />
					
					<div class="row">
						<div class="col-lg-12">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title">Basic Inputs</h5>
								</div>
								<cardbasicinput />
							</div>
							<div class="card">
								<div class="card-header">
									<h5 class="card-title">Input Sizes</h5>
								</div>
								<cardinputsize />
							</div>
						</div>
					</div>
				
				</div>			
			</div>
			<!-- /Page Wrapper -->
		
        </div>
		<!-- /Main Wrapper -->
</template>
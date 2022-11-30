<template>
    <!-- Main Wrapper -->
        <div class="main-wrapper">
            <layout-header></layout-header>
			<layout-sidebar></layout-sidebar>
			
			<!-- Page Wrapper -->
            <div class="page-wrapper">

                <div class="content container-fluid">

					<datatableheader />
					
					<div class="row">

						<div class="col-sm-12">

							<div class="card">

								<div class="card-header">

									<h4 class="card-title">Default Datatable</h4>

									<p class="card-text">

										This is the most basic example of the datatables with zero configuration. Use the <code>.datatable</code> class to initialize datatables.

									</p>

								</div>

								<div class="card-body">

								<datatableform />

							
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
<template>
    <!-- Main Wrapper -->
        <div class="main-wrapper">
            <layout-header></layout-header>
			<layout-sidebar></layout-sidebar>
			
			<!-- Page Wrapper -->
            <div class="page-wrapper">
                <div class="content container-fluid">
				
					<formvalidationheader />
					
					<!-- Row -->
					<div class="row">
						<div class="col-sm-12">
						
							<customvalidation />
							
							<default />

							<servervalidation />
							
							<supportelement />
							
							<validationtool />
							
						</div>
					</div>
					<!-- /Row -->
				
				</div>			
			</div>
			<!-- /Page Wrapper -->
		
        </div>
		<!-- /Main Wrapper -->
</template>
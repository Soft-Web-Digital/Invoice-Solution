<template>
    
		<!-- Main Wrapper -->
		<div class="main-wrapper">

            <layout-header></layout-header>

            <layout-sidebar></layout-sidebar>
			
			<!-- Page Wrapper -->

			<div class="page-wrapper">

				<div class="content container-fluid">
				
					<deleteaccountheader />
					
					<div class="row">

						<div class="col-xl-3 col-md-4">

                            <settingsidebar />

						</div>
						
						<div class="col-xl-9 col-md-8">

							<formdeleteaccount />

						</div>
					</div>
				</div>
			</div>
			<!-- /Page Wrapper -->
			
		</div>
		<!-- /Main Wrapper -->
</template>
<template>
    	<!-- Main Wrapper -->
		<div class="main-wrapper">

			<indexthreeheader></indexthreeheader>

            <div class="container">

			<indexthreesidebar></indexthreesidebar>	

			<!-- Page Wrapper -->
			<div class="page-wrapper">
				<div class="content container-fluid">

					<dashboardwidget />
					
					<dashboardgraph />

					<div class="row">
						<invoicetable />
						<estimatetable1 />
					</div>
				</div>
			</div>
			<!-- /Page Wrapper -->

            </div>
			
		</div>
		<!-- /Main Wrapper -->
</template>
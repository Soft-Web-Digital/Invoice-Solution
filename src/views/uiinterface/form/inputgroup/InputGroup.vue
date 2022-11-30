<template>
    <!-- Main Wrapper -->
        <div class="main-wrapper">
            <layout-header></layout-header>
			<layout-sidebar></layout-sidebar>
			
			
			<!-- Page Wrapper -->
            <div class="page-wrapper">
                <div class="content container-fluid">
					
					<inputgroupheader />
					
					<div class="row">
						<div class="col-lg-12">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title">Basic Examples</h5>
								</div>
								<inputgroupexample />
							</div>
							<div class="card">
								<div class="card-header">
									<h5 class="card-title">Sizing</h5>
								</div>
								<inputgroupsizing />
							</div>
							<div class="card">
								<div class="card-header">
									<h5 class="card-title">Checkbox and Radio Addons</h5>
								</div>
								<inputgroupaddons />
							</div>
							<div class="card">
								<div class="card-header">
									<h5 class="card-title">Multiple Addons</h5>
								</div>
								<inputgroupmultipleaddons />
							</div>
							<div class="card">
								<div class="card-header">
									<h5 class="card-title">Buttons with dropdowns</h5>
								</div>
								<inputgroupdropdown />
							</div>
						</div>
					</div>
				
				</div>			
			</div>
			<!-- /Page Wrapper -->
		
        </div>
		<!-- /Main Wrapper -->
</template>
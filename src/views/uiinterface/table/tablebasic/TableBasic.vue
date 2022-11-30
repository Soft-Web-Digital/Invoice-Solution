<template>
    	<!-- Main Wrapper -->
		<div class="main-wrapper">
            <layout-header></layout-header>
			<layout-sidebar></layout-sidebar>
			
			<!-- Page Wrapper -->
            <div class="page-wrapper">
                <div class="content container-fluid">
				
					<tablebasicheader />
					
					<div class="row">
						<div class="col-lg-6">
							<div class="card">
								<div class="card-header">
									<h4 class="card-title">Basic Table</h4>
								</div>
								<tableview />
							</div>
						</div>
						<div class="col-lg-6">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title">Striped Rows</h5>
								</div>
								<tableview />
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-6">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title">Bordered Table</h5>
								</div>
								<tableview1 />
							</div>
						</div>
						<div class="col-lg-6">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title">Hover Rows</h5>
								</div>
								<tableview1 />
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-6">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title">Contextual Classes</h5>
								</div>
								<contexttable />
							</div>
						</div>
						<div class="col-lg-6">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title">Responsive Tables</h5>
								</div>
								<responsivetable />
							</div>
						</div>
					</div>
				
				</div>			
			</div>
			<!-- /Page Wrapper -->

        </div>
		<!-- /Main Wrapper -->
</template>
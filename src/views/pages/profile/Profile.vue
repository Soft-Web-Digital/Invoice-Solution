<template>
    <div class="main-wrapper">
            <layout-header></layout-header>
			<layout-sidebar></layout-sidebar>
			
			<!-- Page Wrapper -->
			<div class="page-wrapper">
				<div class="content container-fluid">
				
					<div class="row justify-content-lg-center">
						<div class="col-lg-10">
						
							<profileheader />
			   
							<profilecontent />
			
							<div class="row">

								<profiletable />

								<profiletable1 />

							</div>
						</div>
					</div>
				</div>
				
			</div>
			<!-- /Page Wrapper -->
			
		</div>
		<!-- /Main Wrapper -->
</template>
<script>


export default {
	components: {
		
	}
}
</script>
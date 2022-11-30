<template>
		<!-- Main Wrapper -->
        <div class="main-wrapper">
            <layout-header></layout-header>
			<layout-sidebar></layout-sidebar>
			
			<!-- Page Wrapper -->
            <div class="page-wrapper">
                <div class="content container-fluid">
				
					<div class="row">
						<div class="col-sm-12">
							<div class="chat-window">
								<chatleft />
								<chatright />
							</div>
						</div>
					</div>
					<!-- /Row -->
					
				</div>			
			</div>
			<!-- /Page Wrapper -->
		
        </div>
		<!-- /Main Wrapper -->
</template>
<script>
export default {
	mounted() {
	}

}
</script>
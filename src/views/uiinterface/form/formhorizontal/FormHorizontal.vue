<template>
    <!-- Main Wrapper -->
        <div class="main-wrapper">
            <layout-header></layout-header>
			<layout-sidebar></layout-sidebar>
			
			<!-- Page Wrapper -->
            <div class="page-wrapper">
                <div class="content container-fluid">
				
					<formhorizontalheader />
					
					<basicformhorizontal />

					<twocolumnhorizontal />

					<threecolumnhorizontal />
				
				</div>			
			</div>
			<!-- /Page Wrapper -->
		
        </div>
		<!-- /Main Wrapper -->
</template>
<script>
export default {
	mounted() {
	},
}
</script>
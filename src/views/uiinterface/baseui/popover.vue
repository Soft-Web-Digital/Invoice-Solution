<template>
    <!-- Main Wrapper -->
    <div class="main-wrapper">
        <layout-header></layout-header>
        <layout-sidebar></layout-sidebar>
        
        <!-- Page Wrapper -->
        <div class="page-wrapper">
            <div class="content container-fluid">
                <popoverheader></popoverheader>
                <div class="row">
					
                    <!-- Popover -->
                    <div class="col-md-12">	
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title">Basic Popover</h5>
                            </div>
                            <div class="card-body">
                                <div class="popover-list">
                                    <button class="btn btn-primary me-1" type="button" data-bs-toggle="popover" title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
                                    
                                    <button class="example-popover btn btn-primary me-1" tabindex="0" role="button" data-bs-toggle="popover" data-bs-trigger="focus" title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Dismissible popover</button>
                                    
                                    <button class="example-popover btn btn-primary" type="button" data-bs-trigger="hover" data-container="body" data-bs-toggle="popover" data-bs-placement="bottom" title="Popover title" data-offset="-20px -20px" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">On Hover Tooltip</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Popover -->
                    
                    <!-- Popover -->
                    <div class="col-md-12">	
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title">Direction Popover</h5>
                            </div>
                            <div class="card-body">
                                <div class="popover-list">
                                    <button class="example-popover btn btn-primary me-1" type="button" data-container="body" data-bs-toggle="popover" data-bs-placement="top" title="Popover title" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">Popover on top</button>
                                    <button class="example-popover btn btn-primary me-1" type="button" data-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">Popover on right</button>
                                    <button class="example-popover btn btn-primary me-1" type="button" data-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">Popover on bottom</button>
                                    <button class="example-popover btn btn-primary" type="button" data-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">Popover on left</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Popover -->
                        
                </div>
            </div>			
        </div>
        <!-- /Page Wrapper -->
    
    </div>
    <!-- /Main Wrapper -->
</template>
<script>
    import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;
    export default{
        mounted (){
            if($('.popover-list').length > 0) {
		var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
		var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
		  return new bootstrap.Popover(popoverTriggerEl)
		})
	}
        
        }
    }
</script>
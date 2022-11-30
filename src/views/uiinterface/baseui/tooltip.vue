<template>
    <!-- Main Wrapper -->
    <div class="main-wrapper">
        <layout-header></layout-header>
        <layout-sidebar></layout-sidebar>
        
        <!-- Page Wrapper -->
        <div class="page-wrapper">
            <div class="content container-fluid">
                <tooltipheader></tooltipheader>
                <div class="row">
					
                    <!-- Tooltip -->
                    <div class="col-md-12">	
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title">Html Element</h5>
                            </div>
                            <div class="card-body">
                                <div class="popover-list">
                                    <Popper content="Popover title" hover="true" arrow="true" placement="top">
                                        <button class="example-popover btn btn-primary me-1" type="button">Hover Me</button>
                                    </Popper>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Tooltip -->
                
                    <!-- Popover -->
                    <div class="col-md-12">	
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title">Direction Tooltip</h5>
                            </div>
                            <div class="card-body">
                                <div class="tooltip-list">
                                    <Popper content="Tooltip on top" hover="true" placement="top" arrow="true">  
                                        <button type="button" class="btn btn-primary me-1">
                                          Tooltip on top
                                        </button></Popper>
                                        <Popper content="Tooltip on right" hover="true" placement="right" arrow="true">  
                                        <button type="button" class="btn btn-primary me-1">
                                          Tooltip on right
                                        </button></Popper>
                                        <Popper content="Tooltip on bottom" hover="true" placement="bottom" arrow="true">  
                                        <button type="button" class="btn btn-primary me-1">
                                          Tooltip on bottom
                                        </button></Popper>
                                        <Popper content="Tooltip on left" hover="true" placement="left" arrow="true">
                                        <button type="button" class="btn btn-primary me-1">
                                          Tooltip on left
                                        </button></Popper>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Popover -->
                    
                    <!-- Tooltip -->
                    <div class="col-md-12">	
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title">Html Element</h5>
                            </div>
                            <div class="card-body">
                                <div class="popover-list">
                                    <Popper content="Tooltip with HTML" hover="true" arrow="true" placement="top"> 
                                        <button type="button" class="btn btn-primary me-1">
                                          Tooltip with HTML
                                        </button></Popper>
                                        <Popper content="Tooltip with HTML" arrow="true" placement="bottom"> 
                                        <button type="button" class="btn btn-primary me-1">
                                          Click Me
                                        </button></Popper>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Tooltip -->
                        
                </div>
            </div>			
        </div>
        <!-- /Page Wrapper -->
    
    </div>
    <!-- /Main Wrapper -->
</template>
<script>
    import Vue from 'vue'
    export default {
      data() {
      return {
         
      }
      },
      components: {
          
      },
      mounted() {
       
      
      },
      name: 'tooltip'
    }
  </Script>
<style>
:root {
    --popper-theme-background-color: #333333;
    --popper-theme-background-color-hover: #333333;
    --popper-theme-text-color: #ffffff;
    --popper-theme-border-width: 0px;
    --popper-theme-border-style: solid;
    --popper-theme-border-radius: 10px;
    --popper-theme-padding: 10px;
    --popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
}
</style>
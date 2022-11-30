<template>
    <!-- Header -->
        <div class="header header-two">

		<!-- Logo -->
				<div class="header-left header-left-two">
					<!-- Sidebar Toggle -->
					<a href="javascript:void(0);" id="toggle_btn">
						<i class="fas fa-bars"></i>
					</a>
					<!-- /Sidebar Toggle -->
					<router-link to="/index" class="logo">
						<img src="../../../assets/img/logo-white.png" alt="Logo">
					</router-link>
					<router-link to="/index" class="dark-logo">
						<img src="../../../assets/img/logo.png" alt="Logo">
					</router-link>
					<router-link to="/index" class="logo logo-small">
						<img src="../../../assets/img/logo-small.png" alt="Logo" width="30" height="30">
					</router-link>
				</div>
				<!-- /Logo -->

            <div class="top-nav-search top-nav-search-two">
            
            <search />

            </div>
            
            <mobilemenu />
            
            <!-- Header Menu -->
            <ul class="nav nav-tabs user-menu user-menu-two">

            <notification />
                    
            <flagheader />
                    
            <user />
                    
            </ul>
            <!-- /Header Menu -->

        </div>

    <!-- /Header -->

</template>

<script>

export default {
    components: {
        
    },
    mounted() {
         var $wrapper = $('.main-wrapper');
         var $pageWrapper = $('.page-wrapper');
    var $slimScrolls = $('.slimscroll');
    // Mobile menu sidebar overlay
    $('body').append('<div class="sidebar-overlay"></div>');
    $(document).on('click', '#mobile_btn', function () {
        $wrapper.toggleClass('slide-nav');
        $('.sidebar-overlay').toggleClass('opened');
        $('html').addClass('menu-opened');
        return false;
    });  
	$(document).on('mouseover', function (e) {
		e.stopPropagation();
		if ($('body').hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
			var targ = $(e.target).closest('.sidebar').length;
			if (targ) {
				$('body').addClass('expand-menu');
				$('.subdrop + ul').slideDown();
			} else {
				$('body').removeClass('expand-menu');
				$('.subdrop + ul').slideUp();
			}
			return false;
		}
	});
    // Sidebar overlay
    $(".sidebar-overlay").on("click", function () {
        $wrapper.removeClass('slide-nav');
        $(".sidebar-overlay").removeClass("opened");
        $('html').removeClass('menu-opened');
    });   
    // Page Content Height
    if ($('.page-wrapper').length > 0) {
        var height = $(window).height();
        $(".page-wrapper").css("min-height", height);
    }   
    // Page Content Height Resize
    $(window).resize(function () {
        if ($('.page-wrapper').length > 0) {
            var height = $(window).height();
            $(".page-wrapper").css("min-height", height);
        }
    });
        $(document).on('click', '.top-nav-search .responsive-search', function() {
            $('.top-nav-search').toggleClass('active');
        });


    }
}
</script>
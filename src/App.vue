<template>
  <div id="app">
    <router-view :key="$route.fullPath"> </router-view>
  </div>
</template>
<script>
// import feather from "feather-icons";
// import IMG1 from "/assets/img/icons/siderbar-icon1.svg";
// const images = require.context("/assets/img", false, /\.png$|\.jpg$|\.svg$/);
// const images5 = require.context("/assets/img", false, /\.png$|\.jpg$|\.svg$/);
// const images6 = require.context("/assets/img", false, /\.png$|\.jpg$|\.svg$/);
// const images7 = require.context("/assets/img", false, /\.png$|\.jpg$|\.svg$/);
// const images8 = require.context("/assets/img", false, /\.png$|\.jpg$|\.svg$/);
// const images9 = require.context("/assets/img", false, /\.png$|\.jpg$|\.svg$/);
// const images11 = require.context("/assets/img", false, /\.png$|\.jpg$|\.svg$/);
// const images13 = require.context("/assets/img", false, /\.png$|\.jpg$|\.svg$/);
// const images14 = require.context("/assets/img", false, /\.png$|\.jpg$|\.svg$/);
// const images15 = require.context("/assets/img", false, /\.png$|\.jpg$|\.svg$/);
// const images16 = require.context("/assets/img", false, /\.png$|\.jpg$|\.svg$/);
// const images17 = require.context("/assets/img", false, /\.png$|\.jpg$|\.svg$/);
// const images1 = require.context(
//   "/assets/img/icons",
//   false,
//   /\.png$|\.jpg$|\.svg$/
// );
// const images2 = require.context(
//   "/assets/img/icons",
//   false,
//   /\.png$|\.jpg$|\.svg$/
// );
// const images3 = require.context(
//   "/assets/img/icons",
//   false,
//   /\.png$|\.jpg$|\.svg$/
// );
// const images4 = require.context(
//   "/assets/img/icons",
//   false,
//   /\.png$|\.jpg$|\.svg$/
// );
// const images10 = require.context(
//   "/assets/img/icons",
//   false,
//   /\.png$|\.jpg$|\.svg$/
// );
// const images12 = require.context(
//   "/assets/img/icons",
//   false,
//   /\.png$|\.jpg$|\.svg$/
// );
// const images18 = require.context(
//   "/assets/img/icons",
//   false,
//   /\.png$|\.jpg$|\.svg$/
// );

// export default {
//   name: "App",
//   components: {},
//   mounted() {
//     // Sidebar overlay
//     $(".sidebar-overlay").on("click", function () {
//       $(".main-wrapper").removeClass("slide-nav");
//       $(".sidebar-overlay").removeClass("opened");
//       $("html").removeClass("menu-opened");
//     });

//     $(document).on("click", "#toggle_btn", function () {
//       if ($("body").hasClass("mini-sidebar")) {
//         $("body").removeClass("mini-sidebar");
//         $(".subdrop + ul").slideDown();
//       } else {
//         $("body").addClass("mini-sidebar");
//         $(".subdrop + ul").slideUp();
//       }

//       return false;
//     });
//         var right_side_views = '<div class="right-side-views">' +
//         '<ul class="sticky-sidebar siderbar-view">' +
//             '<li class="sidebar-icons">' +
//                 '<a class="toggle tipinfo open-layout open-siderbar" href="javascript:void(0)" data-bs-toggle="tooltip" data-placement="left" data-bs-original-title="Tooltip on left">' +
//                     '<div class="tooltip-five ">' +
//                          '<img src="'+images2('./' + 'siderbar-icon1.svg').default+'" class="feather-five" alt="">' +
//     					             '<span class="tooltiptext">Check Layout</span>' +
//                     '</div>' +
//                 '</a>' +
//             '</li>' +
//             '<li class="sidebar-icons">' +
//                  '<a class="toggle tipinfo open-settings open-siderbar" href="javascript:void(0)" data-bs-toggle="tooltip" data-placement="left" data-bs-original-title="Tooltip on left">' +
//                      '<div class="tooltip-five">' +
//                          '<img src="'+images1('./' + 'siderbar-icon2.svg').default+'" class="feather-five" alt="">' +
//                          '<span class="tooltiptext">Demo Settings</span>' +
//                      '</div>' +
//                  '</a>' +
//              '</li>' +
//              '<li class="sidebar-icons">' +
//                  '<a class="toggle tipinfo" target="_blank" href="https://themeforest.net/item/kanakku-bootstrap-admin-html-template/29436291?s_rank=11" data-bs-toggle="tooltip" data-placement="left" title="Tooltip on left">' +
//                      '<div class="tooltip-five">' +
//                          '<img src="'+images3('./' + 'siderbar-icon3.svg').default+'" class="feather-five" alt="">' +
//                          '<span class="tooltiptext">Buy Now</span>' +
//                      '</div>' +
//                  '</a>' +
//              '</li>' +
//         '</ul>' +
//     '</div>' +

//     '<div class="sidebar-layout">' +
//          '<div class="sidebar-content">' +
//              '<div class="sidebar-top">' +
//                  '<div class="container-fluid">' +
//                      '<div class="row align-items-center">' +
//                          '<div class="col-xl-6 col-sm-6 col-12">' +
//                              '<div class="sidebar-logo">' +
//                                  '<a href="/index" class="logo">' +
//                                     '<img src="'+images('./' + 'logo.png').default+'" class="img-flex" alt="Logo">' +
//                                  '</a>' +
//                              '</div>' +
//                          '</div>' +
//                          '<div class="col-xl-6 col-sm-6 col-12">' +
//                              '<a class="btn-closed" href="javascript:void(0)"><img class="img-fliud" src="'+images4('./' + 'sidebar-delete-icon.svg').default+'" alt="demo"></a>' +
//                          '</div>' +
//                      '</div>' +
//                  '</div>' +
//              '</div>' +
//              '<div class="container-fluid">' +
//                  '<div class="row align-items-center">' +
//                      '<h5 class="sidebar-title">Choose layout</h5>' +
//                      '<div class="col-xl-6 col-sm-6 col-12">' +
//                          '<div class="sidebar-image align-center">' +
//                              '<img class="img-fliud" src="'+images5('./' + 'demo-one.png').default+'" alt="demo">' +
//                          '</div>' +
//                          '<div class="row">' +
//                              '<div class="col-lg-6 layout">' +
//                                  '<h5 class="layout-title">Demo 1</h5>' +
//                              '</div>' +
//                              '<div class="col-lg-6 layout">' +
//                                  '<label class="switch">' +
//                                      '<a href="/index" class="layout-link"></a>' +
//                                      '<span class="slider round"></span>' +
//                                  '</label>' +
//                              '</div>' +
//                          '</div>' +
//                      '</div>' +
//                      '<div class="col-xl-6 col-sm-6 col-12">' +
//                          '<div class="sidebar-image align-center">' +
//                              '<img class="img-fliud" src="'+images6('./' + 'demo-two.png').default+'" alt="demo">' +
//                          '</div>' +
//                          '<div class="row">' +
//                              '<div class="col-lg-6 layout">' +
//                                  '<h5 class="layout-title">Demo 2</h5>' +
//                              '</div>' +
//                              '<div class="col-lg-6 layout">' +
//                                  '<label class="switch">' +
//                                      '<a href="/index-two" class="layout-link"></a>' +
//                                      '<span class="slider round"></span>' +
//                                  '</label>' +
//                              '</div>' +
//                          '</div>' +
//                      '</div>' +
//                  '</div>' +
//                  '<div class="row align-items-center">' +
//                      '<h5 class="sidebar-title">Choose layout</h5>' +
//                      '<div class="col-xl-6 col-sm-6 col-12">' +
//                          '<div class="sidebar-image align-center">' +
//                              '<img class="img-fliud" src="'+images7('./' + 'demo-three.png').default+'" alt="demo">' +
//                          '</div>' +
//                          '<div class="row">' +
//                              '<div class="col-lg-6 layout">' +
//                                  '<h5 class="layout-title">Demo 3</h5>' +
//                              '</div>' +
//                              '<div class="col-lg-6 layout">' +
//                                  '<label class="switch">' +
//                                      '<a href="/index-three" class="layout-link"></a>' +
//                                      '<span class="slider round"></span>' +
//                                  '</label>' +
//                              '</div>' +
//                          '</div>' +
//                      '</div>' +
//                      '<div class="col-xl-6 col-sm-6 col-12">' +
//                          '<div class="sidebar-image align-center">' +
//                              '<img class="img-fliud" src="'+images8('./' + 'demo-four.png').default+'" alt="demo">' +
//                          '</div>' +
//                          '<div class="row">' +
//                              '<div class="col-lg-6 layout">' +
//                                  '<h5 class="layout-title">Demo 4</h5>' +
//                              '</div>' +
//                              '<div class="col-lg-6 layout">' +
//                                  '<label class="switch">' +
//                                      '<a href="/index-four" class="layout-link"></a>' +
//                                      '<span class="slider round"></span>' +
//                                  '</label>' +
//                              '</div>' +
//                          '</div>' +
//                      '</div>' +
//                  '</div>' +
//                  '<div class="row align-items-center">' +
//                      '<div class="col-xl-6 col-sm-6 col-12">' +
//                          '<div class="sidebar-image align-center">' +
//                              '<img class="img-fliud" src="'+images9('./' + 'demo-five.png').default+'" alt="demo">' +
//                          '</div>' +
//                          '<div class="row">' +
//                              '<div class="col-lg-6 layout">' +
//                                  '<h5 class="layout-title">Demo 5</h5>' +
//                              '</div>' +
//                              '<div class="col-lg-6 layout">' +
//                                  '<label class="switch">' +
//                                      '<a href="/index-five" class="layout-link"></a>' +
//                                      '<span class="slider round"></span>' +
//                                  '</label>' +
//                              '</div>' +
//                          '</div>' +
//                      '</div>' +
//                  '</div>' +
//                  '<div class="row align-items-center">' +
//                      '<div class="reset-page text-center">' +
//                          '<a href="/index">' +
//                              '<button type="button" class="sidebar-but"><img src="'+images10('./' + 'reset-icon.svg').default+'" alt="reset" class="reset-icon">' +
//                                  '<span>Reset Settings</span>' +
//                              '</button>' +
//                          '</a>' +
//                      '</div>' +
//                  '</div>' +
//              '</div>' +
//          '</div>' +
//      '</div>' +

//      '<div class="sidebar-settings">' +
//          '<div class="sidebar-content sticky-sidebar-one">' +
//              '<div class="sidebar-top">' +
//                  '<div class="container-fluid">' +
//                      '<div class="row align-items-center ">' +
//                          '<div class="col-xl-6 col-sm-6 col-12">' +
//                              '<div class="sidebar-logo">' +
//                                  '<a href="/index" class="logo">' +
//                                      '<img src="'+images11('./' + 'logo.png').default+'" alt="Logo" class="img-flex">' +
//                                  '</a>' +
//                              '</div>' +
//                          '</div>' +
//                          '<div class="col-xl-6 col-sm-6 col-12">' +
//                              '<a class="btn-closed" href="javascript:void(0)"><img class="img-fliud" src="'+images12('./' + 'sidebar-delete-icon.svg').default+'" alt="demo"></a>' +
//                          '</div>' +
//                      '</div>' +
//                  '</div>' +
//              '</div>' +
//              '<div class="container-fluid">' +
//                  '<div class="row align-items-center ">' +
//                      '<h5 class="sidebar-title">Preview Setting</h5>' +
//                      '<h5 class="sidebar-sub-title">Layout Type</h5>' +
//                      '<div class="col-xl-3 col-sm-6">' +
//                          '<div class="sidebar-image-one align-center">' +
//                              '<img class="img-fliud" src="'+images13('./' + 'layout-one.png').default+'" alt="layout">' +
//                          '</div>' +
//                          '<div class="row">' +
//                              '<div class="col-lg-6 setting">' +
//                                  '<h5 class="setting-title">LTR</h5>' +
//                              '</div>' +
//                              '<div class="col-lg-6 setting">' +
//                                  '<label class="switch switch-one">' +
//                                      '<a href="/index" class="layout-link"></a>' +
//                                      '<span class="slider slider-one round"></span>' +
//                                  '</label>' +
//                              '</div>' +
//                          '</div>' +
//                      '</div>' +
//                      '<div class="col-xl-3 col-sm-6">' +
//                          '<div class="sidebar-image-one align-center">' +
//                              '<img class="img-fliud" src="'+images14('./' + 'layout-two.png').default+'" alt="layout">' +
//                          '</div>' +
//                          '<div class="row">' +
//                              '<div class="col-lg-6 setting">' +
//                                  '<h5 class="setting-title">RTL</h5>' +
//                              '</div>' +
//                              '<div class="col-lg-6 setting">' +
//                                  '<label class="switch switch-one">' +
//                                      '<a href="https://kanakku.dreamguystech.com/vuejs/template-rtl/login" class="layout-link"></a>' +
//                                      '<span class="slider slider-one round"></span>' +
//                                  '</label>' +
//                              '</div>' +
//                          '</div>' +
//                      '</div>' +
//                      '<div class="col-xl-3 col-sm-6">' +
//                          '<div class="sidebar-image-one align-center">' +
//                              '<img class="img-fliud" src="'+images15('./' + 'layout-three.png').default+'" alt="layout">' +
//                          '</div>' +
//                          '<div class="row">' +
//                              '<div class="col-lg-6 setting">' +
//                                  '<h5 class="setting-title">BOX</h5>' +
//                              '</div>' +
//                              '<div class="col-lg-6 setting">' +
//                                  '<label class="switch switch-one">' +
//                                      '<a href="/index-three" class="layout-link"></a>' +
//                                      '<span class="slider slider-one round"></span>' +
//                                  '</label>' +
//                              '</div>' +
//                          '</div>' +
//                      '</div>' +
//                  '</div>' +
//                  '<div class="row align-items-center ">' +
//                      '<h5 class="sidebar-sub-title">Sidebar Type</h5>' +
//                      '<div class="col-xl-3 col-sm-6">' +
//                          '<div class="sidebar-image-one align-center">' +
//                              '<img src="'+images16('./' + 'layout-four.png').default+'" alt="layout">' +
//                          '</div>' +
//                          '<div class="row">' +
//                              '<div class="col-lg-6 setting">' +
//                                  '<h5 class="setting-title">Normal</h5>' +
//                              '</div>' +
//                              '<div class="col-lg-6 setting">' +
//                                  '<label class="switch switch-one">' +
//                                      '<a href="/index-two" class="layout-link"></a>' +
//                                      '<span class="slider slider-one round"></span>' +
//                                  '</label>' +
//                              '</div>' +
//                          '</div>' +
//                      '</div>' +
//                      '<div class="col-xl-3 col-sm-6">' +
//                          '<div class="sidebar-image-one align-center">' +
//                              '<img src="'+images17('./' + 'layout-five.png').default+'" alt="layout">' +
//                          '</div>' +
//                          '<div class="row">' +
//                              '<div class="col-lg-6 setting">' +
//                                  '<h5 class="setting-title">Compact</h5>' +
//                              '</div>' +
//                              '<div class="col-lg-6 setting">' +
//                                  '<label class="switch switch-one">' +
//                                      '<a href="/index-five" class="layout-link"></a>' +
//                                      '<span class="slider slider-one round"></span>' +
//                                  '</label>' +
//                              '</div>' +
//                          '</div>' +
//                      '</div>' +
//                  '</div>' +
//                  '<div class="row align-items-center">' +
//                      '<h5 class="sidebar-sub-title">Header & Sidebar Style</h5>' +
//                      '<div class="col-xl-3 col-sm-6">' +
//                          '<div class="sidebar-color align-center">' +
//                              '<span class="color-one"></span>' +
//                          '</div>' +
//                          '<div class="row">' +
//                              '<div class="col setting">' +
//                                  '<h5 class="setting-title">White</h5>' +
//                              '</div>' +
//                              '<div class="col-auto setting">' +
//                                  '<label class="switch switch-one sidebar-type-two">' +
//                                      '<input type="checkbox">' +
//                                      '<span class="slider slider-one round"></span>' +
//                                  '</label>' +
//                              '</div>' +
//                          '</div>' +
//                      '</div>' +
//                      '<div class="col-xl-3 col-sm-6">' +
//                          '<div class="sidebar-color align-center">' +
//                              '<span class="color-two"></span>' +
//                          '</div>' +
//                          '<div class="row">' +
//                              '<div class="col setting">' +
//                                  '<h5 class="setting-title">Lite</h5>' +
//                              '</div>' +
//                              '<div class="col-auto setting">' +
//                                  '<label class="switch switch-one sidebar-type-three">' +
//                                      '<input type="checkbox">' +
//                                      '<span class="slider slider-one round"></span>' +
//                                  '</label>' +
//                              '</div>' +
//                          '</div>' +
//                      '</div>' +
//                      '<div class="col-xl-3 col-sm-6">' +
//                          '<div class="sidebar-color align-center">' +
//                              '<span class="color-three"></span>' +
//                          '</div>' +
//                          '<div class="row">' +
//                              '<div class="col setting">' +
//                                  '<h5 class="setting-title">Dark</h5>' +
//                              '</div>' +
//                              '<div class="col-auto setting">' +
//                                  '<label class="switch switch-one sidebar-type-four">' +
//                                      '<input type="checkbox">' +
//                                      '<span class="slider slider-one round"></span>' +
//                                  '</label>' +
//                              '</div>' +
//                          '</div>' +
//                      '</div>' +
//                      '<div class="col-xl-3 col-sm-6">' +
//                          '<div class="sidebar-color align-center">' +
//                              '<span class="color-eight"></span>' +
//                          '</div>' +
//                          '<div class="row">' +
//                              '<div class="col setting">' +
//                                  '<h5 class="setting-title">Theme</h5>' +
//                              '</div>' +
//                              '<div class="col-auto setting">' +
//                                  '<label class="switch switch-one sidebar-type-five">' +
//                                      '<input type="checkbox">' +
//                                      '<span class="slider slider-one round"></span>' +
//                                  '</label>' +
//                              '</div>' +
//                          '</div>' +
//                      '</div>' +
//                  '</div>' +
//                  '<div class="row align-items-center">' +
//                      '<h5 class="sidebar-sub-title">Primary Skin</h5>' +
//                      '<div class="col-xl-6 col-sm-6">' +
//                          '<div class="sidebar-color-one align-center">' +
//                              '<span class="color-five"></span>' +
//                              '<span class="color-four"></span>' +
//                              '<span class="color-six"></span>' +
//                          '</div>' +
//                          '<div class="row">' +
//                              '<div class="col-lg-6 setting">' +
//                                  '<h5 class="setting-title">Theme</h5>' +
//                              '</div>' +
//                              '<div class="col-lg-6 setting">' +
//                                  '<label class="switch switch-one primary-skin-one">' +
//                                      '<input type="checkbox">' +
//                                      '<span class="slider slider-one round"></span>' +
//                                  '</label>' +
//                              '</div>' +
//                          '</div>' +
//                      '</div>' +
//                      '<div class="col-xl-6 col-sm-6">' +
//                          '<div class="sidebar-color-one align-center">' +
//                              '<span class="color-five"></span>' +
//                              '<span class="color-two"></span>' +
//                              '<span class="color-six"></span>' +
//                          '</div>' +
//                          '<div class="row">' +
//                              '<div class="col-lg-6 setting">' +
//                                  '<h5 class="setting-title">Lite</h5>' +
//                              '</div>' +
//                              '<div class="col-lg-6 setting">' +
//                                  '<label class="switch switch-one primary-skin-two">' +
//                                      '<input type="checkbox">' +
//                                      '<span class="slider slider-one round"></span>' +
//                                  '</label>' +
//                              '</div>' +
//                          '</div>' +
//                      '</div>' +
//                      '<div class="col-xl-6 col-sm-6">' +
//                          '<div class="sidebar-color-one align-center">' +
//                              '<span class="color-three"></span>' +
//                              '<span class="color-four"></span>' +
//                              '<span class="color-seven"></span>' +
//                          '</div>' +
//                          '<div class="row">' +
//                              '<div class="col-lg-6 setting">' +
//                                  '<h5 class="setting-title">Dark</h5>' +
//                              '</div>' +
//                              '<div class="col-lg-6 setting">' +
//                                  '<label class="switch switch-one primary-skin-three">' +
//                                      '<input type="checkbox">' +
//                                      '<span class="slider slider-one round"></span>' +
//                                  '</label>' +
//                              '</div>' +
//                          '</div>' +
//                      '</div>' +
//                  '</div>' +
//                  '<div class="row align-items-center ">' +
//                      '<div class="col-xl-12 col-sm-12">' +
//                          '<div class="reset-page text-center">' +
//                              '<a href="/index">' +
//                                  '<button type="button" class="sidebar-but"><img src="'+images18('./' + 'reset-icon.svg').default+'" alt="reset" class="reset-icon">' +
//                                      '<span>Reset Settings</span>' +
//                                  '</button>' +
//                              '</a>' +
//                          '</div>' +
//                      '</div>' +
//                  '</div>' +
//              '</div>' +
//          '</div>' +
//      '</div>';

//     $("body").append(right_side_views);

//     // Sidebar Visible

//     $(".open-layout").on("click", function (s) {
//       s.preventDefault();
//       $(".sidebar-layout").addClass("show-layout");
//       $(".sidebar-settings").removeClass("show-settings");
//     });
//     $(".btn-closed").on("click", function (s) {
//       s.preventDefault();
//       $(".sidebar-layout").removeClass("show-layout");
//     });
//     $(".open-settings").on("click", function (s) {
//       s.preventDefault();
//       $(".sidebar-settings").addClass("show-settings");
//       $(".sidebar-layout").removeClass("show-layout");
//     });

//     $(".btn-closed").on("click", function (s) {
//       s.preventDefault();
//       $(".sidebar-settings").removeClass("show-settings");
//     });

//     $(".open-siderbar").on("click", function (s) {
//       s.preventDefault();
//       $(".siderbar-view").addClass("show-sidebar");
//     });

//     $(".btn-closed").on("click", function (s) {
//       s.preventDefault();
//       $(".siderbar-view").removeClass("show-sidebar");
//     });

//     // Sidebar Type Two

//     $(document).on("change", ".sidebar-type-two input", function () {
//       if ($(this).is(":checked")) {
//         $(".sidebar").addClass("sidebar-six");
//         $(".sidebar-menu").addClass("sidebar-menu-six");
//         $(".sidebar-menu-three").addClass("sidebar-menu-six");
//         $(".menu-title").addClass("menu-title-six");
//         $(".menu-title-three").addClass("menu-title-six");
//         $(".header").addClass("header-six");
//         $(".header-left-two").addClass("header-left-six");
//         $(".user-menu").addClass("user-menu-six");
//         $(".dropdown-toggle").addClass("dropdown-toggle-six");
//         $(
//           ".header-two .header-left-two .logo:not(.logo-small), .header-four .header-left-four .logo:not(.logo-small)"
//         ).addClass("hide-logo");
//         $(
//           ".header-two .header-left-two .dark-logo, .header-four .header-left-four .dark-logo"
//         ).addClass("show-logo");
//       } else {
//         $(".sidebar").removeClass("sidebar-six");
//         $(".sidebar-menu").removeClass("sidebar-menu-six");
//         $(".sidebar-menu-three").removeClass("sidebar-menu-six");
//         $(".menu-title").removeClass("menu-title-six");
//         $(".menu-title-three").removeClass("menu-title-six");
//         $(".header").removeClass("header-six");
//         $(".header-left-two").removeClass("header-left-six");
//         $(".user-menu").removeClass("user-menu-six");
//         $(".dropdown-toggle").removeClass("dropdown-toggle-six");
//         $(
//           ".header-two .header-left-two .logo, .header-four .header-left-four .logo:not(.logo-small)"
//         ).removeClass("hide-logo");
//         $(
//           ".header-two .header-left-two .dark-logo, .header-four .header-left-four .dark-logo"
//         ).removeClass("show-logo");
//       }
//     });

//     // Sidebar Type Three

//     $(document).on("change", ".sidebar-type-three input", function () {
//       if ($(this).is(":checked")) {
//         $(".sidebar").addClass("sidebar-seven");
//         $(".sidebar-menu").addClass("sidebar-menu-seven");
//         $(".menu-title").addClass("menu-title-seven");
//         $(".header").addClass("header-seven");
//         $(".header-left-two").addClass("header-left-seven");
//         $(".user-menu").addClass("user-menu-seven");
//         $(".dropdown-toggle").addClass("dropdown-toggle-seven");
//         $(
//           ".header-two .header-left-two .logo:not(.logo-small), .header-four .header-left-four .logo:not(.logo-small)"
//         ).addClass("hide-logo");
//         $(
//           ".header-two .header-left-two .dark-logo, .header-four .header-left-four .dark-logo"
//         ).addClass("show-logo");
//       } else {
//         $(".sidebar").removeClass("sidebar-seven");
//         $(".sidebar-menu").removeClass("sidebar-menu-seven");
//         $(".menu-title").removeClass("menu-title-seven");
//         $(".header").removeClass("header-seven");
//         $(".header-left-two").removeClass("header-left-seven");
//         $(".user-menu").removeClass("user-menu-seven");
//         $(".dropdown-toggle").removeClass("dropdown-toggle-seven");
//         $(
//           ".header-two .header-left-two .logo:not(.logo-small), .header-four .header-left-four .logo:not(.logo-small)"
//         ).removeClass("hide-logo");
//         $(
//           ".header-two .header-left-two .dark-logo, .header-four .header-left-four .dark-logo"
//         ).removeClass("show-logo");
//       }
//     });

//     // Sidebar Type Four

//     $(document).on("change", ".sidebar-type-four input", function () {
//       if ($(this).is(":checked")) {
//         $(".sidebar").addClass("sidebar-eight");
//         $(".sidebar-menu").addClass("sidebar-menu-eight");
//         $(".menu-title").addClass("menu-title-eight");
//         $(".header").addClass("header-eight");
//         $(".header-left-two").addClass("header-left-eight");
//         $(".user-menu").addClass("user-menu-eight");
//         $(".dropdown-toggle").addClass("dropdown-toggle-eight");
//         $(".white-logo").addClass("show-logo");
//         $(
//           ".header-one .header-left-one .logo:not(.logo-small), .header-five .header-left-five .logo:not(.logo-small)"
//         ).addClass("hide-logo");
//         $(".header-two .header-left-two .logo:not(.logo-small)").removeClass(
//           "hide-logo"
//         );
//         $(".header-two .header-left-two .dark-logo").removeClass("show-logo");
//       } else {
//         $(".sidebar").removeClass("sidebar-eight");
//         $(".sidebar-menu").removeClass("sidebar-menu-eight");
//         $(".menu-title").removeClass("menu-title-eight");
//         $(".header").removeClass("header-eight");
//         $(".header-left-two").removeClass("header-left-eight");
//         $(".user-menu").removeClass("user-menu-eight");
//         $(".dropdown-toggle").removeClass("dropdown-toggle-eight");
//         $(".white-logo").removeClass("show-logo");
//         $(
//           ".header-one .header-left-one .logo:not(.logo-small), .header-five .header-left-five .logo:not(.logo-small)"
//         ).removeClass("hide-logo");
//       }
//     });

//     // Sidebar Type Five

//     $(document).on("change", ".sidebar-type-five input", function () {
//       if ($(this).is(":checked")) {
//         $(".sidebar").addClass("sidebar-nine");
//         $(".sidebar-menu").addClass("sidebar-menu-nine");
//         $(".menu-title").addClass("menu-title-nine");
//         $(".header").addClass("header-nine");
//         $(".header-left-two").addClass("header-left-nine");
//         $(".user-menu").addClass("user-menu-nine");
//         $(".dropdown-toggle").addClass("dropdown-toggle-nine");
//         $("#toggle_btn").addClass("darktoggle_btn");
//         $(".white-logo").addClass("show-logo");
//         $(
//           ".header-one .header-left-one .logo:not(.logo-small), .header-five .header-left-five .logo:not(.logo-small)"
//         ).addClass("hide-logo");
//       } else {
//         $(".sidebar").removeClass("sidebar-nine");
//         $(".sidebar-menu").removeClass("sidebar-menu-nine");
//         $(".menu-title").removeClass("menu-title-nine");
//         $(".header").removeClass("header-nine");
//         $(".header-left-two").removeClass("header-left-nine");
//         $(".user-menu").removeClass("user-menu-nine");
//         $(".dropdown-toggle").removeClass("dropdown-toggle-nine");
//         $("#toggle_btn").removeClass("darktoggle_btn");
//         $(".white-logo").removeClass("show-logo");
//         $(
//           ".header-one .header-left-one .logo:not(.logo-small), .header-five .header-left-five .logo:not(.logo-small)"
//         ).removeClass("hide-logo");
//       }
//     });

//     //Primary Skin one

//     $(document).on("change", ".primary-skin-one input", function () {
//       if ($(this).is(":checked")) {
//         $(".sidebar-menu").addClass("sidebar-menu-ten");
//       } else {
//         $(".sidebar-menu").removeClass("sidebar-menu-ten");
//       }
//     });

//     //Primary Skin Two

//     $(document).on("change", ".primary-skin-two input", function () {
//       if ($(this).is(":checked")) {
//         $(".sidebar-menu").addClass("sidebar-menu-eleven");
//       } else {
//         $(".sidebar-menu").removeClass("sidebar-menu-eleven");
//       }
//     });

//     //Primary Skin Three

//     $(document).on("change", ".primary-skin-three input", function () {
//       if ($(this).is(":checked")) {
//         $(".sidebar-menu").addClass("sidebar-menu-twelve");
//       } else {
//         $(".sidebar-menu").removeClass("sidebar-menu-twelve");
//       }
//     });

//     feather.replace();
//     var $wrapper = $(".main-wrapper");
//     var $pageWrapper = $(".page-wrapper");
//     var $slimScrolls = $(".slimscroll");
//     // Mobile menu sidebar overlay
//     $("body").append('<div class="sidebar-overlay"></div>');
//     $(document).on("click", "#mobile_btn", function () {
//       $wrapper.toggleClass("slide-nav");
//       $(".sidebar-overlay").toggleClass("opened");
//       $("html").addClass("menu-opened");
//       return false;
//     });
//     $(document).on("mouseover", function (e) {
//       e.stopPropagation();
//       if (
//         $("body").hasClass("mini-sidebar") &&
//         $("#toggle_btn").is(":visible")
//       ) {
//         var targ = $(e.target).closest(".sidebar").length;
//         if (targ) {
//           $("body").addClass("expand-menu");
//           $(".subdrop + ul").slideDown();
//         } else {
//           $("body").removeClass("expand-menu");
//           $(".subdrop + ul").slideUp();
//         }
//         return false;
//       }
//     });
//     // Sidebar overlay
//     $(".sidebar-overlay").on("click", function () {
//       $wrapper.removeClass("slide-nav");
//       $(".sidebar-overlay").removeClass("opened");
//       $("html").removeClass("menu-opened");
//     });
//     // Page Content Height
//     if ($(".page-wrapper").length > 0) {
//       var height = $(window).height();
//       $(".page-wrapper").css("min-height", height);
//     }
//     // Page Content Height Resize
//     $(window).resize(function () {
//       if ($(".page-wrapper").length > 0) {
//         var height = $(window).height();
//         $(".page-wrapper").css("min-height", height);
//       }
//     });
//     $(document).on("click", ".top-nav-search .responsive-search", function () {
//       $(".top-nav-search").toggleClass("active");
//     });
//   },
// };
</script>

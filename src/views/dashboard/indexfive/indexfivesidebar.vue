<template>
    <!-- Sidebar -->
			<div class="sidebar sidebar-four sidebar-hide" id="sidebar">
				<div class="sidebar-inner">
				 <perfect-scrollbar class="scroll-area"  :settings="settings" @ps-scroll-y="scrollHanle">
						<div id="sidebar-menu" class="sidebar-menu sidebar-menu-four">
							<ul>
								<li class="menu-title menu-title-two"><span>Main</span></li>
								<li v-bind:class="{'active': currentPath == 'index-five'}">
									<router-link to="/index"><i data-feather="home"></i>  <span>Dashboard</span></router-link>
								</li>
								<li v-bind:class="{'active': currentPath == 'customers' ||  currentPath == 'add-customer' || currentPath == 'edit-customer'}">
									<router-link to="/customers"><i data-feather="users"></i><span>Customers</span></router-link>
								</li>
								<li v-bind:class="{'active': currentPath == 'estimates' || currentPath == 'add-estimate' || currentPath == 'view-estimate' || currentPath == 'edit-estimate'}">
									<router-link to="/estimates"><i data-feather="file-text"></i> <span>Estimates</span></router-link>
								</li>
								<li class="submenu" v-bind:class="{'active': currentPath == 'invoices-settings' || currentPath == 'view-invoice' || currentPath == 'edit-invoice' || currentPath == 'tax-settings'  || currentPath == 'add-invoice' || currentPath == 'invoice-grid' || currentPath == 'invoices' || currentPath == 'edit-invoice' || currentPath == 'add-invoice' || currentPath == 'invoices-recurring' || currentPath == 'invoices-paid' ||  currentPath == 'invoices-overdue' ||   currentPath == 'invoices-draft' ||  currentPath == 'bank-settings' || currentPath == 'invoices-cancelled'}">
									<a href="javascript:void(0)"><i data-feather="clipboard"></i> <span> Invoices</span> <span class="menu-arrow"></span></a>
									<ul>
										<li><router-link to="/invoices" v-bind:class="{'active': currentPath == 'invoices-recurring' ||  currentPath == 'invoices-paid' ||  currentPath == 'invoices-overdue' ||   currentPath == 'invoices-draft' ||  currentPath == 'invoices-cancelled'}">Invoices List</router-link></li>
										<li><router-link to="/invoice-grid">Invoices Grid</router-link></li>
										<li><router-link to="/add-invoice">Add Invoices</router-link></li>
										<li><router-link to="/edit-invoice">Edit Invoices</router-link></li>
										<li><router-link to="/view-invoice">Invoices Details</router-link></li>
										<li><router-link to="/invoices-settings" v-bind:class="{'active': currentPath == 'bank-settings' || currentPath == 'tax-settings'}">Invoices Settings</router-link></li>
									</ul>
								</li>
								<li v-bind:class="{'active': currentPath == 'add-payments' || currentPath == 'payments'}">
									<router-link to="/payments"><i data-feather="credit-card"></i> <span>Payments</span></router-link>
								</li>
								<li v-bind:class="{'active': currentPath == 'expenses' || currentPath == 'add-expenses' || currentPath == 'edit-expenses'}">
									<router-link to="/expenses"><i data-feather="package"></i> <span>Expenses</span></router-link>
								</li>
								<li class="submenu" v-bind:class="{'active': currentPath == 'taxs-report' || currentPath == 'profit-loss-report' || currentPath == 'sales-report' || currentPath == 'expenses-report'}">
								<a href="javascript:void(0)"><i data-feather="pie-chart"></i> <span> Reports</span> <span class="menu-arrow"></span></a>
								<ul>
									<li><router-link to="/sales-report">Sales Report</router-link></li>
									<li><router-link to="/expenses-report">Expenses Report</router-link></li>
									<li><router-link to="/profit-loss-report">Profit & Loss Report</router-link></li>
									<li><router-link to="/taxs-report">Taxs Report</router-link></li>
								</ul>
							</li>
								<li v-bind:class="{'active': settingsPath}">
									<router-link to="/settings"><i data-feather="settings"></i> <span>Settings</span></router-link>
								</li>
								<li class="submenu" v-bind:class="{'active': currentPath == 'inbox' || currentPath == 'calendar' || currentPath == 'chat'}">
									<a href="javascript:void(0)"><i data-feather="grid"></i> <span> Application</span> <span class="menu-arrow"></span></a>
									<ul>
										<li><router-link to="/chat">Chat</router-link></li>
										<li><router-link to="/calendar">Calendar</router-link></li>
										<li><router-link to="/inbox">Email</router-link></li>
									</ul>
								</li>
								<li class="menu-title menu-title-two"> 
									<span>Pages</span>
								</li>
								<li v-bind:class="{'active': currentPath == 'profile'}"> 
									<router-link to="/profile"><i data-feather="user-plus"></i> <span>Profile</span></router-link>
								</li>
								<li class="submenu">
									<a href="javascript:void(0)"><i data-feather="lock"></i> <span> Authentication </span> <span class="menu-arrow"></span></a>
									<ul>
										<li><router-link to="/"> Login </router-link></li>
										<li><router-link to="/register"> Register </router-link></li>
										<li><router-link to="/forgot-password"> Forgot Password </router-link></li>
										<li><router-link to="/lock-screen"> Lock Screen </router-link></li>
									</ul>
								</li>
								<li class="submenu">
									<a href="javascript:void(0)"><i data-feather="alert-octagon"></i><span> Error Pages </span> <span class="menu-arrow"></span></a>
									<ul>
										<li><router-link to="/404">404 Error </router-link></li>
										<li><router-link to="/500">500 Error </router-link></li>
									</ul>
								</li>
								<li v-bind:class="{'active': currentPath == 'users'}"> 
									<router-link to="/users"><i data-feather="user"></i> <span>Users</span></router-link>
								</li>
								<li v-bind:class="{'active': currentPath == 'blank-page'}"> 
									<router-link to="/blank-page"><i data-feather="file"></i> <span>Blank Page</span></router-link>
								</li>
								
								<li class="menu-title menu-title-two"> 
									<span>UI Interface</span>
								</li>
								<li v-bind:class="{'active': currentPath == 'components'}"> 
									<router-link to="/components"><i data-feather="layers"></i><span>Components</span></router-link>
								</li>
								<li class="submenu" v-bind:class="{'active': currentPath == 'form-basic-inputs' || currentPath == 'form-input-groups' || currentPath == 'form-horizontal' || currentPath == 'form-vertical' || currentPath == 'form-mask' || currentPath == 'form-validation'}">
									<a href="javascript:void(0)"><i data-feather="columns"></i> <span> Forms </span> <span class="menu-arrow"></span></a>
									<ul>
										<li><router-link to="/form-basic-inputs">Basic Inputs </router-link></li>
										<li><router-link to="/form-input-groups">Input Groups </router-link></li>
										<li><router-link to="/form-horizontal">Horizontal Form </router-link></li>
										<li><router-link to="/form-vertical"> Vertical Form </router-link></li>
										<li><router-link to="/form-mask"> Form Mask </router-link></li>
										<li><router-link to="/form-validation"> Form Validation </router-link></li>
									</ul>
								</li>
								<li class="submenu" v-bind:class="{'active': currentPath == 'data-tables' || currentPath == 'tables-basic'}">
									<a href="javascript:void(0)"><i data-feather="layout"></i> <span> Tables </span> <span class="menu-arrow"></span></a>
									<ul>
										<li><router-link to="/tables-basic">Basic Tables </router-link></li>
										<li><router-link to="/data-tables">Data Table </router-link></li>
									</ul>
								</li>
							</ul>
						</div>
				</perfect-scrollbar>
				</div>
			</div>
			<!-- /Sidebar -->
</template>

<script>
    import {PerfectScrollbar}  from 'vue3-perfect-scrollbar'
    import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
    import feather from 'feather-icons'
    export default {
		components: {
		 PerfectScrollbar 
		},
		mounted() {

			feather.replace()
			$('#sidebar-menu a').on('click', function (e) {
			if ($(this).parent().hasClass('submenu')) {
				e.preventDefault();
			}
			if (!$(this).hasClass('subdrop')) {
				$('ul', $(this).parents('ul:first')).slideUp(350);
				$('a', $(this).parents('ul:first')).removeClass('subdrop');
				$(this).next('ul').slideDown(350);
				$(this).addClass('subdrop');
			} else if ($(this).hasClass('subdrop')) {
				$(this).removeClass('subdrop');
				$(this).next('ul').slideUp(350);
			}
		});
		 
		$('#sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');
	
		},
		computed: {
			currentPath() {
				return this.$route.name;
			},
			settingsPath() {
				return  this.$route.name == 'settings'  || this.$route.name == 'preferences' || this.$route.name == 'tax-types' || this.$route.name == 'expense-category' || this.$route.name == 'notifications' || this.$route.name == 'change-password' || this.$route.name == 'delete-account'
			}
		},
		  data() {
    return {
                settings: {
                    suppressScrollX: true,
                },
                activeClass: 'active',
            };
     

              //  isactive : true
    },
    methods: {
    scrollHanle(evt) {
      console.log(evt)
    }
  },
}
</script>
<style>
    .scroll-area {
      position: relative;
      margin: auto;
      height: calc(100vh - 60px);
      background-color: transparent !important;
  }
</style>
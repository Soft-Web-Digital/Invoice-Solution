<template>
  <!-- Sidebar -->
  <div class="sidebar" id="sidebar">
    <div class="sidebar-inner">
      <perfect-scrollbar
        class="scroll-area"
        :settings="settings"
        @ps-scroll-y="scrollHanle"
      >
        <div id="sidebar-menu" class="sidebar-menu">
          <ul>
            <li class="menu-title"><span>Main</span></li>
            <li
              v-bind:class="{
                active: currentPath == '/' || currentPath == '/',
              }"
            >
              <router-link to="/"
                ><i data-feather="home"></i> <span>Dashboard</span></router-link
              >
            </li>

            <li
              v-bind:class="{
                active:
                  currentPath == 'estimates' ||
                  currentPath == 'add-estimate' ||
                  currentPath == 'view-estimate' ||
                  currentPath == 'edit-estimate',
              }"
            >
              <router-link to="/estimates"
                ><i data-feather="file-text"></i>
                <span>Estimates</span></router-link
              >
            </li>
            <!-- <li
              class="submenu"
              v-bind:class="{
                active:
                  currentPath == 'view-invoice-two' ||
                  currentPath == 'invoice-grid-two' ||
                  currentPath == 'invoices-settings' ||
                  currentPath == 'view-invoice' ||
                  currentPath == 'edit-invoice' ||
                  currentPath == 'tax-settings' ||
                  currentPath == 'add-invoice' ||
                  currentPath == 'invoice-grid' ||
                  currentPath == 'invoices' ||
                  currentPath == 'edit-invoice' ||
                  currentPath == 'add-invoice' ||
                  currentPath == 'invoices-recurring' ||
                  currentPath == 'invoices-paid' ||
                  currentPath == 'invoices-overdue' ||
                  currentPath == 'invoices-draft' ||
                  currentPath == 'bank-settings' ||
                  currentPath == 'invoices-cancelled',
              }"
            >
              <a href="javascript:void(0)"
                ><i data-feather="clipboard"></i> <span> Invoices</span>
                <span class="menu-arrow"></span
              ></a>
              <ul>
                <li>
                  <router-link
                    to="/invoices"
                    v-bind:class="{
                      active:
                        currentPath == 'invoices-recurring' ||
                        currentPath == 'invoices-paid' ||
                        currentPath == 'invoices-overdue' ||
                        currentPath == 'invoices-draft' ||
                        currentPath == 'invoices-cancelled',
                    }"
                    >Invoices List</router-link
                  >
                </li>
                <li>
                  <router-link to="/invoice-grid">Invoices Grid</router-link>
                </li>
                <li>
                  <router-link to="/invoice-grid-two"
                    >Invoices Grid 2</router-link
                  >
                </li>
                <li>
                  <router-link to="/add-invoice">Add Invoices</router-link>
                </li>
                <li>
                  <router-link to="/edit-invoice">Edit Invoices</router-link>
                </li>
                <li>
                  <router-link to="/view-invoice">Invoices Details</router-link>
                </li>
                <li>
                  <router-link to="/view-invoice-two"
                    >Invoices Details 2</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/invoices-settings"
                    v-bind:class="{
                      active:
                        currentPath == 'bank-settings' ||
                        currentPath == 'tax-settings',
                    }"
                    >Invoices Settings</router-link
                  >
                </li>
              </ul>
            </li> -->
            <!-- <li
              v-bind:class="{
                active:
                  currentPath == 'invoice-items' ||
                  currentPath == 'invoice-category',
              }"
            >
              <router-link to="/invoice-items"
                ><i data-feather="star"></i> <span>Items</span></router-link
              >
            </li> -->
            <li
              class="submenu"
              v-bind:class="{
                active:
                  currentPath == 'payouts' ||
                  currentPath == 'deposits' ||
                  currentPath == 'transactions',
              }"
            >
              <a href="javascript:void(0)"
                ><i data-feather="credit-card"></i>
                <span> All Transactions</span> <span class="menu-arrow"></span
              ></a>
              <ul>
                <li>
                  <router-link to="/transactions">All Transactions</router-link>
                </li>
                <li>
                  <router-link to="/transactions/payouts">Payouts</router-link>
                </li>
                <li>
                  <router-link to="/transactions/deposits"
                    >Deposits</router-link
                  >
                </li>
              </ul>
            </li>
            <li
              v-bind:class="{
                active: currentPath == 'users',
              }"
            >
              <router-link to="/users"
                ><i data-feather="users"></i><span>Users</span></router-link
              >
            </li>
            <li
              v-bind:class="{
                active: currentPath == 'customers',
              }"
            >
              <router-link to="/customers"
                ><i data-feather="users"></i><span>Customers</span></router-link
              >
            </li>
            <li
              v-bind:class="{
                active: currentPath == 'subscriptions',
              }"
            >
              <router-link to="/subscriptions"
                ><i data-feather="layers"></i
                ><span>Subscriptions</span></router-link
              >
            </li>
            <li
              v-bind:class="{
                active:
                  currentPath == 'admin' ||
                  currentPath == 'add-admin' ||
                  currentPath == 'edit-admin',
              }"
            >
              <router-link to="/admin"
                ><i data-feather="users"></i> <span>Admins</span></router-link
              >
            </li>
            <li
              v-bind:class="{
                active:
                  currentPath == 'roles-and-permissions' ||
                  currentPath == 'add-role' ||
                  currentPath == 'edit-role',
              }"
            >
              <router-link to="/roles-and-permissions"
                ><i data-feather="user-plus"></i>
                <span>Roles and Permissions</span></router-link
              >
            </li>
            <li
              v-bind:class="{
                active:
                  currentPath == 'coupons' ||
                  currentPath == 'add-coupon' ||
                  currentPath == 'edit-coupon',
              }"
            >
              <router-link to="/coupons"
                ><i data-feather="shopping-bag"></i>
                <span>Coupon</span></router-link
              >
            </li>
            <li
              v-bind:class="{
                active:
                  currentPath == 'notification' ||
                  currentPath == 'create-notification' ||
                  currentPath == 'edit-notification',
              }"
            >
              <router-link to="/notification"
                ><i data-feather="bell"></i>
                <span>Notification</span></router-link
              >
            </li>
            <!-- <li
              class="submenu"
              v-bind:class="{
                active:
                  currentPath == 'taxs-report' ||
                  currentPath == 'profit-loss-report' ||
                  currentPath == 'sales-report' ||
                  currentPath == 'expenses-report',
              }"
            >
              <a href="javascript:void(0)"
                ><i data-feather="pie-chart"></i> <span> Reports</span>
                <span class="menu-arrow"></span
              ></a>
              <ul>
                <li>
                  <router-link to="/sales-report">Sales Report</router-link>
                </li>
                <li>
                  <router-link to="/expenses-report"
                    >Expenses Report</router-link
                  >
                </li>
                <li>
                  <router-link to="/profit-loss-report"
                    >Profit & Loss Report</router-link
                  >
                </li>
                <li>
                  <router-link to="/taxs-report">Taxs Report</router-link>
                </li>
              </ul>
            </li>
            <li
              class="submenu"
              v-bind:class="{
                active:
                  currentPath == 'blog' ||
                  currentPath == 'add-blog' ||
                  currentPath == 'edit-blog' ||
                  currentPath == 'blog-categories',
              }"
            >
              <a href="javascript:;"
                ><i data-feather="grid"></i> <span> Blogs</span>
                <span class="menu-arrow"></span>
              </a>
              <ul>
                <li><router-link to="/blog">All Blogs</router-link></li>
                <li><router-link to="/add-blog">Add Blog</router-link></li>
                <li><router-link to="/edit-blog">Edit Blog</router-link></li>
                <li>
                  <router-link to="/blog-Categories">Categories</router-link>
                </li>
              </ul>
            </li>
            <li v-bind:class="{ active: settingsPath }">
              <router-link to="/settings"
                ><i data-feather="settings"></i>
                <span>Settings</span></router-link
              >
            </li>
            <li
              class="submenu"
              v-bind:class="{
                active:
                  currentPath == 'inbox' ||
                  currentPath == 'calendar' ||
                  currentPath == 'chat',
              }"
            >
              <a href="javascript:void(0)"
                ><i data-feather="grid"></i> <span> Application</span>
                <span class="menu-arrow"></span
              ></a>
              <ul>
                <li><router-link to="/chat">Chat</router-link></li>
                <li><router-link to="/calendar">Calendar</router-link></li>
                <li><router-link to="/inbox">Email</router-link></li>
              </ul>
            </li>
            <li class="menu-title">
              <span>Pages</span>
            </li>
            <li v-bind:class="{ active: currentPath == 'profile' }">
              <router-link to="/profile"
                ><i data-feather="user-plus"></i>
                <span>Profile</span></router-link
              >
            </li>
            <li class="submenu">
              <a href="javascript:void(0)"
                ><i data-feather="lock"></i> <span> Authentication </span>
                <span class="menu-arrow"></span
              ></a>
              <ul>
                <li><router-link to="/"> Login </router-link></li>
                <li><router-link to="/register"> Register </router-link></li>
                <li>
                  <router-link to="/forgot-password">
                    Forgot Password
                  </router-link>
                </li>
                <li>
                  <router-link to="/lock-screen"> Lock Screen </router-link>
                </li>
              </ul>
            </li>
            <li class="submenu">
              <a href="javascript:void(0)"
                ><i data-feather="alert-octagon"></i><span> Error Pages </span>
                <span class="menu-arrow"></span
              ></a>
              <ul>
                <li><router-link to="/error-404">404 Error </router-link></li>
                <li><router-link to="/error-500">500 Error </router-link></li>
              </ul>
            </li>
            <li v-bind:class="{ active: currentPath == 'users' }">
              <router-link to="/users"
                ><i data-feather="user"></i> <span>Users</span></router-link
              >
            </li>
            <li v-bind:class="{ active: currentPath == 'blank-page' }">
              <router-link to="/blank-page"
                ><i data-feather="file"></i>
                <span>Blank Page</span></router-link
              >
            </li>

            <li class="menu-title">
              <span>UI Interface</span>
            </li>
            <li
              class="submenu"
              v-bind:class="{
                active:
                  currentPath == 'alerts' ||
                  currentPath == 'accordions' ||
                  currentPath == 'avatar' ||
                  currentPath == 'badges' ||
                  currentPath == 'buttons' ||
                  currentPath == 'buttongroup' ||
                  currentPath == 'buttongroup' ||
                  currentPath == 'breadcrumbs' ||
                  currentPath == 'cards' ||
                  currentPath == 'carousel' ||
                  currentPath == 'dropdowns' ||
                  currentPath == 'grid' ||
                  currentPath == 'images' ||
                  currentPath == 'lightbox' ||
                  currentPath == 'media' ||
                  currentPath == 'modal' ||
                  currentPath == 'offcanvas' ||
                  currentPath == 'pagination' ||
                  currentPath == 'popover' ||
                  currentPath == 'progress' ||
                  currentPath == 'placeholders' ||
                  currentPath == 'rangeslider' ||
                  currentPath == 'spinners' ||
                  currentPath == 'sweetalerts' ||
                  currentPath == 'tab' ||
                  currentPath == 'toastr' ||
                  currentPath == 'tooltip' ||
                  currentPath == 'typography' ||
                  currentPath == 'video',
              }"
            >
              <a href="javascript:;"
                ><i class="fab fa-get-pocket"></i> <span>Base UI </span>
                <span class="menu-arrow"></span
              ></a>
              <ul>
                <li><router-link to="alerts">Alerts</router-link></li>
                <li><router-link to="accordions">Accordions</router-link></li>
                <li><router-link to="avatar">Avatar</router-link></li>
                <li><router-link to="badges">Badges</router-link></li>
                <li><router-link to="buttons">Buttons</router-link></li>
                <li>
                  <router-link to="buttongroup">Button Group</router-link>
                </li>
                <li><router-link to="breadcrumbs">Breadcrumb</router-link></li>
                <li><router-link to="cards">Cards</router-link></li>
                <li><router-link to="carousel">Carousel</router-link></li>
                <li><router-link to="dropdowns">Dropdowns</router-link></li>
                <li><router-link to="grid">Grid</router-link></li>
                <li><router-link to="images">Images</router-link></li>
                <li><router-link to="lightbox">Lightbox</router-link></li>
                <li><router-link to="media">Media</router-link></li>
                <li><router-link to="modal">Modals</router-link></li>
                <li><router-link to="offcanvas">Offcanvas</router-link></li>
                <li><router-link to="pagination">Pagination</router-link></li>
                <li><router-link to="popover">Popover</router-link></li>
                <li><router-link to="progress">Progress Bars</router-link></li>
                <li>
                  <router-link to="placeholders">Placeholders</router-link>
                </li>
                <li>
                  <router-link to="rangeslider">Range Slider</router-link>
                </li>
                <li><router-link to="spinners">Spinner</router-link></li>
                <li>
                  <router-link to="sweetalerts">Sweet Alerts</router-link>
                </li>
                <li><router-link to="tab">Tabs</router-link></li>
                <li><router-link to="toastr">Toasts</router-link></li>
                <li><router-link to="tooltip">Tooltip</router-link></li>
                <li><router-link to="typography">Typography</router-link></li>
                <li><router-link to="video">Video</router-link></li>
              </ul>
            </li>
            <li
              class="submenu"
              v-bind:class="{
                active:
                  currentPath == 'ribbon' ||
                  currentPath == 'clipboard' ||
                  currentPath == 'drag-drop' ||
                  currentPath == 'timeline' ||
                  currentPath == 'horizontal-timeline' ||
                  currentPath == 'form-wizard' ||
                  currentPath == 'rating' ||
                  currentPath == 'text-editor' ||
                  currentPath == 'counter' ||
                  currentPath == 'scrollbar' ||
                  currentPath == 'notification' ||
                  currentPath == 'stickynote',
              }"
            >
              <a href="javascript:;"
                ><i data-feather="box"></i> <span>Elements </span>
                <span class="menu-arrow"></span
              ></a>
              <ul>
                <li><router-link to="ribbon">Ribbon</router-link></li>
                <li><router-link to="clipboard">Clipboard</router-link></li>
                <li><router-link to="drag-drop">Drag & Drop</router-link></li>
                <li><router-link to="rating">Rating</router-link></li>
                <li><router-link to="text-editor">Text Editor</router-link></li>
                <li><router-link to="counter">Counter</router-link></li>
                <li><router-link to="scrollbar">Scrollbar</router-link></li>
                <li>
                  <router-link to="notification">Notification</router-link>
                </li>
                <li><router-link to="stickynote">Sticky Note</router-link></li>
                <li><router-link to="timeline">Timeline</router-link></li>
                <li>
                  <router-link to="horizontal-timeline"
                    >Horizontal Timeline</router-link
                  >
                </li>
                <li><router-link to="form-wizard">Form Wizard</router-link></li>
              </ul>
            </li>
            <li
              class="submenu"
              v-bind:class="{
                active:
                  currentPath == 'chart-apex' ||
                  currentPath == 'chart-js' ||
                  currentPath == 'chart-morris' ||
                  currentPath == 'chart-flot' ||
                  currentPath == 'chart-c3',
              }"
            >
              <a href="javascript:;"
                ><i data-feather="bar-chart-2"></i> <span> Charts </span>
                <span class="menu-arrow"></span
              ></a>
              <ul>
                <li><router-link to="chart-apex">Apex Charts</router-link></li>
                <li><router-link to="chart-js">Chart Js</router-link></li>
                <li>
                  <router-link to="chart-morris">Morris Charts</router-link>
                </li>
                <li><router-link to="chart-flot">Flot Charts</router-link></li>
                <li><router-link to="chart-c3">C3 Charts</router-link></li>
              </ul>
            </li>
            <li
              class="submenu"
              v-bind:class="{
                active:
                  currentPath == 'icon-fontawesome' ||
                  currentPath == 'icon-feather' ||
                  currentPath == 'icon-ionic' ||
                  currentPath == 'icon-material' ||
                  currentPath == 'icon-pe7' ||
                  currentPath == 'icon-simpleline' ||
                  currentPath == 'icon-themify' ||
                  currentPath == 'icon-weather' ||
                  currentPath == 'icon-typicon' ||
                  currentPath == 'icon-flag',
              }"
            >
              <a href="javascript:;"
                ><i data-feather="award"></i> <span> Icons </span>
                <span class="menu-arrow"></span
              ></a>
              <ul>
                <li>
                  <router-link to="icon-fontawesome"
                    >Fontawesome Icons</router-link
                  >
                </li>
                <li>
                  <router-link to="icon-feather">Feather Icons</router-link>
                </li>
                <li><router-link to="icon-ionic">Ionic Icons</router-link></li>
                <li>
                  <router-link to="icon-material">Material Icons</router-link>
                </li>
                <li><router-link to="icon-pe7">Pe7 Icons</router-link></li>
                <li>
                  <router-link to="icon-simpleline"
                    >Simpleline Icons</router-link
                  >
                </li>
                <li>
                  <router-link to="icon-themify">Themify Icons</router-link>
                </li>
                <li>
                  <router-link to="icon-weather">Weather Icons</router-link>
                </li>
                <li>
                  <router-link to="icon-typicon">Typicon Icons</router-link>
                </li>
                <li><router-link to="icon-flag">Flag Icons</router-link></li>
              </ul>
            </li>
            <li
              class="submenu"
              v-bind:class="{
                active:
                  currentPath == 'form-basic-inputs' ||
                  currentPath == 'form-input-groups' ||
                  currentPath == 'form-horizontal' ||
                  currentPath == 'form-vertical' ||
                  currentPath == 'form-mask' ||
                  currentPath == 'form-validation',
              }"
            >
              <a href="javascript:void(0)"
                ><i data-feather="columns"></i> <span> Forms </span>
                <span class="menu-arrow"></span
              ></a>
              <ul>
                <li>
                  <router-link to="/form-basic-inputs"
                    >Basic Inputs
                  </router-link>
                </li>
                <li>
                  <router-link to="/form-input-groups"
                    >Input Groups
                  </router-link>
                </li>
                <li>
                  <router-link to="/form-horizontal"
                    >Horizontal Form
                  </router-link>
                </li>
                <li>
                  <router-link to="/form-vertical"> Vertical Form </router-link>
                </li>
                <li><router-link to="/form-mask"> Form Mask </router-link></li>
                <li>
                  <router-link to="/form-validation">
                    Form Validation
                  </router-link>
                </li>
              </ul>
            </li>
            <li
              class="submenu"
              v-bind:class="{
                active:
                  currentPath == 'data-tables' || currentPath == 'tables-basic',
              }"
            >
              <a href="javascript:void(0)"
                ><i data-feather="layout"></i> <span> Tables </span>
                <span class="menu-arrow"></span
              ></a>
              <ul>
                <li>
                  <router-link to="/tables-basic">Basic Tables </router-link>
                </li>
                <li>
                  <router-link to="/data-tables">Data Table </router-link>
                </li>
              </ul>
            </li> -->
          </ul>
        </div>
      </perfect-scrollbar>
    </div>
  </div>
  <!-- /Sidebar -->
</template>

<script>
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";
import feather from "feather-icons";
export default {
  components: {
    PerfectScrollbar,
  },
  mounted() {
    feather.replace();
    $("#sidebar-menu a").on("click", function (e) {
      if ($(this).parent().hasClass("submenu")) {
        e.preventDefault();
      }
      if (!$(this).hasClass("subdrop")) {
        $("ul", $(this).parents("ul:first")).slideUp(350);
        $("a", $(this).parents("ul:first")).removeClass("subdrop");
        $(this).next("ul").slideDown(350);
        $(this).addClass("subdrop");
      } else if ($(this).hasClass("subdrop")) {
        $(this).removeClass("subdrop");
        $(this).next("ul").slideUp(350);
      }
    });

    $("#sidebar-menu ul li.submenu a.active")
      .parents("li:last")
      .children("a:first")
      .addClass("active")
      .trigger("click");
  },
  computed: {
    currentPath() {
      return this.$route.name;
    },
    settingsPath() {
      return (
        this.$route.name == "settings" ||
        this.$route.name == "preferences" ||
        this.$route.name == "tax-types" ||
        this.$route.name == "expense-category" ||
        this.$route.name == "notifications" ||
        this.$route.name == "change-password" ||
        this.$route.name == "delete-account"
      );
    },
  },
  data() {
    return {
      settings: {
        suppressScrollX: true,
      },
      activeClass: "active",
    };

    //  isactive : true
  },
  methods: {
    scrollHanle(evt) {
      //   console.log(evt);
    },
  },
};
</script>
<style>
.scroll-area {
  position: relative;
  margin: auto;
  height: calc(100vh - 60px);
  background-color: transparent !important;
}
</style>

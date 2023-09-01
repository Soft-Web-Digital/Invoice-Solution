import { createRouter, createWebHistory } from "vue-router";
import AddCustomer from "../views/customer/addcustomer/AddCustomer";
import AddEstimate from "../views/estimate/addestimate/AddEstimate";
import AddExpense from "../views/expense/addexpense/AddExpense";
import AddInvoice from "../views/invoices/addinvoice/AddInvoice";
import AddPayment from "../views/payment/addpayment/AddPayment";
import BlankPage from "../views/pages/BlankPage";
import Calendar from "../views/application/calendar/Calendar";
import ChangePassword from "../views/settings/changepassword/ChangePassword";
import Chat from "../views/application/chat/Chat";
import Customer from "../views/customer/customer/Customer";
import DataTable from "../views/uiinterface/table/datatable/DataTable";
import DeleteAccount from "../views/settings/deleteaccount/DeleteAccount";
import EditCustomer from "../views/customer/editcustomer/EditCustomer";
import EditEstimate from "../views/estimate/editestimate/EditEstimate";
import EditExpense from "../views/expense/editexpense/EditExpense";
import Editinvoice from "../views/invoices/editinvoice/EditInvoice";
import Error404 from "../views/pages/error/error404/Error404";
import Error500 from "../views/pages/error/error500/Error500";
import Estimate from "../views/estimate/estimates/Estimate";
import ExpenseCategory from "../views/settings/expensecategory/ExpenseCategory";
import Expense from "../views/expense/expense/Expense";
import ExpenseReport from "../views/report/expensereport/ExpenseReport";
import ForgotPassword from "../views/pages/ForgotPassword";
import LockScreen from "../views/pages/ResetPassword.vue";
import Login from "../views/pages/Login";
import Register from "../views/pages/Register";
import FormBasic from "../views/uiinterface/form/formbasic/FormBasic";
import FormHorizontal from "../views/uiinterface/form/formhorizontal/FormHorizontal";
import InputGroup from "../views/uiinterface/form/inputgroup/InputGroup";
import FormMask from "../views/uiinterface/form/formmask/FormMask";
import FormValidation from "../views/uiinterface/form/formvalidation/FormValidation";
import FormVertical from "../views/uiinterface/form/formvertical/FormVertical";
import Inbox from "../views/application/email/inbox/Inbox";
import Dashboard from "../views/dashboard/index/Index";
import invoices from "../views/invoices/invoicelist/invoices";
// import Notification from "../views/settings/notification/Notification";
import Payment from "../views/payment/payment/Payment";
import Preference from "../views/settings/preferences/Preference";
import Profile from "../views/pages/profile/Profile";
import ProfitLossReport from "../views/report/profitlossreport/ProfitLoss";
import SalesReport from "../views/report/salesreport/SalesReport";
import Setting from "../views/settings/settings/Setting";
import TableBasic from "../views/uiinterface/table/tablebasic/TableBasic";
import TaxReport from "../views/report/taxreport/TaxReport";
import TaxType from "../views/settings/taxtype/TaxType";
import User from "../views/pages/user/User";
import ViewEstimate from "../views/estimate/viewestimate/ViewEstimate";
import ViewInvoice from "../views/invoices/viewinvoice/ViewInvoice";
import banksetting from "../views/invoices/invoicesetting/banksetting";
import invoicegrid from "../views/invoices/invoicegrid/invoicegrid";
import invoicecancelled from "../views/invoices/invoicelist/invoicecancelled";
import invoicedraft from "../views/invoices/invoicelist/invoicedraft";
import invoiceoverdue from "../views/invoices/invoicelist/invoiceoverdue";
import taxsetting from "../views/invoices/invoicesetting/taxsetting";
import invoicessetting from "../views/invoices/invoicesetting/invoicessetting";
import invoicepaid from "../views/invoices/invoicelist/invoicepaid";
import invoicerecurring from "../views/invoices/invoicelist/invoicerecurring";
import indexthree from "../views/dashboard/indexthree/indexthree";
import indextwo from "../views/dashboard/indextwo/indextwo";
import indexfive from "../views/dashboard/indexfive/indexfive";
import indexfour from "../views/dashboard/indexfour/indexfour";
import addblog from "../views/blog/addblog";
import blog from "../views/blog/blog";
import blogcategories from "../views/blog/blogcategories";
import blogdetails from "../views/blog/blogdetails";
import editblog from "../views/blog/editblog";
import invoicegridtwo from "../views/invoicegridtwo";
import viewinvoicetwo from "../views/viewinvoicetwo";
import pendingblog from "../views/pendingblog";
import accordions from "../views/uiinterface/baseui/accordions";
import alerts from "../views/uiinterface/baseui/alerts";
import avatar from "../views/uiinterface/baseui/avatar";
import badges from "../views/uiinterface/baseui/badges";
import buttongroup from "../views/uiinterface/baseui/buttongroup";
import buttons from "../views/uiinterface/baseui/buttons";
import cards from "../views/uiinterface/baseui/cards";
import carousel from "../views/uiinterface/baseui/carousel";
import dropdowns from "../views/uiinterface/baseui/dropdowns";
import grid from "../views/uiinterface/baseui/grid";
import images from "../views/uiinterface/baseui/images";
import media from "../views/uiinterface/baseui/media";
import modal from "../views/uiinterface/baseui/modal";
import offcanvas from "../views/uiinterface/baseui/offcanvas";
import pagination from "../views/uiinterface/baseui/pagination";
import progress from "../views/uiinterface/baseui/progress";
import placeholders from "../views/uiinterface/baseui/placeholders";
import popover from "../views/uiinterface/baseui/popover";
import spinners from "../views/uiinterface/baseui/spinners";
import tab from "../views/uiinterface/baseui/tab";
import typography from "../views/uiinterface/baseui/typography";
import video from "../views/uiinterface/baseui/video";
import breadcrumbs from "../views/uiinterface/baseui/breadcrumbs";
import lightbox from "../views/uiinterface/baseui/lightbox";
import rangeslider from "../views/uiinterface/baseui/rangeslider";
import sweetalerts from "../views/uiinterface/baseui/sweetalerts";
import toastr from "../views/uiinterface/baseui/toastr";
import tooltip from "../views/uiinterface/baseui/tooltip";
import ribbon from "../views/uiinterface/elements/ribbon";
import clipboard from "../views/uiinterface/elements/clipboard";
import dragdrop from "../views/uiinterface/elements/drag-drop";
import rating from "../views/uiinterface/elements/rating";
import texteditor from "../views/uiinterface/elements/text-editor";
import counter from "../views/uiinterface/elements/counter";
import scrollbar from "../views/uiinterface/elements/scrollbar";
import notificationelement from "../views/uiinterface/elements/notificationelement";
import stickynote from "../views/uiinterface/elements/stickynote";
import timeline from "../views/uiinterface/elements/timeline";
import horizontaltimeline from "../views/uiinterface/elements/horizontal-timeline";
import formwizard from "../views/uiinterface/elements/form-wizard";
import chartapex from "../views/uiinterface/chart/chart-apex";
import chartjs from "../views/uiinterface/chart/chart-js";
import chartmorris from "../views/uiinterface/chart/chart-morris";
import chartflot from "../views/uiinterface/chart/chart-flot";
import chartc3 from "../views/uiinterface/chart/chart-c3";
import iconfontawesome from "../views/uiinterface/icons/icon-fontawesome";
import iconfeather from "../views/uiinterface/icons/icon-feather";
import iconionic from "../views/uiinterface/icons/icon-ionic";
import iconmaterial from "../views/uiinterface/icons/icon-material";
import iconpe7 from "../views/uiinterface/icons/icon-pe7";
import iconsimpleline from "../views/uiinterface/icons/icon-simpleline";
import iconthemify from "../views/uiinterface/icons/icon-themify";
import iconweather from "../views/uiinterface/icons/icon-weather";
import icontypicon from "../views/uiinterface/icons/icon-typicon";
import iconflag from "../views/uiinterface/icons/icon-flag";
import invoiceitems from "../views/invoices/invoice-items";
import invoicecategory from "../views/invoices/invoice-category";

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/pages/Login"),
  },
  {
    path: "/",
    name: "index",
    component: () => import("../views/dashboard/index/Index"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/add-customer",
    name: "add-customer",
    component: () => import("../views/customer/addcustomer/AddCustomer"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/add-estimate",
    name: "add-estimate",
    component: () => import("../views/estimate/addestimate/AddEstimate"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/add-admin",
    name: "add-admin",
    component: () => import("../views/expense/addexpense/AddExpense"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/roles-and-permissions",
    name: "roles-and-permissions",
    component: () => import("../views/roles-and-permissions/roles/Roles"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/add-role",
    name: "add-role",
    component: () => import("../views/roles-and-permissions/add-role/AddRole"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/edit-role/:id",
    name: "edit-role",
    component: () =>
      import("../views/roles-and-permissions/edit-role/EditRole"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/coupons",
    name: "coupons",
    component: () => import("../views/coupons/coupon/Coupons"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/add-coupon",
    name: "add-coupon",
    component: () => import("../views/coupons/add-coupon/AddCoupon"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/edit-coupon/:id",
    name: "edit-coupon",
    component: () => import("../views/coupons/edit-coupon/EditCoupon"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/notification",
    name: "notification",
    component: () => import("../views/notification/Notification"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/create-notification",
    name: "create-notification",
    component: () => import("../views/notification/create-notification/Index"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/edit-notification",
    name: "edit-notification",
    component: () => import("../views/notification/edit-notification/Index"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/add-invoice",
    name: "add-invoice",
    component: () => import("../views/invoices/addinvoice/AddInvoice"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/add-payments",
    name: "add-payments",
    component: () => import("../views/payment/addpayment/AddPayment"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/blank-page",
    name: "blank-page",
    component: () => import("../views/pages/BlankPage"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/calendar",
    name: "calendar",
    component: () => import("../views/application/calendar/Calendar"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/change-password",
    name: "change-password",
    component: () => import("../views/settings/changepassword/ChangePassword"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/chat",
    name: "chat",
    component: () => import("../views/application/chat/Chat"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/customers",
    name: "customers",
    component: () => import("../views/customer/customer/Customer"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/data-tables",
    name: "data-tables",
    component: () => import("../views/uiinterface/table/datatable/DataTable"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/delete-account",
    name: "delete-account",
    component: () => import("../views/settings/deleteaccount/DeleteAccount"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/edit-customer",
    name: "edit-customer",
    component: () => import("../views/customer/editcustomer/EditCustomer"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/edit-estimate",
    name: "edit-estimate",
    component: () => import("../views/estimate/editestimate/EditEstimate"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/edit-admin/:id",
    name: "edit-admin",
    component: () => import("../views/expense/editexpense/EditExpense"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/edit-invoice",
    name: "edit-invoice",
    component: () => import("../views/invoices/editinvoice/EditInvoice"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/error-404",
    name: "error-404",
    component: () => import("../views/pages/error/error404/Error404"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/error-500",
    name: "error-500",
    component: () => import("../views/pages/error/error500/Error500"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/estimates",
    name: "estimates",
    component: () => import("../views/estimate/estimates/Estimate"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/expense-category",
    name: "expense-category",
    component: () =>
      import("../views/settings/expensecategory/ExpenseCategory"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/expense/expense/Expense"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/expenses-report",
    name: "expenses-report",
    component: () => import("../views/report/expensereport/ExpenseReport"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: () => import("../views/pages/ForgotPassword"),
  },
  {
    path: "/form-basic-inputs",
    name: "form-basic-inputs",
    component: () => import("../views/uiinterface/form/formbasic/FormBasic"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/form-horizontal",
    name: "form-horizontal",
    component: () =>
      import("../views/uiinterface/form/formhorizontal/FormHorizontal"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/form-input-groups",
    name: "form-input-groups",
    component: () => import("../views/uiinterface/form/inputgroup/InputGroup"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/form-mask",
    name: "form-mask",
    component: () => import("../views/uiinterface/form/formmask/FormMask"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/form-validation",
    name: "form-validation",
    component: () =>
      import("../views/uiinterface/form/formvalidation/FormValidation"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/form-vertical",
    name: "form-vertical",
    component: () =>
      import("../views/uiinterface/form/formvertical/FormVertical"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/inbox",
    name: "inbox",
    component: () => import("../views/application/email/inbox/Inbox"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/invoices",
    name: "invoices",
    component: () => import("../views/invoices/invoicelist/invoices"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/reset-password",
    name: "reset-password",
    component: () => import("../views/pages/ResetPassword"),
  },
  // {
  //   path: "/notifications",
  //   name: "notifications",
  //   component: () => import("../views/settings/notification/Notification"),
  //   meta: {
  //     requiresAuth: true,
  //   },
  // },
  {
    path: "/subscriptions",
    name: "subscriptions",
    component: () => import("../views/subscriptions/Subscription"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/add-subscriptions",
    name: "addsubscriptions",
    component: () => import("../views/subscriptions/add/Add-Subscription.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/edit-subscriptions",
    name: "editsubscriptions",
    component: () =>
      import("../views/subscriptions/edit/Edit-Subscription.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/transactions",
    name: "transactions",
    component: () => import("../views/payment/payment/Payment"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/transactions/deposits",
    name: "deposits",
    component: () => import("../views/payment/payment/Deposit"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/transactions/payouts",
    name: "payouts",
    component: () => import("../views/payment/payment/Payouts"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/preferences",
    name: "preferences",
    component: () => import("../views/settings/preferences/Preference"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/pages/profile/Profile"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profit-loss-report",
    name: "profit-loss-report",
    component: () => import("../views/report/profitlossreport/ProfitLoss"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/pages/Register"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/sales-report",
    name: "sales-report",
    component: () => import("../views/report/salesreport/SalesReport"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import("../views/settings/settings/Setting"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/tables-basic",
    name: "tables-basic",
    component: () => import("../views/uiinterface/table/tablebasic/TableBasic"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/taxs-report",
    name: "taxs-report",
    component: () => import("../views/report/taxreport/TaxReport"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/tax-types",
    name: "tax-types",
    component: () => import("../views/settings/taxtype/TaxType"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/users",
    name: "users",
    component: () => import("../views/pages/user/User"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/user-activities/:id",
    name: "user-activities",
    component: () => import("../views/pages/user/UserActivities"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/view-estimate",
    name: "view-estimate",
    component: () => import("../views/estimate/viewestimate/ViewEstimate"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/view-invoice",
    name: "view-invoice",
    component: () => import("../views/invoices/viewinvoice/ViewInvoice"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/bank-settings",
    name: "bank-settings",
    component: () => import("../views/invoices/invoicesetting/banksetting"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/invoice-grid",
    name: "invoice-grid",
    component: () => import("../views/invoices/invoicegrid/invoicegrid"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/invoices-cancelled",
    name: "invoices-cancelled",
    component: () => import("../views/invoices/invoicelist/invoicecancelled"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/invoices-draft",
    name: "invoices-draft",
    component: () => import("../views/invoices/invoicelist/invoicedraft"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/invoices-overdue",
    name: "invoices-overdue",
    component: () => import("../views/invoices/invoicelist/invoiceoverdue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/tax-settings",
    name: "tax-settings",
    component: () => import("../views/invoices/invoicesetting/taxsetting"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/invoices-settings",
    name: "invoices-settings",
    component: () => import("../views/invoices/invoicesetting/invoicessetting"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/invoices-paid",
    name: "invoices-paid",
    component: () => import("../views/invoices/invoicelist/invoicepaid"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/invoices-recurring",
    name: "invoices-recurring",
    component: () => import("../views/invoices/invoicelist/invoicerecurring"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/index-three",
    name: "index-three",
    component: () => import("../views/dashboard/indexthree/indexthree"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/index-two",
    name: "index-two",
    component: () => import("../views/dashboard/indextwo/indextwo"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/index-five",
    name: "index-five",
    component: () => import("../views/dashboard/indexfive/indexfive"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/index-four",
    name: "index-four",
    component: () => import("../views/dashboard/indexfour/indexfour"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/add-blog",
    name: "add-blog",
    component: () => import("../views/blog/addblog"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("../views/blog/blog"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/blog-categories",
    name: "blog-categories",
    component: () => import("../views/blog/blogcategories"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/blog-details",
    name: "blog-details",
    component: () => import("../views/blog/blogdetails"),
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: "/edit-blog",
    name: "edit-blog",
    component: () => import("../views/blog/editblog"),
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: "/invoice-grid-two",
    name: "invoice-grid-two",
    component: () => import("../views/invoicegridtwo"),
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: "/view-invoice-two",
    name: "view-invoice-two",
    component: () => import("../views/viewinvoicetwo"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/pending-blog",
    name: "pending-blog",
    component: () => import("../views/pendingblog"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/accordions",
    name: "accordions",
    component: () => import("../views/uiinterface/baseui/accordions"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/alerts",
    name: "alerts",
    component: () => import("../views/uiinterface/baseui/alerts"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/avatar",
    name: "avatar",
    component: () => import("../views/uiinterface/baseui/avatar"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/badges",
    name: "badges",
    component: () => import("../views/uiinterface/baseui/badges"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/buttongroup",
    name: "buttongroup",
    component: () => import("../views/uiinterface/baseui/buttongroup"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/buttons",
    name: "buttons",
    component: () => import("../views/uiinterface/baseui/buttons"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/cards",
    name: "cards",
    component: () => import("../views/uiinterface/baseui/cards"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/carousel",
    name: "carousel",
    component: () => import("../views/uiinterface/baseui/carousel"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/dropdowns",
    name: "dropdowns",
    component: () => import("../views/uiinterface/baseui/dropdowns"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/grid",
    name: "grid",
    component: () => import("../views/uiinterface/baseui/grid"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/images",
    name: "images",
    component: () => import("../views/uiinterface/baseui/images"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/media",
    name: "media",
    component: () => import("../views/uiinterface/baseui/media"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/modal",
    name: "modal",
    component: () => import("../views/uiinterface/baseui/modal"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/offcanvas",
    name: "offcanvas",
    component: () => import("../views/uiinterface/baseui/offcanvas"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/pagination",
    name: "pagination",
    component: () => import("../views/uiinterface/baseui/pagination"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/progress",
    name: "progress",
    component: () => import("../views/uiinterface/baseui/progress"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/placeholders",
    name: "placeholders",
    component: () => import("../views/uiinterface/baseui/placeholders"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/popover",
    name: "popover",
    component: () => import("../views/uiinterface/baseui/popover"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/spinners",
    name: "spinners",
    component: () => import("../views/uiinterface/baseui/spinners"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/tab",
    name: "tab",
    component: () => import("../views/uiinterface/baseui/tab"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/typography",
    name: "typography",
    component: () => import("../views/uiinterface/baseui/typography"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/video",
    name: "video",
    component: () => import("../views/uiinterface/baseui/video"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/breadcrumbs",
    name: "breadcrumbs",
    component: () => import("../views/uiinterface/baseui/breadcrumbs"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/lightbox",
    name: "lightbox",
    component: () => import("../views/uiinterface/baseui/lightbox"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/rangeslider",
    name: "rangeslider",
    component: () => import("../views/uiinterface/baseui/rangeslider"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/sweetalerts",
    name: "sweetalerts",
    component: () => import("../views/uiinterface/baseui/sweetalerts"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/toastr",
    name: "toastr",
    component: () => import("../views/uiinterface/baseui/toastr"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/tooltip",
    name: "tooltip",
    component: () => import("../views/uiinterface/baseui/tooltip"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/ribbon",
    name: "ribbon",
    component: () => import("../views/uiinterface/elements/ribbon"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/clipboard",
    name: "clipboard",
    component: () => import("../views/uiinterface/elements/clipboard"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/drag-drop",
    name: "drag-drop",
    component: () => import("../views/uiinterface/elements/drag-drop"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/rating",
    name: "rating",
    component: () => import("../views/uiinterface/elements/rating"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/text-editor",
    name: "text-editor",
    component: () => import("../views/uiinterface/elements/text-editor"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/counter",
    name: "counter",
    component: () => import("../views/uiinterface/elements/counter"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/scrollbar",
    name: "scrollbar",
    component: () => import("../views/uiinterface/elements/scrollbar"),
    meta: {
      requiresAuth: true,
    },
  },
  // {
  //   path: "/notification",
  //   name: "notification",
  //   component: () =>
  //     import("../views/uiinterface/elements/notificationelement"),
  //   meta: {
  //     requiresAuth: true,
  //   },
  // },
  {
    path: "/stickynote",
    name: "stickynote",
    component: () => import("../views/uiinterface/elements/stickynote"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/timeline",
    name: "timeline",
    component: () => import("../views/uiinterface/elements/timeline"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/horizontal-timeline",
    name: "horizontal-timeline",
    component: () =>
      import("../views/uiinterface/elements/horizontal-timeline"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/form-wizard",
    name: "form-wizard",
    component: () => import("../views/uiinterface/elements/form-wizard"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/chart-apex",
    name: "chart-apex",
    component: () => import("../views/uiinterface/chart/chart-apex"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/chart-js",
    name: "chart-js",
    component: () => import("../views/uiinterface/chart/chart-js"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/chart-morris",
    name: "chart-morris",
    component: () => import("../views/uiinterface/chart/chart-morris"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/chart-flot",
    name: "chart-flot",
    component: () => import("../views/uiinterface/chart/chart-flot"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/chart-c3",
    name: "chart-c3",
    component: () => import("../views/uiinterface/chart/chart-c3"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/icon-fontawesome",
    name: "icon-fontawesome",
    component: () => import("../views/uiinterface/icons/icon-fontawesome"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/icon-feather",
    name: "icon-feather",
    component: () => import("../views/uiinterface/icons/icon-feather"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/icon-ionic",
    name: "icon-ionic",
    component: () => import("../views/uiinterface/icons/icon-ionic"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/icon-material",
    name: "icon-material",
    component: () => import("../views/uiinterface/icons/icon-material"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/icon-pe7",
    name: "icon-pe7",
    component: () => import("../views/uiinterface/icons/icon-pe7"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/icon-simpleline",
    name: "icon-simpleline",
    component: () => import("../views/uiinterface/icons/icon-simpleline"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/icon-themify",
    name: "icon-themify",
    component: () => import("../views/uiinterface/icons/icon-themify"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/icon-weather",
    name: "icon-weather",
    component: () => import("../views/uiinterface/icons/icon-weather"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/icon-typicon",
    name: "icon-typicon",
    component: () => import("../views/uiinterface/icons/icon-typicon"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/icon-flag",
    name: "icon-flag",
    component: () => import("../views/uiinterface/icons/icon-flag"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/invoice-items",
    name: "invoice-items",
    component: () => import("../views/invoices/invoice-items"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/invoice-category",
    name: "invoice-category",
    component: () => import("../views/invoices/invoice-category"),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory("soft-web"),
  linkActiveClass: "active",
  routes,
});

// router.afterEach((to, from, next) => {
//     var token =  localStorage.getItem('token');
//     if (token) {
//         window.axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
//         axios.get('/api/user')
//         .then(res => {
//             if (to.path == '/chats') {
//                 axios.put('/api/update/status/' + res.data.id + '/?status=1')
//                     .then(res => {

//                     })
//                     .catch(err => {

//                     })
//             }
//             if (from.path == '/chats') {
//                 axios.put('/api/update/status/' + res.data.id + '/?status=0')
//                     .then(res => {

//                     })
//                     .catch(err => {

//                     })
//             }
//         })
//         .catch(err => {
//             console.log(err.message);
//         })
//     }
// });

function loggedIn() {
  return $cookies.get("user");
}
// function verified() {
//     return localStorage.getItem('v-token');
// }

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!loggedIn()) {
      next({
        path: "/login",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.guest)) {
    if (verified()) {
      next({
        path: "/forum",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;

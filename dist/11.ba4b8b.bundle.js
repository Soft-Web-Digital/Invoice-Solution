(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1137:function(e,t,c){"use strict";c.r(t);var a=c(4),n=c(6),o=c(3),s=c(15),b=c(23);const l={class:"main-wrapper"},r={class:"page-wrapper"},d={class:"content container-fluid"},i={class:"page-header"},m={class:"row align-items-center"},j={class:"col"},O={key:0,class:"page-title"},v={class:"breadcrumb"},N={class:"breadcrumb-item"},V={class:"breadcrumb-item"},p=Object(a.createElementVNode)("li",{class:"breadcrumb-item active"},"User activities",-1),E={class:"row"},u={class:"col-sm-12"},h={class:"nav nav-tabs nav-tabs-bottom mb-4"},g={class:"nav-item"},C={class:"nav-item"},f={class:"nav-item"},w={class:"nav-item"},k={class:"card bg-white"},y={class:"card-body pt-0"},x={class:"tab-content pt-0"},A={class:"tab-pane show active",id:"bottom-tab1"},z={class:"tab-pane",id:"bottom-tab2"},B={class:"tab-pane",id:"bottom-tab3"},U={class:"tab-pane",id:"bottom-tab4"};const W={__name:"UserActivities",setup(e){const t=Object(s.b)(),W=Object(b.c)(),_=Object(n.s)("invoice"),M=Object(a.defineAsyncComponent)(()=>c.e(16).then(c.bind(null,1152))),P=Object(a.defineAsyncComponent)(()=>c.e(14).then(c.bind(null,1153))),T=Object(a.defineAsyncComponent)(()=>c.e(15).then(c.bind(null,1154))),D=Object(a.defineAsyncComponent)(()=>c.e(18).then(c.bind(null,1155))),J=Object(a.computed)(()=>t.getters["users/user"]);return Object(a.onMounted)(()=>{t.dispatch("users/getUser",W.params.id)}),(e,t)=>{const c=Object(a.resolveComponent)("layout-header"),s=Object(a.resolveComponent)("layout-sidebar"),b=Object(a.resolveComponent)("router-link");return Object(a.openBlock)(),Object(a.createElementBlock)(a.Fragment,null,[Object(a.createCommentVNode)(" Main Wrapper "),Object(a.createElementVNode)("div",l,[Object(a.createVNode)(c),Object(a.createVNode)(s),Object(a.createCommentVNode)(" Page Wrapper "),Object(a.createElementVNode)("div",r,[Object(a.createElementVNode)("div",d,[Object(a.createCommentVNode)(" Page Header "),Object(a.createElementVNode)("div",i,[Object(a.createElementVNode)("div",m,[Object(a.createElementVNode)("div",j,[Object(n.E)(J)?(Object(a.openBlock)(),Object(a.createElementBlock)("h3",O,Object(o.toDisplayString)(Object(n.E)(J).name),1)):Object(a.createCommentVNode)("v-if",!0),Object(a.createElementVNode)("ul",v,[Object(a.createElementVNode)("li",N,[Object(a.createVNode)(b,{to:"/"},{default:Object(a.withCtx)(()=>[Object(a.createTextVNode)("Dashboard")]),_:1})]),Object(a.createElementVNode)("li",V,[Object(a.createVNode)(b,{to:"/users"},{default:Object(a.withCtx)(()=>[Object(a.createTextVNode)("Users")]),_:1})]),p])])])]),Object(a.createElementVNode)("div",E,[Object(a.createElementVNode)("div",u,[Object(a.createElementVNode)("ul",h,[Object(a.createElementVNode)("li",g,[Object(a.createElementVNode)("a",{class:Object(o.normalizeClass)(["nav-link",{active:"invoice"===_.value}]),href:"#bottom-tab1","data-bs-toggle":"tab"},"Invoices",2)]),Object(a.createElementVNode)("li",C,[Object(a.createElementVNode)("a",{class:Object(o.normalizeClass)(["nav-link",{active:"estimates"===_.value}]),href:"#bottom-tab2","data-bs-toggle":"tab"},"Estimates",2)]),Object(a.createElementVNode)("li",f,[Object(a.createElementVNode)("a",{class:Object(o.normalizeClass)(["nav-link",{active:"expenses"===_.value}]),href:"#bottom-tab3","data-bs-toggle":"tab"},"Expenses",2)]),Object(a.createElementVNode)("li",w,[Object(a.createElementVNode)("a",{class:Object(o.normalizeClass)(["nav-link",{active:"transactions"===_.value}]),href:"#bottom-tab4","data-bs-toggle":"tab"},"Transactions",2)])]),Object(a.createElementVNode)("div",k,[Object(a.createCommentVNode)(' <div class="card-header">\r\n                <h5 class="card-title" v-if="user"></h5>\r\n              </div> '),Object(a.createElementVNode)("div",y,[Object(a.createElementVNode)("div",x,[Object(a.createElementVNode)("div",A,[Object(a.createVNode)(Object(n.E)(M))]),Object(a.createElementVNode)("div",z,[Object(a.createVNode)(Object(n.E)(P))]),Object(a.createElementVNode)("div",B,[Object(a.createVNode)(Object(n.E)(T))]),Object(a.createElementVNode)("div",U,[Object(a.createVNode)(Object(n.E)(D))])])])])])])])]),Object(a.createCommentVNode)(" /Page Wrapper ")]),Object(a.createCommentVNode)(" /Main Wrapper ")],2112)}}};t.default=W}}]);
//# sourceMappingURL=11.ba4b8b.bundle.js.map
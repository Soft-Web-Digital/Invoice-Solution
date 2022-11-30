<template>
    <!-- Main Wrapper -->
    <div class="main-wrapper">
        <layout-header></layout-header>
        <layout-sidebar></layout-sidebar>
        
        <!-- Page Wrapper -->
        <div class="page-wrapper">
            <div class="content container-fluid">
                <toastrheader></toastrheader>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="card" id="types">
                            <div class="card-header">
                                <h4 class="card-title">Types</h4>
                            </div>
                            <div class="card-body">
                                <button type="button" class="btn btn-outline-success me-1 mb-1" id="type-success">Success</button>
                                <button type="button" class="btn btn-outline-info me-1 mb-1" id="type-info">Info</button>
                                <button type="button" class="btn btn-outline-warning me-1 mb-1" id="type-warning">Warning</button>
                                <button type="button" class="btn btn-outline-danger me-1 mb-1" id="type-error">Error</button>
                            </div>
                         </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-sm-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Position</h4>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-12 mb-4">
                                        <h5 class="mb-3">Top Positions</h5>
                                        <button type="button" class="btn btn-outline-primary me-1 mb-1" id="position-top-left">Top
                                        Left</button>
                                        <button type="button" class="btn btn-outline-primary me-1 mb-1" id="position-top-center">Top
                                        Center</button>
                                        <button type="button" class="btn btn-outline-primary me-1 mb-1" id="position-top-right">Top
                                        Right</button>
                                        <button type="button" class="btn btn-outline-primary me-1 mb-1" id="position-top-full">Top Full
                                        Width</button>
                                    </div>

                                    <div class="col-sm-12">
                                        <h5 class="mb-3">Bottom Positions</h5>
                                        <button type="button" class="btn btn-outline-primary me-1 mb-1" id="position-bottom-left">Bottom
                                        Left</button>
                                        <button type="button" class="btn btn-outline-primary me-1 mb-1" id="position-bottom-center">Bottom
                                        Center</button>
                                        <button type="button" class="btn btn-outline-primary me-1 mb-1" id="position-bottom-right">Bottom
                                        Right</button>
                                        <button type="button" class="btn btn-outline-primary me-1 mb-1" id="position-bottom-full">Bottom
                                        Full Width</button>
                                    </div>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
                
                
                <div class="row">
                    <div class="col-sm-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Options</h4>
                            </div>
                            <div class="card-body">
                                <button type="button" class="btn btn-outline-success me-1 mb-1" id="text-notification">Notifications</button>
                                <button type="button" class="btn btn-outline-success me-1 mb-1" id="close-button">Close Button</button>
                                <button type="button" class="btn btn-outline-success me-1 mb-1" id="progress-bar">Progress Bar</button>
                                <button type="button" class="btn btn-outline-success me-1 mb-1" id="clear-toast-btn">Clear Toast</button>
                            </div>
                         </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-sm-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Clear Toasts</h4>
                            </div>
                            <div class="card-body">
                                <div class="row mt-1">
                                    <div class="col-md-6 col-sm-12 mb-3 mb-md-0">
                                        <h5>Remove</h5>
                                        <p>Immediately remove current toasts without using animation.</p>
                                        <button type="button" class="btn btn-outline-info me-1 mb-1" id="show-remove-toast">Show
                                        Toast</button>
                                        <button type="button" class="btn btn-outline-danger me-1 mb-1" id="remove-toast">Remove
                                        Toast</button>
                                    </div>
                                    <div class="col-md-6 col-sm-12 mb-3 mb-md-0">
                                        <h5>Clear</h5>
                                        <p>Remove current toasts using animation.</p>
                                        <button type="button" class="btn btn-outline-info me-1 mb-1" id="show-clear-toast">Show
                                        Toast</button>
                                        <button type="button" class="btn btn-outline-danger me-1 mb-1" id="clear-toast">Clear
                                        Toast</button>
                                    </div>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-sm-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Duration & Timeout</h4>
                            </div>
                            <div class="card-body">
                                <p>you can use options like <code>showDuration</code>, <code>hideDuration</code>, <code>timeout</code> for your
                                toasts. To create a sticky toast set the <code>timeout</code> to <code>0</code></p>
                                <button type="button" class="btn btn-outline-info me-1 mb-1" id="fast-duration">Show .5s</button>
                                <button type="button" class="btn btn-outline-info me-1 mb-1" id="slow-duration">Hide 3s</button>
                                <button type="button" class="btn btn-outline-info me-1 mb-1" id="timeout">Timeout 5s</button>
                                <button type="button" class="btn btn-outline-info me-1 mb-1" id="sticky">Sticky Toast</button>
                            </div>
                        </div>
                    </div>
                </div>				
            </div>			
        </div>
        <!-- /Page Wrapper -->
    
    </div>
    <!-- /Main Wrapper -->
</template>
<script>
    export default{
       methods: {
          
          success(){
              var t,o="rtl"===$("html").attr("data-textdirection");
              this.$toast.success(`"Have fun storming the castle!","Miracle Max Says"`,{closeButton:!0,tapToDismiss:!1,rtl:o, useDefaultCss:false});
          },
          info(){
              var t,o="rtl"===$("html").attr("data-textdirection");
              this.$toast.info(`"We do have the Kapua suite available.","Turtle Bay Resort"`,{closeButton:!0,tapToDismiss:!1,rtl:o, useDefaultCss:false})
          },
          warning(){
              var t,o="rtl"===$("html").attr("data-textdirection");
              this.$toast.warning(`"My name is Inigo Montoya. You killed my father, prepare to die!"` ,{closeButton:!0,tapToDismiss:!1,rtl:o, useDefaultCss:false})
          },
          error(){
              var t,o="rtl"===$("html").attr("data-textdirection");
              this.$toast.error(`"I do not think that word means what you think it means.","Inconceivable!"`,{closeButton:!0,tapToDismiss:!1,rtl:o, useDefaultCss:false})
          },
          topLeft(){
              var t,o="rtl"===$("html").attr("data-textdirection");
              this.$toast.info(`"I do not think that word means what you think it means.","Top Left!"`,{position:"top-left",rtl:o, useDefaultCss:false})
          },
          topCenter(){
              var t,o="rtl"===$("html").attr("data-textdirection");
              this.$toast.info(`"I do not think that word means what you think it means.","Top Center!"`,{position:"top",rtl:o, useDefaultCss:false})
          },
          topRight(){
              var t,o="rtl"===$("html").attr("data-textdirection");
              this.$toast.info(`"I do not think that word means what you think it means.","Top Right!"`,{position:"top-right",rtl:o, useDefaultCss:false})
          },
          topFull(){
              var t,o="rtl"===$("html").attr("data-textdirection");
              this.$toast.info(`"I do not think that word means what you think it means.","Top Full Width!"`,{position:"top",rtl:o, useDefaultCss:false})
          },
          bottomLeft(){
              var t,o="rtl"===$("html").attr("data-textdirection");
              this.$toast.info(`"I do not think that word means what you think it means.","Bottom Left!"`,{position:"bottom-left",rtl:o, useDefaultCss:false})
          },
          bottomCenter(){
              var t,o="rtl"===$("html").attr("data-textdirection");
              this.$toast.info(`"I do not think that word means what you think it means.","Bottom Center!"`,{position:"bottom",rtl:o, useDefaultCss:false})
          },
          bottomRight(){
              var t,o="rtl"===$("html").attr("data-textdirection");
              this.$toast.info(`"I do not think that word means what you think it means.","Bottom Right!"`,{position:"bottom-right",rtl:o, useDefaultCss:false})
          },
          bottomFull(){
              var t,o="rtl"===$("html").attr("data-textdirection");
              this.$toast.info(`"I do not think that word means what you think it means.","Bottom Full Width!"`,{position:"bottom",rtl:o, useDefaultCss:false})
          },
          notification(){
              var t,o="rtl"===$("html").attr("data-textdirection");
              this.$toast.info(`"Have fun storming the castle!","Miracle Max Says"`,{rtl:o, useDefaultCss:false})
          },
          closeButton(){
              var t,o="rtl"===$("html").attr("data-textdirection");
              this.$toast.success(`"Have fun storming the castle!","With Close Button"`,{closeButton:!0,rtl:o, useDefaultCss:false})
          },
          progessBar(){
              var t,o="rtl"===$("html").attr("data-textdirection");
              this.$toast.success(`"Have fun storming the castle!","Progress Bar"`,{closeButton:!0,tapToDismiss:!1,progressBar:!0,rtl:o, useDefaultCss:false})
          },
          clear(){
              var t,o="rtl"===$("html").attr("data-textdirection");
              (t=t||this.$toast.info(`<h4>Clear Toast Button</h4><p>Clear Itself ?</p><button type="button" class="btn btn-primary clear">Yes</button>`,{closeButton:!0,timeOut:0,extendedTimeOut:0,tapToDismiss:!1,rtl:o, useDefaultCss:false})).find(".clear").length&&t.delegate(".clear","click",function(){toastr.clear(t,{force:!0}),t=void 0})
          },
          showToast(){
              var t,o="rtl"===$("html").attr("data-textdirection");
              this.$toast.info(`"Have fun storming the castle!","Miracle Max Says"`,{rtl:o, useDefaultCss:false})
          },
          removeToast(){
              this.$toast.clear()
          },
          showClear(){
              var t,o="rtl"===$("html").attr("data-textdirection");
              this.$toast.info(`"Have fun storming the castle!","Miracle Max Says"`,{rtl:o, useDefaultCss:false})
          },
          clearToast(){
              this.$toast.clear()
          },
          show5(){
              var t,o="rtl"===$("html").attr("data-textdirection");
              this.$toast.success(`"Have fun storming the castle!","Fast Duration"`,{duration:500,rtl:o, useDefaultCss:false})
          },
          hide3(){
              var t,o="rtl"===$("html").attr("data-textdirection");
              this.$toast.warning(`"Have fun storming the castle!","Slow Duration"`,{dismissible:3e3,rtl:o, useDefaultCss:false})
          },
          timeout5(){
              var t,o="rtl"===$("html").attr("data-textdirection");
              this.$toast.error(`"I do not think that word means what you think it means.","Timeout!"`,{timeOut:5e3,rtl:o, useDefaultCss:false})
          },
          sticky(){
              var t,o="rtl"===$("html").attr("data-textdirection");
              this.$toast.info(`"I do not think that word means what you think it means.","Sticky!"`,{timeOut:0,rtl:o, useDefaultCss:false})
          },
         
      },
      mounted() {
  !function (a) { a(["jquery"], function (a) { return function () { function h(a, b, c) { return u({ type: e.error, iconClass: v().iconClasses.error, message: a, optionsOverride: c, title: b }) } function i(c, d) { return c || (c = v()), b = a("#" + c.containerId), b.length ? b : (d && (b = r(c)), b) } function j(a, b, c) { return u({ type: e.info, iconClass: v().iconClasses.info, message: a, optionsOverride: c, title: b }) } function k(a) { c = a } function l(a, b, c) { return u({ type: e.success, iconClass: v().iconClasses.success, message: a, optionsOverride: c, title: b }) } function m(a, b, c) { return u({ type: e.warning, iconClass: v().iconClasses.warning, message: a, optionsOverride: c, title: b }) } function n(a, c) { var d = v(); b || i(d), q(a, d, c) || p(d) } function o(c) { var d = v(); return b || i(d), c && 0 === a(":focus", c).length ? void w(c) : void (b.children().length && b.remove()) } function p(c) { for (var d = b.children(), e = d.length - 1; e >= 0; e--)q(a(d[e]), c) } function q(b, c, d) { var e = !(!d || !d.force) && d.force; return !(!b || !e && 0 !== a(":focus", b).length) && (b[c.hideMethod]({ duration: c.hideDuration, easing: c.hideEasing, complete: function () { w(b) } }), !0) } function r(c) { return b = a("<div/>").attr("id", c.containerId).addClass("toast-container").addClass(c.positionClass), b.appendTo(a(c.target)), b } function s() { return { tapToDismiss: !0, toastClass: "toast", containerId: "toast-container", debug: !1, showMethod: "fadeIn", showDuration: 300, showEasing: "swing", onShown: void 0, hideMethod: "fadeOut", hideDuration: 1e3, hideEasing: "swing", onHidden: void 0, closeMethod: !1, closeDuration: !1, closeEasing: !1, closeOnHover: !0, extendedTimeOut: 1e3, iconClasses: { error: "toast-error", info: "toast-info", success: "toast-success", warning: "toast-warning" }, iconClass: "toast-info", positionClass: "toast-top-right", timeOut: 5e3, titleClass: "toast-title", messageClass: "toast-message", escapeHtml: !1, target: "body", closeHtml: '<button type="button">&times;</button>', closeClass: "toast-close-button", newestOnTop: !0, preventDuplicates: !1, progressBar: !1, progressClass: "toast-progress", rtl: !1 } } function t(a) { c && c(a) } function u(c) { function q(a) { return null == a && (a = ""), a.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;") } function r() { y(), A(), B(), C(), D(), E(), z(), s() } function s() { var a = ""; switch (c.iconClass) { case "toast-success": case "toast-info": a = "polite"; break; default: a = "assertive" }j.attr("aria-live", a) } function u() { e.closeOnHover && j.hover(I, H), !e.onclick && e.tapToDismiss && j.click(G), e.closeButton && n && n.click(function (a) { a.stopPropagation ? a.stopPropagation() : void 0 !== a.cancelBubble && a.cancelBubble !== !0 && (a.cancelBubble = !0), e.onCloseClick && e.onCloseClick(a), G(!0) }), e.onclick && j.click(function (a) { e.onclick(a), G() }) } function x() { j.hide(), j[e.showMethod]({ duration: e.showDuration, easing: e.showEasing, complete: e.onShown }), e.timeOut > 0 && (h = setTimeout(G, e.timeOut), o.maxHideTime = parseFloat(e.timeOut), o.hideEta = (new Date).getTime() + o.maxHideTime, e.progressBar && (o.intervalId = setInterval(J, 10))) } function y() { c.iconClass && j.addClass(e.toastClass).addClass(f) } function z() { e.newestOnTop ? b.prepend(j) : b.append(j) } function A() { if (c.title) { var a = c.title; e.escapeHtml && (a = q(c.title)), k.append(a).addClass(e.titleClass), j.append(k) } } function B() { if (c.message) { var a = c.message; e.escapeHtml && (a = q(c.message)), l.append(a).addClass(e.messageClass), j.append(l) } } function C() { e.closeButton && (n.addClass(e.closeClass).attr("role", "button"), j.prepend(n)) } function D() { e.progressBar && (m.addClass(e.progressClass), j.prepend(m)) } function E() { e.rtl && j.addClass("rtl") } function F(a, b) { if (a.preventDuplicates) { if (b.message === g) return !0; g = b.message } return !1 } function G(b) { var c = b && e.closeMethod !== !1 ? e.closeMethod : e.hideMethod, d = b && e.closeDuration !== !1 ? e.closeDuration : e.hideDuration, f = b && e.closeEasing !== !1 ? e.closeEasing : e.hideEasing; if (!a(":focus", j).length || b) return clearTimeout(o.intervalId), j[c]({ duration: d, easing: f, complete: function () { w(j), clearTimeout(h), e.onHidden && "hidden" !== p.state && e.onHidden(), p.state = "hidden", p.endTime = new Date, t(p) } }) } function H() { (e.timeOut > 0 || e.extendedTimeOut > 0) && (h = setTimeout(G, e.extendedTimeOut), o.maxHideTime = parseFloat(e.extendedTimeOut), o.hideEta = (new Date).getTime() + o.maxHideTime) } function I() { clearTimeout(h), o.hideEta = 0, j.stop(!0, !0)[e.showMethod]({ duration: e.showDuration, easing: e.showEasing }) } function J() { var a = (o.hideEta - (new Date).getTime()) / o.maxHideTime * 100; m.width(a + "%") } var e = v(), f = c.iconClass || e.iconClass; if ("undefined" != typeof c.optionsOverride && (e = a.extend(e, c.optionsOverride), f = c.optionsOverride.iconClass || f), !F(e, c)) { d++ , b = i(e, !0); var h = null, j = a("<div/>"), k = a("<div/>"), l = a("<div/>"), m = a("<div/>"), n = a(e.closeHtml), o = { intervalId: null, hideEta: null, maxHideTime: null }, p = { toastId: d, state: "visible", startTime: new Date, options: e, map: c }; return r(), x(), u(), t(p), e.debug && console && console.log(p), j } } function v() { return a.extend({}, s(), f.options) } function w(a) { b || (b = i()), a.is(":visible") || (a.remove(), a = null, 0 === b.children().length && (b.remove(), g = void 0)) } var b, c, g, d = 0, e = { error: "error", info: "info", success: "success", warning: "warning" }, f = { clear: n, remove: o, error: h, getContainer: i, info: j, options: {}, subscribe: k, success: l, version: "2.1.3", warning: m }; return f }() }) }("function" == typeof define && define.amd ? define : function (a, b) { "undefined" != typeof module && module.exports ? module.exports = b(require("jquery")) : window.toastr = b(window.jQuery) });
  
      }
  
      
  }
  </script>
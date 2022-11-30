
<template>
    <!-- Main Wrapper -->
    <div class="main-wrapper">
        <layout-header></layout-header>
        <layout-sidebar></layout-sidebar>
        
        <!-- Page Wrapper -->
        <div class="page-wrapper">
            <div class="content container-fluid">
                <stickynoteheader></stickynoteheader>
                <div class="row">
                
                    <!-- Sticky -->
                    <div class="col-md-12">	
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title">Sticky Note <a class="btn btn-primary float-sm-end m-l-10" id="add_new" href="javascript:;">Add New Note</a></h5>
                            </div>
                            <div class="card-body">
                                 <div class="sticky-note" id="board"></div>
                            </div>
                        </div>
                    </div>
                    <!-- /Sticky -->
                        
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
        'use strict';
(function($){
    
    $.fn.autogrow = function(options)
    
    {
        return this.filter('textarea').each(function()
        {
            var self         = this;
            var $self        = $(self);
            var minHeight    = $self.height();
            var noFlickerPad = $self.hasClass('autogrow-short') ? 0 : parseInt($self.css('lineHeight')) || 0;
            var shadow = $('<div></div>').css({
                position:    'absolute',
                top:         -10000,
                left:        -10000,
                width:       $self.width(),
                fontSize:    $self.css('fontSize'),
                fontFamily:  $self.css('fontFamily'),
                fontWeight:  $self.css('fontWeight'),
                lineHeight:  $self.css('lineHeight'),
                resize:      'none',
                'word-wrap': 'break-word'
            }).appendTo(document.body);
            var update = function(event)
            {
                var times = function(string, number)
                {
                    for (var i=0, r=''; i<number; i++) r += string;
                        return r;
                };
                var val = self.value.replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/&/g, '&amp;')
                .replace(/\n$/, '<br/>&nbsp;')
                .replace(/\n/g, '<br/>')
                .replace(/ {2,}/g, function(space){ return times('&nbsp;', space.length - 1) + ' ' });
                if (event && event.data && event.data.event === 'keydown' && event.keyCode === 13) {
                    val += '<br />';
                }
                shadow.css('width', $self.width());
                shadow.html(val + (noFlickerPad === 0 ? '...' : '')); // Append '...' to resize pre-emptively.
                $self.height(Math.max(shadow.height() + noFlickerPad, minHeight));
            }
            $self.change(update).keyup(update).keydown({event:'keydown'},update);
            $(window).resize(update);
            update();
        });
    };
})(jQuery);

var noteTemp =  '<div class="note">'
+	'<a href="javascript:;" class="button remove">X</a>'
+ 	'<div class="note_cnt">'
+		'<textarea class="title" placeholder="Enter note title"></textarea>'
+ 		'<textarea class="cnt" placeholder="Enter note description here"></textarea>'
+	'</div> '
+'</div>';
var noteZindex = 1;
function deleteNote(){
    $(this).parent('.note').hide("puff",{ percent: 133}, 250);
};
function newNote() {
    $(noteTemp).hide().appendTo("#board").show("fade", 300).draggable().on('dragstart',
    function(){
        $(this).zIndex(++noteZindex);
    });
    $('.remove').click(deleteNote);
    // $('textarea').autosize();
    $('.note')
    return false; 
};

(function($) {
    "use strict";
    $("#board").height($(document).height());
    $("#add_new").click(newNote);
    $('.remove').click(deleteNote);
    newNote();
    return false;
})(jQuery);
    }
  }
</Script>
<style>
.hidden{display:none !important;visibility:hidden}.visuallyhidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.visuallyhidden.focusable:active,.visuallyhidden.focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.invisible{visibility:hidden}.clearfix:before,.clearfix:after{content:" ";display:table}.clearfix:after{clear:both}.noflick,.note,.button{-webkit-perspective:1000;perspective:1000;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}.sticky-note{margin:-15px}.note{float:left;display:block;position:relative;padding:1em;width:calc(25% - 30px);min-height:300px;margin:15px;border-radius:5px;background-color:rgba(115,102,255,0.1);-webkit-transition:-webkit-transform .15s;transition:-webkit-transform .15s;transition:transform .15s;transition:transform .15s, -webkit-transform .15s;z-index:1}.note:hover{cursor:move}.note.ui-draggable-dragging:nth-child(n){-webkit-box-shadow:5px 5px 15px 0 rgba(0,0,0,0.3);box-shadow:5px 5px 15px 0 rgba(0,0,0,0.3);-webkit-transform:scale(1.125) !important;transform:scale(1.125) !important;z-index:100;cursor:move;-webkit-transition:-webkit-transform .150s;transition:-webkit-transform .150s;transition:transform .150s;transition:transform .150s, -webkit-transform .150s}.note textarea{background-color:transparent;border:none;resize:vertical;font-style:italic;width:100%;padding:5px}.note textarea:focus{outline:none;border:none;-webkit-box-shadow:0 0 0px 1px rgba(0,0,0,0.2) inset;box-shadow:0 0 0px 1px rgba(0,0,0,0.2) inset}.note textarea.title{font-size:24px;line-height:1.2;color:#000000;height:64px;margin-top:20px}.note textarea.cnt{min-height:200px}.note:nth-child(2n){background:rgba(247,49,100,0.2)}.note:nth-child(3n){background:rgba(81,187,37,0.2)}.note:nth-child(4n){background:rgba(169,39,249,0.1)}.note:nth-child(5n){background:rgba(248,214,43,0.2)}.note:nth-child(6n){background:rgba(220,53,69,0.3)}.button{color:#FFFFFF;padding:1em 2em;text-decoration:none;-webkit-transition:background .01s, -webkit-transform .150s;transition:background .01s, -webkit-transform .150s;transition:transform .150s, background .01s;transition:transform .150s, background .01s, -webkit-transform .150s}.button.remove{position:absolute;top:0;right:-10px;color:#999}@media only screen and (max-width: 1199px){.note{min-width:260px;min-height:260px}}
</style>

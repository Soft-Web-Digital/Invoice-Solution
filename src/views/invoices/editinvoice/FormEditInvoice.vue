<template>
<div class="col-xl-4 col-md-6 col-sm-12 col-12">
													<div class="form-group">
														<label>Customer Name</label>
														<div class="multipleSelection">
															<div class="selectBox">
																<p class="mb-0">Select Customer</p>
																<span class="down-icon"><i data-feather="chevron-down"></i></span>
															</div>						  
															<div id="checkBoxes-one">
																<p class="checkbox-title">Customer Search</p>
																<div class="form-custom">
																	<input type="text" class="form-control bg-grey" placeholder="Enter Customer Name">
																</div>
																<div class="selectBox-cont">
																	<label class="custom_check w-100">
																		<input type="checkbox" name="username">
																		<span class="checkmark"></span>  Brian Johnson
																	</label>
																	<label class="custom_check w-100">
																		<input type="checkbox" name="username">
																		<span class="checkmark"></span>  Russell Copeland
																	</label>
																	<label class="custom_check w-100">
																		<input type="checkbox" name="username">
																		<span class="checkmark"></span>  Greg Lynch
																	</label>
																	<label class="custom_check w-100">
																		<input type="checkbox" name="username">
																		<span class="checkmark"></span> John Blair
																	</label>
																	<label class="custom_check w-100">
																		<input type="checkbox" name="username">
																		<span class="checkmark"></span> Barbara Moore
																	</label>
																	<label class="custom_check w-100">
																		<input type="checkbox" name="username">
																		<span class="checkmark"></span> Hendry Evan
																	</label>
																	<label class="custom_check w-100">
																		<input type="checkbox" name="username">
																		<span class="checkmark"></span> Richard Miles
																	</label>
																</div>
																<button type="submit" class="btn w-100 btn-primary">Apply</button>
																<button type="reset" class="btn w-100 btn-grey">Reset</button>
															</div>
														</div>
													</div>
													<div class="form-group">
														<label>Po Number</label>
														<input class="form-control" type="text" placeholder="Enter Reference Number">
													</div>
												</div>
</template>
<script>
  import Vue from 'vue'
  import { ref } from 'vue'
  const currentDate = ref(new Date())
  const currentDate1 = ref(new Date())
  export default {
     data() {
    return {
      startdate: currentDate,
      enddate: currentDate1,
    }
    },
    components: {
   
    },
    mounted() {
	// Checkbox Select
	
	$('.app-listing .selectBox').on("click", function() {
        $(this).parent().find('#checkBoxes').fadeToggle();
        $(this).parent().parent().siblings().find('#checkBoxes').fadeOut();
    });

    $('.invoices-main-form .selectBox').on("click", function() {
        $(this).parent().find('#checkBoxes-one').fadeToggle();
        $(this).parent().parent().siblings().find('#checkBoxes-one').fadeOut();
    });

	// Datetimepicker
	
	if($('.datetimepicker').length > 0 ){
		$('.datetimepicker').datetimepicker({
			format: 'DD-MM-YYYY',
			icons: {
				up: "fas fa-angle-up",
				down: "fas fa-angle-down",
				next: 'fas fa-angle-right',
				previous: 'fas fa-angle-left'
			}
		});
	}

	//Checkbox Select
	
	if($('.SortBy').length > 0) {
		var show = true;
		var checkbox1 = document.getElementById("checkBox");
		$('.selectBoxes').on("click", function() {
			
			if (show) {
				checkbox1.style.display = "block";
				show = false;
			} else {
				checkbox1.style.display = "none";
				show = true;
			}
		});		
	}
	// Invoices Checkbox Show

	$(function() {
		$("input[name='invoice']").click(function() {
			if ($("#chkYes").is(":checked")) {
				$("#show-invoices").show();
			} else {
				$("#show-invoices").hide();
			}
		});
	});

	// Invoices Add More
	
    $(".links-info-one").on('click','.service-trash', function () {
		$(this).closest('.links-cont').remove();
		return false;
    });

    $(document).on("click",".add-links",function () {
		var experiencecontent = '<div class="links-cont">' +
			'<div class="service-amount">' +
				'<a href="javascript:void(0)" class="service-trash"><i class="fas fa-minus-circle me-1"></i>Service Charge</a> <span>$ 4</span' +
			'</div>' +
		'</div>';
		
        $(".links-info-one").append(experiencecontent);
        return false;
    });

     $(".links-info-discount").on('click','.service-trash-one', function () {
		$(this).closest('.links-cont-discount').remove();
		return false;
    });

    $(document).on("click",".add-links-one",function () {
		var experiencecontent = '<div class="links-cont-discount">' +
			'<div class="service-amount">' +
				'<a href="javascript:void(0)" class="service-trash-one"><i class="fas fa-minus-circle me-1"></i>Offer new</a> <span>$ 4 %</span' +
			'</div>' +
		'</div>';
		
        $(".links-info-discount").append(experiencecontent);
        return false;
    });

    // Invoices Table Add More
	
    $(".add-table-items").on('click','.remove-btn', function () {
		$(this).closest('.add-row').remove();
		return false;
    });
    
	
// Select 2
	if ($('.select').length > 0) {
		$('.select').select2({
			minimumResultsForSearch: -1,
			width: '100%'
		});
	}

   
    $(document).on("click",".add-btn",function () {
		var experiencecontent = '<tr class="add-row">' +
			'<td>' +
				'<input type="text" class="form-control">' +
			'</td>' +
			'<td>' +
				'<input type="text" class="form-control">' +
			'</td>' +
			'<td>' +
				'<input type="text" class="form-control">' +
			'</td>' +
			'<td>' +
				'<input type="text" class="form-control">' +
			'</td>' +
			'<td>' +
				'<input type="text" class="form-control">' +
			'</td>' +
			'<td>' +
				'<input type="text" class="form-control">' +
			'</td>' +
			'<td class="add-remove text-end">' +
				'<a href="javascript:void(0);" class="add-btn me-2"><i class="fas fa-plus-circle"></i></a> ' +
				'<a href="javascript:void(0)" class="copy-btn me-2"><i class="fe fe-copy"></i></a>' +
				'<a href="javascript:void(0);" class="remove-btn"><i class="fe fe-trash-2"></i></a>' +
			'</td>' +
		'</tr>';
		
        $(".add-table-items").append(experiencecontent);
        return false;
    });
    }
  }
</Script>
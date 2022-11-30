<template>
<div class="row">
						<div class="col-xl-7 d-flex">
							<div class="card flex-fill">
								<div class="card-header">
									<div class="d-flex justify-content-between align-items-center">
										<h5 class="card-title">Sales Analytics</h5>

										<div class="dropdown">
											<button class="btn btn-white btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
												Monthly
											</button>
											<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
												<li>
													<a href="javascript:void(0);" class="dropdown-item">Weekly</a>
												</li>
												<li>
													<a href="javascript:void(0);" class="dropdown-item">Monthly</a>
												</li>
												<li>
													<a href="javascript:void(0);" class="dropdown-item">Yearly</a>
												</li>												
											</ul>
										</div>
									</div>
								</div>
								<div class="card-body">
									<div class="d-flex align-items-center justify-content-between flex-wrap flex-md-nowrap">
										<div class="w-md-100 d-flex align-items-center mb-3">
											<div>
												<span>Total Sales</span>
												<p class="h3 text-primary me-5">$1000</p>
											</div>
											<div>
												<span>Receipts</span>
												<p class="h3 text-success me-5">$1000</p>
											</div>
											<div>
												<span>Expenses</span>
												<p class="h3 text-danger me-5">$300</p>
											</div>
											<div>
												<span>Earnings</span>
												<p class="h3 text-dark me-5">$700</p>
											</div>
										</div>
									</div>
									
									<apexchart height="350" type="bar" :options="chartOptions2" :series="series1"></apexchart>
								</div>
							</div>
						</div>
						<div class="col-xl-5 d-flex">
							<div class="card flex-fill">
								<div class="card-header">
									<div class="d-flex justify-content-between align-items-center">
										<h5 class="card-title">Invoice Analytics</h5> 
										
										<div class="dropdown">
											<button class="btn btn-white btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
												Monthly
											</button>
											<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
												<li>
													<a href="javascript:void(0);" class="dropdown-item">Weekly</a>
												</li>
												<li>
													<a href="javascript:void(0);" class="dropdown-item">Monthly</a>
												</li>
												<li>
													<a href="javascript:void(0);" class="dropdown-item">Yearly</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div class="card-body">
									<apexchart type="donut" :options="chartOptions1" :series="series"></apexchart>
									<div class="text-center text-muted">
										<div class="row">
											<div class="col-4">
												<div class="mt-4">
													<p class="mb-2 text-truncate"><i class="fas fa-circle text-primary me-1"></i> Invoiced</p>
													<h5>$ 2,132</h5>
												</div>
											</div>
											<div class="col-4">
												<div class="mt-4">
													<p class="mb-2 text-truncate"><i class="fas fa-circle text-success me-1"></i> Received</p>
													<h5>$ 1,763</h5>
												</div>
											</div>
											<div class="col-4">
												<div class="mt-4">
													<p class="mb-2 text-truncate"><i class="fas fa-circle text-danger me-1"></i> Pending</p>
													<h5>$ 973</h5>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
</template>
<script>
import VueApexCharts from "vue3-apexcharts";
export default {
	components: {
    apexchart: VueApexCharts,
  },
	data() {
		return {
		   chartOptions1: {
		   	colors: ['#7638ff', '#ff737b', '#fda600', '#1ec1b0'],
		   	chart: {
			fontFamily: 'Poppins, sans-serif',
			height: 350,
			type: 'donut',
		},
		labels: ['Paid', 'Unpaid', 'Overdue', 'Draft'],
		legend: {show: false},
		responsive: [{
			breakpoint: 480,
			options: {
				chart: {
					width: 200
				},
				legend: {
					position: 'bottom'
				}
			}
		}]

		   },
		
      series: [55, 40, 20, 10],
      series1: [{
			name: "Received",
			type: "column",
			data: [70, 150, 80, 180, 150, 175, 201, 60, 200, 120, 190, 160, 50]
			},
			{
			name: "Pending",
			type: "column",
			data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16, 80]
			}
          ],
           chartOptions2: {
           	colors: ['#7638ff', '#fda600'],
            chart: {
			type: 'bar',
			fontFamily: 'Poppins, sans-serif',
			height: 350,
			toolbar: {
				show: false
			}
		},
            plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '60%',
				endingShape: 'rounded'
			},
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 2,
			colors: ['transparent']
		},
		xaxis: {
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
		},
		yaxis: {
			title: {
				text: '$ (thousands)'
			}
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			y: {
				formatter: function (val) {
					return "$ " + val + " thousands"
				}
			}
		}
          },
		}
	}
}
</script>
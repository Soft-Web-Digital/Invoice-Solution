<template>
    <!-- Main Wrapper -->
    <div class="main-wrapper">
        <layout-header></layout-header>
        <layout-sidebar></layout-sidebar>
        
        <!-- Page Wrapper -->
        <div class="page-wrapper">
            <div class="content container-fluid">
                <chartapexheader></chartapexheader>
                <div class="row">
					
                    <!-- Chart -->
                    <div class="col-md-6">	
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title">Apex Simple</h5>
                            </div>
                            <div class="card-body">
                                <apexchart
                                type="line"
                                height="350"
                                :options="sline"
                                :series="series"
                                ></apexchart>
                            </div>
                        </div>
                    </div>
                    <!-- /Chart -->
                        
                    <!-- Chart -->
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title">Area Chart</h5>
                            </div>
                            <div class="card-body">
                                <apexchart
                                type="area"
                                height="350"
                                :options="slinearea"
                                :series="series1"
                                ></apexchart>
                            </div>
                        </div>
                    </div>
                    <!-- /Chart -->
                        
                    <!-- Chart -->
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title">Column Chart</h5>
                            </div>
                            <div class="card-body">
                                <apexchart
                                type="bar"
                                height="350"
                                :options="scol"
                                :series="series2"
                                ></apexchart>
                            </div>
                        </div>
                    </div>
                    <!-- /Chart -->
                    
                    <!-- Chart -->
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title">Column Stacked Chart</h5>
                            </div>
                            <div class="card-body">
                                <apexchart
                                type="bar"
                                height="350"
                                :options="scolstacked"
                                :series="series3"
                                ></apexchart>
                            </div>
                        </div>
                    </div>
                    <!-- /Chart -->
                    
                    
                    <!-- Chart -->
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title">Bar Chart</h5>
                            </div>
                            <div class="card-body">
                                <apexchart
                                type="bar"
                                height="350"
                                :options="sbar"
                                :series="series4"
                                ></apexchart>
                            </div>
                        </div>
                    </div>
                    <!-- /Chart -->
                    
                    <!-- Chart -->
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title">Mixed Chart</h5>
                            </div>
                            <div class="card-body">
                                <apexchart
                                type="line"
                                height="350"
                                :options="mixedchart"
                                :series="series5"
                                ></apexchart>
                            </div>
                        </div>
                    </div>
                    <!-- /Chart -->
                    
                    <!-- Chart -->
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title">Donut Chart</h5>
                            </div>
                            <div class="card-body">
                                <apexchart
                                type="donut"
                                height="350"
                                :options="donutchart"
                                :series="series6"
                                ></apexchart>
                            </div>
                        </div>
                    </div>
                    <!-- /Chart -->
                    
                    <!-- Chart -->
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title">Radial Chart</h5>
                            </div>
                            <div class="card-body">
                                <apexchart
                                type="radialBar"
                                height="350"
                                :options="radialchart"
                                :series="series7"
                                ></apexchart>
                            </div>
                        </div>
                    </div>
                    <!-- /Chart -->
                    
                </div>
            </div>			
        </div>
        <!-- /Page Wrapper -->
    
    </div>
    <!-- /Main Wrapper -->
</template>
<script>
import { ref } from "vue";
import ApexCharts from 'apexcharts'
	
	export default {
		components: {
         
		},
		data() {
			return {
                sline: {
        chart: {
          id: "vuechart-example",
        },

		chart: {
		type: 'line',
		height: 350,
		zoom: {
        enabled: false
        },
        toolbar: {
        show: false,
        }
	  },
      dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  
  title: {
    text: 'Product Trends by Month',
    align: 'left'
  },
  grid: {
    row: {
      colors: ['#f1f2f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  }
      },
      series: [{
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
  slinearea: {
        chart: {
          id: "vuechart-example",
        },

		chart: {
		type: 'area',
		height: 350,
		toolbar: {
          show: false,
        }
	  },
      dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"],                
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    }
      },
      series1: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
    }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
    }],
    scol: {
        chart: {
          id: "vuechart-example",
        },

		chart: {
		type: 'bar',
		height: 350,
        toolbar: {
          show: false,
        }
	  },
      plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'  
        },
    },
    // colors: ['#888ea8', '#4361ee'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
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
      series2: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }],
    scolstacked: {
        chart: {
          id: "vuechart-example",
        },

		chart: {
		type: 'bar',
		height: 350,
        stacked: true,
        toolbar: {
          show: false,
        }
	  },
      responsive: [{
        breakpoint: 480,
        options: {
            legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
            }
        }
    }],
    plotOptions: {
        bar: {
            horizontal: false,
        },
    },
    xaxis: {
        type: 'datetime',
        categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT', '01/05/2011 GMT', '01/06/2011 GMT'],
    },
    legend: {
        position: 'right',
        offsetY: 40
    },
    fill: {
        opacity: 1
    },
      },
      series3: [{
        name: 'PRODUCT A',
        data: [44, 55, 41, 67, 22, 43]
    },{
        name: 'PRODUCT B',
        data: [13, 23, 20, 8, 13, 27]
    },{
        name: 'PRODUCT C',
        data: [11, 17, 15, 15, 21, 14]
    },{
        name: 'PRODUCT D',
        data: [21, 7, 25, 13, 22, 8]
    }],
    sbar: {
        chart: {
          id: "vuechart-example",
        },

		chart: {
		type: 'bar',
		height: 350,
        stacked: true,
        toolbar: {
          show: false,
        }
	  },
      plotOptions: {
        bar: {
            horizontal: true,
        }
    },
    dataLabels: {
        enabled: false
    },
    xaxis: {
        categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany'],
    }
      },
      series4: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }],
    mixedchart: {
        chart: {
          id: "vuechart-example",
        },

		chart: {
		type: 'line',
		height: 350,
        stacked: true,
        toolbar: {
          show: false,
        }
	  },
  stroke: {
    width: [0, 4]
  },
  title: {
    text: 'Traffic Sources'
  },
  labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
  xaxis: {
    type: 'datetime'
  },
  yaxis: [{
    title: {
      text: 'Website Blog',
    },

  }, {
    opposite: true,
    title: {
      text: 'Social Media'
    }
  }]

      },
      series5: [{
    name: 'Website Blog',
    type: 'column',
    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
  }, {
    name: 'Social Media',
    type: 'line',
    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
  }],
  donutchart: {
        chart: {
          id: "vuechart-example",
        },

		chart: {
		type: 'donut',
		height: 350,
        stacked: true,
        toolbar: {
          show: false,
        }
	  },
     
      },
      series6: [44, 55, 41, 17],
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
    }],
    radialchart: {
        chart: {
          id: "vuechart-example",
        },

		chart: {
		type: 'radialBar',
		height: 350,
        stacked: true,
        toolbar: {
          show: false,
        }
	  },
      plotOptions: {
        radialBar: {
            dataLabels: {
                name: {
                    fontSize: '22px',
                },
                value: {
                    fontSize: '16px',
                },
                total: {
                    show: true,
                    label: 'Total',
                    formatter: function (w) {
                        return 249
                    }
                }
            }
        }
    },
    
    labels: ['Apples', 'Oranges', 'Bananas', 'Berries'], 
      },
      series7: [44, 55, 67, 83],

            }
        },
		
	}
	</script>
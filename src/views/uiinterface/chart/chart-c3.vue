<template>
    <!-- Main Wrapper -->
    <div class="main-wrapper">
        <layout-header></layout-header>
        <layout-sidebar></layout-sidebar>
        
        <!-- Page Wrapper -->
        <div class="page-wrapper">
            <div class="content container-fluid">
                <chartflotheader></chartflotheader>
                <div class="row">
					
                    <!-- Chart -->
                    <div class="col-md-6">	
                        <div class="card">
                            <div class="card-header">
                                <div class="card-title">Bar Chart</div>
                            </div>
                            <div class="card-body">
                                <apexchart
                                type="bar"
                                height="300"
                                :options="flotbar1"
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
                                <div class="card-title">Multiple Bar Chart</div>
                            </div>
                            <div class="card-body">
                                <apexchart
                                type="bar"
                                height="300"
                                :options="flotbar2"
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
                                <div class="card-title">Horizontal Bar Chart</div>
                            </div>
                            <div class="card-body">
                                <apexchart
                                type="bar"
                                height="300" 
                                horizontal="true" 
                                :options="flotline1"
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
                                <div class="card-title">Line Chart</div>
                            </div>
                            <div class="card-body">
                                <apexchart
                                type="area"
                                height="300" 
                                :options="flotline2"
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
                                <div class="card-title">Line Chart</div>
                            </div>
                            <div class="card-body">
                                <apexchart
                                type="line"
                                height="300" 
                                :options="flotarea1"
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
                                <div class="card-title">Line Chart</div>
                            </div>
                            <div class="card-body">
                                <apexchart
                                type="area"
                                height="300" 
                                :options="flotarea2"
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
                                <div class="card-title">Pie Chart</div>
                            </div>
                            <div class="card-body">
                                <apexchart
                                type="pie"
                                height="300" 
                                :options="flotpie1"
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
                                <div class="card-title">Donut Chart</div>
                            </div>
                            <div class="card-body">
                                <apexchart
                                type="donut"
                                height="300" 
                                :options="flotpie2"
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
    import Vue from 'vue'
    export default {
      components: {
        
      },
      data() {
            return {
                flotbar1 : {
    chart: {
        height: 350,
        type: 'bar',
        toolbar: {
          show: false,
        }
    },
     colors: ['#44c4fa','#664dc9'],
    dataLabels: {
        enabled: false
    },
   
        axis: {
			x: {
				type: 'category',
				// name of each category
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun' ,'Jul' , 'Aug', 'Sep' , 'Oct', 'Nov', 'Dec']
			},
		},
		padding: {
			bottom: 0,
			top: 0
		},
    },
    series: [{
        data: [11, 8, 15, 18, 19, 17, 20, 25, 32, 20, 14,20]
    }, {
        data: [7, 7, 5, 7, 9, 12, 4, 6, 2, 5, 2, 8 ]
    }],
    flotbar2: {
    chart: {
        height: 350,
        type: 'bar',
        toolbar: {
          show: false,
        }
    },
    colors: ['#664dc9', '#44c4fa'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
   
    bar: {
			width: 16
		},
		legend: {
			  show: false, //hide legend
		},
		padding: {
			bottom: 0,
			top: 0
		},
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        type: 'category'
    }
    },
    series1: [{
        data: [11, 8, 15, 18, 19, 17]
    },
    {
        data: [7, 7, 5, 7, 9, 12]
    }], 
    flotline1 : {
        chart: {
          type: 'area',
          height: 350
        },
        colors: ['#664dc9',"#44c4fa"],
        plotOptions: {
          bar: {
            horizontal: true,
            width: 15,
            dataLabels: {
              position: 'top',
            },
          }
        },
        stroke: {
          show: true,
          colors: ['#fff']
        },
        tooltip: {
          shared: true,
          intersect: false
        },
        axis: {
			x: {
				type: 'category',
				// name of each category
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
			},
			rotated: true,
		},
		
		legend: {
			  show: false, //hide legend
		},
		padding: {
			bottom: 0,
			top: 0
		},
    },
    series2: [{
          data: [11, 8, 15, 18, 19, 17]
        }, {
          data: [7, 7, 5, 7, 9, 12]
        }],
    flotline2 : {
    chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false,
    }
  },
  colors: ['#664dc9'],
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
    markers: {
        size: 1,
        colors: ["#fff"],
        strokeColors: ['#664dc9'],
        strokeWidth: 3,
        hover: {
        size: 7
        }
    },
   
    grid: {
        hoverable: true,
        clickable: true,
        borderWidth: 0,
        labelMargin: 5
    },
    yaxis: {
        min: 0,
        max: 40,
        color: 'rgba(67, 87, 133, .09)',
        font: {
            size: 10,
            color: '#8e9cad'
        }
    },
    xaxis: {
        color: 'rgba(67, 87, 133, .09)',
        font: {
            size: 10,
            color: '#8e9cad'
        }
    }
    },
    series3: [ {
        name: 'Maximum',
        data: [0, 9, 16, 19, 30, 25 , 19, 12, 0]
    }],
    flotarea1 : {
    chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false,
    }
  },
  colors: ['#664dc9',"#44c4fa"],
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
    
    grid: {
        hoverable: true,
        clickable: true,
        borderWidth: 0,
        labelMargin: 5
    },
    yaxis: {
         categories: ['Jan','Feb','Mar','Apr','May','Jun'],
        color: 'rgba(67, 87, 133, .09)',
        font: {
            size: 10,
            color: '#8e9cad'
        }
    },
    xaxis: {
        color: 'rgba(67, 87, 133, .09)',
        font: {
            size: 10,
            color: '#8e9cad'
        }
    }
    },
    series4: [{
        name: 'Maximum',
        data: [12, 7, 8, 6, 8, 9, 12]
    }, {
        name: 'Minimum',
        data: [8, 10, 10, 9, 7, 10, 8]
    }],
    flotarea2 : {
  chart: {
    height: 350,
    type: 'area',
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false,
    }
  },
  colors: ['#44c4fa',"#664dc9"],
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
    grid: {
        hoverable: true,
        clickable: true,
        borderWidth: 0,
        labelMargin: 5
    },
    markers: {
        size:2,
        colors: ["#fff"],
        strokeColors: ['#44c4fa',"#664dc9"],
        strokeWidth: 2,
        hover: {
        size: 7
        }
    },
    yaxis: {
        min: 0,
        max: 30,
        color: 'rgba(67, 87, 133, .09)',
        font: {
            size: 10,
            color: '#8e9cad'
        }
    },
    xaxis: {
		categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        color: 'rgba(67, 87, 133, .09)',
        font: {
            size: 10,
            color: '#8e9cad'
        }
    }

    },
    series5: [{
        data: [22, 19, 26, 29, 30, 28]
    }, {
        data: [8, 8, 6, 8, 10, 13]
    }],
    flotpie1 : {
    chart: {
        height: 350,
        type: 'pie'
    },
    colors: ['#664dc9', '#44c4fa', '#2dce89', '#ff5b51'],
   
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            }
        }
    }]
    },
    series6: [63, 44, 12,14],
    flotpie2 : {
    chart: {
        height: 350,
        type: 'donut',
        toolbar: {
          show: false,
        }
    },
    colors: ['#664dc9', '#44c4fa', '#2dce89'],
    
    },
    series7: [ 58, 65, 35] 
            }
        },
        mounted() {

        }
    }
</script>

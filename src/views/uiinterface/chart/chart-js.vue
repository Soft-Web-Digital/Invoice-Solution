<template>
    <!-- Main Wrapper -->
    <div class="main-wrapper">
        <layout-header></layout-header>
        <layout-sidebar></layout-sidebar>
        
        <!-- Page Wrapper -->
        <div class="page-wrapper">
            <div class="content container-fluid">
                <chartjsheader></chartjsheader>
                <div class="row">
					
                    <!-- Chart -->
                    <div class="col-md-6">	
                        <div class="card">
                            <div class="card-header">
                                <div class="card-title">Bar Chart</div>
                            </div>
                            <div class="card-body">
                                <div>
                                    <canvas id="chartBar1" class="h-300"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Chart -->
                    
                    <!-- Chart -->
                    <div class="col-md-6">	
                        <div class="card">
                            <div class="card-header">
                                <div class="card-title">Transparency </div>
                            </div>
                            <div class="card-body">
                                <div>
                                    <canvas id="chartBar2" class="h-300"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Chart -->
                    
                    <!-- Chart -->
                    <div class="col-md-6">	
                        <div class="card">
                                <div class="card-header">
                                    <div class="card-title">Gradient Bar Chart</div>
                                </div>
                                <div class="card-body">
                                    <div>
                                        <canvas id="chartBar3" class="h-300"></canvas>
                                    </div>
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
                                    <div class="chartjs-wrapper-demo">
                                        <canvas id="chartBar4" class="h-300"></canvas>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <!-- /Chart -->
                    
                    <!-- Chart -->
                    <div class="col-md-6">	
                        <div class="card">
                            <div class="card-header">
                                <div class="card-title">Horizontal Bar Chart Style2</div>
                            </div>
                            <div class="card-body">
                                <div class="chartjs-wrapper-demo">
                                    <canvas id="chartBar5" class="h-300"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Chart -->
                    
                    <!-- Chart -->
                    <div class="col-md-6">	
                        <div class="card">
                            <div class="card-header">
                                <div class="card-title">Vertical Stacked Bar Chart</div>
                            </div>
                            <div class="card-body">
                                <div class="chartjs-wrapper-demo">
                                    <canvas id="chartStacked1" class="h-300"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Chart -->
                    
                    <!-- Chart -->
                    <div class="col-md-6">	
                        <div class="card">
                            <div class="card-header">
                                <div class="card-title">Horizontal Stacked Bar Chart</div>
                            </div>
                            <div class="card-body">
                                <div class="chartjs-wrapper-demo">
                                    <canvas id="chartStacked2" class="h-300"></canvas>
                                </div>
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
                                <div class="chartjs-wrapper-demo">
                                    <canvas id="chartLine1" class="h-300"></canvas>
                                </div>
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
                                <div class="chartjs-wrapper-demo">
                                    <canvas id="chartPie" class="h-300"></canvas>
                                </div>
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
                                <div class="chartjs-wrapper-demo">
                                    <canvas id="chartDonut" class="h-300"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Chart -->
                    
                    <!-- Chart -->
                    <div class="col-md-6">	
                        <div class="card">
                                <div class="card-header">
                                    <div class="card-title">Area Chart</div>
                                </div>
                                <div class="card-body">
                                    <div class="chartjs-wrapper-demo">
                                        <canvas id="chartArea1" class="h-300"></canvas>
                                    </div>
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
    import 'chart.js/dist/chart.min.js';
    import 'chart.js/dist/chart.js';
   
    export default {
      components: {
        Chart,
      },
      data(){
        return{
    
        }
      },
      mounted() {
        var ctx1 = document.getElementById('chartBar1').getContext('2d');
        new Chart(ctx1, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Sales',
                    data: [24, 10, 32, 24, 26, 20],
                    backgroundColor: '#664dc9'
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                legend: {
                    display: false,
                    labels: {
                        display: false
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontSize: 10,
                            max: 80
                        }
                    }],
                    xAxes: [{
                        barPercentage: 0.6,
                        ticks: {
                            beginAtZero: true,
                            fontSize: 11
                        }
                    }]
                }
            }
        });
        var ctx2 = document.getElementById('chartBar2').getContext('2d');
        new Chart(ctx2, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: "Sales",
                    data: [14, 12, 34, 25, 24, 20],
                    backgroundColor: '#44c4fa'
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                legend: {
                    display: false,
                    labels: {
                        display: false
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontSize: 10,
                            max: 40
                        }
                    }],
                    xAxes: [{
                        barPercentage: 0.6,
                        ticks: {
                            beginAtZero: true,
                            fontSize: 11
                        }
                    }]
                }
            }
        });
        var ctx3 = document.getElementById('chartBar3').getContext('2d');
        var gradient = ctx3.createLinearGradient(0, 0, 0, 250);
        gradient.addColorStop(0, '#44c4fa');
        gradient.addColorStop(1, '#664dc9');
        new Chart(ctx3, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Sales',
                    data: [14, 12, 34, 25, 24, 20],
                    backgroundColor: gradient
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                legend: {
                    display: false,
                    labels: {
                        display: false
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontSize: 10,
                            max: 40
                        }
                    }],
                    xAxes: [{
                        barPercentage: 0.6,
                        ticks: {
                            beginAtZero: true,
                            fontSize: 11
                        }
                    }]
                }
            }
        });
        var ctx6 = document.getElementById('chartStacked1');
        new Chart(ctx6, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    data: [14, 12, 34, 25, 24, 20],
                    backgroundColor: '#664dc9',
                    borderWidth: 1,
                    fill: true
                }, {
                    data: [14, 12, 34, 25, 24, 20],
                    backgroundColor:  '#44c4fa',
                    borderWidth: 1,
                    fill: true
                }]
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                    display: false,
                    labels: {
                        display: false
                    }
                },
                scales: {
                    yAxes: [{
                        stacked: true,
                        ticks: {
                            beginAtZero: true,
                            fontSize: 11
                        }
                    }],
                    xAxes: [{
                        barPercentage: 0.5,
                        stacked: true,
                        ticks: {
                            fontSize: 11
                        }
                    }]
                }
            }
        });
            var ctx8 = document.getElementById('chartLine1');
        new Chart(ctx8, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    data: [14, 12, 34, 25, 44, 36, 35, 25, 30, 32, 20, 25 ],
                    borderColor: '#664dc9',
                    borderWidth: 1,
                    fill: false
                }, {
                    data: [35, 30, 45, 35, 55, 40, 10, 20, 25, 55, 50, 45],
                    borderColor: '#44c4fa',
                    borderWidth: 1,
                    fill: false
                }]
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                    display: false,
                    labels: {
                        display: false
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontSize: 10,
                            max: 80
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontSize: 11
                        }
                    }]
                }
            }
        });
            var ctx9 = document.getElementById('chartArea1');
        var gradient1 = ctx3.createLinearGradient(0, 350, 0, 0);
        gradient1.addColorStop(0, 'rgba(102, 77, 201,0)');
        gradient1.addColorStop(1, 'rgba(102, 77, 201,.5)');
        var gradient2 = ctx3.createLinearGradient(0, 280, 0, 0);
        gradient2.addColorStop(0, 'rgba(91, 115, 232,0)');
        gradient2.addColorStop(1, 'rgba(91, 115, 232,.5)');
        new Chart(ctx9, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    data: [14, 12, 34, 25, 44, 36, 35, 25, 30, 32, 20, 25 ],
                    borderColor: '#664dc9',
                    borderWidth: 1,
                    backgroundColor: gradient1
                }, {
                    data: [35, 30, 45, 35, 55, 40, 10, 20, 25, 55, 50, 45],
                    borderColor: '#44c4fa',
                    borderWidth: 1,
                    backgroundColor: gradient2
                }]
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                    display: false,
                    labels: {
                        display: false
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontSize: 10,
                            max: 80
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontSize: 11
                        }
                    }]
                }
            }
        });
        var datapie = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                data: [35,20,8,15,24],
                backgroundColor: ['#664dc9', '#44c4fa', '#38cb89', '#3e80eb', '#ffab00', '#ef4b4b']
            }]
        };
        var optionpie = {
            maintainAspectRatio: false,
            responsive: true,
            legend: {
                display: false,
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        };
        var ctx6 = document.getElementById('chartPie');
        var myPieChart6 = new Chart(ctx6, {
            type: 'doughnut',
            data: datapie,
            options: optionpie
        });
        // For a pie chart
        var ctx7 = document.getElementById('chartDonut');
        var myPieChart7 = new Chart(ctx7, {
            type: 'pie',
            data: datapie,
            options: optionpie
        });
        var ctx4 = document.getElementById('chartBar4').getContext('2d');
        new Chart(ctx4, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Sales',
                    data: [14, 12, 34, 25, 24, 20],
                    backgroundColor: ['#664dc9', '#44c4fa', '#38cb89', '#3e80eb', '#ffab00', '#ef4b4b']
                }]
            },
            options: {
                indexAxis: 'y',
                maintainAspectRatio: false,
                legend: {
                    display: false,
                    labels: {
                        display: false
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontSize: 10,
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontSize: 11,
                            max: 80
                        }
                    }]
                }
            }
        });
    
        var ctx5 = document.getElementById('chartBar5').getContext('2d');
        new Chart(ctx5, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
                datasets: [{
                    data: [14, 12, 34, 25, 24, 20],
                    backgroundColor: [ '#664dc9', '#38cb89', '#116e7c', '#ffab00', '#ef4b4b']
                }, {
                    data: [22, 30, 25, 30, 20, 40],
                    backgroundColor: '#44c4fa'
                }]
            },
            options: {
                indexAxis: 'y',
                maintainAspectRatio: false,
                legend: {
                    display: false,
                    labels: {
                        display: false
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontSize: 11,
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontSize: 11,
                            max: 80
                        }
                    }]
                }
            }
        });	
        var ctx7 = document.getElementById('chartStacked2');
        new Chart(ctx7, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    data: [14, 12, 34, 25, 24, 20],
                    backgroundColor: '#664dc9',
                    borderWidth: 1,
                    fill: true
                }, {
                    data: [14, 12, 34, 25, 24, 20],
                    backgroundColor:  '#44c4fa',
                    borderWidth: 1,
                    fill: true
                }]
            },
            options: {
                indexAxis: 'y',
                maintainAspectRatio: false,
                legend: {
                    display: false,
                    labels: {
                        display: false
                    }
                },
                scales: {
                    yAxes: [{
                        stacked: true,
                        ticks: {
                            beginAtZero: true,
                            fontSize: 10,
                            max: 80
                        }
                    }],
                    xAxes: [{
                        stacked: true,
                        ticks: {
                            beginAtZero: true,
                            fontSize: 11
                        }
                    }]
                }
            }
        });		
    
      },
      name: 'chart-js'
      }
    </script>
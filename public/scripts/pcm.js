var maxNum = 300;

setInterval(next, 500);
function next(){
    head();
}

function head1(results,name){


	var ctx = document.getElementById("canvas"+name).getContext("2d");

	document.getElementById("Actual"+name+"Pressure").innerHTML = "Actual Pressure = " + results["PCM"+name].LActualPressure/10+ " Bar";
	document.getElementById("Nominal"+name+"Pressure").innerHTML = "Nominal Pressure = " + results["PCM"+name].LNominalPressure/10+ " Bar";


	if (window["actual"+name+"Pressure"] == undefined){ window["actual"+name+"Pressure"] = [];};
	if (window["nominal"+name+"Pressure"] == undefined){ window["nominal"+name+"Pressure"] = [];};

	window["actual"+name+"Pressure"].push(results["PCM"+name].LActualPressure/10);
	window["nominal"+name+"Pressure"].push(results["PCM"+name].LNominalPressure/10);

	window["config"+name].data.datasets[0].data = results["PCM"+name].LActualPressures
	window["config"+name].data.datasets[1].data = results["PCM"+name].LNominalPressures

	// window["config"+name].data.datasets[0].data.push(results["PCM"+name].LActualPressure/10);
	// window["config"+name].data.datasets[1].data.push(results["PCM"+name].LNominalPressure/10);
	
	// if (window["config"+name].data.datasets[0].data.length > maxNum )
	// {
	// 	window["config"+name].data.datasets[0].data.shift();
	// }
	// if (window["config"+name].data.datasets[1].data.length > maxNum )
	// {
	// 	window["config"+name].data.datasets[1].data.shift();
	// }

	window["myLine"+name].update(0);
}

function head(){
  ;

    var jsonData = $.ajax({url: 'http://127.0.0.1/update',dataType: 'json',}).done(function (results) {
	
		head1(results,"1");
		head1(results,"2");
		head1(results,"3");
		head1(results,"4");

		head1(results,"5");
		head1(results,"6");
		head1(results,"7");
		head1(results,"8");
		
		head1(results,"9");
		head1(results,"10");
		head1(results,"11");
		head1(results,"12");
       
    });
}
var labels=[];
for (i = 0; i < maxNum; i++) { 
labels.push(i);
}

		var config1 = {
			type: 'line',
			data: {
				labels: labels,
				datasets: [{
					label: 'Actual Pressure',
					backgroundColor: window.chartColors.red,
					borderColor: window.chartColors.red,
					data: [
						
					],
					fill: false,
				}, {
					label: 'Nominal Pressure',
					fill: false,
					backgroundColor: window.chartColors.blue,
					borderColor: window.chartColors.blue,
					data: [
						
					],
				}]
			},
			options: {
				legend: {
					display: false
				},
				responsive: true,
				title: {
					display: false,
					text: 'Head 5 Pressures'
				},
				tooltips: {
					mode: 'index',
					intersect: false,
				},
				hover: {
					mode: 'average',
					intersect: false
				},
				scales: {
					xAxes: [{
						display: false,
						scaleLabel: {
							display: false,
							labelString: 'Month'
						}
					}],
					yAxes: [{
                        display: true,
                        ticks: {
                        min:0,
                        max:30
                        },
						scaleLabel: {
							display: false,
							labelString: 'Value'
						}
					}]
				}
			}
		};
		var config2 = {
			type: 'line',
			data: {
				labels: labels,
				datasets: [{
					label: 'Actual Pressure',
					backgroundColor: window.chartColors.red,
					borderColor: window.chartColors.red,
					data: [
						
					],
					fill: false,
				}, {
					label: 'Nominal Pressure',
					fill: false,
					backgroundColor: window.chartColors.blue,
					borderColor: window.chartColors.blue,
					data: [
						
					],
				}]
			},
			options: {
				legend: {
					display: false
				},
				responsive: true,
				title: {
					display: false,
					text: 'Head 5 Pressures'
				},
				tooltips: {
					mode: 'index',
					intersect: false,
				},
				hover: {
					mode: 'nearest',
					intersect: true
				},
				scales: {
					xAxes: [{
						display: false,
						scaleLabel: {
							display: false,
							labelString: 'Month'
						}
					}],
					yAxes: [{
                        display: true,
                        ticks: {
                        min:0,
                        max:30
                        },
						scaleLabel: {
							display: false,
							labelString: 'Value'
						}
					}]
				}
			}
		};
		var config3 = {
			type: 'line',
			data: {
				labels: labels,
				datasets: [{
					label: 'Actual Pressure',
					backgroundColor: window.chartColors.red,
					borderColor: window.chartColors.red,
					data: [
						
					],
					fill: false,
				}, {
					label: 'Nominal Pressure',
					fill: false,
					backgroundColor: window.chartColors.blue,
					borderColor: window.chartColors.blue,
					data: [
						
					],
				}]
			},
			options: {
				legend: {
					display: false
				},
				responsive: true,
				title: {
					display: false,
					text: 'Head 5 Pressures'
				},
				tooltips: {
					mode: 'index',
					intersect: false,
				},
				hover: {
					mode: 'nearest',
					intersect: true
				},
				scales: {
					xAxes: [{
						display: false,
						scaleLabel: {
							display: false,
							labelString: 'Month'
						}
					}],
					yAxes: [{
                        display: true,
                        ticks: {
                        min:0,
                        max:30
                        },
						scaleLabel: {
							display: false,
							labelString: 'Value'
						}
					}]
				}
			}
		};
		var config4 = {
			type: 'line',
			data: {
				labels: labels,
				datasets: [{
					label: 'Actual Pressure',
					backgroundColor: window.chartColors.red,
					borderColor: window.chartColors.red,
					data: [
						
					],
					fill: false,
				}, {
					label: 'Nominal Pressure',
					fill: false,
					backgroundColor: window.chartColors.blue,
					borderColor: window.chartColors.blue,
					data: [
						
					],
				}]
			},
			options: {
				legend: {
					display: false
				},
				responsive: true,
				title: {
					display: false,
					text: 'Head 5 Pressures'
				},
				tooltips: {
					mode: 'index',
					intersect: false,
				},
				hover: {
					mode: 'nearest',
					intersect: true
				},
				scales: {
					xAxes: [{
						display: false,
						scaleLabel: {
							display: false,
							labelString: 'Month'
						}
					}],
					yAxes: [{
                        display: true,
                        ticks: {
                        min:0,
                        max:30
                        },
						scaleLabel: {
							display: false,
							labelString: 'Value'
						}
					}]
				}
			}
		};
		
		var config5 = {
			type: 'line',
			data: {
				labels: labels,
				datasets: [{
					label: 'Actual Pressure',
					backgroundColor: window.chartColors.red,
					borderColor: window.chartColors.red,
					data: [
						
					],
					fill: false,
				}, {
					label: 'Nominal Pressure',
					fill: false,
					backgroundColor: window.chartColors.blue,
					borderColor: window.chartColors.blue,
					data: [
						
					],
				}]
			},
			options: {
				legend: {
					display: false
				},
				responsive: true,
				title: {
					display: false,
					text: 'Head 5 Pressures'
				},
				tooltips: {
					mode: 'index',
					intersect: false,
				},
				hover: {
					mode: 'nearest',
					intersect: true
				},
				scales: {
					xAxes: [{
						display: false,
						scaleLabel: {
							display: false,
							labelString: 'Month'
						}
					}],
					yAxes: [{
                        display: true,
                        ticks: {
                        min:0,
                        max:30
                        },
						scaleLabel: {
							display: false,
							labelString: 'Value'
						}
					}]
				}
			}
		};
		var config6 = {
			type: 'line',
			data: {
				labels: labels,
				datasets: [{
					label: 'Actual Pressure',
					backgroundColor: window.chartColors.red,
					borderColor: window.chartColors.red,
					data: [
						
					],
					fill: false,
				}, {
					label: 'Nominal Pressure',
					fill: false,
					backgroundColor: window.chartColors.blue,
					borderColor: window.chartColors.blue,
					data: [
						
					],
				}]
			},
			options: {
				legend: {
					display: false
				},
				responsive: true,
				title: {
					display: false,
					text: 'Head 5 Pressures'
				},
				tooltips: {
					mode: 'index',
					intersect: false,
				},
				hover: {
					mode: 'nearest',
					intersect: true
				},
				scales: {
					xAxes: [{
						display: false,
						scaleLabel: {
							display: false,
							labelString: 'Month'
						}
					}],
					yAxes: [{
                        display: true,
                        ticks: {
                        min:0,
                        max:30
                        },
						scaleLabel: {
							display: false,
							labelString: 'Value'
						}
					}]
				}
			}
		};
		var config7 = {
			type: 'line',
			data: {
				labels: labels,
				datasets: [{
					label: 'Actual Pressure',
					backgroundColor: window.chartColors.red,
					borderColor: window.chartColors.red,
					data: [
						
					],
					fill: false,
				}, {
					label: 'Nominal Pressure',
					fill: false,
					backgroundColor: window.chartColors.blue,
					borderColor: window.chartColors.blue,
					data: [
						
					],
				}]
			},
			options: {
				legend: {
					display: false
				},
				responsive: true,
				title: {
					display: false,
					text: 'Head 5 Pressures'
				},
				tooltips: {
					mode: 'index',
					intersect: false,
				},
				hover: {
					mode: 'nearest',
					intersect: true
				},
				scales: {
					xAxes: [{
						display: false,
						scaleLabel: {
							display: false,
							labelString: 'Month'
						}
					}],
					yAxes: [{
                        display: true,
                        ticks: {
                        min:0,
                        max:30
                        },
						scaleLabel: {
							display: false,
							labelString: 'Value'
						}
					}]
				}
			}
		};
		var config8 = {
			type: 'line',
			data: {
				labels: labels,
				datasets: [{
					label: 'Actual Pressure',
					backgroundColor: window.chartColors.red,
					borderColor: window.chartColors.red,
					data: [
						
					],
					fill: false,
				}, {
					label: 'Nominal Pressure',
					fill: false,
					backgroundColor: window.chartColors.blue,
					borderColor: window.chartColors.blue,
					data: [
						
					],
				}]
			},
			options: {
				legend: {
					display: false
				},
				responsive: true,
				title: {
					display: false,
					text: 'Head 5 Pressures'
				},
				tooltips: {
					mode: 'index',
					intersect: false,
				},
				hover: {
					mode: 'nearest',
					intersect: true
				},
				scales: {
					xAxes: [{
						display: false,
						scaleLabel: {
							display: false,
							labelString: 'Month'
						}
					}],
					yAxes: [{
                        display: true,
                        ticks: {
                        min:0,
                        max:30
                        },
						scaleLabel: {
							display: false,
							labelString: 'Value'
						}
					}]
				}
			}
		};
		var config9 = {
			type: 'line',
			data: {
				labels: labels,
				datasets: [{
					label: 'Actual Pressure',
					backgroundColor: window.chartColors.red,
					borderColor: window.chartColors.red,
					data: [
						
					],
					fill: false,
				}, {
					label: 'Nominal Pressure',
					fill: false,
					backgroundColor: window.chartColors.blue,
					borderColor: window.chartColors.blue,
					data: [
						
					],
				}]
			},
			options: {
				legend: {
					display: false
				},
				responsive: true,
				title: {
					display: false,
					text: 'Head 5 Pressures'
				},
				tooltips: {
					mode: 'index',
					intersect: false,
				},
				hover: {
					mode: 'nearest',
					intersect: true
				},
				scales: {
					xAxes: [{
						display: false,
						scaleLabel: {
							display: false,
							labelString: 'Month'
						}
					}],
					yAxes: [{
                        display: true,
                        ticks: {
                        min:0,
                        max:30
                        },
						scaleLabel: {
							display: false,
							labelString: 'Value'
						}
					}]
				}
			}
		};
		var config10 = {
			type: 'line',
			data: {
				labels: labels,
				datasets: [{
					label: 'Actual Pressure',
					backgroundColor: window.chartColors.red,
					borderColor: window.chartColors.red,
					data: [
						
					],
					fill: false,
				}, {
					label: 'Nominal Pressure',
					fill: false,
					backgroundColor: window.chartColors.blue,
					borderColor: window.chartColors.blue,
					data: [
						
					],
				}]
			},
			options: {
				legend: {
					display: false
				},
				responsive: true,
				title: {
					display: false,
					text: 'Head 5 Pressures'
				},
				tooltips: {
					mode: 'index',
					intersect: false,
				},
				hover: {
					mode: 'nearest',
					intersect: true
				},
				scales: {
					xAxes: [{
						display: false,
						scaleLabel: {
							display: false,
							labelString: 'Month'
						}
					}],
					yAxes: [{
                        display: true,
                        ticks: {
                        min:0,
                        max:30
                        },
						scaleLabel: {
							display: false,
							labelString: 'Value'
						}
					}]
				}
			}
		};
		var config11 = {
			type: 'line',
			data: {
				labels: labels,
				datasets: [{
					label: 'Actual Pressure',
					backgroundColor: window.chartColors.red,
					borderColor: window.chartColors.red,
					data: [
						
					],
					fill: false,
				}, {
					label: 'Nominal Pressure',
					fill: false,
					backgroundColor: window.chartColors.blue,
					borderColor: window.chartColors.blue,
					data: [
						
					],
				}]
			},
			options: {
				legend: {
					display: false
				},
				responsive: true,
				title: {
					display: false,
					text: 'Head 5 Pressures'
				},
				tooltips: {
					mode: 'index',
					intersect: false,
				},
				hover: {
					mode: 'nearest',
					intersect: true
				},
				scales: {
					xAxes: [{
						display: false,
						scaleLabel: {
							display: false,
							labelString: 'Month'
						}
					}],
					yAxes: [{
                        display: true,
                        ticks: {
                        min:0,
                        max:30
                        },
						scaleLabel: {
							display: false,
							labelString: 'Value'
						}
					}]
				}
			}
		};
		var config12 = {
			type: 'line',
			data: {
				labels: labels,
				datasets: [{
					label: 'Actual Pressure',
					backgroundColor: window.chartColors.red,
					borderColor: window.chartColors.red,
					data: [
						
					],
					fill: false,
				}, {
					label: 'Nominal Pressure',
					fill: false,
					backgroundColor: window.chartColors.blue,
					borderColor: window.chartColors.blue,
					data: [
						
					],
				}]
			},
			options: {
				legend: {
					display: false
				},
				responsive: true,
				title: {
					display: false,
					text: 'Head 5 Pressures'
				},
				tooltips: {
					mode: 'index',
					intersect: false,
				},
				hover: {
					mode: 'nearest',
					intersect: true
				},
				scales: {
					xAxes: [{
						display: false,
						scaleLabel: {
							display: false,
							labelString: 'Month'
						}
					}],
					yAxes: [{
                        display: true,
                        ticks: {
                        min:0,
                        max:30
                        },
						scaleLabel: {
							display: false,
							labelString: 'Value'
						}
					}]
				}
			}
        };


        
        window.onload = function() {
    
			head();
			
			var ctx1 = document.getElementById('canvas1').getContext('2d');
			window.myLine1 = new Chart(ctx1, config1);
			var ctx2 = document.getElementById('canvas2').getContext('2d');
			window.myLine2 = new Chart(ctx2, config2);
			var ctx3 = document.getElementById('canvas3').getContext('2d');
			window.myLine3 = new Chart(ctx3, config3);
			var ctx4 = document.getElementById('canvas4').getContext('2d');
            window.myLine4 = new Chart(ctx4, config4);

            var ctx5 = document.getElementById('canvas5').getContext('2d');
            window.myLine5 = new Chart(ctx5, config5);
            var ctx6 = document.getElementById('canvas6').getContext('2d');
			window.myLine6 = new Chart(ctx6, config6);
			var ctx7 = document.getElementById('canvas7').getContext('2d');
			window.myLine7 = new Chart(ctx7, config7);
			var ctx8 = document.getElementById('canvas8').getContext('2d');
			window.myLine8 = new Chart(ctx8, config8);

			var ctx9 = document.getElementById('canvas9').getContext('2d');
			window.myLine9 = new Chart(ctx9, config9);
			var ctx10 = document.getElementById('canvas10').getContext('2d');
			window.myLine10 = new Chart(ctx10, config10);
			var ctx11 = document.getElementById('canvas11').getContext('2d');
			window.myLine11 = new Chart(ctx11, config11);
			var ctx12 = document.getElementById('canvas12').getContext('2d');
            window.myLine12 = new Chart(ctx12, config12);

            }
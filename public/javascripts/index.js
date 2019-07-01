var barChartData = {
    labels: ['14/06/2019', '13/06/2019', '12/06/2019', '11/06/2019', '10/06/2019', '9/06/2019', '8/06/2019'],
    datasets: [{
        label: 'PCM 1',
        backgroundColor: window.chartColors.blue,
        stack: 'PCM 1',
        data: [
           10,20,10,10,10,15,10
        ]
    }, {
        label: 'PCM 5 - 8',
        backgroundColor: window.chartColors.red,
        stack: 'PCM 5 - 8',
        data: [
            10,20,15,20,10,15,10
        ]
    }, {
        label: 'PCM 9 -12',
        backgroundColor: window.chartColors.green,
        stack: 'PCM 9 - 12',
        data: [
            10,20,10,20,11,15,10
        ]
    }]
};
window.onload = function() {
    var ctx = document.getElementById('canvas').getContext('2d');
    window.myBar = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            title: {
                display: true,
                text: 'PCM Loss'
            },
            legend:{
                display: false
            },
            tooltips: {
                mode: 'index',
                intersect: false
            },
            responsive: true,
            scales: {
                xAxes: [{
                    stacked: true,
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        }
    });
};
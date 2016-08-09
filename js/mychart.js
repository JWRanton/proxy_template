const CHART = document.getElementById('barChart');
let barChart = new Chart(CHART, {
  type: 'bar',
  data: {
    labels: ["Sleep", "Depression", "Anxiety", "Alcohol", "Substance"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
        data: [30, 59, 90, 35, 0,],
      }
    ]
  },
  options: {
        scales: {
                xAxes: [{
                        stacked: true
                }],
                yAxes: [{
                        stacked: true
                }]
            }
        }
});

const CHART2 = document.getElementById('fearFighterChart');
let fearFighterChart = new Chart(CHART2, {
  type: 'line',
  data: data = {
    labels: ["Module 1", "Module 2", "Module 3", "Module 4", "Module 5"],
    datasets: [
        {
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 56, 55, 40, 25],
            spanGaps: false,
        }
    ]
},
  options: {
        scales: {
                xAxes: [{
                        stacked: true
                }],
                yAxes: [{
                        stacked: true
                }]
            }
        }
});

let batter=document.querySelector("canvas.batter");

let bower=document.querySelector("canvas.bower");

// Batsman

new Chart(batter, {
    type: 'bar',
    data: {
      labels: ['V Kohli', 'RD Gaikwad', 'R Parag', 'TM Head', 'SV Samson', 'B Sai Sudharsan','KL Rahul','N Pooran','SP Narine','Abhishek Sharma'],
      datasets: [
        {
        label: ' Most Runs in IPL 2024',
        data: [741,583,573,567,531,527,520,499,488,484],
        borderWidth: 1,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)',
            'rgba(219, 32, 129, 0.2)',
            'rgba(58, 232, 92, 0.2)',
            'rgba(0, 220, 255, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)',
            'rgb(219, 32, 129)',
            'rgb(58, 232, 92)',
            'rgba(0, 220, 255)'

          ],
          hoverBackgroundColor: [
            'rgba(255, 99, 132,0.5)',
            'rgba(255, 159, 64, 0.5)',
            'rgba(255, 205, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(201, 203, 207, 0.5)',
            'rgba(219, 32, 129, 0.4)',
            'rgba(58, 232, 92, 0.4)',
            'rgba(0, 220, 255, 0.4)'
          ]
        }

    ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      animation: {
        delay: function(context) {
            let delay = 0;
            if (context.type === 'data' && context.mode === 'default' && !context.dropped) {
                delay = context.dataIndex * 100 + context.datasetIndex * 100;
                context.dropped = true;
            }
            return delay;
        }
      }
    }
  });

// Bower

new Chart(bower, {
    type: 'line',
    data: {
      labels: ['HV Patel', 'CV Varun', 'JJ Bumrah', 'AD Russell', 'Harshit Rana', 'T Natarajan','Arshdeep Singh ','Avesh Khan','YS Chahal','PJ Cummins '],
      datasets: [
        {
        label: 'Most Wickets in IPL 2024',
        data: [24,21,20,19,19,19,19,19,18,18],
        borderWidth: 1,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)',
            'rgba(219, 32, 129, 0.2)',
            'rgba(58, 232, 92, 0.2)',
            'rgba(0, 220, 255, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)',
            'rgb(219, 32, 129)',
            'rgb(58, 232, 92)',
            'rgba(0, 220, 255)'

          ],
          hoverBackgroundColor: [
            'rgba(255, 99, 132,0.5)',
            'rgba(255, 159, 64, 0.5)',
            'rgba(255, 205, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(201, 203, 207, 0.5)',
            'rgba(219, 32, 129, 0.4)',
            'rgba(58, 232, 92, 0.4)',
            'rgba(0, 220, 255, 0.4)'
          ]
        }

    ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      animation: {
        delay: function(context) {
            let delay = 0;
            if (context.type === 'data' && context.mode === 'default' && !context.dropped) {
                delay = context.dataIndex * 100 + context.datasetIndex * 100;
                context.dropped = true;
            }
            return delay;
        }
      }
    }
  });
const ctx1 = document.getElementById('grafico1');
const ctx2 = document.getElementById('grafico2');
const ctx3 = document.getElementById('grafico3');
const ctx4 = document.getElementById('grafico4');

new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                stacked: true
            }
            
        }
    }
});

new Chart(ctx2, {
    type: 'line',
    data: {
        datasets: [{
            label: 'Produção',
            data: [0, 20, 40, 50]
        }],
        labels: ['January', 'February', 'March', 'April']
    },
    options: {
        scales: {
            y: {
                suggestedMin: 50,
                suggestedMax: 100
            }
        }
    }
});
new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['10/Jan', '11/Jan', '12/Jan'],
        datasets: [{
            label: 'Desperdício',
            data: [12, 19, 3],
            borderWidth: 1,
            backgroundColor: [
                'rgb(255, 99, 132)'
                // 'rgb(54, 162, 235)',
                // 'rgb(255, 205, 86)'
              ]
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                stacked: true
                
            }
            
        }
    }
});
new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: 'rgb(255, 99, 132)'
                }
            },subtitle: {
                display: true,
                text: 'Custom Chart Subtitle'
            }
        }
    }
});



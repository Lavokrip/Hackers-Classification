const ctx = document.getElementById('casesTimelineChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [
            '2010',
            '2013',
            '2015',
            '2017',
            '2019',
            '2022'
        ],
        datasets: [{
            label: 'Год',
            data: [10, 13, 15, 17, 19, 22],
            backgroundColor: [
                '#6D4BFF',
                '#00D7FF',
                '#00F7A5',
                '#FF2FA7',
                '#FFC400',
                '#B000FF'
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {

                        const descriptions = [
                            'Взлом WikiLeaks',
                            'Взлом Target',
                            'Угон Jeep Cherokee',
                            'Эпидемия WannaCry',
                            'Ошибка FaceTime',
                            'Рост атак через цепочки поставок'
                        ];

                        return descriptions[context.dataIndex];
                    }
                }
            },
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#ffffff'
                },
                grid: {
                    color: '#333333'
                }
            },
            y: {
                ticks: {
                    color: '#ffffff'
                },
                grid: {
                    color: '#333333'
                }
            }
        }
    }
});
const ctx = document.getElementById('hackersRadarChart');

new Chart(ctx, {
    type: 'radar',

    data: {
    labels: [
        'White Hat',
        'Black Hat',
        'Grey Hat',
        'Script-kiddie',
        'Гос. хакер'
    ],

    datasets: [
        {
        label: 'Технические навыки',
        data: [9, 9, 8, 2, 10],
        borderColor: '#8B5CF6',
        backgroundColor: 'rgba(139, 92, 246, 0.15)',
        pointBackgroundColor: '#8B5CF6',
        borderWidth: 3
        },

        {
        label: 'Законность действий',
        data: [10, 0, 5, 1, 9],
        borderColor: '#22D3EE',
        backgroundColor: 'rgba(34, 211, 238, 0.12)',
        pointBackgroundColor: '#22D3EE',
        borderWidth: 3
        },

        {
        label: 'Соблюдение этики',
        data: [10, 0, 5, 2, 8],
        borderColor: '#00FF85',
        backgroundColor: 'rgba(0, 255, 133, 0.12)',
        pointBackgroundColor: '#00FF85',
        borderWidth: 3
        },

        {
        label: 'Уровень скрытности',
        data: [7, 8, 7, 3, 9],
        borderColor: '#FF2BC2',
        backgroundColor: 'rgba(255, 43, 194, 0.12)',
        pointBackgroundColor: '#FF2BC2',
        borderWidth: 3
        },

        {
        label: 'Финансовая мотивация',
        data: [8, 10, 6, 3, 3],
        borderColor: '#FFD600',
        backgroundColor: 'rgba(255, 214, 0, 0.12)',
        pointBackgroundColor: '#FFD600',
        borderWidth: 3
        }
    ]
    },

    options: {
    responsive: true,

    plugins: {
        legend: {
        display: false
        },

        tooltip: {
        enabled: true,
        backgroundColor: '#111827',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#ffffff',
        borderWidth: 1,

        callbacks: {
            label: function(context) {
            return context.dataset.label + ': ' + context.parsed.r + '/10';
            }
        }
        }
    },

    scales: {
        r: {
        min: 0,
        max: 10,

        ticks: {
            display: false,
            stepSize: 2,
            color: '#ffffff'
        },

        grid: {
            color: 'rgba(255,255,255,0.35)'
        },

        angleLines: {
            color: 'rgba(255,255,255,0.35)'
        },

        pointLabels: {
            color: '#ffffff',
            font: {
            size: 16,
            family: 'Roboto'
            }
        }
        }
    }
    }
});
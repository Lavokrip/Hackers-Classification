const methodsChartCanvas = document.getElementById("methodsChart");

new Chart(methodsChartCanvas, {
    type: "bar",

    data: {
        labels: [
            "Уязвимости в веб-приложениях",
            "Скомпрометированные учётные данные",
            "Фишинг (точка входа)",
            "ВПО (все атаки на организации)",
            "Социальная инженерия (все этапы)"
        ],

        datasets: [{
            label: "Процент использования",
            data: [31, 28, 14, 71, 51],

            backgroundColor: [
                "#7C4DFF",
                "#1FD8F1",
                "#14F195",
                "#FF2DAA",
                "#FFC800"
            ],

            borderWidth: 0
        }]
    },

    options: {
        indexAxis: "y",

        responsive: true,

        plugins: {
            legend: {
                display: false
            },

            tooltip: {
                enabled: true,

                callbacks: {
                    label: function(context) {
                        return context.raw + "%";
                    }
                }
            }
        },

        scales: {

            x: {
                beginAtZero: true,
                max: 100,

                ticks: {
                    color: "#ffffff"
                },

                grid: {
                    color: "rgba(255,255,255,0.1)"
                }
            },

            y: {

                ticks: {
                    color: "#ffffff",
                    font: {
                        size: 24,
                        family: "'JetBrains Mono', sans-serif"
                    }
                },

                grid: {
                    display: false
                }
            }
        }
    }
});
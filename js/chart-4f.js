const motivesChartCanvas = document.getElementById("motivesChart");

new Chart(motivesChartCanvas, {
    type: "pie",

    data: {
        labels: [
            "Финансовая выгода",
            "Кибершпионаж",
            "Идеология / Развлечение",
        ],

        datasets: [
            {
                data: [91, 7, 2],

                backgroundColor: [
                    "#8B4CFF",
                    "#FF29AB",
                    "#00FF97"
                ],

                borderColor: "#070B12",
                borderWidth: 4,

                hoverOffset: 20
            }
        ]
    },

    options: {
        responsive: true,

        plugins: {

            legend: {
                position: "bottom",

                labels: {
                    color: "#ffffff",
                    font: {
                        size: 24,
                        family: "'JetBrains Mono', sans-serif"
                    },
                    padding: 25
                }
            },

            tooltip: {
                enabled: true,

                callbacks: {
                    label: function(context) {

                        const label = context.label;
                        const value = context.raw;

                        return label + ": " + value + "%";
                    }
                }
            }
        },

        animation: {
            animateRotate: true,
            animateScale: true
        }
    }
});
export const chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
};

export const chartColorsTransparent = {
    red: 'rgba(255, 99, 132, 0.5)',
    orange: 'rgba(255, 159, 64, 0.5)',
    yellow: 'rgba(255, 205, 86, 0.5)',
    green: 'rgba(75, 192, 192, 0.5)',
    blue: 'rgba(54, 162, 235, 0.5)',
    purple: 'rgba(153, 102, 255, 0.5)',
    grey: 'rgba(201, 203, 207, 0.5)'
};

export const labels = [
    'Januari',
    'Februari',
    'Mars',
    'April',
    'Maj',
    'Juni',
    'Juli',
    'Augusti',
    'September',
    'Oktober',
    'November',
    'December'
];

export const options= {
    plugins: {
        legend: {
            display: true,
            labels: {
                color: 'white'
            }
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            suggestedMax: 45,
            display: true,
            title: {
                display: true,
                color: 'white'
            },
            grid: {
                display:true,
            },
            ticks: {
                color: 'white',
                font: {
                    size: 13
                }
            }
        },
        x: {
            title: {
                display: false,
                color: 'white',
            },
            grid: {
                display:true
            },
            ticks: {
                color: 'white',
                font: {
                    size: 13
                }
            }
        }
    }
}

// Explosions stacked bar chart
export const options_explosions= {

    plugins: {
        legend: {
            display: true,
            labels: {
                color: 'white'
            }
        },
        labels: {
            display: true,
            align: 'center',
            anchor: 'center'
        }
    },
    indexAxis: 'y',
    elements: {
        bar: {
            borderWidth: 2,
        }
    },
    scales: {
        y: {
            stacked: true,
            beginAtZero: true,
            display: true,
            title: {
                display: true,
                color: 'white'
            },
            grid: {
                display:true,
            },
            ticks: {
                color: 'white',
                font: {
                    size: 14
                }
            }
        },
        x: {
            stacked: true,
            suggestedMax: 35,
            title: {
                display: false,
                color: 'white',
            },
            grid: {
                display:true
            },
            ticks: {
                color: 'white',
                font: {
                    size: 14
                }
            }
        }
    }
}

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


export const options = {
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
            borderWidth: 1,
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

const events = [
    'Alkohollagen',
    'Antr??ffad d??d',
    'Antr??ffat gods',
    'Arbetsplatsolycka',
    'Bedr??geri',
    'Bombhot',
    'Brand',
    'Brand automatlarm',
    'Br??k',
    'Detonation',
    'Djur skadat/omh??ndertaget',
    'Ekobrott',
    'Farligt f??rem??l, misst??nkt',
    'Fj??llr??ddning',
    'Fylleri/LOB',
    'F??rfalskningsbrott',
    'F??rsvunnen person',
    'Gr??nskontroll',
    'H??leri',
    'Inbrott',
    'Inbrott, f??rs??k',
    'Knivlagen',
    'Kontroll person/fordon',
    'Lagen om hundar och katter',
    'Larm inbrott',
    'Larm ??verfall',
    'Milj??brott',
    'Missbruk av urkund',
    'Misshandel',
    'Misshandel, grov',
    'Mord/dr??p',
    'Mord/dr??p, f??rs??k',
    'Motorfordon, antr??ffat stulet',
    'Motorfordon, st??ld',
    'Narkotikabrott',
    'Naturkatastrof',
    'Ofog barn/ungdom',
    'Ofredande/f??rargelse',
    'Olaga frihetsber??vande',
    'Olaga hot',
    'Olaga intr??ng/hemfridsbrott',
    'Olovlig k??rning',
    'Ordningslagen',
    'Polisinsats/kommendering',
    'Rattfylleri',
    'R??ddningsinsats',
    'R??n',
    'R??n v??pnat',
    'R??n ??vrigt',
    'R??n, f??rs??k',
    'Sammanfattning dag',
    'Sammanfattning dygn',
    'Sammanfattning eftermiddag',
    'Sammanfattning f??rmiddag',
    'Sammanfattning helg',
    'Sammanfattning kv??ll',
    'Sammanfattning kv??ll och natt',
    'Sammanfattning natt',
    'Sammanfattning vecka',
    'Sedlighetsbrott',
    'Sjukdom/olycksfall',
    'Sj??lagen',
    'Skadeg??relse',
    'Skottlossning',
    'Skottlossning, misst??nkt',
    'Spridning smittsamma kemikalier',
    'St??ld',
    'St??ld, f??rs??k',
    'St??ld, ringa',
    'St??ld/inbrott',
    'Tillf??lligt obemannat',
    'Trafikbrott',
    'Trafikhinder',
    'Trafikkontroll',
    'Trafikolycka',
    'Trafikolycka, personskada',
    'Trafikolycka, singel',
    'Trafikolycka, smitning fr??n',
    'Trafikolycka, vilt',
    'Uppdatering',
    'Utl??nningslagen',
    'Vapenlagen',
    'Varningslarm/haveri',
    'V??ld/hot mot tj??nsteman',
    'V??ldt??kt',
    'V??ldt??kt, f??rs??k',
    'V??llande till kroppsskada']

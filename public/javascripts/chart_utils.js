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
    'Anträffad död',
    'Anträffat gods',
    'Arbetsplatsolycka',
    'Bedrägeri',
    'Bombhot',
    'Brand',
    'Brand automatlarm',
    'Bråk',
    'Detonation',
    'Djur skadat/omhändertaget',
    'Ekobrott',
    'Farligt föremål, misstänkt',
    'Fjällräddning',
    'Fylleri/LOB',
    'Förfalskningsbrott',
    'Försvunnen person',
    'Gränskontroll',
    'Häleri',
    'Inbrott',
    'Inbrott, försök',
    'Knivlagen',
    'Kontroll person/fordon',
    'Lagen om hundar och katter',
    'Larm inbrott',
    'Larm överfall',
    'Miljöbrott',
    'Missbruk av urkund',
    'Misshandel',
    'Misshandel, grov',
    'Mord/dråp',
    'Mord/dråp, försök',
    'Motorfordon, anträffat stulet',
    'Motorfordon, stöld',
    'Narkotikabrott',
    'Naturkatastrof',
    'Ofog barn/ungdom',
    'Ofredande/förargelse',
    'Olaga frihetsberövande',
    'Olaga hot',
    'Olaga intrång/hemfridsbrott',
    'Olovlig körning',
    'Ordningslagen',
    'Polisinsats/kommendering',
    'Rattfylleri',
    'Räddningsinsats',
    'Rån',
    'Rån väpnat',
    'Rån övrigt',
    'Rån, försök',
    'Sammanfattning dag',
    'Sammanfattning dygn',
    'Sammanfattning eftermiddag',
    'Sammanfattning förmiddag',
    'Sammanfattning helg',
    'Sammanfattning kväll',
    'Sammanfattning kväll och natt',
    'Sammanfattning natt',
    'Sammanfattning vecka',
    'Sedlighetsbrott',
    'Sjukdom/olycksfall',
    'Sjölagen',
    'Skadegörelse',
    'Skottlossning',
    'Skottlossning, misstänkt',
    'Spridning smittsamma kemikalier',
    'Stöld',
    'Stöld, försök',
    'Stöld, ringa',
    'Stöld/inbrott',
    'Tillfälligt obemannat',
    'Trafikbrott',
    'Trafikhinder',
    'Trafikkontroll',
    'Trafikolycka',
    'Trafikolycka, personskada',
    'Trafikolycka, singel',
    'Trafikolycka, smitning från',
    'Trafikolycka, vilt',
    'Uppdatering',
    'Utlänningslagen',
    'Vapenlagen',
    'Varningslarm/haveri',
    'Våld/hot mot tjänsteman',
    'Våldtäkt',
    'Våldtäkt, försök',
    'Vållande till kroppsskada']


/*
export const eventsLayer = {
    'Alkohollagen': cities,
    'Anträffad död': cities,
    'Anträffat gods': cities,
    'Arbetsplatsolycka': cities,
    'Bedrägeri': cities,
    'Bombhot': cities,
    'Brand': cities,
    'Brand automatlarm': cities,
    'Bråk': cities,
    'Detonation': cities,
    'Djur skadat/omhändertaget': cities,
    'Ekobrott': cities,
    'Farligt föremål, misstänkt': cities,
    'Fjällräddning': cities,
    'Fylleri/LOB': cities,
    'Förfalskningsbrott': cities,
    'Försvunnen person': cities,
    'Gränskontroll': cities,
    'Häleri': cities,
    'Inbrott': cities,
    'Inbrott, försök': cities,
    'Knivlagen': cities,
    'Kontroll person/fordon': cities,
    'Lagen om hundar och katter': cities,
    'Larm inbrott': cities,
    'Larm överfall': cities,
    'Miljöbrott': cities,
    'Missbruk av urkund': cities,
    'Misshandel': cities,
    'Misshandel, grov': cities,
    'Mord/dråp': cities,
    'Mord/dråp, försök': cities,
    'Motorfordon, anträffat stulet': cities,
    'Motorfordon, stöld': cities,
    'Narkotikabrott': cities,
    'Naturkatastrof': cities,
    'Ofog barn/ungdom': cities,
    'Ofredande/förargelse': cities,
    'Olaga frihetsberövande': cities,
    'Olaga hot': cities,
    'Olaga intrång/hemfridsbrott': cities,
    'Olovlig körning': cities,
    'Ordningslagen': cities,
    'Polisinsats/kommendering': cities,
    'Rattfylleri': cities,
    'Räddningsinsats': cities,
    'Rån': cities,
    'Rån väpnat': cities,
    'Rån övrigt': cities,
    'Rån, försök': cities,
    'Sammanfattning dag': cities,
    'Sammanfattning dygn': cities,
    'Sammanfattning eftermiddag': cities,
    'Sammanfattning förmiddag': cities,
    'Sammanfattning helg': cities,
    'Sammanfattning kväll': cities,
    'Sammanfattning kväll och natt': cities,
    'Sammanfattning natt': cities,
    'Sammanfattning vecka': cities,
    'Sedlighetsbrott': cities,
    'Sjukdom/olycksfall': cities,
    'Sjölagen': cities,
    'Skadegörelse': cities,
    'Skottlossning': cities,
    'Skottlossning, misstänkt': cities,
    'Spridning smittsamma kemikalier': cities,
    'Stöld': cities,
    'Stöld, försök': cities,
    'Stöld, ringa': cities,
    'Stöld/inbrott': cities,
    'Tillfälligt obemannat': cities,
    'Trafikbrott': cities,
    'Trafikhinder': cities,
    'Trafikkontroll': cities,
    'Trafikolycka': cities,
    'Trafikolycka, personskada': cities,
    'Trafikolycka, singel': cities,
    'Trafikolycka, smitning från': cities,
    'Trafikolycka, vilt': cities,
    'Uppdatering': cities,
    'Utlänningslagen': cities,
    'Vapenlagen': cities,
    'Varningslarm/haveri': cities,
    'Våld/hot mot tjänsteman': cities,
    'Våldtäkt': cities,
    'Våldtäkt, försök': cities,
    'Vållande till kroppsskada': cities
};*/

$(document).ready(() => {

    const labels = [
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


/*    const data_skjutningar_2020 = {
        labels: labels,
        datasets: [{
            label: 'Skjutningar 2020',
            backgroundColor: 'rgb(75, 192, 192)',
            borderColor: 'rgb(75, 192, 192)',
            data: [33, 21, 36, 23, 29, 33, 33, 42, 39, 34, 22, 21],
        }]
    };*/

    const data_skjutningar_2021 = [22, 14, 21, 21, 34, 34, 34, 0, 0, 0, 0, 0];
    const data_avlidna_2021 = [2, 3, 1, 3, 8, 4, 4, 0, 0, 0, 0, 0];
    const data_skadade_2021 = [8, 7, 2, 8, 4, 11, 13, 0, 0, 0, 0, 0];

    const data_skjutningar_2020 = [33, 21, 36, 23, 29, 33, 33, 42, 39, 34, 22, 21];
    const data_avlidna_2020 = [4, 3, 5, 3, 4, 3, 3, 5, 5, 3, 5, 4];
    const data_skadade_2020 = [14, 4, 13, 6, 14, 9, 10, 12, 13, 12, 3, 7];

    const data_skjutningar_2019 = [17, 23, 17, 24, 29, 45, 27, 32, 35, 18, 30, 37];
    const data_avlidna_2019 = [3, 5, 1, 6, 1, 4, 2, 4, 1, 4, 1, 10];
    const data_skadade_2019 = [5, 4, 7, 8, 12, 17, 11, 11, 12, 4, 11, 18];

    const data_2021 = {
        labels: labels,
        datasets: [
            {
                label: 'Antal Skjutningar 2021',
                data: data_skjutningar_2021,
                borderColor: 'rgb(255,205,86)',
                backgroundColor: 'rgba(255,205,86, 0.5)',
                yAxisID: 'y',
            },
            {
                label: 'Antal avlidna 2021',
                data: data_avlidna_2021,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                yAxisID: 'y',
            },
            {
                label: 'Antal skadade 2021',
                data: data_skadade_2021,
                borderColor: 'rgb(255,159,64)',
                backgroundColor: 'rgba(255,159,64, 0.5)',
                yAxisID: 'y',
            }
        ],
        options: {
            
        }
    };

    const config_2021 = {
        type: 'line',
        data: data_2021,
    };

    const shootings_2021 = new Chart(
        document.getElementById('shootings_2021'),
        config_2021
    );

    const data_2020 = {
        labels: labels,
        datasets: [
            {
                label: 'Antal Skjutningar 2020',
                data: data_skjutningar_2020,
                borderColor: 'rgb(255,205,86)',
                backgroundColor: 'rgba(255,205,86, 0.5)',
                yAxisID: 'y',
            },
            {
                label: 'Antal avlidna 2020',
                data: data_avlidna_2020,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                yAxisID: 'y',
            },
            {
                label: 'Antal skadade 2020',
                data: data_skadade_2020,
                borderColor: 'rgb(255,159,64)',
                backgroundColor: 'rgba(255,159,64, 0.5)',
                yAxisID: 'y',
            }
        ]
    };

    const config_2020 = {
        type: 'line',
        data: data_2020,
    };

    const shootings_2020 = new Chart(
        document.getElementById('shootings_2020'),
        config_2020
    );

    const data_2019 = {
        labels: labels,
        datasets: [
            {
                label: 'Antal Skjutningar 2019',
                data: data_skjutningar_2019,
                borderColor: 'rgb(255,205,86)',
                backgroundColor: 'rgba(255,205,86, 0.5)',
                yAxisID: 'y',
            },
            {
                label: 'Antal avlidna 2019',
                data: data_avlidna_2019,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                yAxisID: 'y',
            },
            {
                label: 'Antal skadade 2019',
                data: data_skadade_2019,
                borderColor: 'rgb(255,159,64)',
                backgroundColor: 'rgba(255,159,64, 0.5)',
                yAxisID: 'y',
            }
        ]
    };

    const config_2019 = {
        type: 'line',
        data: data_2019,
    };

    const shootings_2019 = new Chart(
        document.getElementById('shootings_2019'),
        config_2020
    );


/*    const config_skjutningar_2020 = {
        type: 'line',
        data: data,
        options: {}
    };

    const config_skjutningar_2021 = {
        type: 'line',
        data: data_skjutningar_2021,
        options: {}
    };

    const shootings_2020 = new Chart(
        document.getElementById('shootings_2020'),
        config_skjutningar_2020
    );

    const shootings_2021 = new Chart(
        document.getElementById('shootings_2021'),
        config_skjutningar_2021
    );*/



});

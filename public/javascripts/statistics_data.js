import {chartColors, chartColorsTransparent, labels, options, options_explosions} from "./chart_utils.js";

const data_skjutningar_2021 = [22, 14, 21, 21, 35, 34, 35, 41, 26, 0, 0, 0];
const data_avlidna_2021 = [2, 3, 1, 3, 9, 3, 4, 10, 3, 0, 0, 0];
const data_skadade_2021 = [8, 7, 2, 8, 4, 11, 12, 13, 12, 0, 0, 0];

const data_skjutningar_2020 = [33, 21, 36, 23, 29, 33, 33, 42, 39, 34, 22, 21];
const data_avlidna_2020 = [4, 3, 5, 3, 4, 3, 3, 5, 5, 3, 5, 4];
const data_skadade_2020 = [14, 4, 13, 6, 14, 9, 10, 12, 13, 12, 3, 7];

const data_skjutningar_2019 = [17, 23, 17, 24, 29, 45, 27, 32, 35, 18, 30, 37];
const data_avlidna_2019 = [3, 5, 1, 6, 1, 4, 2, 4, 1, 4, 1, 10];
const data_skadade_2019 = [5, 4, 7, 8, 12, 17, 11, 11, 12, 4, 11, 18];

const data_skjutningar_2018 = [21, 14, 20, 21, 31, 25, 32, 26, 32, 26, 32, 26];
const data_avlidna_2018 = [6, 2, 0, 1, 6, 8, 7, 1, 3, 3, 6, 2];
const data_skadade_2018 = [11, 2, 12, 9, 14, 17, 13, 11, 13, 9, 19, 5];

const data_skjutningar_2017 = [33, 19, 28, 19, 22, 26, 33, 28, 31, 29, 24, 32];
const data_avlidna_2017 = [4, 2, 8, 2, 4, 6, 1, 3, 1, 4, 6, 2];
const data_skadade_2017 = [10, 10, 8, 6, 6, 9, 24, 17, 16, 14, 7, 12];


export const data_detonationer_2021 = [9, 5, 9, 8, 11, 6, 3, 5, 8, 0, 0, 0];
export const data_forberedelse_2021 = [3, 7, 9, 5, 5, 4, 6, 7, 6, 0, 0, 0];
export const data_forsok_2021 = [0, 2, 0, 2, 2, 0, 1, 0, 0, 0, 0, 0];

export const data_detonationer_2020 = [12, 8, 12, 13, 7, 8, 7, 11, 6, 11, 7, 5];
export const data_forberedelse_2020 = [9, 5, 7, 10, 9, 6, 5, 6, 7, 13, 4, 8];
export const data_forsok_2020 = [3, 2, 1, 1, 0, 0, 0, 0, 2, 4, 0, 0];

export const data_detonationer_2019 = [18, 6, 6, 10, 6, 11, 8, 5, 14, 16, 22, 11];
export const data_forberedelse_2019 = [2, 5, 5, 9, 8, 4, 5, 10, 9, 9, 9, 7];
export const data_forsok_2019 = [0, 0, 1, 4, 1, 0, 3, 5, 6, 1, 3, 3];

export const data_detonationer_2018 = [6, 7, 3, 4, 8, 7, 6, 9, 6, 5, 11, 18];
export const data_forberedelse_2018 = [3, 7, 5, 4, 4, 5, 3, 6, 2, 5, 6, 2];
export const data_forsok_2018 = [2, 2, 1, 2, 1, 1, 0, 0, 3, 0, 0, 0];

// Shootings
const data_shootings_2021 = {
    labels: labels,
    datasets: [
        {
            label: 'Skjutningar 2021',
            data: data_skjutningar_2021,
            borderColor: chartColors.yellow,
            backgroundColor: chartColorsTransparent.yellow,
            yAxisID: 'y',
        },
        {
            label: 'Avlidna 2021',
            data: data_avlidna_2021,
            borderColor: chartColors.red,
            backgroundColor: chartColorsTransparent.red,
            yAxisID: 'y',
        },
        {
            label: 'Skadade 2021',
            data: data_skadade_2021,
            borderColor: chartColors.orange,
            backgroundColor: chartColorsTransparent.orange,
            yAxisID: 'y',
        }
    ]
};

const data_shootings_2020 = {
    labels: labels,
    datasets: [
        {
            label: 'Skjutningar 2020',
            data: data_skjutningar_2020,
            borderColor: chartColors.yellow,
            backgroundColor: chartColorsTransparent.yellow,
            yAxisID: 'y',
        },
        {
            label: 'Avlidna 2020',
            data: data_avlidna_2020,
            borderColor: chartColors.red,
            backgroundColor: chartColorsTransparent.red,
            yAxisID: 'y',
        },
        {
            label: 'Skadade 2020',
            data: data_skadade_2020,
            borderColor: chartColors.orange,
            backgroundColor: chartColorsTransparent.orange,
            yAxisID: 'y',
        }
    ]
};

const data_shootings_2019 = {
    labels: labels,
    datasets: [
        {
            label: 'Skjutningar 2019',
            data: data_skjutningar_2019,
            borderColor: chartColors.yellow,
            backgroundColor: chartColorsTransparent.yellow,
            yAxisID: 'y',
        },
        {
            label: 'Avlidna 2019',
            data: data_avlidna_2019,
            borderColor: chartColors.red,
            backgroundColor: chartColorsTransparent.red,
            yAxisID: 'y',
        },
        {
            label: 'Skadade 2019',
            data: data_skadade_2019,
            borderColor: chartColors.orange,
            backgroundColor: chartColorsTransparent.orange,
            yAxisID: 'y',
        }
    ]
};

const data_shootings_2018 = {
    labels: labels,
    datasets: [
        {
            label: 'Skjutningar 2018',
            data: data_skjutningar_2018,
            borderColor: chartColors.yellow,
            backgroundColor: chartColorsTransparent.yellow,
            yAxisID: 'y',
        },
        {
            label: 'Avlidna 2018',
            data: data_avlidna_2018,
            borderColor: chartColors.red,
            backgroundColor: chartColorsTransparent.red,
            yAxisID: 'y',
        },
        {
            label: 'Skadade 2018',
            data: data_skadade_2018,
            borderColor: chartColors.orange,
            backgroundColor: chartColorsTransparent.orange,
            yAxisID: 'y',
        }
    ]
};

const data_shootings_2017 = {
    labels: labels,
    datasets: [
        {
            label: 'Skjutningar 2017',
            data: data_skjutningar_2017,
            borderColor: chartColors.yellow,
            backgroundColor: chartColorsTransparent.yellow,
            yAxisID: 'y',
        },
        {
            label: 'Avlidna 2017',
            data: data_avlidna_2017,
            borderColor: chartColors.red,
            backgroundColor: chartColorsTransparent.red,
            yAxisID: 'y',
        },
        {
            label: 'Skadade 2017',
            data: data_skadade_2017,
            borderColor: chartColors.orange,
            backgroundColor: chartColorsTransparent.orange,
            yAxisID: 'y',
        }
    ]
};

// Explosions
export const data_explosions_2021 = {
    labels: labels,
    datasets: [
        {
            label: 'Detonationer 2021',
            data: data_detonationer_2021,
            borderColor: chartColors.red,
            backgroundColor: chartColorsTransparent.red,
            yAxisID: 'y',
        },
        {
            label: 'Försök 2021',
            data: data_forsok_2021,
            borderColor: chartColors.orange,
            backgroundColor: chartColorsTransparent.orange,
            yAxisID: 'y',
        },
        {
            label: 'Förberedelse 2021',
            data: data_forberedelse_2021,
            borderColor: chartColors.yellow,
            backgroundColor: chartColorsTransparent.yellow,
            yAxisID: 'y',
        },
    ]
};

export const data_explosions_2020 = {
    labels: labels,
    datasets: [
        {
            label: 'Detonationer 2020',
            data: data_detonationer_2020,
            borderColor: chartColors.red,
            backgroundColor: chartColorsTransparent.red,
            yAxisID: 'y',
        },
        {
            label: 'Försök 2020',
            data: data_forsok_2020,
            borderColor: chartColors.orange,
            backgroundColor: chartColorsTransparent.orange,
            yAxisID: 'y',
        },
        {
            label: 'Förberedelse 2020',
            data: data_forberedelse_2020,
            borderColor: chartColors.yellow,
            backgroundColor: chartColorsTransparent.yellow,
            yAxisID: 'y',
        },
    ]
};

export const data_explosions_2019 = {
    labels: labels,
    datasets: [
        {
            label: 'Detonationer 2019',
            data: data_detonationer_2019,
            borderColor: chartColors.red,
            backgroundColor: chartColorsTransparent.red,
            yAxisID: 'y',
        },
        {
            label: 'Försök 2019',
            data: data_forsok_2019,
            borderColor: chartColors.orange,
            backgroundColor: chartColorsTransparent.orange,
            yAxisID: 'y',
        },
        {
            label: 'Förberedelse 2019',
            data: data_forberedelse_2019,
            borderColor: chartColors.yellow,
            backgroundColor: chartColorsTransparent.yellow,
            yAxisID: 'y',
        }
    ]
};

export const data_explosions_2018 = {
    labels: labels,
    datasets: [
        {
            label: 'Detonationer 2018',
            data: data_detonationer_2018,
            borderColor: chartColors.red,
            backgroundColor: chartColorsTransparent.red,
            yAxisID: 'y',
        },
        {
            label: 'Försök 2018',
            data: data_forsok_2018,
            borderColor: chartColors.orange,
            backgroundColor: chartColorsTransparent.orange,
            yAxisID: 'y',
        },
        {
            label: 'Förberedelse 2018',
            data: data_forberedelse_2018,
            borderColor: chartColors.yellow,
            backgroundColor: chartColorsTransparent.yellow,
            yAxisID: 'y',
        }
    ]
};

// Shootings
export const config_shootings_2021 = {
    type: 'line',
    data: data_shootings_2021,
    options: options
};

export const config_shootings_2020 = {
    type: 'line',
    data: data_shootings_2020,
    options: options
};

export const config_shootings_2019 = {
    type: 'line',
    data: data_shootings_2019,
    options: options
};

export const config_shootings_2018 = {
    type: 'line',
    data: data_shootings_2018,
    options: options
};

export const config_shootings_2017 = {
    type: 'line',
    data: data_shootings_2017,
    options: options
};

// Explosions
export const config_explosions_2021 = {
    type: 'bar',
    options: options_explosions
};

export const config_explosions_2020 = {
    type: 'bar',
    options: options_explosions
};

export const config_explosions_2019 = {
    type: 'bar',
    options: options_explosions
};

export const config_explosions_2018 = {
    type: 'bar',
    options: options_explosions
};



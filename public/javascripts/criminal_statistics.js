import {config_shootings_2019, config_shootings_2020, config_shootings_2021} from './statistics_data.js';
import {config_explosions_2019, config_explosions_2020, config_explosions_2021} from './statistics_data.js';


$(document).ready(() => {

    $(document).on('click','.nav-link a', function (e) {
        e.preventDefault();
        $(this).tab('show');
    })


    // Shootings
    const shootings_2021 = new Chart(
        document.getElementById('shootings_2021'),
        config_shootings_2021
    );

    const shootings_2020 = new Chart(
        document.getElementById('shootings_2020'),
        config_shootings_2020
    );

    const shootings_2019 = new Chart(
        document.getElementById('shootings_2019'),
        config_shootings_2019
    );

    // Explosions
    const explosions_2019 = new Chart(
        document.getElementById('explosions_2019'),
        config_explosions_2019
    );

    const explosions_2020 = new Chart(
        document.getElementById('explosions_2020'),
        config_explosions_2020
    );

    const explosions_2021 = new Chart(
        document.getElementById('explosions_2021'),
        config_explosions_2021
    );

});

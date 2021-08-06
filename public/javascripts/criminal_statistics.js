import {config_shootings_2019, config_shootings_2020, config_shootings_2021} from './statistics_data.js';
import {config_explosions_2019, config_explosions_2020, config_explosions_2021} from './statistics_data.js';
import {data_explosions_2019, data_explosions_2020, data_explosions_2021} from './statistics_data.js';

// Make
let explosions_2021;
let explosions_2020;
let explosions_2019;

function setupExplosionData() {
    setTimeout(function() {
        explosions_2021.data = data_explosions_2021;
        explosions_2021.update();
        explosions_2020.data = data_explosions_2020;
        explosions_2020.update();
        explosions_2019.data = data_explosions_2019;
        explosions_2019.update();
    }, 250);
}
window.setupExplosionData = setupExplosionData;

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
    explosions_2019 = new Chart(
        document.getElementById('explosions_2019'),
        config_explosions_2019
    );

    explosions_2020 = new Chart(
        document.getElementById('explosions_2020'),
        config_explosions_2020
    );

    explosions_2021 = new Chart(
        document.getElementById('explosions_2021'),
        config_explosions_2021
    );

});

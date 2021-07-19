
$(document).ready(() => {

    var mymap = L.map('map').setView([62.56, 15.16], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);



    let stations =
    [
        {
            "id": 1233,
            "name": "Alingsås",
            "Url": "https://polisen.se/kontakt/polisstationer/vastra-gotaland/alingsas/",
            "location": {
                "name": "N Strömgatan 8, Alingsås",
                "gps": "57.930105,12.529608"
            },
            "services": [
                {
                    "name": "Anmälan"
                },
                {
                    "name": "Cyklar"
                },
                {
                    "name": "Hittegods"
                },
                {
                    "name": "Pass/nationellt id-kort"
                },
                {
                    "name": "Vapen"
                }
            ]
        },

        {
            "id": 811,
            "name": "Alvesta",
            "Url": "https://polisen.se/kontakt/polisstationer/kronoberg/alvesta/",
            "location": {
                "name": "Värendsgatan 14, Alvesta",
                "gps": "56.900514,14.555233"
            },
            "services": [
                {
                    "name": "Anmälan"
                },
                {
                    "name": "Hittegods"
                }
            ]
        }
    ]

/*    stations.forEach((station, idx) => {
        console.log(station);

        coords = `${stations[idx].location.gps}`.split(",");

        let services = "<ul>";
        stations[idx].services.forEach(function (service, i) {
            services += '<li>'+ service.name + '</li>';
        });
        services += "</ul>";

        let marker = L.marker([coords[0], coords[1]]).addTo(mymap).bindPopup(
            `Polisstation: ${stations[idx].name}` + "<br>" +
            `Adress: ${stations[idx].location.name}` + "<br>" +
            `GPS: ${stations[idx].location.gps}` + "<br>" +
            "Tjänster: " + services  +
            "Öppettider: <a href=https://polisen.se/api/policestations/" + `${stations[idx].id}`+ " target='_blank'>Öppettider</a>" + "<br>" +
            "Läs mer: <a href=" + `${stations[idx].Url}`+ " target='_blank'>Polisen - kontakt</a>"
        );
    });*/


/*    coords = `${stations[0].location.gps}`.split(",");

    let services = "<ul>";
    stations[0].services.forEach(function (service, i) {
        services += '<li>'+ service.name + '</li>';
    });
    services += "</ul>";

    let marker = L.marker([coords[0], coords[1]]).addTo(mymap).bindPopup(
        `Polisstation: ${stations[0].name}` + "<br>" +
        `Adress: ${stations[0].location.name}` + "<br>" +
        `GPS: ${stations[0].location.gps}` + "<br>" +
        "Tjänster: " + services  +
        "Öppettider: <a href=https://polisen.se/api/policestations/" + `${stations[0].id}`+ " target='_blank'>Öppettider</a>" + "<br>" +
        "Läs mer: <a href=" + `${stations[0].Url}`+ " target='_blank'>Polisen - kontakt</a>"
    );*/

/*    endpoint = "/police-stations/data";
    $.getJSON(endpoint, {})
        .done((stations) => {

            console.log(stations);

        });*/

/*
    endpoint = "/police-stations/data";
    $.getJSON(endpoint, {})
      .done((stations) => {
          console.log(stations);

      })
      .fail((xhr) => {
          alert('Problem contacting server');
          console.log(xhr);
      });
*/

    endpoint = "https://polisen.se/api/policestations";
    $.getJSON(endpoint, {})
        .done((stations) => {

            stations.forEach((station, idx) => {
                console.log(station);

                coords = `${stations[idx].location.gps}`.split(",");

                let services = "<ul>";
                stations[idx].services.forEach(function (service, i) {
                    services += '<li>'+ service.name + '</li>';
                });
                services += "</ul>";

                let marker = L.marker([coords[0], coords[1]]).addTo(mymap).bindPopup(
                    `Polisstation: ${stations[idx].name}` + "<br>" +
                    `Adress: ${stations[idx].location.name}` + "<br>" +
                    `GPS: ${stations[idx].location.gps}` + "<br>" +
                    "Tjänster: " + services  +
                    "Öppettider: <a href=https://polisen.se/api/policestations/" + `${stations[idx].id}`+ " target='_blank'>Öppettider</a>" + "<br>" +
                    "Läs mer: <a href=" + `${stations[idx].Url}`+ " target='_blank'>Polisen - kontakt</a>"
                );
            });

        })
        .fail((xhr) => {
            alert('Problem contacting server');
            console.log(xhr);
        });


});


$(document).ready(() => {

    var mymap = L.map('map').setView([62.56, 15.16], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);

    const endpoint = "/police-stations/data";
    $.getJSON(endpoint, {})
        .done((stations) => {
            stations.forEach((station, idx) => {
                console.log(station);

                let coords = `${stations[idx].location.gps}`.split(",");

                let services = "<ul class='stationService'>";
                stations[idx].services.forEach(function (service, i) {
                    services += '<li>'+ service.name + '</li>';
                });
                services += "</ul>";

                let marker = L.marker([coords[0], coords[1]]).addTo(mymap).bindPopup(
                    `Polisstation: ${stations[idx].name}` + "<br>" +
                    `Adress: ${stations[idx].location.name}` + "<br>" +
                    `GPS: ${stations[idx].location.gps}` + "<br>" +
                    "Tjänster: " + services  +
                    "Öppettider och tjänster: <a href=" + `${station.Url}`+ " target='_blank'>Polisen - kontakt</a>"
                );
            });
        });




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

 /*   endpoint = "https://polisen.se/api/policestations";
    $.getJSON(endpoint, {})
        .done((stations) => {

            stations.forEach((station, idx) => {

                coords = `${station.location.gps}`.split(",");

                let listedServices = "<ul>";
                station.services.forEach(function (service, i) {
                    listedServices += '<li>'+ service.name + '</li>';
                });
                listedServices += "</ul>";

                endpointOpeningHours = "https://polisen.se/api/policestations/" + `${station.id}`;
                $.getJSON(endpointOpeningHours, {})
                    .done((openingHours) => {

                        //console.log(openingHours.services);

                        openingHours.services.forEach((openingHour, idx) => {

                            //console.log(openingHour.openingHours);

/!*                            console.log("Service: ");
                            console.log(openingHour.name);

                            console.log("Opening hours today: ")
                            console.log(openingHour.openingHours[0]);
                            console.log(openingHour.openingHours[0].from);
                            console.log(openingHour.openingHours[0].to);*!/

                        })

                    })

                let marker = L.marker([coords[0], coords[1]]).addTo(mymap).bindPopup(
                    `Polisstation: ${station.name}` + "<br>" +
                    `Adress: ${station.location.name}` + "<br>" +
                    `GPS: ${station.location.gps}` + "<br>" +
                    "Tjänster: " + listedServices  +
                    "Öppettider och tjänster: <a href=" + `${station.Url}`+ " target='_blank'>Polisen - kontakt</a>"
                );
            });

        })
        .fail((xhr) => {
            alert('Problem contacting server');
            console.log(xhr);
        });*/


});

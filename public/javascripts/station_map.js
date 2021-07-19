
$(document).ready(() => {

    var mymap = L.map('map').setView([62.56, 15.16], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);


/*    let event = {
        "id": 274409,
        "datetime": "2021-07-19 16:44:53 +02:00",
        "name": "19 juli 16:40, Trafikolycka, Eskilstuna",
        "summary": "Trafikolycka mellan lastbil och traktor.",
        "url": "/aktuellt/handelser/2021/juli/19/19-juli-1640-trafikolycka-eskilstuna/",
        "type": "Trafikolycka",
        "location": {
            "name": "Eskilstuna",
            "gps": "59.371249,16.509805"
        }
    };*/


/*    let stations =
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
    ]*/

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
            }
        ]

    coords = `${stations[0].location.gps}`.split(",");

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
    );

    /*endpoint = "https://polisen.se/api/policestations";
    $.getJSON(endpoint, {})
        .done((stations) => {

            const id = stations[0];
            var returnedLatitude = null;
            var returnedLongitude = null;*/

            /*
                        var returnedLatitude = null;
                        var returnedLongitude = null;
                        var approvedTime = new Date(forecast.approvedTime).toISOString().replace(/[a-zA-Z]/g, ' ').substr(0, 16);
                        var referenceTime = new Date(forecast.referenceTime).toISOString().replace(/[a-zA-Z]/g, ' ').substr(0, 16);
                        console.log(forecast['timeSeries'][0]['parameters'][10]['values'][0])
                        var currentTemp = forecast['timeSeries'][0]['parameters'][10]['values'][0]*/

/*
            $('#weather').text("Test: " + id);
        })
        .fail((xhr) => {
            alert('Problem contacting server');
            console.log(xhr);
        });
*/

});

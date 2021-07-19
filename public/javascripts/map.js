
$(document).ready(() => {

    var mymap = L.map('map').setView([62.56, 15.16], 5);

/*    var greenIcon = L.icon({
        iconUrl: 'images/pup.png',
        //shadowUrl: 'images/smol-dog.jpg',

        iconSize:     [80, 105], // size of the icon
        shadowSize:   [80, 80], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [20, -90] // point from which the popup should open relative to the iconAnchor
    });*/

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);

/*
    L.marker([57.71, 11.97], {icon: greenIcon}).addTo(mymap)
        .bindPopup('Pupperino is on the move')
        .openPopup();
*/






/*
    let marker = L.marker([57.72, 12.00]).addTo(mymap).bindPopup(
        "Id", event['id'], "<br>",
        "Date:", event.datetime, "<br>",
        "Name:", event.name, "<br>",
        "Summary:", event.summary);
*/

    const hej = "123";


    let event = {
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
        };

    coords = `${event.location.gps}`.split(",");

    let marker2 = L.marker([coords[0], coords[1]]).addTo(mymap).bindPopup(
        `${event.type}` + "<br>" +
        `${event.name}` + "<br>" +
        `Sammanfattning: ${event.summary}` + "<br>" +
        `Plats: ${event.location.name}` + "<br>" +
        `Id: ${event.id}` + "<br>" +
        `Datum: ${event.datetime}` + "<br>" +
        `Koordinater: ${event.location.gps}` + "<br>" +
        "Läs mer: <a href=https://www.polisen.se" + `${event.url}`+ ">Polisen - aktuellt</a>"
    );



    $.getJSON('https://icanhazdadjoke.com/', {})
        .done((data) => {
            $('#dadJoke').text(data['joke']);
        })
        .fail((xhr) => {
            alert('Problem contacting server');
            console.log(xhr);
        });

    endpoint = "https://polisen.se/api/events";

    $.getJSON(endpoint, {})
        .done((forecast) => {

            const id = forecast[0];

            /*
                        var returnedLatitude = null;
                        var returnedLongitude = null;
                        var approvedTime = new Date(forecast.approvedTime).toISOString().replace(/[a-zA-Z]/g, ' ').substr(0, 16);
                        var referenceTime = new Date(forecast.referenceTime).toISOString().replace(/[a-zA-Z]/g, ' ').substr(0, 16);
                        console.log(forecast['timeSeries'][0]['parameters'][10]['values'][0])
                        var currentTemp = forecast['timeSeries'][0]['parameters'][10]['values'][0]*/

            $('#weather').text("Test: " + id);
        })
        .fail((xhr) => {
            alert('Problem contacting server');
            console.log(xhr);
        });

});

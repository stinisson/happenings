$(document).ready(() => {

    var mymap = L.map('map').setView([62.56, 15.16], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);

    const endpoint = "/data";
    $.getJSON(endpoint, {})
        .done((events) => {
            events.forEach((event, idx) => {
                let coords = `${event.location.gps}`.split(",");
                let marker = L.marker([coords[0], coords[1]]).addTo(mymap).bindPopup(
                    "<b>" + `${event.type}` + "</b>" + "<br>" +
                    `${event.name}` + "<br><br>" +
                    `${event.summary}` + "<br> <br>" +
                    `Koordinater: ${event.location.gps}` + "<br>" +
                    "Läs mer: <a href=https://www.polisen.se" + `${event.url}` + " target='_blank' "+  ">Polisen - aktuellt</a>"
                );
            });
        })
        .fail((xhr) => {
            alert('Problem contacting server');
            console.log(xhr);
        });

});

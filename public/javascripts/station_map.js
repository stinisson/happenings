
$(document).ready(() => {

    var mymap = L.map('map', {minZoom: 5}).setView([62.56, 15.16], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);

    var littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.'),
        denver    = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.'),
        aurora    = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.'),
        golden    = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');

    var cities = L.layerGroup([littleton, denver, aurora, golden]);

    var overlayMaps = {
        'Anmälan': cities,
        'Pass ': cities,
        'Tillstånd ': cities,
        'Hittegods ': cities,
        'Vapen ': cities,
        'Delgivning ': cities,
        'Cyklar  ': cities,
        'Provisoriskt pass': cities,
        'Beslag ': cities
    };

    var baseMaps = {
        'Öppna stationer': cities,
        'Alla stationer': cities
    };

    const services = L.control.layers(baseMaps, overlayMaps, {collapsed:false, sortLayers:true}).addTo(mymap);
    $(".leaflet-control-layers-overlays").prepend('<div class="control-title"><b>Tjänster</b></div>');
    $(".leaflet-control-layers-base").parent().prepend('<div class="control-title"><b>Polisstationer</b></div>');






    L.easyButton({
        states:[
            {
                stateName: 'unloaded',
                icon: 'fa-location-arrow',
                title: 'load image',
                onClick: function(control){
                    control.state("loading");
                    control._map.on('locationfound', function(e){
                        this.setView(e.latlng, 17);
                        control.state('loaded');
                    });
                    control._map.on('locationerror', function(){
                        control.state('error');
                    });
                    control._map.locate()
                }
            }, {
                stateName: 'loading',
                icon: 'fa-spinner fa-spin'
            }, {
                stateName: 'loaded',
                icon: 'fa-thumbs-up'
            }, {
                stateName: 'error',
                icon: 'fa-frown-o',
                title: 'location not found'
            }
        ]
    }).addTo(mymap);

    const endpoint = "/police-stations/data";
    $.getJSON(endpoint, {})
        .done((stations) => {
            stations.forEach((station, idx) => {
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
        })
        .fail((xhr) => {
            alert('Problem contacting server');
            console.log(xhr);
        });

});

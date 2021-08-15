
// Leaflet map
function createMap(layers) {
    console.log(document.navigatePayload.centerLat, document.navigatePayload.centerLng)

    const mymap = L.map('map', {
        center: [document.navigatePayload.centerLat, document.navigatePayload.centerLng],
        zoom: document.navigatePayload.zoom,
        minZoom: 4,
        layers: layers
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);

    // Locate me icon
    const locateMeIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    // Locate me-button
    L.easyButton({
        states:[
            {
                stateName: 'unloaded',
                icon: 'fa-location-arrow',
                title: 'Visa din plats',
                onClick: function(control){
                    control.state("loading");
                    control._map.on('locationfound', function(e){
                        L.marker(e.latlng, {icon: locateMeIcon}).addTo(control._map).bindPopup("<b>Du är här!</b><br>").openPopup();
                        this.setView(e.latlng, 13);
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
                title: 'Platsen hittades inte'
            }
        ]
    }).addTo(mymap);

    return mymap;
}


const eventIconBlue = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});


function getStationMarkers(endpoint) {
    return new Promise(function (resolve, reject) {
        $.getJSON(endpoint, {})
          .done((stations) => {
              let allStations = [];
              stations.forEach((station, idx) => {

                  let coords = `${station.location.gps}`.split(",");
                  let services = "<ul class='stationService'>";

                  stations[idx].services.forEach(function (service, i) {
                      services += '<li>' + service.name + '</li>';
                  });
                  services += "</ul>";

                  let newStation = L.marker([coords[0], coords[1]], {icon: eventIconBlue}).bindPopup(
                    `Polisstation: ${station.name}` + "<br>" +
                    `Adress: ${station.location.name}` + "<br>" +
                    `GPS: ${station.location.gps}` + "<br>" +
                    "Tjänster: " + services +
                    "Öppettider och tjänster: <a href=" + `${station.Url}` + " target='_blank'>Polisen - kontakt</a>"
                  );

                  allStations.push(newStation);
              });

              const stationsLayerGroup = L.layerGroup(allStations);
              resolve(stationsLayerGroup);

          })
          .fail((xhr) => {
              console.log(xhr);
              reject();
          });
    });
}


Promise.all([getStationMarkers("/police-stations/all"), getStationMarkers("/police-stations/open")])
  .then(function(stationsLayerGroups) {
     const allStations = stationsLayerGroups[0];
     const openStations = stationsLayerGroups[1];

      var overlayStations = {
          'Alla stationer': allStations,
          'Öppna stationer': openStations
      };

      const mymap = createMap(allStations);
      document.mymap = mymap;

      L.control.layers(overlayStations, null, {collapsed:false, sortLayers:true}).addTo(mymap);

      $(".leaflet-control-layers-overlays").parent().prepend('<div class="control-title"><b>Polisstationer</b></div>');


  }).catch(error => {
    alert('Problem contacting server');
    console.log(error);
    const mymap = createMap([]);
  });


/*






*/


/*
// Leaflet map
function createMap() {
    const mymap = L.map('map', {
        center: [62.56, 15.16],
        zoom: 5,
        minZoom: 5,
        //layers: layers
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);

    // Locate me icon
    const locateMeIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    // Locate me-button
    L.easyButton({
        states:[
            {
                stateName: 'unloaded',
                icon: 'fa-location-arrow',
                title: 'Visa din plats',
                onClick: function(control){
                    control.state("loading");
                    control._map.on('locationfound', function(e){
                        L.marker(e.latlng, {icon: locateMeIcon}).addTo(control._map).bindPopup("<b>Du är här!</b><br>").openPopup();
                        this.setView(e.latlng, 13);
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
                title: 'Platsen hittades inte'
            }
        ]
    }).addTo(mymap);

    return mymap;
}

$(document).ready(() => {

    const eventIconBlue = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    var overlayMaps = ['Anmälan', 'Pass'];
/!*        'Anmälan': cities,
        'Pass ': cities,
        'Tillstånd ': cities,
        'Hittegods ': cities,
        'Vapen ': cities,
        'Delgivning ': cities,
        'Cyklar  ': cities,
        'Provisoriskt pass': cities,
        'Beslag ': cities*!/


    const endpoint = "/police-stations/data";
    $.getJSON(endpoint, {})
        .done((events) => {

            let stations = [];

            const mymap = createMap();

            events.forEach((event, idx) => {

                let coords = `${events[idx].location.gps}`.split(",");
                let services = "<ul class='stationService'>";

                events[idx].services.forEach(function (service, i) {
                    services += '<li>' + service.name + '</li>';
                });
                services += "</ul>";

                let newEvent = L.marker([coords[0], coords[1]], {icon: eventIconBlue}).bindPopup(
                    `Polisstation: ${event.name}` + "<br>" +
                    `Adress: ${event.location.name}` + "<br>" +
                    `GPS: ${event.location.gps}` + "<br>" +
                    "Tjänster: " + services +
                    "Öppettider och tjänster: <a href=" + `${event.Url}` + " target='_blank'>Polisen - kontakt</a>"
                );

                stations.push( {marker: newEvent, open: true, services: ["Pass"]} );

                //  "Öppettider: <a href=https://polisen.se/api/policestations/" + `${stations[idx].id}`+ " target='_blank'>Öppettider</a>" + "<br>" +



            });


            var cities = L.layerGroup([]);
            cities.addTo(mymap);
            //$(".leaflet-control-layers-overlays").parent().prepend('<div class="control-title"><b>' + `${title}` + '</b></div>');

            //$(".leaflet-control-layers-overlays").prepend('<span><div><input type="checkbox" id="control-events" checked=""><span> Alla händelser</span></div></span>');



        })
        .fail((xhr) => {
            alert('Problem contacting server');
            console.log(xhr);
            const mymap = createMap([]);
        });


});*/



/*

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


    // Locate me icon
    const locateMeIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    L.easyButton({
        states:[
            {
                stateName: 'unloaded',
                icon: 'fa-location-arrow',
                title: 'Visa din plats',
                onClick: function(control){
                    control.state("loading");
                    control._map.on('locationfound', function(e){
                        L.marker(e.latlng, {icon: locateMeIcon}).addTo(control._map).bindPopup("<b>Du är här!</b><br>").openPopup();
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

});*/

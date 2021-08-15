// Events icons
const eventIconRed = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const eventIconGold = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const eventIconBlue = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Leaflet map
function createMap(layers) {

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


export function getEventData(endpoint, iconColour, timeInterval) {

    let eventIcon;
    if (iconColour === "red") {
        eventIcon = eventIconRed;
    } else if (iconColour === "gold") {
        eventIcon = eventIconGold;
    } else {
        eventIcon = eventIconBlue;
    }

    $.getJSON(endpoint, {})
        .done((events) => {

            let eventGroups = {};
            events.forEach((event, idx) => {
                const key = event.location.gps;
                if (!eventGroups.hasOwnProperty(key)) {
                    eventGroups[key] = [];
                    console.log("new", key)
                } else {
                    console.log("found du", key)
                }
                eventGroups[key].push(event)
            });

            let indeterminate = false;
            let eventLayers = {};
            let eventControlLayers = [];
            for (const eventGroupKey in eventGroups) {
                const eventGroup = eventGroups[eventGroupKey];
                let popupHtml = "";
                eventGroup.forEach((event, eventIdx) => {
                    popupHtml += `<b>${event.type}</b><br>${event.name}`;
                    popupHtml += `<br><br>${event.summary}`;

                    if (event.summary.length === 110) {
                        popupHtml += `...`;
                    }

                    popupHtml += `<br>`;
                    popupHtml += `<a href=https://www.polisen.se${event.url} target='_blank'>Polisen&nbsp;-&nbsp;aktuellt</a>`;
                    popupHtml += `<br><br>`;
                });

                const gpsString = eventGroupKey;
                let coords = gpsString.split(",");
                popupHtml += `Koordinater: ${gpsString}`;

                const newEvent = L.marker([coords[0], coords[1]], {icon: eventIcon}).bindPopup(popupHtml, {amaxHeight: 400});
//maxHeight: 400, minWidth: 300, className:"mylittlename"
                if (!eventLayers.hasOwnProperty(`${event.type}`)) {
                    const newLayerGroup = L.layerGroup();
                    eventLayers[`${event.type}`] = newLayerGroup;
                    eventControlLayers.push(newLayerGroup);
                }
                eventLayers[`${event.type}`].addLayer(newEvent);


                /*

                let newEvent;
                if (event.summary.length === 110) {
                    newEvent = L.marker([coords[0], coords[1]], {icon: eventIcon}).bindPopup(
                      "<b>" + `${event.type}` + "</b>" + "<br>" +
                      `${event.name}` + "<br><br>" +
                      `${event.summary}` + "..." + "<br> <br>" +
                      `Koordinater: ${event.location.gps}` + "<br>" +
                      "Läs mer: <a href=https://www.polisen.se" + `${event.url}` + " target='_blank' "+  ">Polisen - aktuellt</a>"
                    );
                } else {
                    newEvent = L.marker([coords[0], coords[1]], {icon: eventIcon}).bindPopup(
                      "<b>" + `${event.type}` + "</b>" + "<br>" +
                      `${event.name}` + "<br><br>" +
                      `${event.summary}` + "<br> <br>" +
                      `Koordinater: ${event.location.gps}` + "<br>" +
                      "Läs mer: <a href=https://www.polisen.se" + `${event.url}` + " target='_blank' "+  ">Polisen - aktuellt</a>"
                    );
                }
                */


            }

            const mymap = createMap(eventControlLayers);
            document.mymap = mymap;

            L.control.layers(null, eventLayers, {collapsed:false, sortLayers:true}).addTo(mymap);

            let title = "";
            if (timeInterval === "last7") {
                title = "Händelser senaste veckan";
            } else if (timeInterval === "last24") {
                title = "Händelser senaste dygnet"
            } else {
                title = "Händelser";
            }

            $(".leaflet-control-layers-overlays").parent().prepend('<div class="control-title"><b>' + `${title}` + '</b></div>');

            $(".leaflet-control-layers-overlays").prepend('<span><div><input type="checkbox" id="control-events" checked=""><span> Alla händelser</span></div></span>');

            const layerSelectorUpdate = function() {
                const overall = document.querySelector('input[id="control-events"]');
                const events = document.querySelectorAll('input[class="leaflet-control-layers-selector"]');

                let checkedCount = 0;
                for(let i = 0; i < events.length; i++) {
                    if(events[i].checked) {
                        checkedCount++;
                    }
                }

                if (checkedCount === 0) {
                    overall.checked = false;
                    overall.indeterminate = false;
                } else if (checkedCount === events.length) {
                    overall.checked = true;
                    overall.indeterminate = false;
                } else {
                    overall.checked = false;
                    overall.indeterminate = true;
                }
                indeterminate = overall.indeterminate;
            }

            $(".leaflet-control-layers-selector").change(layerSelectorUpdate);

            $("#control-events").change(function() {
                const overall = document.querySelector('input[id="control-events"]');
                const events = document.querySelectorAll('input[class="leaflet-control-layers-selector"]');

                if (!indeterminate && overall.checked) {
                    for(let i = 0; i < events.length; i++) {
                        if(!events[i].checked) {
                            events[i].click();
                        }
                    }
                } else {
                    for(let i = 0; i < events.length; i++) {
                        if(events[i].checked) {
                            events[i].click();
                        }
                    }
                }
                indeterminate = overall.indeterminate;
            });

        })
        .fail((xhr) => {
            alert('Problem contacting server');
            console.log(xhr);
            const mymap = createMap([]);
        });
}

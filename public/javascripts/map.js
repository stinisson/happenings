$(document).ready(() => {

    // Events icons
    const icon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    function createMap(layers) {
        const mymap = L.map('map', {
            center: [62.56, 15.16],
            zoom: 5,
            minZoom: 5,
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
                    title: 'location not found'
                }
            ]
        }).addTo(mymap);

        return mymap;
    }

    // Retrieve event data
    const endpoint = "/data";
    $.getJSON(endpoint, {})
        .done((events) => {
            let indeterminate = false;
            let eventLayers = {};
            let eventControlLayers = [];
            events.forEach((event, idx) => {

                let coords = `${event.location.gps}`.split(",");
                let newEvent = L.marker([coords[0], coords[1]], {icon: icon}).bindPopup(
                    "<b>" + `${event.type}` + "</b>" + "<br>" +
                    `${event.name}` + "<br><br>" +
                    `${event.summary}` + "<br> <br>" +
                    `Koordinater: ${event.location.gps}` + "<br>" +
                    "Läs mer: <a href=https://www.polisen.se" + `${event.url}` + " target='_blank' "+  ">Polisen - aktuellt</a>"
                );

                if (!eventLayers.hasOwnProperty(`${event.type}`)) {
                    const newLayerGroup = L.layerGroup();
                    eventLayers[`${event.type}`] = newLayerGroup;
                    eventControlLayers.push(newLayerGroup);
                }
                eventLayers[`${event.type}`].addLayer(newEvent);

            });

            const mymap = createMap(eventControlLayers);

            L.control.layers(null, eventLayers, {collapsed:false, sortLayers:true}).addTo(mymap);
            $(".leaflet-control-layers-overlays").parent().prepend('<div class="control-title"><b>Händelser</b></div>');

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

});

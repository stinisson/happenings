//import {eventsLayer} from "./utils.js";

$(document).ready(() => {

    // Leaflet map
    const mymap = L.map('map', {
        center: [62.56, 15.16],
        zoom: 5,
        minZoom: 5,
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

    // Events
    const goldIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    var littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.'),
        denver    = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.'),
        aurora    = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.'),
        golden    = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');

    var cities = L.layerGroup([littleton, denver, aurora, golden]);

    const eventsLayer = {
        'Alkohollagen': cities,
        'Anträffad död': cities,
        'Anträffat gods': cities,
        'Arbetsplatsolycka': cities,
        'Bedrägeri': cities,
        'Bombhot': cities,
        'Brand': cities,
        'Brand automatlarm': cities,
        'Bråk': cities,
        'Detonation': cities,
        'Djur skadat/omhändertaget': cities,
        'Ekobrott': cities,
        'Farligt föremål, misstänkt': cities,
        'Fjällräddning': cities,
        'Fylleri/LOB': cities,
        'Förfalskningsbrott': cities,
        'Försvunnen person': cities,
        'Gränskontroll': cities,
        'Häleri': cities,
        'Inbrott': cities,
        'Inbrott, försök': cities,
        'Knivlagen': cities,
        'Kontroll person/fordon': cities,
        'Lagen om hundar och katter': cities,
        'Larm inbrott': cities,
        'Larm överfall': cities,
        'Miljöbrott': cities,
        'Missbruk av urkund': cities,
        'Misshandel': cities,
        'Misshandel, grov': cities,
        'Mord/dråp': cities,
        'Mord/dråp, försök': cities,
        'Motorfordon, anträffat stulet': cities,
        'Motorfordon, stöld': cities,
        'Narkotikabrott': cities,
        'Naturkatastrof': cities,
        'Ofog barn/ungdom': cities,
        'Ofredande/förargelse': cities,
        'Olaga frihetsberövande': cities,
        'Olaga hot': cities,
        'Olaga intrång/hemfridsbrott': cities,
        'Olovlig körning': cities,
        'Ordningslagen': cities,
        'Polisinsats/kommendering': cities,
        'Rattfylleri': cities,
        'Räddningsinsats': cities,
        'Rån': cities,
        'Rån väpnat': cities,
        'Rån övrigt': cities,
        'Rån, försök': cities,
        'Sammanfattning dag': cities,
        'Sammanfattning dygn': cities,
        'Sammanfattning eftermiddag': cities,
        'Sammanfattning förmiddag': cities,
        'Sammanfattning helg': cities,
        'Sammanfattning kväll': cities,
        'Sammanfattning kväll och natt': cities,
        'Sammanfattning natt': cities,
        'Sammanfattning vecka': cities,
        'Sedlighetsbrott': cities,
        'Sjukdom/olycksfall': cities,
        'Sjölagen': cities,
        'Skadegörelse': cities,
        'Skottlossning': cities,
        'Skottlossning, misstänkt': cities,
        'Spridning smittsamma kemikalier': cities,
        'Stöld': cities,
        'Stöld, försök': cities,
        'Stöld, ringa': cities,
        'Stöld/inbrott': cities,
        'Tillfälligt obemannat': cities,
        'Trafikbrott': cities,
        'Trafikhinder': cities,
        'Trafikkontroll': cities,
        'Trafikolycka': cities,
        'Trafikolycka, personskada': cities,
        'Trafikolycka, singel': cities,
        'Trafikolycka, smitning från': cities,
        'Trafikolycka, vilt': cities,
        'Uppdatering': cities,
        'Utlänningslagen': cities,
        'Vapenlagen': cities,
        'Varningslarm/haveri': cities,
        'Våld/hot mot tjänsteman': cities,
        'Våldtäkt': cities,
        'Våldtäkt, försök': cities,
        'Vållande till kroppsskada': cities
    };

    L.control.layers(null, eventsLayer, {collapsed:false, sortLayers:true}).addTo(mymap);
    $(".leaflet-control-layers-overlays").parent().prepend('<div class="control-title"><b>Händelser</b></div>');

    const endpoint = "/daily-summary/summary";
    $.getJSON(endpoint, {})
        .done((events) => {
            events.forEach((event, idx) => {
                let coords = `${event.location.gps}`.split(",");
                let marker = L.marker([coords[0], coords[1]], {icon: goldIcon}).addTo(mymap).bindPopup(
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

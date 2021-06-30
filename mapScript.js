

const mymap = L.map('mapid').setView([52.029025, 21.097059], 10);



L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Cokolwiek',
    maxZoom: 18,
    id: 'kubalobo/ckqjrpjyvg9q218nqlr2cdewg',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoia3ViYWxvYm8iLCJhIjoiY2tlYTM3ZzBxMjJ6dzJzbDY4MGo0Z3E2ZSJ9.bUY1hv2zymhH_-HU0p84-A'
}).addTo(mymap);


const gpx = './warsztat.gpx'; // URL to your GPX file or the GPX itself

new L.GPX(gpx, {async: true}).on('loaded', function(e) {
    mymap.fitBounds(e.target.getBounds());
}).addTo(mymap);

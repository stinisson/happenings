
function navigate(url) {
  if (document.mymap !== undefined) {
    // If page has map, update navigation payload with zoom and center location
    document.navigatePayload.zoom = document.mymap.getZoom();
    document.navigatePayload.centerLat = document.mymap.getCenter().lat;
    document.navigatePayload.centerLng = document.mymap.getCenter().lng;
  }

  // Navigate to new url and pass the navigation payload
  $.redirect(url, document.navigatePayload);
}

$(document).ready(() => {
  document.navigate = navigate;
});

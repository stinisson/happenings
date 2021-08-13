
module.exports = {
  getNavigatePayload : function (req) {
    let navigatePayload = {};

    if (req.body !== undefined && req.body.zoom !== undefined && !isNaN(req.body.zoom)) {
      navigatePayload.zoom = parseInt(req.body.zoom);
    }
    else {
      navigatePayload.zoom = 5;
    }

    if (req.body !== undefined && req.body.centerLat !== undefined && !isNaN(req.body.centerLat)) {
      navigatePayload.centerLat = parseFloat(req.body.centerLat);
    }
    else {
      navigatePayload.centerLat = 62.56;
    }

    if (req.body !== undefined && req.body.centerLng !== undefined && !isNaN(req.body.centerLng)) {
      navigatePayload.centerLng = parseFloat(req.body.centerLng);
    }
    else {
      navigatePayload.centerLng = 15.16;
    }

    let scriptString = "document.navigatePayload={";
    for (const key in navigatePayload) {
      scriptString += "'" + key + "':" + navigatePayload[key] + ","
    }
    scriptString += "};"

    return scriptString;
  }
}

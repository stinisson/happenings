import {getEventData} from "./map_common.js";

$(document).ready(() => {
    // Retrieve event data
    const endpoint = "/data";
    const iconColour = "red";
    getEventData(endpoint, iconColour, "all");
});

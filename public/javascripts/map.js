import {getEventData} from "./common.js";


$(document).ready(() => {

    // Retrieve event data
    const endpoint = "/data";
    const iconColour = "red";
    getEventData(endpoint, iconColour, "all");

});

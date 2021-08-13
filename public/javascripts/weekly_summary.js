import {getEventData} from "./map_common.js";

$(document).ready(() => {
  // Retrieve daily event data
  const endpoint = "/weekly-summary/summary";
  const iconColour = "gold";
  getEventData(endpoint, iconColour, "last7");
});

import { ISSApi } from "./iss-api.js";
import { calculateAngle, adjustAngleForIcon } from "./utilities.js";

let map;
let marker;
const issApiInstance = new ISSApi;

let prevPosition = null;

const issPosititoData = async (isInitialCall = false) => {
    try {
        const { latitude, longitude } = await issApiInstance.getIssPosition();
        const newLatLng = [latitude, longitude];

        if (isInitialCall) {
            // For the initial call, just store the position and return
            prevPosition = newLatLng;
            return;
        }

        const issIcon = L.icon({
            iconUrl: 'assets/icons/favicon.ico',
            iconSize: [32, 32],
            iconAnchor: [16, 16],
        });

        if (!map) {
            map = L.map('map').setView(newLatLng, 3);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);
        }

        if (!marker && prevPosition) {
            const angle = calculateAngle(prevPosition, newLatLng);
            const adjustedAngle = adjustAngleForIcon(angle);
            marker = L.marker(newLatLng, {icon: issIcon, rotationAngle: adjustedAngle, rotationOrigin: 'center center'}).addTo(map);
        } else if (marker && prevPosition) {
            const angle = calculateAngle(prevPosition, newLatLng);
            const adjustedAngle = adjustAngleForIcon(angle);
            marker.setLatLng(newLatLng);
            marker.setRotationAngle(adjustedAngle);
        }

        map.setView(newLatLng, 3);
        prevPosition = newLatLng;
    } catch (error) {
        console.error("Error updating ISS position:", error);
    }
}

// Initial setup with two API calls
async function initializeISS() {
    await issPosititoData(true);
    // Wait for 1 second due to API rate limit
    await new Promise(resolve => setTimeout(resolve, 1000));
    await issPosititoData();
}

// Start the process
initializeISS();
setInterval(issPosititoData, 10000);

//auto-response
const formResponse = document.querySelector(".form__response");

function thankYou(event) {
    event.preventDefault();
    formResponse.innerText = "Your form is now buzzing. Please expect a response in 3-5 light-years.";
}

form.addEventListener("submit", thankYou);
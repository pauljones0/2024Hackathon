import { ISSApi } from "./iss-api.js";

let map;
let marker;
const issApiInstance = new ISSApi;

const getIssPositionApiCall = async () => {
    try {
        const issPosition = await issApiInstance.getIssPosition();
        return issPosition;
    } catch (error) {
        console.error(error)
    }
}

let prevPosition = null;

const issPosititoData = async () => {
    try {
        const { latitude, longitude } = await issApiInstance.getIssPosition();

        const issIcon = L.icon({
            iconUrl: './assets/images/iss-icon.png',
            iconSize: [32, 32],
            iconAnchor: [16, 16],
        });

        if (!map) {
            map = L.map('map').setView([latitude, longitude], 3);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);
            marker = L.marker([latitude, longitude], {icon: issIcon, rotationAngle: 0, rotationOrigin: 'center center'}).addTo(map);
        } else {
            const newLatLng = [latitude, longitude];
            if (prevPosition) {
                const angle = calculateAngle(prevPosition, newLatLng);
                marker.setRotationAngle(angle);
            }
            map.setView(newLatLng, 3);
            marker.setLatLng(newLatLng);
        }
        prevPosition = [latitude, longitude];
    } catch (error) {
        console.error("Error updating ISS position:", error);
    }
}

function calculateAngle(prev, next) {
    const dx = next[1] - prev[1];
    const dy = next[0] - prev[0];
    const angle = Math.atan2(dy, dx) * 180 / Math.PI;
    return angle;
}

await issPosititoData();
setInterval(issPosititoData, 10000);

//auto-response
const formResponse = document.querySelector(".form__response");

function thankYou(event) {
    event.preventDefault();
    formResponse.innerText = "Your form is now buzzing. Please expect a response in 3-5 light-years.";
}

form.addEventListener("submit", thankYou);
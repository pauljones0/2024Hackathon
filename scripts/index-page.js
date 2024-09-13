import { ISSApi } from "./iss-api.js";

let map;
//holds the ISS marker
let marker;
const issApiInstance = new ISSApi;



const getIssPositionApiCall = async () => {
    try {
        const issPosition = await issApiInstance.getIssPosition();
        return issPosition;
    } catch(error){
        console.error(error)
    }
}

const issPosititoData = async () => {
    const position = await getIssPositionApiCall();
    const { latitude, longitude } = position.iss_position;
    const iframe = document.getElementById('map-iframe');
    iframe.src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyB5IlpYhATifj2bSew0y2eahEjxri15PuM&q=${latitude},${longitude}&zoom=4`;
}

await issPosititoData();

//auto-response
const formResponse = document.querySelector(".form__response");

function thankYou(event) {
    event.preventDefault();
    formResponse.innerText = "Your form is now buzzing. Please expect a response in 3-5 light-years.";
}

form.addEventListener("submit", thankYou);
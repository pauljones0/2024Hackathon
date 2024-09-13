document.addEventListener('DOMContentLoaded', function() {
    // Constants for UTF emojis, using hexadecimal allows for emojis to behave when using the typed.js library
    const VULCAN_SALUTE = '&#x1F596;';
    const ROCKET = '&#x1F680;';
    const WAVING_HAND = '&#x1F44B;';
    const ALIEN = '&#x1F47D;';
    const WORLD = '&#x1F30E;';
    const TELESCOPE = '&#x1F52D;';
    const RADIO = '&#x1F4FB;';
    const SOS = '&#x1F198;';

    const options = {
        strings: [
            `Hølæ, ${VULCAN_SALUTE}`,
            `We are the Hækætheæns ${WAVING_HAND}`,
            `You have entered the virtual realm of Hækætheæns, the Hækæship. ${ROCKET}`,
            `Seeking our lost brethren across the cosmos ${ALIEN}`,
            `Our home planet is no more, but our spirit endures ${WORLD}`,
            `Are there any Hækætheæns out there? ${TELESCOPE}`,
            `Broadcasting our signal across the stars ${RADIO}`,
            `Join our cosmic community of survivors ${ALIEN}${ALIEN}`,
            `Help us rebuild our civilization in this new realm ${ROCKET}`,
            `Hækætheæns unite! Our journey continues ${SOS}`,
            'Together, we can forge a new destiny',
            'Thanks for visiting our virtual outpost!'
        ],
        typeSpeed: 80,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        loopCount: Infinity
    };
    const typed = new Typed('#typed-output', options);
});
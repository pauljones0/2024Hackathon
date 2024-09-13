export function calculateAngle(prev, next) {
    const [lat1, lon1] = prev.map(x => x * Math.PI / 180);
    const [lat2, lon2] = next.map(x => x * Math.PI / 180);

    const y = Math.sin(lon2 - lon1) * Math.cos(lat2);
    const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1);
    const angle = Math.atan2(y, x) * 180 / Math.PI;

    return (angle + 360) % 360;
}

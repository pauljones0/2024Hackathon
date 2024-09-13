export class ISSApi {
    constructor() {
        this.baseUrl = "https://api.wheretheiss.at/v1/satellites/25544";
    }

    async getIssPosition() {
        try {
            const response = await axios.get(this.baseUrl);
            return {
                latitude: response.data.latitude,
                longitude: response.data.longitude
            };
        } catch (error) {
            console.error("Error fetching ISS position:", error);
            throw error;
        }
    }
}
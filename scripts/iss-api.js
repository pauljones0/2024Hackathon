export class ISSApi {
    constructor() {
        this.baseUrl = "http://api.open-notify.org/iss-now.json";
    }

    async getIssPosition() {
        const issPosition = await axios.get(this.baseUrl);
        return issPosition.data;
    }
}
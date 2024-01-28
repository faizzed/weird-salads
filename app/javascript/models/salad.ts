export default class Salad {
    constructor(
        public id: number,
        public name: string,
        public price: number,
    ) {}

    static fromJson(json: any): Salad {
        return new Salad(
            json.id,
            json.name,
            json.price,
        );
    }

    get priceHR(): string {
        return this.price.toFixed(2);
    }
}
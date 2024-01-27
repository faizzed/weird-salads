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

    get priceInDollars(): string {
        return (this.price / 100).toFixed(2);
    }
}
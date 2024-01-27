export default class Ingredient {
    constructor(
        public id: number,
        public name: string,
        public quantity: number,
        public price: string) {
    }

    static fromJson(json: any): Ingredient {
        return new Ingredient(
            json.id,
            json.name,
            json.quantity,
            json.price,
        );
    }
}
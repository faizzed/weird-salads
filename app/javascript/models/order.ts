import Salad from "./salad";

export default class Order {
    constructor(
        public id: number,
        public salad: Salad,
        public price: string,
        public created_at: string,
    ) {
    }

    static fromJson(json: any): Order {
        return new Order(
            json.id,
            Salad.fromJson(json.salad),
            json.price,
            json.created_at,
        );
    }

    get orderDate(): string {
        return this.created_at.split('T')[0];
    }
}
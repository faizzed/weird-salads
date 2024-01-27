import Salad from "./salad";

export default class Order {
    constructor(
        public id: number,
        public salad: Salad,
        public price: string) {
    }

    static fromJson(json: any): Order {
        return new Order(
            json.id,
            Salad.fromJson(json.salad),
            json.price
        );
    }
}
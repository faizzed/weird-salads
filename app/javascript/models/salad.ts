import Ingredient from "./ingredient";

export default class Salad {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public ingredients: Ingredient[] = [],
    ) {}

    static fromJson(json: any): Salad {
        return new Salad(
            json.id,
            json.name,
            json.price,
            json.ingredients.map(Ingredient.fromJson),
        );
    }

    get priceHR(): string {
        return this.price.toFixed(2);
    }

    get ingredientsNames(): string {
        let ingredientToString = this.ingredients.map(ingredient => ingredient.name).join(', ');

        if (ingredientToString.length > 70) {
            ingredientToString = ingredientToString.substring(0, 70) + '...';
        }

        return ingredientToString;
    }
}
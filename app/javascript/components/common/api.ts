import Ingredient from "../../models/ingredient";

export class CreateSaladRequest {
    constructor(
        public name: string,
        public ingredients: Ingredient[],
    ) {
    }
}

export class Api {

    static getIngredients(): Promise<Ingredient[]> {
        return fetch('/api/ingredients').then((response) => {
            return response.json();
        }).then((data) => {
            return data.ingredients.map((ingredient: any) => {
                return new Ingredient(ingredient.id, ingredient.name, ingredient.quantity, ingredient.price);
            });
        });
    }

    static async createSalad(saladRequest: CreateSaladRequest): Promise<any> {
        return fetch('/api/salads', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                salad: {
                    name: saladRequest.name,
                    ingredients: saladRequest.ingredients.map((ingredient: Ingredient) => {
                        return {
                            id: ingredient.id,
                            quantity: ingredient.quantity,
                        };
                    }),
                },
            }),
        });
    }
}
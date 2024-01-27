import Ingredient from "../../models/ingredient";

export class CreateSaladRequest {
    constructor(
        public name: string,
        public ingredients: Ingredient[],
    ) {
    }
}

export class Api {

    static async getIngredients(): Promise<Ingredient[]> {
        const response = await fetch('/api/ingredients');
        const data = await response.json();
        return data.ingredients.map((ingredient: any) => {
            return new Ingredient(ingredient.id, ingredient.name, ingredient.quantity, ingredient.price);
        });
    }

    static async createSalad(saladRequest: CreateSaladRequest): Promise<any> {
        return fetch('/api/salads', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
            },
            body: JSON.stringify({
                name: saladRequest.name,
                ingredients: saladRequest.ingredients.map((ingredient: Ingredient) => {
                    return {
                        id: ingredient.id,
                        quantity: ingredient.quantity,
                    };
                }),
            }),
        }).then((response) => {
            return response.json();
        });
    }
}
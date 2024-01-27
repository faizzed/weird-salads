import Ingredient from "../../models/ingredient";
import Salad from "../../models/salad";

export class CreateSaladRequest {
    constructor(
        public name: string,
        public ingredients: Ingredient[],
    ) {
    }
}

export class CreateIngredientRequest {
    constructor(
        public name: string,
        public quantity: number,
        public price: number,
    ) {
    }

}

export class Api {

    static async getIngredients(): Promise<Ingredient[]> {
        const response = await fetch('/api/ingredients/list');
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

    static async createIngredient(request: CreateIngredientRequest): Promise<any> {
        return fetch('/api/ingredients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
            },
            body: JSON.stringify({
                name: request.name,
                quantity: request.quantity,
                price: request.price,
            }),
        }).then((response) => {
            return response.json();
        });
    }

    static async updateIngredient(ingredient: Ingredient): Promise<any> {
        return fetch('/api/ingredients/' + ingredient.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
            },
            body: JSON.stringify({
                name: ingredient.name,
                quantity: ingredient.quantity,
                price: ingredient.price,
            }),
        }).then((response) => {
            return response.json();
        });
    }

    static async createOrder(salad: Salad): Promise<any> {
        return fetch('/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
            },
            body: JSON.stringify({
                salad
            }),
        }).then((response) => {
            return response.json();
        });
    }
}
import React from "react"
import Ingredient from "../../models/ingredient";
import IngredientsTable from "./ingredients-table";
import NewIngredient from "./new-ingredient";

interface IngredientProps {
    ingredients: any[]
}

export default function Home(props: IngredientProps) {
    let ingredients = props.ingredients.map((salad) => {
        return Ingredient.fromJson(salad)
    });

    return (
        <div className={"flex flex-col gap-2"}>
            <div className={"flex justify-end"}>
                <NewIngredient />
            </div>
            <div>
                <IngredientsTable
                    headers={["Name", "Quantity", "Price", "Action"]}
                    ingredients={ingredients}
                />
            </div>
        </div>
    )
}

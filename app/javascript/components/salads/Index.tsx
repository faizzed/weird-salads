import React from "react"
import Salad from "../../models/salad";
import Ingredient from "../../models/ingredient";
import NewSalad from "./new-salad";
import SaladsTable from "./salads-table";

interface HomeProps {
    salads: any[],
    ingredients: any[]
}

export default function Home(props: HomeProps) {
    let salads = props.salads.map((salad) => {
        return Salad.fromJson(salad)
    })

    let ingredients = props.ingredients.map((ingredient) => {
        return Ingredient.fromJson(ingredient)
    });

    return (
        <div className={"flex flex-col gap-2"}>
            <div className={"flex justify-end"}>
                <NewSalad ingredients={ingredients}/>
            </div>
            <div>
                <SaladsTable
                    headers={["Name", "Price", "Action"]}
                    salads={salads}
                />
            </div>
        </div>
    )
}

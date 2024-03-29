import React, {useEffect} from "react"
import Ingredient from "../../models/ingredient";
import UpdateIngredient from "./update-ingredient";
import {HSOverlay} from "preline";

type TableProps = {
    ingredients: Ingredient[]
    headers: string[]
}

export default function IngredientsTable(props: TableProps) {
    return (
        <>
            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="border rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                            <div className="py-3 px-4">
                                <div className="relative max-w-xs text-gray-500">
                                    Ingredients
                                </div>
                            </div>
                            <div className="overflow-hidden">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-gray-700">
                                    <tr>
                                        {
                                            props.headers.map((header, index) => {
                                                return (
                                                    <th key={index} scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">{header}</th>
                                                )
                                            })
                                        }
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    {
                                        props.ingredients.map((ingredient, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{ingredient.name}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{ingredient.quantity}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{ingredient.price}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                        <button data-hs-overlay={`#update-ingredient-${index}`} type="button" className="py-1 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                            Update
                                                        </button>
                                                        <UpdateIngredient ingredient={ingredient} index={index}/>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
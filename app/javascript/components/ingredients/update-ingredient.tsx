import React from 'react'
import {Api, IngredientApiRequest} from "../common/api";
import Ingredient from "../../models/ingredient";
import {toast} from "react-hot-toast";

export default function UpdateIngredient(props: {
    ingredient: Ingredient,
    index: number
}) {
    let [ingredient, setIngredient] = React.useState<Ingredient>(props.ingredient);

    async function updateIngredient(event) {
        event.preventDefault();

        let updateRequest = new IngredientApiRequest(
            ingredient.name,
            ingredient.quantity,
            ingredient.price,
            props.ingredient.id
        )

        await Api.updateIngredient(updateRequest).then((response) => {
            if (response.error) {
                toast.error(response.error);
                return;
            }

            toast.success("Ingredient updated!");
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        });
    }

    return (
        <>
            <div id={`update-ingredient-${props.index}`} className="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform h-full max-w-[50%] w-full w-full z-[80] bg-white border-s dark:bg-gray-800 dark:border-gray-700 hidden" tabIndex="-1">
                <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                    <h3 className="font-bold text-gray-800 dark:text-white">
                        Update Ingredient!
                    </h3>
                    <button type="button" className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay={`#update-ingredient-${props.index}`}>
                        <span className="sr-only">Close modal</span>
                        <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </button>
                </div>
                <div className="p-4">
                    <form className={"flex flex-col gap-2"} onSubmit={updateIngredient}>
                        <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-3 w-full">
                            <label htmlFor="input-label" className="block text-sm font-medium mb-2 dark:text-white">Name:</label>
                            <input type="text" name="name" onChange={(e) => {
                                setIngredient({
                                    ...ingredient,
                                    name: e.target.value
                                })
                            }} value={ingredient.name} id="inline-input-label-with-helper-text" style={{marginLeft: 0}} className="py-3 px-4 block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="name.." aria-describedby="hs-inline-input-helper-text"/>
                        </div>

                        <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-3 w-full">
                            <label htmlFor="input-label" className="block text-sm font-medium mb-2 dark:text-white">Quantity:</label>
                            <input type="number" onChange={(e) => {
                                setIngredient({
                                    ...ingredient,
                                    quantity: parseFloat(e.target.value) || ""
                                })
                            }} value={ingredient.quantity} name="quantity" id="inline-input-label-with-helper-text" style={{marginLeft: 0}} className="py-3 px-4 block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="quantity.." aria-describedby="hs-inline-input-helper-text"/>
                        </div>

                        <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-3 w-full">
                            <label htmlFor="input-label" className="block text-sm font-medium mb-2 dark:text-white">Price:</label>
                            <input type="number" onChange={(e) => {
                                setIngredient({
                                    ...ingredient,
                                    price: parseFloat(e.target.value) || ""
                                })
                            }} value={ingredient.price} name="price" id="inline-input-label-with-helper-text" style={{marginLeft: 0}} className="py-3 px-4 block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="price.." aria-describedby="hs-inline-input-helper-text"/>
                        </div>

                        <div className="flex justify-end sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                            <button type="submit" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                Update!
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}